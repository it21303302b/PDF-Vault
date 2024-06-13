import { useState } from 'react';
import { usePDFContext } from '../hooks/usePDFContext';
import { useAuthContext } from '../hooks/useAuthContext';
import { useDropzone } from 'react-dropzone';

const PDFForm = () => {
  const { dispatch } = usePDFContext();
  const { user } = useAuthContext();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);
  const [emptyFields, setEmptyFields] = useState([]);

  const onDrop = (acceptedFiles) => {
    setFile(acceptedFiles[0]);
  };

  const { getRootProps, getInputProps } = useDropzone({ onDrop, accept: 'application/pdf' });

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!user) {
      setError('You must be logged in');
      return;
    }

    if (!file) {
      setError('Please upload a PDF file');
      return;
    }

    const formData = new FormData();
    formData.append('title', title);
    formData.append('description', description);
    formData.append('file', file);

    const response = await fetch('/api/PDF', {
      method: 'POST',
      body: formData,
      headers: {
        'Authorization': `Bearer ${user.token}`
      }
    });
    const json = await response.json();

    if (!response.ok) {
      setError(json.error);
      setEmptyFields(json.emptyFields || []);
    } else {
      setError(null);
      setTitle('');
      setDescription('');
      setFile(null);
      setEmptyFields([]);
      console.log('new PDF added:', json);
      dispatch({ type: 'CREATE_PDF', payload: json });
    }
  };

  return (
    <form className="create" onSubmit={handleSubmit}>
      <h3>Add a New PDF</h3>

      <label>PDF Title:</label>
      <input
        type="text"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        className={emptyFields.includes('title') ? 'error' : ''}
      />

      <label>Description:</label>
      <input
        type="text"
        onChange={(e) => setDescription(e.target.value)}
        value={description}
        className={emptyFields.includes('description') ? 'error' : ''}
      />

      <div {...getRootProps({ className: 'dropzone' })}>
        <input {...getInputProps()} />
        <p>Drag 'n' drop a PDF file here, or click to select one</p>
      </div>
      {file && <p>{file.name}</p>}

      <button type="submit">Add PDF</button>
      {error && <div className="error">{error}</div>}
    </form>
  );
};

export default PDFForm;

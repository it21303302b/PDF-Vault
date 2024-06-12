const pdfDetails = ({ pdf }) => {

    return (
      <div className="pdf-details">
        <h4>{pdf.title}</h4>
        <p>{pdf.discription}</p>
        <p>{pdf.createdAt}</p>
      </div>
    )
  }
  
  export default pdfDetails
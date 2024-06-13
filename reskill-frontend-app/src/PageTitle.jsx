
function PageTitle(props) {
  return (
    <div className="mb-12 w-1/2">
      <h2 className='page-title-font mb-11'> {props.title} </h2>
      <h3 className="page-subtitle-font subtitle-color-font">{props.subtitle}</h3>
    </div>
  )
}

export default PageTitle


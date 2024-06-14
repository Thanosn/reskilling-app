
import "./PageTitle.css"

function PageTitle(props) {
  return (
    <div className="rat-mb-12 rat-w-1/2">
      <h2 className='page-title-font rat-mb-11'> {props.title} </h2>
      <h3 className="page-subtitle-font subtitle-color-font">{props.subtitle}</h3>
    </div>
  )
}

export default PageTitle

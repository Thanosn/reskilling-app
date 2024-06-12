
function PageTitle(props) {
  return (
    <div className="mb-12">
      <h2 className='font-bold text-6xl'> {props.title} </h2>
      <h3>{props.subtitle}</h3>
    </div>
  )
}

export default PageTitle

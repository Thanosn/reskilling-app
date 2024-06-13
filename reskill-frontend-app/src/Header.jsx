
function Header(props) {
  return (
    <div className="rat-flow-root rat-py-10">
      <h1 className="text-font rat-float-start "> {props.siteName} </h1>
      <div className="rat-float-end">
        <a href="" className="rat-font-semibold text-font rat-mr-14 hover:rat-underline">Page</a>
        <a href="" className="rat-font-semibold text-font rat-mr-14 hover:rat-underline">Page</a>
        <a href="" className="rat-font-semibold text-font rat-mr-14 hover:rat-underline">Page</a>
        <button className="rat-bg-black rat-text-white rat-rounded-lg rat-px-6 rat-py-5">
          <div className="button-font">
            Button
          </div>
        </button>
      </div>
    </div>
  )
}

export default Header




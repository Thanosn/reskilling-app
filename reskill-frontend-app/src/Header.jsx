
function Header(props) {
  return (
    <div className="flow-root py-10">
      <h1 className="text-font float-start "> {props.siteName} </h1>
      <div className="float-end">
        <a href="" className="font-semibold text-font  mr-14 hover:underline">Page</a>
        <a href="" className="font-semibold text-font mr-14 hover:underline">Page</a>
        <a href="" className="font-semibold text-font mr-14 hover:underline">Page</a>
        <button className="bg-black text-white rounded-lg px-6 py-5">
          <div className="button-font">
            Button
          </div>
        </button>
      </div>
    </div>
  )
}

export default Header




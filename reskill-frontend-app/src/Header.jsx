
function Header(props) {
  return (
    <div className="flow-root">
      <div className="font-bold float-start"> {props.siteName} </div>
      <div className="float-end">
        <a href="" className="font-semibold mr-8">Page</a>
        <a href="" className="font-semibold mr-8">Page</a>
        <a href="" className="font-semibold mr-8">Page</a>
        <button className="bg-black text-white rounded-lg px-4 py-2">Button</button>
      </div>
    </div>
  )
}

export default Header


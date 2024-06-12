
function Header(props) {
  return (
    <div className="flow-root py-10">
      <h1 className="font-semibold float-start text-2xl"> {props.siteName} </h1>
      <div className="float-end">
        <a href="" className="font-semibold mr-14 text-3xl hover:underline">Page</a>
        <a href="" className="font-semibold mr-14 text-3xl hover:underline">Page</a>
        <a href="" className="font-semibold mr-14 text-3xl hover:underline">Page</a>
        <button className="bg-black text-white rounded-lg px-6 py-5 text-xl">Button</button>
      </div>
    </div>
  )
}

export default Header


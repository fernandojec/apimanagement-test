import { useEffect } from "react"

export default function Feature() {
    function onChangeLayout(){
        if (document.documentElement.getAttribute("data-layout-mode") === "light"){
            document.documentElement.setAttribute("data-layout-mode", "dark")
        }else{
            document.documentElement.setAttribute("data-layout-mode", "light")
        }
    }
  return (
    <>
        <div className="ms-1 header-item d-none d-sm-flex">
            <button type="button" className="btn btn-icon btn-topbar btn-ghost-secondary rounded-circle" data-toggle="fullscreen">
                <i className='bx bx-fullscreen fs-22'></i>
            </button>
        </div>

        <div className="ms-1 header-item d-none d-sm-flex">
            <button onClick={onChangeLayout} type="button" className="btn btn-icon btn-topbar btn-ghost-secondary rounded-circle light-dark-mode" >
                <i className='bx bx-moon fs-22'></i>
            </button>
        </div>
    </>
  )
}

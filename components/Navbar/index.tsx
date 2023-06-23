"use client"

import { MenuTypes } from "@/services/data-types";
import MenuTitle from "@/app/MenuTitle"
import LogoNav from "@/app/Logo"

import { useCallback , useState, useEffect} from 'react';
import { useSession} from "next-auth/react"
import useAxiosAuth from "@/lib/hooks/useAxiosAuth";


export default function Index(){
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const axiosAuth = useAxiosAuth();
    const {data: session, status} = useSession();
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [title, setTitle] = useState();
    const [menuList, setMenuList] = useState([]);


    const getMenu = useCallback(async () => {
            const response = await axiosAuth.get("/menus")

            const data = response.data.data;
            const dataMenu = data.sort(function(
                a: { id: number; parent_id: number; sequence: number; }
                , b: { id: number; parent_id: number; sequence: number; }) {
                return a.parent_id - b.parent_id || a.sequence - b.sequence || a.id - b.id;
              });

              console.log("************************---------",dataMenu)
              setMenuList(dataMenu);

    }, [axiosAuth,status]);


    useEffect(() =>{
       getMenu()

      if (typeof document !== undefined){
        // require('bootstrap/dist/js/bootstrap');
        
        require('bootstrap/dist/js/bootstrap.bundle.min');
        require('feather-icons/dist/feather');
        require('select2/dist/js/select2.min');
  
        document.documentElement.setAttribute("lang", "en");
        document.documentElement.setAttribute("data-layout", "vertical");
        document.documentElement.setAttribute("data-topbar", "dark");
        document.documentElement.setAttribute("data-sidebar", "gradient-4");
        document.documentElement.setAttribute("data-sidebar-size", "lg");
        document.documentElement.setAttribute("data-sidebar-image", "img-3");
        document.documentElement.setAttribute("data-preloader", "enable");
        document.documentElement.setAttribute("data-layout-mode", "light");
        document.documentElement.setAttribute("data-layout-width", "fluid");
        document.documentElement.setAttribute("data-layout-position", "fixed");
        document.documentElement.setAttribute("data-layout-style", "default"); 
  
      }
    }, [getMenu])

    return (
        <>
        {/* ========== App Menu ========== */}
        <div className="app-menu navbar-menu">
            {/* LOGO */}
            <div className="navbar-brand-box">
                <LogoNav theme="dark" />
                
                <button type="button" className="btn btn-sm p-0 fs-20 header-item float-end btn-vertical-sm-hover" id="vertical-hover">
                    <i className="ri-record-circle-line"></i>
                </button>
            </div>

            <div id="scrollbar">
                <div className="container-fluid">
                <ul className="navbar-nav" id="navbar-nav" data-simplebar="init">
                    {menuList.map((item: MenuTypes) => (
                            (item.is_parent_menu && item.parent_id == 0) ? 
                            <MenuTitle key={item.id} id={item.id} title={item.menu_name} listMenu={menuList}/>
                            /* : (item.is_parent_menu && item.parent_id != "" && item.url == "") ?
                            <Menu key={item.id} id={item.id} title={item.menu_name} dataKey="t-dashboards" dataFeather="home" classIcon="icon-dual" 
                                ariaControl={`sidebar-${item.id}`} href={`#sidebar-${item.id}`} listMenu={menuList} /> */
                            : ""
                        ))}
                </ul>

                </div>
                {/* Sidebar */}
            </div>

            <div className="sidebar-background"></div>
        </div>
        {/* Left Sidebar End */}
        </>
    )
}
"use client"


import Head from "next/head";
import Logo from "../Navbar/Logo";
import Feature from "./Feature";
import Notification from "./Notification";
import UserProfile from "./UserProfile";

import PageTitle from '@/components/organisms/PageContent/PageTitle'


interface TopBarProps{
    pageTitle:string;
    parentList:any;
}
export default function index(props: Partial<TopBarProps>) {
    const {pageTitle = '', parentList=[]} = props;
  return (
    <header id="page-topbar">
        <div className="layout-width">
            <div className="navbar-header">
                <div className="d-flex">
                    {/* LOGO */}
                    <div className="navbar-brand-box horizontal-logo">
                        <Logo theme="dark" />
                    </div>
                </div>

                <div className="d-flex align-items-center">
                    <Feature />
                    <Notification />
                    <UserProfile />
                </div>
            </div>
            <PageTitle title={pageTitle} parentList={parentList} />
        </div>
    </header>
  )
}

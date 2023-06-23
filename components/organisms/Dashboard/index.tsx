import { useNavbarContext } from "@/components/Navbar";
import CardAnimate from "../../molecules/cardAnimate";
import CardDefault from "../../molecules/cardDefault";
import SessionsbyCountries from "./SessionsbyCountries";
import TopApiHit from "./TopAPIHit";
import TopModuleAccess from "./TopModuleAccess";
import TotalTrafic from "./TotalTrafic";
import UserByDevice from "./UserByDevice";

import Topbar from "@/components/organisms/Topbar/page";
import { useEffect } from "react";


// export const metadata = {
//   title: 'DASHBOARD : API MANAGEMENT',
//   description: 'Home of Collaboration and Communication',
// }


export default function index() {
    const parentList = [{
        parentTitle: "API Management",
        parentLink: `/`
    }];
    let topBar = useNavbarContext()
    console.log(topBar,'topbar')
    useEffect(()=>{
        topBar.pageTitle = "Dashboard"
        topBar.parentList = parentList
    },[topBar])
  return (
    <>
        {/* <Topbar pageTitle='Dashboard' parentList={parentList} /> */}
        <div className="row">
            <div className="col-xxl-12">
                <div className="d-flex flex-column h-100">
                    <div className="row">
                        <div className="col-md-3">
                            <CardAnimate title="Total Hit API (Avg)." currentVal="0" lastVal="7.05" success/>
                        </div>
                        <div className="col-md-3">
                            <CardAnimate title="Request Count" currentVal="0MB" lastVal="0.05" danger/>
                        </div>
                        <div className="col-md-3">
                            <CardAnimate title="Error Rate" currentVal="0%" lastVal="3.96" danger/>
                        </div>
                        <div className="col-md-3">
                            <CardAnimate title="Latency (Avg)" currentVal="0m 0sec" lastVal="0.24" danger/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="row">
            <div className="col-xxl-5">
                <div className="d-flex flex-column h-100">
                    <div className="row">
                        <div className="col-md-6">
                            <CardAnimate title="Active Client (Today)" currentVal="0 Clients"/>
                        </div>
                        <div className="col-md-6">
                            <CardAnimate title="Client Expire Soon" currentVal="0 Clients" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <CardDefault title="Daily Usage"/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-xxl-7">
                <div className="d-flex flex-column h-100">
                    <div className="row">
                        <div className="col-md-6">
                            {/* <CardAnimate title="Total Traffic" currentVal="28.05Tps" content="" /> */}
                            <TotalTrafic />
                        </div>
                        <div className="col-md-6">
                            {/* <CardDefault title="Sessions by Countries" /> */}
                            <SessionsbyCountries />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="row">
            <div className="col-xl-4">
                <UserByDevice />
            </div>
            <div className="col-xl-4 col-md-6">
                <TopModuleAccess />
            </div>
            <div className="col-xl-4 col-md-6">
                <TopApiHit />
            </div>
        </div>
    </>
  )
}

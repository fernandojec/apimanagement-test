export default function PageBody() {
  return (
    <>
    <div className="row">
        <div className="col-xxl-12">
            <div className="d-flex flex-column h-100">
                <div className="row">
                    <div className="col-md-3">
                        <div className="card card-animate">
                            <div className="card-body">
                                <div className="d-flex justify-content-between">
                                    <div>
                                        <p className="fw-medium text-muted mb-0">Total Hit API (Avg).</p>
                                        <h2 className="mt-4 ff-secondary fw-semibold"><span className="counter-value" data-target="33.48">0</span></h2>
                                        <p className="mb-0 text-muted"><span className="badge bg-light text-success mb-0">
                                                <i className="ri-arrow-up-line align-middle"></i> 7.05 %
                                            </span> vs. previous month</p>
                                    </div>
                                    <div>
                                        <div className="avatar-sm flex-shrink-0">
                                            <span className="avatar-title bg-soft-primary rounded-circle fs-2">
                                                <i data-feather="external-link" className="text-primary"></i>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* end card body */}
                        </div>
                        {/* end card*/}
                    </div>
                    {/* end col*/}

                    <div className="col-md-3">
                        <div className="row">
                            <div className="card card-animate">
                                <div className="card-body">
                                    <div className="d-flex justify-content-between">
                                        <div>
                                            <p className="fw-medium text-muted mb-0">Request Count</p>
                                            <h2 className="mt-4 ff-secondary fw-semibold"><span className="counter-value" data-target="33.48">0</span>MB</h2>
                                        </div>
                                        <div>
                                            <div className="avatar-sm flex-shrink-0">
                                                <span className="avatar-title bg-soft-primary rounded-circle fs-2">
                                                    <i data-feather="external-link" className="text-primary"></i>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* end card body */}
                            </div>
                            {/* end col*/}
                        </div>
                    </div>
                    {/* end col*/}

                    <div className="col-md-3">
                        <div className="card card-animate">
                            <div className="card-body">
                                <div className="d-flex justify-content-between">
                                    <div>
                                        <p className="fw-medium text-muted mb-0">Error Rate</p>
                                        <h2 className="mt-4 ff-secondary fw-semibold"><span className="counter-value" data-target="97.66">0</span>%</h2>
                                        <p className="mb-0 text-muted"><span className="badge bg-light text-danger mb-0">
                                                <i className="ri-arrow-down-line align-middle"></i> 3.96 %
                                            </span> vs. previous month</p>
                                    </div>
                                    <div>
                                        <div className="avatar-sm flex-shrink-0">
                                            <span className="avatar-title bg-soft-primary rounded-circle fs-2">
                                                <i data-feather="x-circle" className="text-danger"></i>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* end card body */}
                        </div>
                        {/* end card*/}
                    </div>
                    {/* end col*/}

                    <div className="col-md-3">
                        <div className="card card-animate">
                            <div className="card-body">
                                <div className="d-flex justify-content-between">
                                    <div>
                                        <p className="fw-medium text-muted mb-0">Latency (Avg)</p>
                                        <h2 className="mt-4 ff-secondary fw-semibold"><span className="counter-value" data-target="3">0</span>m
                                            <span className="counter-value" data-target="40">0</span>sec
                                        </h2>
                                        <p className="mb-0 text-muted"><span className="badge bg-light text-danger mb-0">
                                                <i className="ri-arrow-down-line align-middle"></i> 0.24 %
                                            </span> vs. previous month</p>
                                    </div>
                                    <div>
                                        <div className="avatar-sm flex-shrink-0">
                                            <span className="avatar-title bg-soft-primary rounded-circle fs-2">
                                                <i data-feather="clock" className="text-primary"></i>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* end card body */}
                        </div>
                        {/* end card*/}
                    </div>
                    {/* end col*/}
                </div>
                {/* end row*/}


            </div>
        </div>
    </div>

    <div className="row">
        <div className="col-xxl-5">
            <div className="d-flex flex-column h-100">
                <div className="row">
                    <div className="col-md-6">
                        <div className="card card-animate">
                            <div className="card-body">
                                <div className="d-flex justify-content-between">
                                    <div>
                                        <p className="fw-medium text-muted mb-0">Active Client (Today)</p>
                                        <h2 className="mt-4 ff-secondary fw-semibold"><span className="counter-value" data-target="5">0</span> Clients</h2>
                                    </div>
                                    <div>
                                        <div className="avatar-sm flex-shrink-0">
                                            <span className="avatar-title bg-soft-primary rounded-circle fs-2">
                                                <i data-feather="users" className="text-primary"></i>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* end card body */}
                        </div>
                        {/* end card*/}
                    </div>
                    {/* end col*/}

                    <div className="col-md-6">
                        <div className="card card-animate">
                            <div className="card-body">
                                <div className="d-flex justify-content-between">
                                    <div>
                                        <p className="fw-medium text-muted mb-0">Client Expire Soon</p>
                                        <h2 className="mt-4 ff-secondary fw-semibold"><span className="counter-value" data-target="2">0</span> Clients</h2>
                                    </div>
                                    <div>
                                        <div className="avatar-sm flex-shrink-0">
                                            <span className="avatar-title bg-soft-primary rounded-circle fs-2">
                                                <i data-feather="users" className="text-warning"></i>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* end card body */}
                        </div>
                        {/* end card*/}
                    </div>
                    {/* end col*/}
                </div>
                {/* end row*/}
                <div className="row">
                    <div className="col-md-12">
                        <div className="card">
                            <div className="card-header">
                                <h4 className="card-title mb-0">Daily Usage</h4>
                            </div>
                            <div className="card-body">
                                <div id="chart-area-stacked" data-colors='["--vz-primary", "--vz-success", "--vz-warning", "--vz-light", "--vz-info"]' className="e-charts"></div>
                            </div>
                        </div>
                        {/* end card */}
                    </div>
                </div>
                {/* end row*/}
            </div>
        </div>
        {/* end col*/}

        <div className="col-xxl-7">



            <div className="row h-100">
                <div className="col-xl-6">
                    <div className="card card-animate">
                        <div className="card-body">
                            <div className="d-flex justify-content-between">
                                <div>
                                    <p className="fw-medium text-muted mb-0">Total Traffic</p>
                                    <h2 className="mt-4 ff-secondary fw-semibold"><span className="counter-value" data-target="28.05">0</span>Tps</h2>

                                </div>
                                <div>
                                    <div className="avatar-sm flex-shrink-0">
                                        <span className="avatar-title bg-soft-primary rounded-circle fs-2">
                                            <i data-feather="trello" className="text-primary"></i>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div data-simplebar style={{minHeight: "450", maxHeight: "450"}} className="px-3">
                                <div className="table-responsive table-card mt-3">
                                    <table className="table table-borderless table-sm table-centered align-middle table-nowrap mb-1" style={{width: "100%"}} cellSpacing="0" cellPadding="0">
                                        <thead style={{textAlign: "left"}}>
                                            <tr>
                                                <th colSpan={2} style={{padding: 8, borderBottom: "1px solid #e9ebec"}}>&nbsp;</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td style={{padding: 8, fontSize: 13}}>
                                                    <h6 style={{marginBottom: 2, fontSize: 14}}>ALBEDO</h6>
                                                    <p style={{marginBottom: 2, fontSize: 13, color: "#878a99"}}>getParamedicSchedule</p>
                                                </td>

                                                <td style={{padding: 8, fontSize: 13}}>
                                                    <h6 className="mt-4 ff-secondary fw-semibold"><span className="counter-value" data-target="03.50">0</span></h6>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td style={{padding: 8, fontSize: 13}}>
                                                    <h6 style={{marginBottom: 2, fontSize: 14}}>ALBEDO</h6>
                                                    <p style={{marginBottom: 2, fontSize: "13px; color: #878a99"}}>insertAppt</p>
                                                </td>
                                                <td style={{padding: 8, fontSize: 13}}>
                                                    <h6 className="mt-4 ff-secondary fw-semibold"><span className="counter-value" data-target="06.30">0</span></h6>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                        {/* end card body */}
                    </div>
                    {/* end card*/}
                </div>
                {/* end col*/}

                <div className="col-xl-6">
                    <div className="card card-height-100">
                        <div className="card-header align-items-center d-flex">
                            <h4 className="card-title mb-0 flex-grow-1">Sessions by Countries</h4>
                            <div>
                                <button type="button" className="btn btn-soft-secondary btn-sm">
                                    ALL
                                </button>
                                <button type="button" className="btn btn-soft-primary btn-sm">
                                    1M
                                </button>
                                <button type="button" className="btn btn-soft-secondary btn-sm">
                                    6M
                                </button>
                            </div>
                        </div>
                        <div className="card-body p-0">
                            <div>
                                <div id="countries_charts" data-colors='["--vz-primary", "--vz-primary", "--vz-primary", "--vz-primary", "--vz-primary-rgb, 0.45", "--vz-primary", "--vz-primary", "--vz-primary", "--vz-primary", "--vz-primary"]' className="apex-charts" dir="ltr"></div>
                            </div>
                        </div>
                        {/* end card body */}
                    </div>
                    {/* end card */}
                </div>
                {/* end col*/}

            </div>
            {/* end row*/}
        </div>
        {/* end col */}
    </div>
    {/* end row*/}

    <div className="row">
        <div className="col-xl-4">
            <div className="card card-height-100">
                <div className="card-header align-items-center d-flex">
                    <h4 className="card-title mb-0 flex-grow-1">Users by Device</h4>
                    <div className="flex-shrink-0">
                        <div className="dropdown card-header-dropdown">
                            <a className="text-reset dropdown-btn" href="#" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <span className="text-muted fs-16"><i className="mdi mdi-dots-vertical align-middle"></i></span>
                            </a>
                            <div className="dropdown-menu dropdown-menu-end">
                                <a className="dropdown-item" href="#">Today</a>
                                <a className="dropdown-item" href="#">Last Week</a>
                                <a className="dropdown-item" href="#">Last Month</a>
                                <a className="dropdown-item" href="#">Current Year</a>
                            </div>
                        </div>
                    </div>
                </div>
                {/* end card header */}
                <div className="card-body">
                    <div id="user_device_pie_charts" data-colors='["--vz-primary", "--vz-primary-rgb, 0.60", "--vz-primary-rgb, 0.75"]' className="apex-charts" dir="ltr"></div>

                    <div className="table-responsive mt-3">
                        <table className="table table-borderless table-sm table-centered align-middle table-nowrap mb-0">
                            <tbody className="border-0">
                                <tr>
                                    <td>
                                        <h4 className="text-truncate fs-14 fs-medium mb-0"><i className="ri-stop-fill align-middle fs-18 text-primary me-2"></i>Desktop Users
                                        </h4>
                                    </td>
                                    <td>
                                        <p className="text-muted mb-0"><i data-feather="users" className="me-2 icon-sm"></i>78.56k</p>
                                    </td>
                                    <td className="text-end">
                                        <p className="text-success fw-medium fs-12 mb-0"><i className="ri-arrow-up-s-fill fs-5 align-middle"></i>2.08%
                                        </p>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <h4 className="text-truncate fs-14 fs-medium mb-0"><i className="ri-stop-fill align-middle fs-18 text-success me-2"></i>Mobile Users
                                        </h4>
                                    </td>
                                    <td>
                                        <p className="text-muted mb-0"><i data-feather="users" className="me-2 icon-sm"></i>105.02k</p>
                                    </td>
                                    <td className="text-end">
                                        <p className="text-danger fw-medium fs-12 mb-0"><i className="ri-arrow-down-s-fill fs-5 align-middle"></i>10.52%
                                        </p>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <h4 className="text-truncate fs-14 fs-medium mb-0"><i className="ri-stop-fill align-middle fs-18 text-primary me-2"></i>Tablet Users
                                        </h4>
                                    </td>
                                    <td>
                                        <p className="text-muted mb-0"><i data-feather="users" className="me-2 icon-sm"></i>42.89k</p>
                                    </td>
                                    <td className="text-end">
                                        <p className="text-danger fw-medium fs-12 mb-0"><i className="ri-arrow-down-s-fill fs-5 align-middle"></i>7.36%
                                        </p>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                {/* end card body */}
            </div>
            {/* end card */}
        </div>
        {/* end col */}

        <div className="col-xl-4 col-md-6">
            <div className="card card-height-100">
                <div className="card-header align-items-center d-flex">
                    <h4 className="card-title mb-0 flex-grow-1">Top Module Access</h4>
                    <div className="flex-shrink-0">
                        <button type="button" className="btn btn-soft-primary btn-sm">
                            Export Report
                        </button>
                    </div>
                </div>

                <div className="card-body">

                    <div className="row align-items-center">
                        <div className="col-6">
                            <h6 className="text-muted text-uppercase fw-semibold text-truncate fs-12 mb-3">
                                Total API Access</h6>
                            <h4 className="fs- mb-0">725,800</h4>
                            <p className="mb-0 mt-2 text-muted"><span className="badge badge-soft-success mb-0">
                                    <i className="ri-arrow-up-line align-middle"></i> 15.72 %
                                </span> vs. last month</p>
                        </div>
                        {/* end col */}
                        <div className="col-6">
                            <div className="text-center">
                                <img src="assets/images/illustrator-1.png" className="img-fluid" alt="" />
                            </div>
                        </div>
                        {/* end col */}
                    </div>
                    {/* end row */}
                    <div className="mt-3 pt-2">
                        <div className="progress progress-lg rounded-pill">
                            <div className="progress-bar bg-primary" role="progressbar" style={{width: "25%"}} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100}></div>
                            <div className="progress-bar bg-secondary" role="progressbar" style={{width: "18%"}} aria-valuenow={18} aria-valuemin={0} aria-valuemax={100}></div>
                            <div className="progress-bar bg-success" role="progressbar" style={{width: "22%"}} aria-valuenow={22} aria-valuemin={0} aria-valuemax={100}></div>
                            <div className="progress-bar bg-warning" role="progressbar" style={{width: "16%"}} aria-valuenow={16} aria-valuemin={0} aria-valuemax={100}></div>
                            <div className="progress-bar bg-danger" role="progressbar" style={{width: "19%"}} aria-valuenow={19} aria-valuemin={0} aria-valuemax={100}></div>
                        </div>
                    </div>
                    {/* end */}

                    <div className="mt-3 pt-2">
                        <div className="d-flex mb-2">
                            <div className="flex-grow-1">
                                <p className="text-truncate text-muted fs-14 mb-0"><i className="mdi mdi-circle align-middle text-primary me-2"></i>APPOINTMENT
                                </p>
                            </div>
                            <div className="flex-shrink-0">
                                <p className="mb-0">24.58%</p>
                            </div>
                        </div>
                        {/* end */}
                        <div className="d-flex mb-2">
                            <div className="flex-grow-1">
                                <p className="text-truncate text-muted fs-14 mb-0"><i className="mdi mdi-circle align-middle text-secondary me-2"></i>DOCTOR
                                </p>
                            </div>
                            <div className="flex-shrink-0">
                                <p className="mb-0">17.51%</p>
                            </div>
                        </div>
                        {/* end */}
                        <div className="d-flex mb-2">
                            <div className="flex-grow-1">
                                <p className="text-truncate text-muted fs-14 mb-0"><i className="mdi mdi-circle align-middle text-success me-2"></i>EMR
                                </p>
                            </div>
                            <div className="flex-shrink-0">
                                <p className="mb-0">23.05%</p>
                            </div>
                        </div>
                        {/* end */}
                        <div className="d-flex mb-2">
                            <div className="flex-grow-1">
                                <p className="text-truncate text-muted fs-14 mb-0"><i className="mdi mdi-circle align-middle text-warning me-2"></i>ASSET MANAGEMENT
                                </p>
                            </div>
                            <div className="flex-shrink-0">
                                <p className="mb-0">12.22%</p>
                            </div>
                        </div>
                        {/* end */}
                        <div className="d-flex">
                            <div className="flex-grow-1">
                                <p className="text-truncate text-muted fs-14 mb-0"><i className="mdi mdi-circle align-middle text-danger me-2"></i>PATIENT
                                </p>
                            </div>
                            <div className="flex-shrink-0">
                                <p className="mb-0">17.58%</p>
                            </div>
                        </div>
                        {/* end */}
                    </div>
                    {/* end */}

                    <div className="mt-2 text-center">
                        <a href="/" className="text-muted text-decoration-underline">Show
                            All</a>
                    </div>

                </div>
                {/* end card body */}
            </div>
            {/* end card */}
        </div>
        {/* end col */}

        <div className="col-xl-4 col-md-6">
            <div className="card card-height-100">
                <div className="card-header align-items-center d-flex">
                    <h4 className="card-title mb-0 flex-grow-1">Top API HIT</h4>
                    <div className="flex-shrink-0">
                        <div className="dropdown card-header-dropdown">
                            <a className="text-reset dropdown-btn" href="#" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <span className="text-muted fs-16"><i className="mdi mdi-dots-vertical align-middle"></i></span>
                            </a>
                            <div className="dropdown-menu dropdown-menu-end">
                                <a className="dropdown-item" href="#">Today</a>
                                <a className="dropdown-item" href="#">Last Week</a>
                                <a className="dropdown-item" href="#">Last Month</a>
                                <a className="dropdown-item" href="#">Current Year</a>
                            </div>
                        </div>
                    </div>
                </div>
                {/* end card header */}
                <div className="card-body">
                    <div className="table-responsive table-card">
                        <table className="table align-middle table-borderless table-centered table-nowrap mb-0">
                            <thead className="text-muted table-light">
                                <tr>
                                    <th scope="col" style={{width: 62}}>API </th>
                                    <th scope="col">Status</th>
                                    <th scope="col">Total </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        <a href="/" className="link-secondary">/Appointment/getAppointment</a>
                                    </td>
                                    <td><span className="badge badge-soft-success mb-0">Active</span></td>
                                    <td>500</td>
                                </tr>
                                {/* end */}
                                <tr>
                                    <td>
                                        <a href="/" className="link-secondary">/Paramedic/getParamedicSchedule</a>
                                    </td>
                                    <td><span className="badge badge-soft-warning mb-0">Suspended</span></td>
                                    <td>800</td>
                                </tr>
                                {/* end */}
                                <tr>
                                    <td>
                                        <a href="/" className="link-secondary">/Paramedic/getParamedic</a>
                                    </td>
                                    <td><span className="badge badge-soft-success mb-0">Active</span></td>
                                    <td>100</td>
                                </tr>
                                {/* end */}
                                <tr>
                                    <td>
                                        <a href="/" className="link-secondary">/PatDat/ChkPatientData</a>
                                    </td>
                                    <td><span className="badge badge-soft-danger mb-0">Expired</span></td>
                                    <td>50</td>
                                </tr>
                                {/* end */}
                                <tr>
                                    <td>
                                        <a href="/" className="link-secondary">/Appointment/cancelAppointment</a>
                                    </td>
                                    <td><span className="badge badge-soft-success mb-0">Active</span></td>
                                    <td>12.6%</td>
                                </tr>
                                {/* end */}
                            </tbody>
                            {/* end tbody */}
                        </table>
                        {/* end table */}
                    </div>
                    {/* end */}
                </div>
                {/* end cardbody */}
            </div>
            {/* end card */}
        </div>
        {/* end col */}
    </div>
    {/* end row */}
    </>
  )
}

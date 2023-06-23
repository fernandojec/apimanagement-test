export default function UserByDevice() {
  return (
    <div className="card card-animate card-height-100">
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
  )
}

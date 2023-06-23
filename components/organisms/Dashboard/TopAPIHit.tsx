export default function TopApiHit() {
  return (
    <div className="card card-animate card-height-100">
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
  )
}

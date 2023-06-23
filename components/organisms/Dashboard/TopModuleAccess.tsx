import React from 'react'

export default function TopModuleAccess() {
  return (
    <div className="card card-animate card-height-100">
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
                        <img src="images/illustrator-1.png" className="img-fluid" alt="" />
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
  )
}

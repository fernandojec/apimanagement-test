
export default function Notification() {
  return (
    <div className="dropdown topbar-head-dropdown ms-1 header-item">
        <button type="button" className="btn btn-icon btn-topbar btn-ghost-secondary rounded-circle" id="page-header-notifications-dropdown" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <i className='bx bx-bell fs-22'></i>
            <span className="position-absolute topbar-badge fs-10 translate-middle badge rounded-pill bg-danger">3<span className="visually-hidden">unread messages</span></span>
        </button>
        <div className="dropdown-menu dropdown-menu-lg dropdown-menu-end p-0" aria-labelledby="page-header-notifications-dropdown">

            <div className="dropdown-head bg-primary bg-pattern rounded-top">
                <div className="p-3">
                    <div className="row align-items-center">
                        <div className="col">
                            <h6 className="m-0 fs-16 fw-semibold text-white"> Notifications </h6>
                        </div>
                        <div className="col-auto dropdown-tabs">
                            <span className="badge badge-soft-light fs-13"> 4 New</span>
                        </div>
                    </div>
                </div>

                <div className="px-2 pt-2">
                    <ul className="nav nav-tabs dropdown-tabs nav-tabs-custom" data-dropdown-tabs="true" id="notificationItemsTab" role="tablist">
                        <li className="nav-item waves-effect waves-light">
                            <a className="nav-link active" data-bs-toggle="tab" href="#all-noti-tab" role="tab" aria-selected="true">
                                All (4)
                            </a>
                        </li>
                        <li className="nav-item waves-effect waves-light">
                            <a className="nav-link" data-bs-toggle="tab" href="#messages-tab" role="tab" aria-selected="false">
                                Messages
                            </a>
                        </li>
                        <li className="nav-item waves-effect waves-light">
                            <a className="nav-link" data-bs-toggle="tab" href="#alerts-tab" role="tab" aria-selected="false">
                                Alerts
                            </a>
                        </li>
                    </ul>
                </div>

            </div>

            <div className="tab-content" id="notificationItemsTabContent">
                <div className="tab-pane fade show active py-2 ps-2" id="all-noti-tab" role="tabpanel">
                    <div data-simplebar style={{maxHeight: "300"}} className="pe-2">
                        <div className="text-reset notification-item d-block dropdown-item position-relative">
                            <div className="d-flex">
                                <div className="avatar-xs me-3">
                                    <span className="avatar-title bg-soft-info text-info rounded-circle fs-16">
                                        <i className="bx bx-badge-check"></i>
                                    </span>
                                </div>
                                <div className="flex-1">
                                    <a href="#!" className="stretched-link">
                                        <h6 className="mt-0 mb-2 lh-base">Your <b>Elite</b> author Graphic
                                            Optimization <span className="text-secondary">reward</span> is
                                            ready!
                                        </h6>
                                    </a>
                                    <p className="mb-0 fs-11 fw-medium text-uppercase text-muted">
                                        <span><i className="mdi mdi-clock-outline"></i> Just 30 sec ago</span>
                                    </p>
                                </div>
                                <div className="px-2 fs-15">
                                    <div className="form-check notification-check">
                                        <input className="form-check-input" type="checkbox" value="" id="all-notification-check01" />
                                        <label className="form-check-label" htmlFor="all-notification-check01"></label>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="text-reset notification-item d-block dropdown-item position-relative active">
                            <div className="d-flex">
                                <img src="/images/users/avatar-2.jpg" className="me-3 rounded-circle avatar-xs" alt="user-pic" />
                                <div className="flex-1">
                                    <a href="#!" className="stretched-link">
                                        <h6 className="mt-0 mb-1 fs-13 fw-semibold">Angela Bernier</h6>
                                    </a>
                                    <div className="fs-13 text-muted">
                                        <p className="mb-1">Answered to your comment on the cash flow forecast's
                                            graph 🔔.</p>
                                    </div>
                                    <p className="mb-0 fs-11 fw-medium text-uppercase text-muted">
                                        <span><i className="mdi mdi-clock-outline"></i> 48 min ago</span>
                                    </p>
                                </div>
                                <div className="px-2 fs-15">
                                    <div className="form-check notification-check">
                                        <input className="form-check-input" type="checkbox" value="" id="all-notification-check02" defaultChecked />
                                        <label className="form-check-label" htmlFor="all-notification-check02"></label>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="text-reset notification-item d-block dropdown-item position-relative">
                            <div className="d-flex">
                                <div className="avatar-xs me-3">
                                    <span className="avatar-title bg-soft-danger text-danger rounded-circle fs-16">
                                        <i className='bx bx-message-square-dots'></i>
                                    </span>
                                </div>
                                <div className="flex-1">
                                    <a href="#!" className="stretched-link">
                                        <h6 className="mt-0 mb-2 fs-13 lh-base">You have received <b className="text-success">20</b> new messages in the conversation
                                        </h6>
                                    </a>
                                    <p className="mb-0 fs-11 fw-medium text-uppercase text-muted">
                                        <span><i className="mdi mdi-clock-outline"></i> 2 hrs ago</span>
                                    </p>
                                </div>
                                <div className="px-2 fs-15">
                                    <div className="form-check notification-check">
                                        <input className="form-check-input" type="checkbox" value="" id="all-notification-check03" />
                                        <label className="form-check-label" htmlFor="all-notification-check03"></label>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="text-reset notification-item d-block dropdown-item position-relative">
                            <div className="d-flex">
                                <img src="/images/users/avatar-8.jpg" className="me-3 rounded-circle avatar-xs" alt="user-pic" />
                                <div className="flex-1">
                                    <a href="#!" className="stretched-link">
                                        <h6 className="mt-0 mb-1 fs-13 fw-semibold">Maureen Gibson</h6>
                                    </a>
                                    <div className="fs-13 text-muted">
                                        <p className="mb-1">We talked about a project on linkedin.</p>
                                    </div>
                                    <p className="mb-0 fs-11 fw-medium text-uppercase text-muted">
                                        <span><i className="mdi mdi-clock-outline"></i> 4 hrs ago</span>
                                    </p>
                                </div>
                                <div className="px-2 fs-15">
                                    <div className="form-check notification-check">
                                        <input className="form-check-input" type="checkbox" value="" id="all-notification-check04" />
                                        <label className="form-check-label" htmlFor="all-notification-check04"></label>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="my-3 text-center">
                            <button type="button" className="btn btn-soft-success waves-effect waves-light">View
                                All Notifications <i className="ri-arrow-right-line align-middle"></i></button>
                        </div>
                    </div>

                </div>

                <div className="tab-pane fade py-2 ps-2" id="messages-tab" role="tabpanel" aria-labelledby="messages-tab">
                    <div data-simplebar style={{maxHeight: "300"}} className="pe-2">
                        <div className="text-reset notification-item d-block dropdown-item">
                            <div className="d-flex">
                                <img src="/images/users/avatar-3.jpg" className="me-3 rounded-circle avatar-xs" alt="user-pic" />
                                <div className="flex-1">
                                    <a href="#!" className="stretched-link">
                                        <h6 className="mt-0 mb-1 fs-13 fw-semibold">James Lemire</h6>
                                    </a>
                                    <div className="fs-13 text-muted">
                                        <p className="mb-1">We talked about a project on linkedin.</p>
                                    </div>
                                    <p className="mb-0 fs-11 fw-medium text-uppercase text-muted">
                                        <span><i className="mdi mdi-clock-outline"></i> 30 min ago</span>
                                    </p>
                                </div>
                                <div className="px-2 fs-15">
                                    <div className="form-check notification-check">
                                        <input className="form-check-input" type="checkbox" value="" id="messages-notification-check01" />
                                        <label className="form-check-label" htmlFor="messages-notification-check01"></label>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="text-reset notification-item d-block dropdown-item">
                            <div className="d-flex">
                                <img src="/images/users/avatar-2.jpg" className="me-3 rounded-circle avatar-xs" alt="user-pic" />
                                <div className="flex-1">
                                    <a href="#!" className="stretched-link">
                                        <h6 className="mt-0 mb-1 fs-13 fw-semibold">Angela Bernier</h6>
                                    </a>
                                    <div className="fs-13 text-muted">
                                        <p className="mb-1">Answered to your comment on the cash flow forecast's
                                            graph 🔔.</p>
                                    </div>
                                    <p className="mb-0 fs-11 fw-medium text-uppercase text-muted">
                                        <span><i className="mdi mdi-clock-outline"></i> 2 hrs ago</span>
                                    </p>
                                </div>
                                <div className="px-2 fs-15">
                                    <div className="form-check notification-check">
                                        <input className="form-check-input" type="checkbox" value="" id="messages-notification-check02" />
                                        <label className="form-check-label" htmlFor="messages-notification-check02"></label>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="text-reset notification-item d-block dropdown-item">
                            <div className="d-flex">
                                <img src="/images/users/avatar-6.jpg" className="me-3 rounded-circle avatar-xs" alt="user-pic" />
                                <div className="flex-1">
                                    <a href="#!" className="stretched-link">
                                        <h6 className="mt-0 mb-1 fs-13 fw-semibold">Kenneth Brown</h6>
                                    </a>
                                    <div className="fs-13 text-muted">
                                        <p className="mb-1">Mentionned you in his comment on 📃 invoice #12501.
                                        </p>
                                    </div>
                                    <p className="mb-0 fs-11 fw-medium text-uppercase text-muted">
                                        <span><i className="mdi mdi-clock-outline"></i> 10 hrs ago</span>
                                    </p>
                                </div>
                                <div className="px-2 fs-15">
                                    <div className="form-check notification-check">
                                        <input className="form-check-input" type="checkbox" value="" id="messages-notification-check03" />
                                        <label className="form-check-label" htmlFor="messages-notification-check03"></label>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="text-reset notification-item d-block dropdown-item">
                            <div className="d-flex">
                                <img src="/images/users/avatar-8.jpg" className="me-3 rounded-circle avatar-xs" alt="user-pic" />
                                <div className="flex-1">
                                    <a href="#!" className="stretched-link">
                                        <h6 className="mt-0 mb-1 fs-13 fw-semibold">Maureen Gibson</h6>
                                    </a>
                                    <div className="fs-13 text-muted">
                                        <p className="mb-1">We talked about a project on linkedin.</p>
                                    </div>
                                    <p className="mb-0 fs-11 fw-medium text-uppercase text-muted">
                                        <span><i className="mdi mdi-clock-outline"></i> 3 days ago</span>
                                    </p>
                                </div>
                                <div className="px-2 fs-15">
                                    <div className="form-check notification-check">
                                        <input className="form-check-input" type="checkbox" value="" id="messages-notification-check04" />
                                        <label className="form-check-label" htmlFor="messages-notification-check04"></label>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="my-3 text-center">
                            <button type="button" className="btn btn-soft-success waves-effect waves-light">View
                                All Messages <i className="ri-arrow-right-line align-middle"></i></button>
                        </div>
                    </div>
                </div>
                <div className="tab-pane fade p-4" id="alerts-tab" role="tabpanel" aria-labelledby="alerts-tab">
                    <div className="w-25 w-sm-50 pt-3 mx-auto">
                        <img src="/images/svg/bell.svg" className="img-fluid" alt="user-pic" />
                    </div>
                    <div className="text-center pb-5 mt-2">
                        <h6 className="fs-18 fw-semibold lh-base">Hey! You have no any notifications </h6>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

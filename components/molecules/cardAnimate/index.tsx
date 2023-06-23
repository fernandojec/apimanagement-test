import cx from 'classnames'

interface CardAnimateProps {
    title: string;
    currentVal: string;
    lastVal?: string;
    success?: boolean;
    danger?: boolean;
    content?: string;
}

export default function index(props: Partial<CardAnimateProps>) {
    const {title, currentVal, lastVal, success, danger, content} = props;
    const classDiff = cx({
        'badge': true,
        'mb-0': true,
        'badge-soft-success': success,
        'text-success': success,
        'badge-soft-danger': danger,
        'text-danger' : danger
    })

    const classDiffArrow = cx({
        'ri-arrow-up-line':success,
        'ri-arrow-down-line':danger,
        'align-middle':true
    })


    return (
        <div className="card card-animate">
            <div className="card-body">
                <div className="d-flex justify-content-between">
                    <div>
                        <p className="fw-medium text-muted mb-0">{title}</p>
                        <h2 className="mt-4 ff-secondary fw-semibold"><span className="counter-value" data-target="33.48">{currentVal}</span></h2>
                        {(lastVal != undefined) ?
                            <p className="mb-0 text-muted">
                                <span className={classDiff}>
                                    <i className={classDiffArrow}></i> {lastVal} %
                                </span> vs. previous month
                            </p> 
                            : ""
                        }
                    </div>
                    <div>
                        <div className="avatar-sm flex-shrink-0">
                            <span className="avatar-title bg-soft-primary rounded-circle fs-2">
                                <i data-feather="external-link" className="text-primary"></i>
                            </span>
                        </div>
                    </div>
                </div>
                {
                (content != undefined) ?
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
                    : ""
                }
            </div>
            {/* end card body */}
        </div>
    )
}

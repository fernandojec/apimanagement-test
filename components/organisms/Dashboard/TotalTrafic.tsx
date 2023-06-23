export default function TotalTrafic() {
  return (
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
            <div data-simplebar style={{minHeight:"450px",maxHeight: "450px"}} className="px-3">
                <div className="table-responsive table-card mt-3">
                    <table className="table table-borderless table-sm table-centered align-middle table-nowrap mb-1" style={{width: "100%"}} cellSpacing={0} cellPadding={0}>
                        <thead style={{textAlign: "left"}}>
                            <tr>
                                <th colSpan={2} style={{padding: "8px",borderBottom: "1px solid #e9ebec"}}>&nbsp;</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td style={{padding: "8px", fontSize: "13px"}}>
                                    <h6 style={{marginBottom: "2px", fontSize: "14px"}}>ALBEDO</h6>
                                    <p style={{marginBottom: "2px", fontSize: "13px", color: "#878a99"}}>getParamedicSchedule</p>
                                </td>

                                <td style={{padding: "8px", fontSize: "13px"}}>
                                    <h6 className="mt-4 ff-secondary fw-semibold"><span className="counter-value" data-target="03.50">0</span></h6>
                                </td>
                            </tr>
                            <tr>
                                <td style={{padding: "8px", fontSize: "13px"}}>
                                    <h6 style={{marginBottom: "2px", fontSize: "14px"}}>ALBEDO</h6>
                                    <p style={{marginBottom: "2px", fontSize: "13px", color: "#878a99"}}>insertAppt</p>
                                </td>
                                <td style={{padding: "8px", fontSize: "13px"}}>
                                    <h6 className="mt-4 ff-secondary fw-semibold"><span className="counter-value" data-target="06.30">0</span></h6>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
  )
}

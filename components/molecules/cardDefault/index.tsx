interface CardProps{
    title: string;
}
export default function index(props: Partial<CardProps>) {
    const {title} = props;

    return (
        <div className="card card-animate card-height-100">
            <div className="card-header align-items-center d-flex">
                <h4 className="card-title mb-0 flex-grow-1">{title}</h4>
                <div className="flex-shrink-0">
                    {/* <div className="dropdown card-header-dropdown">
                        <a className="text-reset dropdown-btn" href="#" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <span className="text-muted fs-16"><i className="mdi mdi-dots-vertical align-middle"></i></span>
                        </a>
                        <div className="dropdown-menu dropdown-menu-end">
                            <a className="dropdown-item" href="#">Today</a>
                            <a className="dropdown-item" href="#">Last Week</a>
                            <a className="dropdown-item" href="#">Last Month</a>
                            <a className="dropdown-item" href="#">Current Year</a>
                        </div>
                    </div> */}
                </div>
            </div>
            <div className="card-body">
            <div id="chart-area-stacked" data-colors='["--vz-primary", "--vz-success", "--vz-warning", "--vz-light", "--vz-info"]' className="e-charts"></div>
            </div>
        </div>
    )
}

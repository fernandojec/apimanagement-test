
export default function SessionsbyCountries() {
  return (
    
    <div className="card card-animate card-height-100">
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
    </div>
  )
}

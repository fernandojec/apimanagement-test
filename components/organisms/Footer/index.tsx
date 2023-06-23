

export default function page() {
    const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
        <div className="container-fluid">
            <div className="row">
                <div className="col-sm-6">
                    {currentYear} © API MANAGEMENT.
                </div>
                <div className="col-sm-6">
                    <div className="text-sm-end d-none d-sm-block">
                        Design & Develop by IT-MSAS
                    </div>
                </div>
            </div>
        </div>
    </footer>
  )
}

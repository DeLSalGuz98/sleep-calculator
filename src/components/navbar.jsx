export function Navbar() {
  return(
    <nav className="navbar navbar-expand-lg bg-primary px-5" data-bs-theme="dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="#"> <i className="bi bi-cloud-moon-fill"></i> Sleep Calculator App</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse d-lg-flex justify-content-end" id="navbarColor01">
          <button className="btn btn-outline-light my-2 my-sm-0" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
            <i className="bi bi-info-circle-fill me-1"></i> más informacion
          </button>
        </div>
      </div>
    </nav>
  )
}
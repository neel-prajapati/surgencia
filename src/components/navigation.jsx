import { Link } from "react-router-dom";

export const Navigation = (props) => {
  // Function to close the mobile menu
  const closeMobileMenu = () => {
    const navCollapse = document.getElementById("bs-example-navbar-collapse-1");
    if (navCollapse && navCollapse.classList.contains("in")) {
      navCollapse.classList.remove("in");
      navCollapse.classList.add("collapse");
    }
  };

  // Handler for nav item click
  const handleNavClick = () => {
    if (window.innerWidth < 768) {
      closeMobileMenu();
    }
  };

  return (
    <nav id="menu" className="navbar navbar-default navbar-fixed-top">
      <div className="container">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"
          >
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <Link
            className="navbar-brand page-scroll"
            to="/"
            style={{
              fontWeight: 800,
              fontSize: 28,
              letterSpacing: 2,
              background: "linear-gradient(90deg, #6372ff 0%, #5ca9fb 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              animation: "surgenciaPulse 1.5s infinite alternate",
              display: "inline-block",
              transition: "transform 0.3s cubic-bezier(.68,-0.55,.27,1.55)",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.transform = "scale(1.08) rotate(0deg)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.transform = "scale(1) rotate(0deg)")
            }
          >
            Surgencia
          </Link>
          <style>
            {`
              @keyframes surgenciaPulse {
                0% { text-shadow: 0 0 0px #6372ff }
                // 25% {  border-right:1px solid #6372ff; }
                // 50% {  border-bottom:1px solid #6372ff; }
                // 75% {  border-left:1px solid #6372ff; }
                100% { text-shadow: 0 0 1px #5ca9fb; }
              }
            `}
          </style>
        </div>

        <div
          className="collapse navbar-collapse"
          id="bs-example-navbar-collapse-1"
        >
          <ul className="nav navbar-nav navbar-right">
            {/* <li>
              <Link to="/features" className="page-scroll" onClick={handleNavClick}>
                Features
              </Link>
            </li> */}
            <li>
              <Link
                to="/about"
                className="page-scroll"
                onClick={handleNavClick}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/all-products"
                className="page-scroll"
                onClick={handleNavClick}
              >
                Products
              </Link>
            </li>
           
            <li>
              <Link
                to="/gallery"
                className="page-scroll"
                onClick={handleNavClick}
              >
                Gallery
              </Link>
            </li>
            <li>
              <Link
                to="/testimonials"
                className="page-scroll"
                onClick={handleNavClick}
              >
                Testimonials
              </Link>
            </li>
            <li>
              <Link to="/team" className="page-scroll" onClick={handleNavClick}>
                Team
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="page-scroll"
                onClick={handleNavClick}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

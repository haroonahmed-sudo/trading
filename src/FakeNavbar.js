import React, { useState, useEffect } from "react";
import { Collapse, Container, NavbarToggler, NavLink } from "reactstrap";
import Scrollspy from "react-scrollspy";
import { Link } from "react-router-dom";

// Import Images
// import logodark from "./assets/images/logo-dark.png";
// import logolight from "./assets/images/logo-light.png";

const FakeNavbar = () => {
    const [isOpenMenu, setisOpenMenu] = useState(false);
    const [navClass, setnavClass] = useState("");

    const toggle = () => setisOpenMenu(!isOpenMenu);

    useEffect(() => {
        window.addEventListener("scroll", scrollNavigation, true);
    });

    const scrollNavigation = () => {
        var scrollup = document.documentElement.scrollTop;
        if (scrollup > 50) {
            setnavClass("is-sticky");
        } else {
            setnavClass("");
        }
    }
    const whatsappNumber = '8688198601'; // Replace with the desired WhatsApp number

    const handleClick = () => {
      const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
      const whatsappUrl = isMobile
        ? `https://api.whatsapp.com/send?phone=${whatsappNumber}`
        : `https://web.whatsapp.com/send?phone=${whatsappNumber}`;
  
      window.open(whatsappUrl, '_blank');
    };
    return (
        <React.Fragment>
            <nav className={"navbar navbar-expand-lg navbar-landing fixed-top " + navClass} id="navbar">
                <Container>
                    <Link className="navbar-brand" to="/index">
                        {/* <img src={logodark} className="card-logo card-logo-dark" alt="logo dark" height="17" />
                        <img src={logolight} className="card-logo card-logo-light" alt="logo light" height="17" /> */}
                        <h5>LOGO</h5>
                    </Link>

                    <NavbarToggler className="navbar-toggler py-0 fs-20 text-body" onClick={toggle} type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                        <i className="mdi mdi-menu"></i>
                    </NavbarToggler>

                    <Collapse
                        isOpen={isOpenMenu}
                        className="navbar-collapse"
                        id="navbarSupportedContent"
                    >
                        <Scrollspy
                            offset={-18}
                            items={[
                                "hero",
                                "plans",
                                "about",
                                "reviews",
                                "contact",
                            ]}
                            className="navbar-nav mx-auto mt-2 mt-lg-0"
                            id="navbar-example"
                        >
                            <li className="nav-item">
                                <NavLink href="/home#hero">Home</NavLink>
                            </li>
                            {/* <li className="nav-item">
                                <NavLink href="#services">Services</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink href="#features">Features</NavLink>
                            </li> */}
                            <li className="nav-item active" >
                                <NavLink href="/plans#plans">Courses</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink href="/about#about">About Us</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink href="/reviews#reviews">Reviews</NavLink>
                            </li>
                            {/* <li className="nav-item">
                                <NavLink href="#team">Team</NavLink>
                            </li> */}
                            <li className="nav-item">
                                <NavLink href="/contact#contact">Contact</NavLink>
                            </li>
                            
                        </Scrollspy>

                        <div onClick={handleClick}>
                            {/* <Link to="/login" className="btn btn-link fw-medium text-decoration-none text-dark">Sign
                                in</Link>
                            <Link to="/register" className="btn btn-primary">Sign Up</Link> */}
                            <a className="avatar-xs d-block" style={{cursor:'pointer'}}>
                                <div className="avatar-title rounded-circle" style={{backgroundColor:'#128C7E'}}>
                                    <i className="ri-whatsapp-fill"></i>
                                </div>
                            </a>
                        </div>
                    </Collapse>
                </Container>
            </nav>
            
        </React.Fragment>
    );
};

export default FakeNavbar;
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import logo from "../assets/logo.png";
import { NavLink } from "react-router";
import { useEffect, useState } from "react";

function CustomNavbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  return (
    <div
      className={`bg-[#fff7e2] sticky top-0 flex items-center justify-center m-auto z-20 border-b-[1px] transition-all ease-linear duration-200 ${
        isScrolled ? "h-[70px]" : "h-[97px]"
      }`}
    >
      {["md"].map((expand) => (
        <div
          key={expand}
          className="flex items-center w-full h-full max-w-[1232px] max-h-[56px]"
        >
          <Navbar expand={expand} className="w-full h-full !p-0">
            <div className="flex max-sm:w-full items-center justify-between">
              <NavLink to="/" className="max-md:order-2 w-[249px] h-[49px]">
                <img src={logo} alt="amrutam_logo" className="w-full h-full" />
              </NavLink>
              <Navbar.Toggle
                aria-controls={`offcanvasNavbar-expand-${expand}`}
                className="border-0 !shadow-none !outline-none"
              />
            </div>
            <div className="flex items-center justify-between max-h-7 ml-4">
              <Navbar.Offcanvas
                id={`offcanvasNavbar-expand-${expand}`}
                aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                placement="start"
                className="bg-[#fff7e2]"
              >
                <Offcanvas.Header
                  closeButton
                  className="flex justify-center items-center "
                >
                  <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                    <img src={logo} alt="" className="w-56" />
                  </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                  <Nav className="font-medium max-w-[330px] flex justify-end text-lg text-[#474747] leading-[28px] gap-6 max-lg:text-md max-lg:justify-start max-lg:gap-3">
                    <NavLink
                      to="/home"
                      className={({ isActive }) =>
                        isActive
                          ? "text-[#3a643b] font-semibold"
                          : "text-[#474747]"
                      }
                    >
                      Home
                    </NavLink>
                    <NavLink
                      to="/"
                      className={({ isActive }) =>
                        isActive
                          ? "text-[#3a643b] font-semibold"
                          : "text-[#474747]"
                      }
                    >
                      Find Doctors
                    </NavLink>
                    <NavLink
                      to="/aboutus"
                      className={({ isActive }) =>
                        isActive
                          ? "text-[#3a643b] font-semibold"
                          : "text-[#474747]"
                      }
                    >
                      About Us
                    </NavLink>
                  </Nav>
                  <div className="flex items-center justify-center space-x-3 sm:hidden mt-4">
                    <button className="border-[1px] border-[#3a643b] rounded-[11px] bg-transparent text-[#474747] max-w-28 max-h-14 w-full h-full p-2 font-medium">
                      Login
                    </button>
                    <button className="border-[1px] border-[#3a643b] rounded-[11px] bg-[#3a643b] text-white max-h-14 max-w-28 w-full h-full p-2 font-medium">
                      Sign-up
                    </button>
                  </div>
                </Offcanvas.Body>
              </Navbar.Offcanvas>
            </div>
          </Navbar>
          <div className="flex items-center justify-center space-x-3 max-sm:hidden mr-3 ml-2">
            <button className="border-[1px] border-[#3a643b] rounded-[11px] bg-transparent text-[#474747] w-32 h-12 max-lg:max-w-24 max-lg:h-10 font-medium">
              Login
            </button>
            <button className="border-[1px] border-[#3a643b] rounded-[11px] bg-[#3a643b] text-white w-32 h-12 max-lg:max-w-24 max-lg:h-10 font-medium">
              Sign-up
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CustomNavbar;

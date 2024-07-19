import React, {useState} from "react";
import {LuAlignJustify} from "react-icons/lu";
import {FaTimes} from "react-icons/fa";
import {FaUser} from "react-icons/fa";
import {IoIosArrowForward} from "react-icons/io";

const BottomHeader = () => {
 const [isOpen, setIsopen] = useState(false);

 const ToggleSidebar = () => {
  isOpen === true ? setIsopen(false) : setIsopen(true);
 };

 return (
  <>
   <nav id="main-nav" className="navbar navbar-expand-lg navbar-dark bg-dark p-0">
    <div className="container p-0">
     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
     </button>
     <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <div className="navbar">
       <a className="nav-link" onClick={ToggleSidebar}>
        <LuAlignJustify className="hm-icon nav-sprite" /> All
       </a>
      </div>
      <ul id="main-menu" className="navbar-nav me-auto mb-2 mb-lg-0">
       <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="/" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
         All Pages
        </a>
        <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
         <li>
          <a className="dropdown-item" href="/">
           Sign In
          </a>
         </li>
         <li>
          <a className="dropdown-item" href="/">
           Sign Up
          </a>
         </li>
         <li>
          <a className="dropdown-item" href="/">
           Checkout Page
          </a>
         </li>
         <li>
          <a className="dropdown-item" href="/">
           Contact Us
          </a>
         </li>
         <li>
          <a className="dropdown-item" href="/">
           Blog
          </a>
         </li>
         <li>
          <a className="dropdown-item" href="/">
           Blog Detail
          </a>
         </li>
         <li>
          <a className="dropdown-item" href="/">
           404 Page Not Found
          </a>
         </li>
         <li>
          <a className="dropdown-item" href="/">
           500 Internal Server Error
          </a>
         </li>
        </ul>
       </li>
       <li className="nav-item">
        <a className="nav-link" href="/">
         Fashion
        </a>
       </li>
       <li className="nav-item">
        <a className="nav-link" href="/">
         Supermarket
        </a>
       </li>
       <li className="nav-item">
        <a className="nav-link" href="/">
         Electronics
        </a>
       </li>
       <li className="nav-item">
        <a className="nav-link" href="/">
         Furniture
        </a>
       </li>
       <li className="nav-item">
        <a className="nav-link" href="/">
         Garden & Outdoors
        </a>
       </li>
       <li className="nav-item">
        <a className="nav-link" href="/">
         Jewellery
        </a>
       </li>
       <li className="nav-item">
        <a className="nav-link" href="/">
         Documentation
        </a>
       </li>
      </ul>
     </div>
    </div>
   </nav>

   <div className={`sidebar ${isOpen === true ? "active" : ""}`}>
    <div className="sd-header">
     <div className="hmenu-avatar-icon">
      <FaUser className="nav-sprite" />
     </div>
     <h4 className="mb-0 text-white">Hello, Sign In</h4>
     <div className="btn fs-4 text-white d-flex flex-row-reverse" onClick={ToggleSidebar}>
      <FaTimes />
     </div>
    </div>

    <div className="sd-body">
     <div className="sidebar-body">
      <div className="sb-item-list">
       <div className="sb-item sb-menu">
        <span className="sb-text">
         Mobiles, Computers
         <span className="sub-arrow">
          <IoIosArrowForward />
         </span>
        </span>
        <div className="sb-submenu-h">
         <div className="container">
          <div className="row">
           <div className="col-xl-4 mega-box">
            <div className="menu-title">
             <h5>Electronics</h5>
            </div>
            <div className="sb-item">
             <span className="sb-text">Mobile Phones</span>
            </div>
            <div className="sb-item">
             <span className="sb-text">Televisions</span>
            </div>
            <div className="sb-item">
             <span className="sb-text">Refrigerator</span>
            </div>
            <div className="sb-item">
             <span className="sb-text">Audio Devices</span>
            </div>
            <div className="sb-item">
             <span className="sb-text">Air Conditioners</span>
            </div>
            <div className="sb-item">
             <span className="sb-text">Laptop & PC</span>
            </div>
           </div>
           <div className="col-xl-4 mega-box">
            <div className="menu-title">
             <h5>Mobiles</h5>
            </div>
            <div className="sb-item">
             <span className="sb-text">New Arrivals</span>
            </div>
            <div className="sb-item">
             <span className="sb-text">Best Sellter</span>
            </div>
            <div className="sb-item">
             <span className="sb-text">Trading</span>
            </div>
            <div className="sb-item">
             <span className="sb-text">Pre-Order</span>
            </div>
            <div className="sb-item">
             <span className="sb-text">Sale</span>
            </div>
           </div>
           <div className="col-xl-4 mega-box">
            <div className="menu-title">
             <h5>Computers</h5>
            </div>
            <div className="sb-item">
             <span className="sb-text">PCs</span>
            </div>
            <div className="sb-item">
             <span className="sb-text">Laptop</span>
            </div>
            <div className="sb-item">
             <span className="sb-text">Accessories</span>
            </div>
            <div className="sb-item">
             <span className="sb-text">Gaming PCs</span>
            </div>
           </div>
          </div>
         </div>
        </div>
       </div>
       <div className="sb-item sb-menu">
        <span className="sb-text">Appliances, Electronics</span>
        <span className="sub-arrow">
         <IoIosArrowForward />
        </span>
        <div className="sb-submenu">
         <div className="sb-item">
          <span className="sb-text">Tv</span>
         </div>
         <div className="sb-item">
          <span className="sb-text">Refrigerator</span>
         </div>
         <div className="sb-item">
          <span className="sb-text">Computers</span>
         </div>
         <div className="sb-item sb-menu">
          <span className="sb-text">More</span>
          <span className="sub-arrow">
           <IoIosArrowForward />
          </span>
          <div className="sb-submenu">
           <div className="sb-item">
            <span className="sb-text">Speakers</span>
           </div>
           <div className="sb-item">
            <span className="sb-text">Washing</span>
           </div>
           <div className="sb-item">
            <span className="sb-text">Laptops</span>
           </div>
          </div>
         </div>
        </div>
       </div>

       <div className="sb-item sb-menu">
        <span className="sb-text">
        Men's Fashion
         <span className="sub-arrow">
          <IoIosArrowForward />
         </span>
        </span>
        <div className="sb-submenu">
         <div className="sb-item">
          <span className="sb-text">Indian Wear</span>
         </div>
         <div className="sb-item">
          <span className="sb-text">Western Wear</span>
         </div>
         <div className="sb-item">
          <span className="sb-text">Sports Wear</span>
         </div>
        </div>
       </div>
       <div className="sb-item">
        <span className="sb-text">Home, Kitchen, Pets</span>
       </div>
       <div className="sb-item">
        <span className="sb-text">Sports, Bags, Luggage</span>
       </div>
       <div className="sb-item">
        <span className="sb-text">Toys, Baby Products</span>
       </div>
       <div className="sb-item">
        <span className="sb-text">Books</span>
       </div>
      </div>
     </div>
    </div>

    {/* <div className="sd-body">
     <ul id="sub-menu" className="sm pixelstrap sm-vertical " data-smartmenus-id="1721234445641959">
      <li className="mega">
       <a href="/" className="has-submenu" id="sm-1721234445641959-1" aria-haspopup="true" aria-controls="sm-1721234445641959-2" aria-expanded="false">
        Mobiles, Computers <span className="sub-arrow"><IoIosArrowForward /></span>
       </a>
       <ul className="mega-menu vertical-mega-menu sm-nowrap" id="sm-1721234445641959-2" role="group" aria-hidden="true" aria-labelledby="sm-1721234445641959-1" aria-expanded="false">
        <li>
         <div className="container">
          <div className="row">
           <div className="col-xl-4 mega-box">
            <div className="link-section">
             <div className="demo">
              <div className="menu-title">
               <h6>electronics</h6>
              </div>
              <div className="menu-content">
               <ul>
                <li>
                 <a target="_blank" href="/">
                  Mobile phones
                 </a>
                </li>
                <li>
                 <a target="_blank" href="/">
                  televisions
                 </a>
                </li>
                <li>
                 <a target="_blank" href="/">
                  refrigerator
                 </a>
                </li>
                <li>
                 <a target="_blank" href="/">
                  audio devices
                 </a>
                </li>
                <li>
                 <a target="_blank" href="/">
                  Air Conditioners
                 </a>
                </li>
                <li>
                 <a target="_blank" href="/">
                  laptop &amp; PC
                 </a>
                </li>
               </ul>
              </div>
             </div>
            </div>
           </div>
           <div className="col-xl-4 mega-box">
            <div className="link-section">
             <div className="demo">
              <div className="menu-title">
               <h6>mobile</h6>
              </div>
              <div className="menu-content">
               <ul>
                <li>
                 <a target="_blank" href="/">
                  new arrivals
                 </a>
                </li>
                <li>
                 <a target="_blank" href="/">
                  best sellter
                 </a>
                </li>
                <li>
                 <a target="_blank" href="/">
                  trading
                 </a>
                </li>
                <li>
                 <a target="_blank" href="/">
                  pre-order
                 </a>
                </li>
                <li>
                 <a target="_blank" href="/">
                  sale
                 </a>
                </li>
               </ul>
              </div>
             </div>
            </div>
           </div>
           <div className="col-xl-4 mega-box">
            <div className="link-section">
             <div className="demo">
              <div className="menu-title">
               <h6>computers</h6>
              </div>
              <div className="menu-content">
               <ul>
                <li>
                 <a target="_blank" href="/">
                  PCs
                 </a>
                </li>
                <li>
                 <a target="_blank" href="/">
                  laptop
                 </a>
                </li>
                <li>
                 <a target="_blank" href="/">
                  accessories
                 </a>
                </li>
                <li>
                 <a target="_blank" href="/">
                  gaming PCs
                 </a>
                </li>
               </ul>
              </div>
             </div>
            </div>
           </div>
          </div>
         </div>
        </li>
       </ul>
       <span className="scroll-up">
        <span className="scroll-up-arrow"></span>
       </span>
       <span className="scroll-down">
        <span className="scroll-down-arrow"></span>
       </span>
      </li>
      <li>
       <a href="/" className="has-submenu" id="sm-1721234445641959-3" aria-haspopup="true" aria-controls="sm-1721234445641959-4" aria-expanded="false">
        Appliances, Electronics<span className="sub-arrow"></span>
       </a>
       <ul id="sm-1721234445641959-4" role="group" aria-hidden="true" aria-labelledby="sm-1721234445641959-3" aria-expanded="false" className="sm-nowrap">
        <li>
         <a href="/">tvs</a>
        </li>
        <li>
         <a href="/">refrigerator</a>
        </li>
        <li>
         <a href="/">computers</a>
        </li>
        <li>
         <a href="/" className="has-submenu" id="sm-1721234445641959-5" aria-haspopup="true" aria-controls="sm-1721234445641959-6" aria-expanded="false">
          more<span className="sub-arrow"></span>
         </a>
         <ul id="sm-1721234445641959-6" role="group" aria-hidden="true" aria-labelledby="sm-1721234445641959-5" aria-expanded="false">
          <li>
           <a href="/">speakers</a>
          </li>
          <li>
           <a href="/">washing</a>
          </li>
          <li>
           <a href="/">laptops</a>
          </li>
         </ul>
        </li>
       </ul>
      </li>
      <li>
       <a href="/" className="has-submenu" id="sm-1721234445641959-7" aria-haspopup="true" aria-controls="sm-1721234445641959-8" aria-expanded="false">
        Men's Fashion<span className="sub-arrow"></span>
       </a>
       <ul id="sm-1721234445641959-8" role="group" aria-hidden="true" aria-labelledby="sm-1721234445641959-7" aria-expanded="false" className="sm-nowrap">
        <li>
         <a href="/">indian wear</a>
        </li>
        <li>
         <a href="/">western wear</a>
        </li>
        <li>
         <a href="/">sports wear</a>
        </li>
       </ul>
      </li>
     </ul>
    </div> */}
   </div>
   <div className={`sidebar-overlay ${isOpen === true ? "active" : ""}`} onClick={ToggleSidebar}></div>
  </>
 );
};

export default BottomHeader;

import React from "react";
// import {LuAlignJustify} from "react-icons/lu";
// import {FaTimes, FaUser} from "react-icons/fa";
// import {IoIosArrowForward} from "react-icons/io";
import {items} from "../Data";
import {useLocation} from "react-router-dom";
import {FaArrowRight, FaGreaterThanEqual} from "react-icons/fa";

const BottomHeader = ({setData}) => {
 const location = useLocation();
 const filterByCategory = (category) => {
  const productCat = items.filter((product) => product.category === category);
  setData(productCat);
 };

 const filterByPrice = (price) => {
  const priceItem = items.filter((product) => Number([product.price]) >= price);
  setData(priceItem);
 };
 //  const [isOpen, setIsopen] = useState(false);

 //  const ToggleSidebar = () => {
 //   isOpen === true ? setIsopen(false) : setIsopen(true);
 //  };

 return (
  <>
   {location.pathname === "/" && (
    <nav id="main-nav" className="navbar navbar-expand-lg navbar-dark bg-dark p-0">
     <div className="container">
      <div className="collapse navbar-collapse p-2" id="navbarSupportedContent">
       <ul id="main-menu" className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
         <div className="nav-link">Filter By {<FaArrowRight />}</div>
        </li>
        <li className="nav-item">
         <div className="nav-link" onClick={() => setData(items)}>
          No Filter
         </div>
        </li>
        <li className="nav-item">
         <div className="nav-link" onClick={() => filterByCategory("tv")}>
          TV
         </div>
        </li>
        <li className="nav-item">
         <div className="nav-link" onClick={() => filterByCategory("mobiles")}>
          Mobile
         </div>
        </li>
        <li className="nav-item">
         <div className="nav-link" onClick={() => filterByCategory("laptops")}>
          Laptops
         </div>
        </li>
        <li className="nav-item">
         <div className="nav-link" onClick={() => filterByCategory("tablets")}>
          Tablets
         </div>
        </li>
        <li className="nav-item">
         <div className="nav-link" onClick={() => filterByPrice("5999")}>
          {<FaGreaterThanEqual />} 5999
         </div>
        </li>
        <li className="nav-item">
         <div className="nav-link" onClick={() => filterByPrice("19999")}>
          {<FaGreaterThanEqual />} 19999
         </div>
        </li>
        <li className="nav-item">
         <div className="nav-link" onClick={() => filterByPrice("39999")}>
          {<FaGreaterThanEqual />} 39999
         </div>
        </li>
        <li className="nav-item">
         <div className="nav-link" onClick={() => filterByPrice("59999")}>
          {<FaGreaterThanEqual />} 59999
         </div>
        </li>
        <li className="nav-item">
         <div className="nav-link" onClick={() => filterByPrice("79999")}>
          {<FaGreaterThanEqual />} 79999
         </div>
        </li>
       </ul>
      </div>
     </div>

     {/* <div className="container-fluid">
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
    </div> */}
    </nav>
   )}

   {/* <div className={`sidebar ${isOpen === true ? "active" : ""}`}>
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
   </div>
   <div className={`sidebar-overlay ${isOpen === true ? "active" : ""}`} onClick={ToggleSidebar}></div> */}
  </>
 );
};

export default BottomHeader;

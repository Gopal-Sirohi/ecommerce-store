import React from "react";
import storeLogo from "../assets/logo/store-logo.png";
import {BsCart3} from "react-icons/bs";
import Search from './Search';
import BottomHeader from "./BottomHeader";
const TopHeader = () => {
 return (
  <>
   <header className="header_wrap">
    <div className="top-header p-2 border-bottom bg-light">
     <div className="container">
      <div className="row">
       <div className="col-md-3 p-0">
        <img alt="logo" src={storeLogo} />
       </div>
       <div className="col-md-6">
        <Search />
       </div>
       <div className="col-md-3 d-flex justify-content-end">
        <div className="position-relative d-inline me-3">
         <a className="btn btn-danger" href="/">
          <BsCart3 />
          <div className="position-absolute top-0 start-100 translate-middle badge bg-info rounded-circle mt-2">2</div>
         </a>
        </div>
       </div>
      </div>
     </div>
    </div>
    <BottomHeader />
   </header>
  </>
 );
};

export default TopHeader;

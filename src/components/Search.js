import React from "react";
import {FaSearch} from "react-icons/fa";
import {MdArrowDropDown} from "react-icons/md";
const Search = () => {
 return (
  <>
   <form action="#" className="nav-searchbar">
    <div className="input-group">
     <div className="input-group-prepend">
      <div className="custom_select">
       <div className="nav-search-facade">
        <span id="nav-search-label-id" className="nav-search-label nav-progressive-content">
         All
        </span>
        <MdArrowDropDown />
       </div>
       <select className="nav-search-dropdown searchSelect nav-progressive-attrubute nav-progressive-search-dropdown">
        <option selected="selected" value="search-alias=aps">
         All Categories
        </option>
        <option value="search-alias=alexa-skills">Alexa Skills</option>
        <option value="search-alias=amazon-devices">Amazon Devices</option>
        <option value="search-alias=fashion">Amazon Fashion</option>
        <option value="search-alias=nowstore">Amazon Fresh</option>
        <option value="search-alias=freshmeat">Amazon Fresh Meat</option>
        <option value="search-alias=amazon-pharmacy">Amazon Pharmacy</option>
        <option value="search-alias=appliances">Appliances</option>
        <option value="search-alias=mobile-apps">Apps &amp; Games</option>
        <option value="search-alias=audible">Audible Audiobooks</option>
        <option value="search-alias=baby">Baby</option>
        <option value="search-alias=beauty">Beauty</option>
        <option value="search-alias=stripbooks">Books</option>
        <option value="search-alias=automotive">Car &amp; Motorbike</option>
        <option value="search-alias=apparel">Clothing &amp; Accessories</option>
        <option value="search-alias=collectibles">Collectibles</option>
        <option value="search-alias=computers">Computers &amp; Accessories</option>
        <option value="search-alias=todays-deals">Deals</option>
        <option value="search-alias=electronics">Electronics</option>
        <option value="search-alias=furniture">Furniture</option>
        <option value="search-alias=lawngarden">Garden &amp; Outdoors</option>
        <option value="search-alias=gift-cards">Gift Cards</option>
        <option value="search-alias=grocery">Grocery &amp; Gourmet Foods</option>
        <option value="search-alias=hpc">Health &amp; Personal Care</option>
        <option value="search-alias=kitchen">Home &amp; Kitchen</option>
        <option value="search-alias=industrial">Industrial &amp; Scientific</option>
        <option value="search-alias=jewelry">Jewellery</option>
        <option value="search-alias=digital-text">Kindle Store</option>
        <option value="search-alias=luggage">Luggage &amp; Bags</option>
        <option value="search-alias=luxury-beauty">Luxury Beauty</option>
        <option value="search-alias=dvd">Movies &amp; TV Shows</option>
        <option value="search-alias=digital-music">MP3 Music</option>
        <option value="search-alias=popular">Music</option>
        <option value="search-alias=mi">Musical Instruments</option>
        <option value="search-alias=office-products">Office Products</option>
        <option value="search-alias=pets">Pet Supplies</option>
        <option value="search-alias=instant-video">Prime Video</option>
        <option value="search-alias=shoes">Shoes &amp; Handbags</option>
        <option value="search-alias=software">Software</option>
        <option value="search-alias=sporting">Sports, Fitness &amp; Outdoors</option>
        <option value="search-alias=specialty-aps-sns">Subscribe &amp; Save</option>
        <option value="search-alias=home-improvement">Tools &amp; Home Improvement</option>
        <option value="search-alias=toys">Toys &amp; Games</option>
        <option value="search-alias=under-ten-dollars">Under ₹500</option>
        <option value="search-alias=videogames">Video Games</option>
        <option value="search-alias=watches">Watches</option>
       </select>
      </div>
     </div>
     <input id="search" name="search" type="text" className="form-control input-focus" placeholder="Search for Products, Brands and More" required />
     <label className="visually-hidden" htmlFor="search"></label>
     <button className="btn btn-danger text-white " type="submit" aria-label="Search">
      <FaSearch />
     </button>
    </div>
   </form>
  </>
 );
};

export default Search;

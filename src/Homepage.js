import React from "react"
import AboutMe from "./components/AboutMe";
import Banner from "./components/Banner";
import Navbar from "./components/Navbar"
 
function Homepage(props) {
  return (
    <div className="homepage-container">
      <Navbar />
      <Banner />
      {/* <AboutMe /> */}
    </div>
  )
}
 
export default Homepage;
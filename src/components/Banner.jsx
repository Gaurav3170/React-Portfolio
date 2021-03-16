import React from 'react';
import Typical from 'react-typical';

function Banner(){
    return(
        <div className="pageBanner">
            <img className="bannerImage" src='laptopImage.jpg' alt='bannerImage'/>
            <div className="introContent">
                <span className="helloText">Hello!</span>
                <span className="nameText">I'm Gaurav Keswani.</span>
                <span className="aboutMeText">I am a</span> 
            </div>
            <div className="contentText">
                <Typical
                    steps={['Developer', 500, 'Coder', 1000, 'Footballer', 500, 'Dancer', 1000]}
                    loop={Infinity}
                    wrapper="p"
                />
            </div>    
        </div>
    )
}

export default Banner;
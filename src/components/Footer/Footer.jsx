import React from 'react';
import './Footer.css';
const Footer = () => {
    return (
        <section className="f-wrapper gray">
            <div className="paddings innerWidth flexCenter f-container">

                {/*left side */}
                <div className="flexColStart f-left">
                    <img src="./logo2.png" width={120} alt="" />
                    <span className=''>
                    Our Vision is to make all people <br/>
                    the best place to live for them.
                </span>
                </div>
                
                <div className="flexColStart f-right">
                    <span className='primaryText'>Information</span>
                    
                    <span className=''>145 Buner,FL4571,KPK</span>
                    <div className="flexCenter f-menu">
                        <span>Property</span>
                        <span>Services</span>
                        <span>Product</span>
                        <span>About Us</span>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Footer;

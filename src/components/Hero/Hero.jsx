import React from 'react';
import {HiLocationMarker} from 'react-icons/hi'
import CountUp from 'react-countup'
import './Hero.css';
const Hero = () => {
    return (
        <section className="hero-wrapper">
            <div className="paddings innerWidth hero-container flexCenter">
                {/* lift side */}
                <div className="flexColStart hero-left">
                    <div className="hero-title">
                        <div className='orange-circle'/>
                        <h1>
                            Discover <br/> Most Suitable <br/>Property
                        </h1>
                    </div>
                    <div className="flexColStart hero-description">
                        <span className='secondary-text'>Find a v variety of properties that suit yo very easily</span>
                        <span className='secondary-text'> Forget all difficuliteis in finding a residence for you</span>
                    </div>
                    <div className=" flexCenter search-bar">
                        <HiLocationMarker color="var(--blue)" size={26}/>
                        <input type="text"/>
                        <button className='button'>Search</button>
                    </div>
                    <div className="flexCenter states">
                        <div className="flexColCenter state">
                            <span>
                                <CountUp start={8800} end={9000} duration={4}/>
                                <span>+</span>
                            </span>
                            <span className='secondary-text'>Premium Products</span>
                        </div>
                        <div className="flexColCenter state">
                            <span>
                                <CountUp start={1950} end={2000} duration={4}/>
                                <span>+</span>
                            </span>
                            <span className='secondary-text'>Happy Customer</span>
                        </div>
                        <div className="flexColCenter state">
                            <span>
                                <CountUp end={28}/>
                                <span>+</span>
                            </span>
                            <span className='secondary-text'>Award Winning</span>
                        </div>
                    </div>
                </div>
                {/* right side */}
                <div className="flexCenter hero-right">
                    <div className="image-container">
                        <img src='./hero-image.png'/>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;

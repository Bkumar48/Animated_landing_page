import React from 'react'
import { Link } from 'react-router-dom'
import { IoApps, IoChevronForward, IoNotifications, IoPieChart, IoNewspaper, IoCard, IoColorFill, IoMailOutline } from 'react-icons/io5'
import { IconContext } from 'react-icons'
const Card = () => {
    return (
        <div className='service_container'>
            <div className="title_wrapper">
                <span className="service_title">Our Services</span>
                <h2>
                    Save Time Managing Social Media <br /> for your Business.
                </h2>
            </div>
            <div className="service_card">
                <div className='card'>
                    <span className="service_icon" style={{backgroundColor:"#ddfbf9"}}>
                        <IconContext.Provider value={{ color: "#14da8f", size: "25px" }}>
                            <IoMailOutline />
                        </IconContext.Provider>
                    </span>
                    <a href="/">
                        <span>Learn more</span>
                        <IconContext.Provider value={{ color: "#14da8f", size: "25px" }}>
                            <IoMailOutline />
                        </IconContext.Provider>
                    </a>
                </div>

                <div className='card'>
                    <span className="service_icon" style={{backgroundColor:"#ddfbf9"}}>
                        <IconContext.Provider value={{ color: "#14da8f", size: "25px" }}>
                            <IoMailOutline />
                        </IconContext.Provider>
                    </span>
                    <a href="/">
                        <span>Learn more</span>
                        <IconContext.Provider value={{ color: "#14da8f", size: "25px" }}>
                            <IoMailOutline />
                        </IconContext.Provider>
                    </a>
                </div>
                
                <div className='card'>
                    <span className="service_icon" style={{backgroundColor:"#ddfbf9"}}>
                        <IconContext.Provider value={{ color: "#14da8f", size: "25px" }}>
                            <IoMailOutline />
                        </IconContext.Provider>
                    </span>
                    <a href="/">
                        <span>Learn more</span>
                        <IconContext.Provider value={{ color: "#14da8f", size: "25px" }}>
                            <IoMailOutline />
                        </IconContext.Provider>
                    </a>
                </div>
                
                <div className='card'>
                    <span className="service_icon" style={{backgroundColor:"#ddfbf9"}}>
                        <IconContext.Provider value={{ color: "#14da8f", size: "25px" }}>
                            <IoMailOutline />
                        </IconContext.Provider>
                    </span>
                    <a href="/">
                        <span>Learn more</span>
                        <IconContext.Provider value={{ color: "#14da8f", size: "25px" }}>
                            <IoMailOutline />
                        </IconContext.Provider>
                    </a>
                </div>
                
            </div>
        </div>
    )
}

export default Card

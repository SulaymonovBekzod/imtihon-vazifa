import React from 'react'
import "./Navbar.css"

function Navbar() {

    const navbar = [
        {
            text: "home"
        },
        {
            text: "about"
        },
        {
            text: "contact"
        },
        {
            text: "main"
        },
        {
            text: "product"
        }
    ]

    return (
        <div className='nav_container'>
            <div className='row_container'>
                <div className='nav_content'>
                    <ul className='nav_task'>
                        <img className='iphone' src="https://i.pinimg.com/736x/8d/f5/e7/8df5e76136dcba44841002494e01e050.jpg" alt="" />
                        {
                            navbar.map((item, index) => {
                                return (        
                                    <li className='nav_link' key={index}>
                                        {item.text}
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navbar
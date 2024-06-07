import React from 'react'
import "./Data.css"

export default function Data(props) {

    const { userData } = props

    return (
        <div className='container'>
            <div className="row">
                <div>
                    <p className='nav_text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem quae labore iste? <br />Consequatur, perspiciatis eos aut debitis vero recusandae, <br />labore id sequi qui voluptates error, minima corporis laudantium nihil asperiores?</p>
                </div>
                <div>
                    <img src="" alt="" />
                </div>

                {userData.name} {userData.age} {userData.contact}
            </div>
        </div>
    )
}

import React from 'react'
import "./Oshpaz.css"

import StolStulImg from "../../images/stol_stul.png"

function Oshpaz() {
    return (
        <div className='container7'>
            <div className="row7">
                <div>
                    <div className='oshpaz'>
                        <h1 className='h1_number'>1</h1>
                        <img className='img_stol' src={StolStulImg} alt="" />
                        <p className='oshpaz_number'>1</p>
                    </div>
                    <div className='oshpaz'>
                        <h1 className='h1_number'>1</h1>
                        <img className='img_stol' src={StolStulImg} alt="" />
                        <p className='oshpaz_number'>14</p>
                    </div>
                    <div className='oshpaz'>
                        <h1 className='h1_number'>1</h1>
                        <img className='img_stol' src={StolStulImg} alt="" />
                        <p className='oshpaz_number'>5</p>
                    </div>
                    <div className='oshpaz'>
                        <h1 className='h1_number'>1</h1>
                        <img className='img_stol' src={StolStulImg} alt="" />
                        <p className='oshpaz_number'>9</p>
                    </div>
                </div>
                <div className='kota_oshpaz'>
                    <div className='oshpazde'>
                        <p className='oshpaz_taomlari'>Taomlar</p>
                        <p className='oshpaz_osh'>1. Osh: 4 ta</p>
                        <p className='oshpaz_shorva'>2. Sho`rva: 2ta</p>
                    </div>
                    <div className='yana_oshpazde'>
                        <div className='oshpaz_ichimliklari'>Ichimliklar</div>
                        <p className='oshpaz_choy'>1. Choy qora: 1ta</p>
                        <p className='oshpaz_kompot'>2.Kompot olchalik: 1ta</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Oshpaz

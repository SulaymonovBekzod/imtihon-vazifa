import React from 'react'
import "./Salatlar.css"
import Stol from "../../images/stol_stul.png"
import Mastava from "../../images/Mastava.png"
import Choynak from "../../images/Choynak.png"
import Salat from "../../images/Salat.png"
import Achichuk from "../../images/Achichuk.png"
import Svejiy from "../../images/Svejiy.png"
import Oliviya from "../../images/Oliviya.png"
import Grekcha from "../../images/Grekcha.png"
import Suzma from "../../images/Suzma.png"
import Tarnov from "../../images/Tarnov.png"
import Damskiy from "../../images/Damskiy.png"
import Yaponcha from "../../images/Yaponcha.png"
import { Link } from 'react-router-dom'
function Salatlar() {
    return (
        <div className='container5'>
            <div className="row5">
                <div className="salatlar">
                    <img src={Stol} alt="" />
                    <p className='salat_number'>1</p>
                </div>
                <div className='salat_menusi'>
                    <Link to="/taomlar" className="card1">
                        <img className='img' src={Mastava} alt="" />
                        <p className='salat_royxati'>Taomlar</p>
                    </Link>
                    <Link to="/ichimliklar" className="card1">
                        <img className='img' src={Choynak} alt="" />
                        <p className='salat_royxati'>Ichimliklar</p>
                    </Link>
                    <Link to="/salatlar" className="card1">
                        <img className='img' src={Salat} alt="" />
                        <p className='salat_royxati'>Salatlar</p>
                    </Link>
                </div>
            </div>
            <hr className='uzun_chiziq' />
            <div className='salatlar_menyusi'>
                <div className='salat_card'>
                    <img className='salat_img' src={Achichuk} alt="" />
                    <p className='salat_nomi'>Achiichuk</p>
                    <p className='salat_minus_plus'>- 0 +</p>
                </div>
                <div className='salat_card'>
                    <img className='salat_img' src={Svejiy} alt="" />
                    <p className='salat_nomi'>Svejiy</p>
                    <p className='salat_minus_plus'>- 0 +</p>
                </div>
                <div className='salat_card'>
                    <img className='salat_img' src={Oliviya} alt="" />
                    <p className='salat_nomi'>Oliviya</p>
                    <p className='salat_minus_plus'>- 0 +</p>
                </div>
                <div className='salat_card'>
                    <img className='salat_img' src={Grekcha} alt="" />
                    <p className='salat_nomi'>Grekcha</p>
                    <p className='salat_minus_plus'>- 0 +</p>
                </div>
                <div className='salat_card'>
                    <img className='salat_img' src={Suzma} alt="" />
                    <p className='salat_nomi'>Suzma</p>
                    <p className='salat_minus_plus'>- 0 +</p>
                </div>
                <div className='salat_card'>
                    <img className='salat_img' src={Tarnov} alt="" />
                    <p className='salat_nomi'>Tarnov</p>
                    <p className='salat_minus_plus'>- 0 +</p>
                </div>
                <div className='salat_card'>
                    <img className='salat_img' src={Damskiy} alt="" />
                    <p className='salat_nomi'>Damskiy</p>
                    <p className='salat_minus_plus'>- 0 +</p>
                </div>
                <div className='salat_card'>
                    <img className='salat_img' src={Yaponcha} alt="" />
                    <p className='salat_nomi'>Yaponcha</p>
                    <p className='salat_minus_plus'>- 0 +</p>
                </div>
            </div>
            <Link className='link' to="/korzinka"><button className='korzinka'>Korzinka</button></Link>
        </div>
    )
}

export default Salatlar

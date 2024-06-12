import React from 'react'
import "./Taomlar.css"
import Stol from "../../images/stol_stul.png"
import Mastava from "../../images/Mastava.png"
import Choynak from "../../images/Choynak.png"
import Salat from "../../images/Salat.png"
import Osh from "../../images/Osh.png"
import Kabob from "../../images/Kabob.png"
import GoshliShorva from "../../images/GoshliShorva.png"
import Shorva from "../../images/Shorva.png"
import Manpar from "../../images/Manpar.png"
import Norin from "../../images/Norin.png"
import Bishteks from "../../images/Bishteks.png"
import Kartoshka from "../../images/Kartoshka.png"
import { Link } from "react-router-dom"
function Taomlar() {
    return (
        <div className='container3'>
            <div className="row3">
                <div className="taomlar">
                    <img src={Stol} alt="" />
                    <p className='taomlar_number'>1</p>
                </div>
                <div className='taomlar_menusi'>
                    <div className="card1">
                        <img className='img' src={Mastava} alt="" />
                        <p className='taomlar_royxati'>Taomlar</p>
                    </div>
                    <Link to="/ichimliklar" className="card2">
                        <img className='img' src={Choynak} alt="" />
                        <p className='taomlar_royxati'>Ichimliklar</p>
                    </Link>
                    <Link to="/salatlar" className="card3">
                        <img className='img' src={Salat} alt="" />
                        <p className='taomlar_royxati'>Salatlar</p>
                    </Link>
                </div>
            </div>
            <hr className='uzun_chiziq' />
            <div className='taomlar_menyusi'>
                <div className='taom_card'>
                    <img className='taomlar_img' src={Osh} alt="" />
                    <p className='taomlar_nomi1'>osh</p>
                    <p className='taom_minus_plus'>- 0 +</p>
                </div>
                <div className='taom_card1'>
                    <img className='taomlar_img' src={Kabob} alt="" />
                    <p className='taomlar_nomi'>Kabob</p>
                    <p className='taom_minus_plus'>- 0 +</p>
                </div>
                <div className='taom_card'>
                    <img className='taomlar_img' src={GoshliShorva} alt="" />
                    <p className='taomlar_nomi'>Shorva</p>
                    <p className='taom_minus_plus'>- 0 +</p>
                </div>
                <div className='taom_card'>
                    <img className='taomlar_img' src={Shorva} alt="" />
                    <p className='taomlar_nomi'>Mastava</p>
                    <p className='taom_minus_plus'>- 0 +</p>
                </div>
                <div className='taom_card'>
                    <img className='taomlar_img' src={Manpar} alt="" />
                    <p className='taomlar_nomi5'>Xash</p>
                    <p className='taom_minus_plus'>- 0 +</p>
                </div>
                <div className='taom_card'>
                    <img className='taomlar_img' src={Norin} alt="" />
                    <p className='taomlar_nomi'>Norin</p>
                    <p className='taom_minus_plus'>- 0 +</p>
                </div>
                <div className='taom_card'>
                    <img className='taomlar_img' src={Bishteks} alt="" />
                    <p className='taomlar_nomi'>Bishteks</p>
                    <p className='taom_minus_plus'>- 0 +</p>
                </div>
                <div className='taom_card'>
                    <img className='taomlar_img' src={Kartoshka} alt="" />
                    <p className='taomlar_nomi8'>Qozon kabob</p>
                    <p className='taom_minus_plus'>- 0 +</p>
                </div>
            </div>
           <Link to="/korzinka"><button className='korzinka'>Korzinka</button></Link>
        </div>
    )
}

export default Taomlar

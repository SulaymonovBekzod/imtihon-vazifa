import React from 'react'
import "./Ichimliklar.css"
import { Link } from 'react-router-dom'
import Stol from "../../images/stol_stul.png"
import Mastava from "../../images/Mastava.png"
import Choynak from "../../images/Choynak.png"
import Salat from "../../images/Salat.png"
import Pepsi from "../../images/Pepsi.png"
import CocaCola from "../../images/CocaCola.png"
import Fanta from "../../images/Fanta.png"
import Hydrolife from "../../images/Hydrolife.png"

function Ichimliklar() {
    return (
        <div className='container4'>
            <div className="row4">
                <div className="ichimliklar">
                    <img src={Stol} alt="" />
                    <p className='ichimlik_number'>1</p>
                </div>
                <div className='ichimlik_menusi'>
                    <Link to="/taomlar" className="card1">
                        <img className='img' src={Mastava} alt="" />
                        <p className='ichimlik_royxati'>Taomlar</p>
                    </Link>
                    <Link to="/ichimliklar" className="card2">
                        <img className='img' src={Choynak} alt="" />
                        <p className='ichimlik_royxati'>Ichimliklar</p>
                    </Link>
                    <Link to="/salatlar" className="card3">
                        <img className='img' src={Salat} alt="" />
                        <p className='ichimlik_royxati'>Salatlar</p>
                    </Link>
                </div>
            </div>
            <hr className='uzun_chiziq' />
            <div className='ichimliklar_menyusi'>
                <div className='ichimlik_card'>
                    <img className='ichimlik_img' src={Pepsi} alt="" />
                    <p className='ichimlik_nomi'>Pepsi</p>
                    <p className='ichimlik_minus_plus'>- 0 +</p>
                </div>
                <div className='ichimlik_card'>
                    <img className='ichimlik_img' src={CocaCola} alt="" />
                    <p className='ichimlik_nomi'>Pepsi</p>
                    <p className='ichimlik_minus_plus'>- 0 +</p>
                </div>
                <div className='ichimlik_card'>
                    <img className='ichimlik_img' src={Fanta} alt="" />
                    <p className='ichimlik_nomi'>Pepsi</p>
                    <p className='ichimlik_minus_plus'>- 0 +</p>
                </div>
                <div className='ichimlik_card'>
                    <img className='ichimlik_img' src={Hydrolife} alt="" />
                    <p className='ichimlik_nomi'>Pepsi</p>
                    <p className='ichimlik_minus_plus'>- 0 +</p>
                </div>
            </div>
           <Link to="/korzinka"><button className='korzinka'>korzinka</button></Link>
        </div>
    )
}

export default Ichimliklar

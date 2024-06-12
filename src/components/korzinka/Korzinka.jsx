import React from 'react'
import "./Korzinka.css"
import { Link } from 'react-router-dom'

function Korzinka() {
    return (
        <div className='container6'>
            <div className="row6">
                <div className='taomlar_royaxati'>
                    <p className='taomlar_text'>Taomlar</p>
                    <p className='taom'>1. Osh: 4ta</p>
                    <p className='taom'>2. Sho`rva: 2ta</p>
                    <div className='ichimlik'>
                        <p className='ichimliklar_text'>Ichimliklar</p>
                        <p className='ichimlik_choyi'>1. Choy qora: 1ta</p>
                        <p className='ichimlik_choyi'>2. Kompot olchalik: 1ta</p>
                    </div>
                </div>
                <div className='ovqat_ichimlik_summasi'>
                    <div className='taom_summasi'>
                        <p className='summa'>80.000 so`m</p>
                        <p className='summa2'>30.000 so`m</p>
                    </div>
                    <div className='ichimlik_summasi'>
                        <p className='summa1'>2.000 so`m</p>
                        <p className='summa'>10.00 so`m</p>
                    </div>
                    <p className='umumiy_summa'>Umumiy summa: 122.000 so`m</p>
                    <Link to="/taomlar"><button className='yakunlash'>Yakunlash</button></Link>
                    <button className='yuborish'>Yuborish</button>
                </div>
            </div>
        </div>
    )
}

export default Korzinka

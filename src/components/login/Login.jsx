import { useNavigate } from 'react-router-dom';
import { useState} from 'react';
import "./Login.css";
import Afitsant from "../../images/Afitsant.png";
import Oshpaz from "../../images/Oshpaz.png";

function Login() {
    const [password, setPassword] = useState("")

    const history = useNavigate()

    function chackPassword() {
        if (password === "afitsant") {
            history("/afitsant")
        }else {
            alert('Noto‘g‘ri parol, qayta urinib ko‘ring.')
        }
    }

    function chackPassword() {
        if (password === "oshpaz") {
            history("/oshpaz")
        }else {
            alert('Noto‘g‘ri parol, qayta urinib ko‘ring.')
        }
    }

    return (
        <div className='container'>
            <div className="row">
                <div className="login_page">
                    <div className='afitsant'>
                        <img className='afitsant_img' src={Afitsant} alt="" />
                        <p className='afitsant_text'>Girgitton</p>
                        <input type="radio" />
                    </div>
                    <div className='oshpaz'>
                        <img className='oshpaz_img' src={Oshpaz} alt="" />
                        <p className='oshpaz_text'>Oshpaz</p>
                        <input className='input_radio' type="radio" />
                    </div>
                </div>
                <input onChange={(e) => setPassword(e.target.value)} className='input' type="password" placeholder='Parol kiriting....' />
                <div>
                    <button onClick={chackPassword} className='kirish'>Kirish</button>
                </div>
            </div>
        </div>
    )
}

export default Login

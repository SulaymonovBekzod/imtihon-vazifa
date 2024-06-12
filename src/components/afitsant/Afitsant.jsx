import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import "./Afitsant.css"
function Afitsant() {

    const [data, setData] = useState([])

    async function GetUser() {
        const res = await axios.get(
            "https://6646181a51e227f23aadc112.mockapi.io/book/obg"
        );
        setData(res.data)

            ?.then((res) => {
                return res.data
            })
            .catch((err) => {
                return err
            })
        console.log(res.data);
    }

    useEffect(() => {
        GetUser()
    }, [])

    return (
        <div className='container2'>
            <div className="row2">
                <div className='afitsant_stol'>
                    {
                        data?.map((item, index) => {
                            return (
                                <div className='stol_stul' key={index}>
                                    <Link to="/taomlar"><img src={item.avatar} alt="" /></Link>
                                    <p className='stol_stul_raqami'>{item.name}</p>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Afitsant

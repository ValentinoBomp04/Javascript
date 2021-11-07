
import React, {Fragment, useState, } from "react";
import {Link} from "react-router-dom";


const API = process.env.REACT_APP_API;


const Users = () => {

    const [Name, setName] = useState('')
    const [Email, setEmail] = useState('')
    const [Password, setPassword] = useState('')
    

    const handleSubmit = async (e) =>{
        e.preventDefault();

        const res = await fetch(`${API}/usuarios`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                Name,
                Email,
                Password,
            })
        })
        const data = await res.json();
        console.log(data)
        // await getRecords
        
        setEmail('')
        setName('')
        setPassword('')
    }
    

     

    return(
        <Fragment>
            <div className="row">
                <div className="col-md-4">
                    <form onSubmit={handleSubmit} className="card card-body position-absolute top-50 start-50 translate-middle">
                        <div className="form-group ">
                            <input
                                type="text"
                                onChange={e => setName(e.target.value)}
                                value={Name}
                                className="form-control"
                                placeholder="Nombre"
                                autoFocus
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="email"
                                onChange={e =>setEmail(e.target.value)}
                                value={Email}
                                className="form-control"
                                placeholder="Email"

                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="password"
                                onChange={e => setPassword(e.target.value)}
                                value={Password}
                                className="form-control"
                                placeholder="Password"

                            />
                        </div>
                        <button className="btn btn-primary btn-block" >
                            Log in 
                            
                                
                        </button>
                        <Link className="btn btn-secondary btn-block" aria-current="page" to="/Records">Records</Link> 
                    </form>

                </div>

            </div>
        </Fragment>
    )
}
export default Users
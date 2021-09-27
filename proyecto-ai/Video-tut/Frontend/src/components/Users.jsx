import { render } from "@testing-library/react";
import React, {Fragment, useState, useEffect} from "react";
import {Link} from "react-router-dom";
import Records from "./Records";

const API = process.env.REACT_APP_API;


const Users = () => {

    const [Name, setName] = useState('')
    const [Email, setEmail] = useState('')
    const [Password, setPassword] = useState('')
    // const [Record, setRecord] = useState([])

    // const getRecords = async () => {
    //     const res = await fetch(`${API}/usuarios`)
    //    const data = await res.json();
    //    setRecord(data)
    // }
    // useEffect(() => {
    //     getRecords();
    // }, [])
    const [Users, setUsers] = useState([])
    const getUsers = async () => {
        const res = await fetch(`${API}/usuarios`)
        const data = await res.json();
        setUsers(data)
     }
    useEffect(() => {
        getUsers();
    }, [])

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
        
        
    }
    

     

    return(
        <Fragment>
            <div className="row">
                <div className="col-md-4">
                    <form onSubmit={handleSubmit} className="card card-body">
                        <div className="form-group">
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
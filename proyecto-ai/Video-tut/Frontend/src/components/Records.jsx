import React, {Fragment, useState, useEffect} from "react";

const API = process.env.REACT_APP_API;

const Records = ()=>{
     
    const [Users, setUsers] = useState([])
    const getUsers = async () => {
        const res = await fetch(`${API}/usuarios`)
        const data = await res.json();
        setUsers(data)
     }
    useEffect(() => {
        getUsers();
    }, [])

    const deleteUser = async (id) =>{
        const userResponse = window.confirm('Are you sure?')
        if (userResponse){
            const res = await fetch(`${API}/usuarios/${id}`, {
                method: 'DELETE'    
            });
            const data = await res.json();
            await getUsers();
            console.log(data)
        }
        
    }

    return(
        <Fragment>
        <div className="col-md-10">
            <table className="table  table-hover">
                <thead className="table-dark">

                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Password</th>
                        <th>Operations</th>
                    </tr>
                            
                </thead>

                    <tbody>
                        {Users.map(User =>(
                            <tr key={User._id}>
                                <td>${User.Name}</td>
                                <td>${User.Email}</td>
                                <td>${User.Password}</td>
                                <td>
                                <button className="btn btn-secondary btn-sm btn-block">
                                    Edit
                                </button>
                                <button 
                                    className="btn btn-danger btn-sm btn-block"
                                    onClick={()=>deleteUser(User._id)}
                                    >
                                    Delete
                                </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>

            </table>
    </div>
    </Fragment>
    )
    
}
export default Records
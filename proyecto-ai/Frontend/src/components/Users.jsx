import React, {Fragment, useState} from "react";

 const Users = () => {

    const [Nombre, setNombre] = useState('')

    
    const handleSubmit = (e) =>{
        console.log(e)
    }

    return(
        <Fragment>
            <div className="row">
                <div className="col-md-4">
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <input type="text" onChange={} />
                        </div>

                    </form>
                </div>
                <div className="col-md-8">

                </div>

            </div>
        </Fragment>
    ) 
}
export default Users
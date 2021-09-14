import React, {Fragment, useState} from "react";

const Listado = () =>{
    
    const [numeros, SetNumero] = useState([1,2,3,4,5])
    return(
        <Fragment>
            <ul>
                {
                    numeros.map ( (item, index) =>
                        <li key={index}>
                            {item} - {index}
                        </li>
                    )
                }
            </ul>
        </Fragment>
    )
}
export default Listado
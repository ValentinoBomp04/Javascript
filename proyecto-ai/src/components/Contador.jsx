import React, {Fragment, useState} from "react";

const Contador = () =>{
    const [numero, setNumero] = useState(0)
    const Aumentar = () =>{
        setNumero(numero + 1)
    }
    const Reducir = () =>{
        setNumero(numero - 1)
    }
    return(
        <Fragment>
            <h2> {numero} </h2>
            <button onClick = {Reducir}>-</button>
            <button onClick = {Aumentar} >+</button>
            
        </Fragment>
    )

}
export default Contador
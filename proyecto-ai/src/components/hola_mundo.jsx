import React, {Fragment} from "react";

function Hola(){
    let saludo = 'Variable saludo'
    return(
        <Fragment>
            <h2>
                Primer componente {saludo}
            </h2>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, molestiae hic. Nesciunt, blanditiis? Eum voluptatum voluptas nostrum voluptatibus temporibus provident, ipsam quasi soluta veniam sit similique natus at eligendi nulla?
            </p>
        </Fragment>
    )
}
export default Hola
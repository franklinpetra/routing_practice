import React from "react";
import{ Link } from '@reach/router';


const Num = props =>{ 
    if (isNaN (props.Id) === false) {
        return(
            <div class="App-logo4">
                <h1>Is your number:{ props.Id } </h1> 
            </div>
        )
    } 
    else {
        return ( 
            <div class="App-logo4">
                <h1>Your Word is: { props.Id } </h1>
            </div>   
        )
    }
}
export default Num;
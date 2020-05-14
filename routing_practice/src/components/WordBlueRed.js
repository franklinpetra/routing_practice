import React from "react";

const WordBlueRed = props =>{

    const Color1 = props.Color1
    const Color2 = props.Color2

    const Styles = {
        height: "200px",
        width: "1300px",
        fontFamily: 'Arial, sans-serif',
        fontWeight: 'bold',
        background: Color1,
        color: Color2,
        textAlign:"center",
    };
    return(
            <div style = {Styles} >
                <br></br><br></br>
                <h1>{props.Id}</h1>
            </div>        
    )
}
export default WordBlueRed;
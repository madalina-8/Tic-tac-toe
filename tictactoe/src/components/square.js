import React from "react";

const Square = ({ value, onClick }) => {  //value it's either X or O, if it's null, will be squares
    const style = value ? `squares ${value}` : `squares`;
     
    return (
        <button className={style} onClick={onClick}>
            {value}
        </button>
    );
}

export default Square;
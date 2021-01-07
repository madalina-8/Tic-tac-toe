import React from "react";
import Square from "./square";

const Board = ({squares, onClick}) => (
    <div className="board">
        {squares.map((square, i) => (
          <Square key={i} value={square} onClick={() => onClick(i)} />
        ))}
    </div> 
); //I am mapping over each square and then I'm passing the square into the 
   //Square component along with the index

export default Board;

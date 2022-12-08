import React from "react";
import "./art-board.scss"
export interface ArtBoardProps {
    label: string;
}

const ArtBoard = (props: ArtBoardProps) => {
    return <div className={"artBoard"}><h1>Hello World! - {props.label}</h1></div>;
};

export default ArtBoard;

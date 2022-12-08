import React from "react";
import "./art-board.scss"

export interface ArtBoardProps {
    label: string;
}

const ArtBoard = (props: ArtBoardProps) => {
    return <div className={"artBoard"}><h1>Hello World! - {props.label}</h1>
        <p>Paragraph added, updated text, testing ..</p>

    </div>;
};

export default ArtBoard;

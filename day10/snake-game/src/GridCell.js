
import React from 'react';

// display a single cell
const GridCell = ({ foodCell, snakeCell, cellSize, }) => {
    const classes = `grid-cell ${foodCell ? "grid-cell--food" : ""} ${snakeCell ? "grid-cell--snake" : ""}`;
    return (
        <div
            className={classes}
            style={{ height: cellSize + "px", width: cellSize + "px" }}
        />
    );
}

export default GridCell;
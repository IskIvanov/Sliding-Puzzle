import React from 'react';
import classNames from "classnames";
import { emptyCell } from './Puzzle';
import '../scss/cell.scss';

const Cell = ({ children, onClick, canMove }) => {

	const isEmpty = children === emptyCell;
	// Changing css classes based on the empty cell 
	const className = classNames({
	  cell: !isEmpty,
	  "empty-cell": isEmpty,
	  "no-move": !canMove
	});
	
	return (
	  <div className={className} onClick={onClick}>
		{isEmpty ? "" : children}
	  </div>
	);
};

export default Cell;
  
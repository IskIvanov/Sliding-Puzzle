import React,{ useState }  from 'react';
import Cell from './Cell';
import '../scss/puzzle.scss';

// TODO:
	// Counter that shows how many moves were made
	// When puzzle is resolved show Win Message
	// Responsive game size

const initialState = [1, 2, 3, 4, 5, 6, 7, 8, 0].sort( () => .5 - Math.random() );
export const emptyCell = 0;
const rows = 3;

//Function to check if a cell can move after user click
const canMove = (index, emptyCellIndex) => {
	return (
	  Math.abs(index - emptyCellIndex) === 1 ||
	  Math.abs(index - emptyCellIndex) === rows
	);
};


function Puzzle({value}) {

	const [puzzle, setPuzzle] = useState(initialState);
	const emptyCellIndex = puzzle.indexOf(0);

	// Counter counts every time when user moves a piece.
	// How to pass this to the parrent ?
	const [counter, setCounter] = useState(0);

	// Function that gets triggered every time when when the user
	// clicks a cell.

	const handleMove = indexToMove => {
		// Check if the cell is movable by checking if the clicked cell and the empty cell return true
		if (!canMove(indexToMove, emptyCellIndex)) {
			return;
		}

		// Update puzzle switch the cells by checking for an 
		// empty cell and updates the state with the new array generated
		const numberToMove = puzzle[indexToMove];
		const updatePuzzle = puzzle.map((number, index) =>{
			if(index === indexToMove){
				return 0;
			}else if (number === 0){
				return numberToMove;
			}
			return number;
		})
		setPuzzle(updatePuzzle);
		setCounter(counter + 1);

		console.log(value);	
	}

	return (
		<div> 
			<p className="flex counter"> 
			   Counter: {counter}
			</p>

			<div className="flex puzzle">
				{puzzle.map((cellValue, index) => {
					return (
						<div>
							<Cell
								key={cellValue}
								canMove={canMove(index, emptyCellIndex)}
								onClick={ ()=>handleMove(index) }
								>
								{ cellValue }
							</Cell>
						</div>
					)
				})}
			</div>
			<p className="flex shuffleButton">
			</p>
		</div>
	) 

}

  
export default Puzzle;
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'

class Square extends React.Component {
    render(){
	return (
	    <button className="square" onCLick={function() {console.log("click!"); }}>
		{this.props.value}
	    </button>
	);
    }
}

class Board extends React.Component {
    renderSquare(i){
	return <Square value={i} />;
    }

    render(){
	const status = "Next player: X";
	
	return(
	    <div>
		<div className="status">{status}</div>
		<div classname="board-row">
		    {this.renderSquare(0+0)}
		    {this.renderSquare(0+1)}
		    {this.renderSquare(0+2)}
		</div>
		<div classname="board-row">
		    {this.renderSquare(3+0)}
		    {this.renderSquare(3+1)}
		    {this.renderSquare(3+2)}
		</div>
		<div classname="board-row">
		    {this.renderSquare(6+0)}
		    {this.renderSquare(6+1)}
		    {this.renderSquare(6+2)}
		</div>
	    </div>
	);
    }
}

class Game extends React.Component {
    render(){
	return (
	    <div className="game">
		<div className="game-board">
		    <Board />
		</div>
		<div className="game-info">
		    <div>{/* status */}</div>
		    <ol>{/* TODO */}</ol>
		</div>
	    </div>
	);
    }
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Game />)

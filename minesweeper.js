document.addEventListener('DOMContentLoaded', startGame)

// Define your `board` object here!

var board = {
  cells : [
    {row : 0, col : 0, isMine : false, hidden: true, isMarked : false, surroundingMines : 0},
    {row : 1, col : 0, isMine : false, hidden: true, isMarked : false, surroundingMines : 0},
    //{row : 2, col : 0, isMine : false, hidden: true, isMarked : false, surroundingMines : 0},
    {row : 0, col : 1, isMine : false, hidden: true, isMarked : false, surroundingMines : 0},
    {row : 1, col : 1, isMine : true, hidden: true, isMarked : false, surroundingMines : 0},
    //{row : 2, col : 1, isMine : false, hidden: true, isMarked : false, surroundingMines : 0},
   // {row : 0, col : 2, isMine : false, hidden: true, isMarked : false, surroundingMines : 0},
   // {row : 1, col : 2, isMine : false, hidden: true, isMarked : false, surroundingMines : 0},
    //{row : 2, col : 2, isMine : false, hidden: true, isMarked : false, surroundingMines : 0},
  ]
} 

function startGame () {
  // Don't remove this function call: it makes the game work!
  var mineCount = 0;
  for(var i= 0; i<board.cells.length;i++) {
    mineCount = countSurroundingMines(board.cells[i]);
    board.cells[i].surroundingMines = mineCount;
  }
  lib.initBoard()
  document.addEventListener('click',checkForWin);
  document.addEventListener('contextmenu',checkForWin);
}

// Define this function to look for a win condition:
//
// 1. Are all of the cells that are NOT mines visible?
// 2. Are all of the mines marked?
function checkForWin () {
  var won = false;
  var totalMines = 0;
  var totalCells = board.cells.length;
  var totalShowing = 0;
  //check if each cell that isnt a isMine == false hidden == false;

  //get the number of mines total
  //check if the number of cells left that are hidden == mines left
  //if yes and after all checks then you've won

  //var nonMineShownCells = 0;
  for(var i = 0; i<board.cells.length;i++) {
    //if all isMine == true has isMarked == true
    if(board.cells[i].isMine) {
      totalMines++;
    }
    if(board.cells[i].hidden === false) {
      totalShowing++;
    }
    if(board.cells[i].isMine == true && board.cells[i].isMarked == true) {
      //console.log("we have made it one step before the innermost section")
      //console.log(totalShowing+ "totalShwoing")
      //console.log(totalMines+ "totalMines")
      if(totalShowing == (totalCells - totalMines)) {
        won = true;
      }
    }

  }

  if(won) {
    lib.displayMessage('You win!')
  }

  // You can use this function call to declare a winner (once you've
  // detected that they've won, that is!)
  //   lib.displayMessage('You win!')
}

// Define this function to count the number of mines around the cell
// (there could be as many as 8). You don't have to get the surrounding
// cells yourself! Just use `lib.getSurroundingCells`: 
//
//   var surrounding = lib.getSurroundingCells(cell.row, cell.col)
//
// It will return cell objects in an array. You should loop through 
// them, counting the number of times `cell.isMine` is true.
function countSurroundingMines (cell) {
  var count = 0;
  var surroundingMines = getSurroundingCells(cell.row,cell.col);

  for(var i = 0; i<surroundingMines.length;i++){
    if(surroundingMines[i].isMine) {
      count++;
    }
  }
  //console.log(count);
  return count;

  

}


const rl = require('readline');

const reader = rl.createInterface( {
  input: process.stdin,
  output: process.stdout
});

class toh {
  
  constructor() {
    this.board = [[1,2,3],[],[]];
    // play_game
  }
  
  
  
  
  won() {
    if ((this.board[1] === [1,2,3]) || (this.board[2] === [1,2,3])) {
      return true;
    }
    return false;
  }
  
  get_move() {
    reader.question('What tower do you want to take from?', function(from_tower) {
      reader.question('What tower do you want to place on?', function(to_tower) {
        let take_from = parseInt(from_tower);
        let put_on = parseInt(to_tower);
        
        if (valid_move(take_from, put_on)) {
          this.make_move(take_from, put_on);
        } else {
          console.log('Invalid Move');
        }
        
        this.display_board(this.board);
        
      });
    });
    
  }
  
  valid_move(from, to) {
    if ([1,2,3].includes(from) && [1,2,3].includes(to) && (from !== to) && (this.board[from] !== []) ) 
      { if (this.board[to] === []) { return true; } 
        else 
          { if (this.board[to][0] < this.board[from][0]) 
            { return true; }
          }
      }
    
    return false;
  }
  
  displayBoard(board) {
    board.forEach((el) => {
      console.log(el + '\n');
    });
  }
  
  make_move(from, to) {
    this.board[to].unshift(this.board[from].shift);
  }
  
  playGame() {
    displayBoard(this.board);
    while (!this.won) {
      let move = this.get_move; 
      this.make_move(move);
    }
    console.log('You\'ve Won, go get yourself a soda pop') ; 
  }
} 

const towerGame = new toh();
towerGame.playGame();
 
// 
//   get move
//     reader.quesion( take from this pile, func(res1)
//     { reader.question ( where you want to place ), func(res2) {
//       take_from = res1 
//       place_on = res2 
//       validation ......
//     }
// 
//   make move 
//     peice = array[take_from].shift 
//     array{place_one}.push(piece)
//       console.log(board)
// 
//     }
// 
//   )
// 
// }
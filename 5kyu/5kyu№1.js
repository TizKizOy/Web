function isSolved(board) {
    for(let i=0;i<board.length;i++)
       {
          if(board[i][0] !== 0 && board[i][0] === board[i][1] && board[i][0] === board[i][2])
              return board[i][0];
  
          for(let j=0;j<board.length;j++)
              {
                 if(board[0][j] !== 0 && board[0][j] === board[1][j] && board[0][j] === board[2][j])
                     return board[0][j];
              }
       }
          
       if(board[0][0] !== 0 && board[0][0] === board[1][1] && board[0][0] === board[2][2])
          return board[0][0]; 
       else if(board[0][2] !== 0 && board[0][2] === board[1][1] && board[0][2] === board[2][0])
          return board[0][2];
       
       let countZero = 0;
       for(let i=0;i<board.length;i++)
       {
          for(let j=0;j<board[0].length;j++)
          {
              if(board[i][j] === 0)
                  countZero++;
          }
       }
   
       if(countZero == 0)
          return 0;
       else
          return -1;
  }
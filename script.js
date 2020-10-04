function game()
{
    let playerPoints = 0;
    let compPoints = 0;

    const result = document.querySelector('.result');

    function compChoice()
    {
        let index = Math.floor(Math.random() * 3);
         let choice = ["rock","paper", "scissor"];

         return choice[index];
    }

    let computerSelection = compChoice();


    function oneRound(playerOne, playerTwo)
    {
        let result = document.getElementById('outcome');

       if(playerOne  == playerTwo)
       {
            result.innerHTML = "It's a Tie";
       }
       else if(playerOne == 'paper')
       {
           if(playerTwo == 'rock')
           {
               playerPoints++;
               updateScore();
               result.innerHTML = "You: Paper    Computer: Rock";
           }
           else
           {
               compPoints++;
               updateScore();
               result.innerHTML = "You: Paper    Computer: Scissors";
           }
       }
       else if(playerOne == 'rock')
       {
           if(playerTwo == 'scissor')
           {
               playerPoints++;
               updateScore();
               result.innerHTML = "You: Rock    Computer: Scissors";
           }
           else
           {
               compPoints++;
               updateScore();
               result.innerHTML = "You: Rock    Computer: Paper";
           }
       }
       else if(playerOne == 'scissor')
       {
           if(playerTwo == 'paper')
           {
               playerPoints++;
               updateScore();
               result.innerHTML = "You: Scissor    Computer: Paper";
           }
           else
           {
               compPoints++;
               updateScore();
               result.innerHTML = "You: Scissor    Computer: Rock";
           }
       }
      
       
}

    
    

    function updateScore()
    {
        document.querySelector('#Pscore').textContent = playerPoints;
        document.querySelector('#Cscore').textContent = compPoints;

        const newDiv = document.createElement('div');
        const content = document.createTextNode('Winner');

        newDiv.appendChild(content);
        const currentDiv = document.querySelector('.score');

        
    }
 

 const rock = document.querySelector('.choices #rock');
rock.addEventListener('click', function(){
        oneRound('rock', compChoice());
        
});

const paper = document.querySelector('.choices #paper');
paper.addEventListener('click', function(){
        oneRound('paper', compChoice());
        
});

const scissor = document.querySelector('.choices #scissor');
scissor.addEventListener('click', function(){
        oneRound('scissor', compChoice());
        
});
}





game();

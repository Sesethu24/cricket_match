module.exports = function CricketScoreKeeper() {

    let wickets = 0;
    let currentScore = 0;

    function extractScore(over) {

    for (let i = 0; i < over.length; i++) {
            let ball = over[i];

          if(ball === "w"){
                wickets += 1;
            }
             if(ball >=1 && ball <=6 && ball !==5){
                currentScore += Number(ball);
            }
         }
    }

    function remainingWickets(){
      return 10 - wickets;
    }
    function checkWickets(){

      if(wickets >= 10){

          return false;
      }
      return true;
    }
    function getCurrentScore() {

        return currentScore;
    }

     return {
        extractScore,
        getCurrentScore,
        remainingWickets,
        checkWickets
    }
}
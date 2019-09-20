module.exports = function cricket_match() {

    let wickets = 0;
    let currentScore = 0;

    function extractScore(over) {
     
      var overs = over.split('')
      
      for (let i = 0; i < overs.length; i++) {
            let ball = overs[i];

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
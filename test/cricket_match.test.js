const assert = require('assert');
const cricket_match = require('../cricket_match');

describe('cricket_match', function(){

    const match = cricket_match();

     it('should return the right score for an over', function(){

      match.extractScore("--6-1w");
      assert.deepEqual(7, match.getCurrentScore());
     });

     it('should return true if theres wickets available ', function(){

        
            match.extractScore("wwwwww");
     

        assert.deepEqual(true, match.checkWickets());

     });
     it('should return the right total for available wickets ', function(){

        
            match.remainingWickets("w");
     
       assert.deepEqual(1, match.checkWickets());

     });
     
});
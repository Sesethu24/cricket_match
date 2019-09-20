const assert = require('assert');
const cricket_match = require('../cricket_match');

describe('cricket_match', function(){

    const match = cricket_match();

     it('should return the right score for an over', function(){

        let overs = ["--6-1w"]

        for (let i = 0; i < overs.length; i++) {
            var over = overs[i];
            match.extractScore(over);
     }

        assert.deepEqual(7, match.getCurrentScore());
     });


     it('should return the right score for 2 overs', function(){

        let overs = ["--6-1w","12345-"]

        for (let i = 0; i < overs.length; i++) {
            var over = overs[i];
            match.extractScore(over);
     }

        assert.deepEqual(29, match.getCurrentScore());

     });
     it('should return true if theres wickets available ', function(){

        let overs = ["wwwwww"]

        for (let i = 0; i < overs.length; i++) {
            var over = overs[i];
            match.extractScore(over);
     }

        assert.deepEqual(true, match.checkWickets());

     });
     it('should return the right total for available wickets ', function(){

        let wicket = ["w"]

        for (let i = 0; i < wicket.length; i++) {
            var over = wicket[i];
            match.remainingWickets(over);
     }
       assert.deepEqual(1, match.checkWickets());

     });
     
});
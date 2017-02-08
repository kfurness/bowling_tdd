var {test} = require('ava');

test('a game of all zeros should return zero', t => {
  var expected = 0;

  var game = [[0, 0], [0,0], [0,0], [0,0], [0,0], [0,0], [0,0], [0,0], [0,0], [0,0]];
  var actual = doodle.scoreGame(game);

  t.is(actual, expected);
});

test('a game of every other bowl of one should return ten', t => {
  var expected = 10;

  var game = [[0, 1], [0,1], [0,1], [0,1], [0,1], [0,1], [0,1], [0,1], [0,1], [0,1]];
  var actual = doodle.scoreGame(game);

  t.is(actual, expected);
});

test('a game of all ones should return twenty', t => {
  var expected = 20;

  var game = [[1, 1], [1,1], [1,1], [1,1], [1,1], [1,1], [1,1], [1,1], [1,1], [1,1]];
  var actual = doodle.scoreGame(game);

  t.is(actual, expected);
});

test('a game of all twos should return forty', t => {
  var expected = 40;

  var game = [[2, 2], [2,2], [2,2], [2,2], [2,2], [2,2], [2,2], [2,2], [2,2], [2,2]];
  var actual = doodle.scoreGame(game);

  t.is(actual, expected);
});

test('a game with the first frame is a spare and all other bowls are one returns ', t => {
  var expected = 30;

  var game = [[5, 5], [1,1], [1,1], [1,1], [1,1], [1,1], [1,1], [1,1], [1,1], [1,1]];
  var actual = doodle.scoreGame(game);

  t.is(actual, expected);
});

test('a game with the first frame is a spare and first roll is 4 and all other bowls are one returns ', t => {
  var expected = 30;

  var game = [[4, 6], [1,1], [1,1], [1,1], [1,1], [1,1], [1,1], [1,1], [1,1], [1,1]];
  var actual = doodle.scoreGame(game);

  t.is(actual, expected);
});

test('a game with the first two frames scored as spares returns  50', t => {
  var expected = 50;

  var game = [[8, 2], [5,5], [1,1], [1,1], [1,1], [1,1], [1,1], [1,1], [1,1], [1,1]];
  var actual = doodle.scoreGame(game);

  t.is(actual, expected);
});

const doodle = {
  scoreGame(game) {
      let normalized = game.map((frame) => {
        let score = frame[0] + frame[1];
        return score === 10 ? '/' : score;
      });

      normalized.reverse();

      return normalized.reduce((total, currentFrame, currentFrameIndex, arr) => {
        if(currentFrame === '/'){
          var spareScore = 10 + arr[currentFrameIndex - 1];
          arr[currentFrameIndex] = spareScore;
          return total + spareScore;
        }

        return total + currentFrame;
      }, 0);
  }
}

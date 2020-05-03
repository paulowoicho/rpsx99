// All code should be written in this file.
let playerOneMoveOneType;
let playerOneMoveTwoType;
let playerOneMoveThreeType;

let playerTwoMoveOneType;
let playerTwoMoveTwoType;
let playerTwoMoveThreeType;

let playerOneMoveOneValue;
let playerOneMoveTwoValue;
let playerOneMoveThreeValue;

let playerTwoMoveOneValue;
let playerTwoMoveTwoValue;
let playerTwoMoveThreeValue;

let playerOneWins = 0;
let playerTwoWins = 0;

//helper function to check if a move is valid
function isValidMoveType(move) {
    if (move === 'rock' || move === 'paper' || move === 'scissors') {
        return true;
    } else {
        return false;
    }
}

function setPlayerMoves(player, moveOneType, moveOneValue, moveTwoType, moveTwoValue, moveThreeType, moveThreeValue) {
    if (!moveOneType || !moveTwoType || !moveThreeType || !moveOneValue || !moveTwoValue || !moveThreeValue) {
        return;
    }

    if (!isValidMoveType(moveOneType) || !isValidMoveType(moveTwoType) || !isValidMoveType(moveThreeType)) {
        return;
    }

    if (moveOneValue < 1 || moveTwoValue < 1 || moveThreeValue < 1) {
        return;
    }

    if (moveOneValue > 99 || moveTwoValue > 99 || moveThreeValue > 99) {
        return;
    }

    if (moveOneValue + moveTwoValue + moveThreeValue > 99) {
        return;
    }

    switch (player) {
        case 'Player One':
            playerOneMoveOneType = moveOneType;
            playerOneMoveTwoType = moveTwoType;
            playerOneMoveThreeType = moveThreeType;

            playerOneMoveOneValue = moveOneValue;
            playerOneMoveTwoValue = moveTwoValue;
            playerOneMoveThreeValue = moveThreeValue;

        case 'Player Two':
            playerTwoMoveOneType = moveOneType;
            playerTwoMoveTwoType = moveTwoType;
            playerTwoMoveThreeType = moveThreeType;

            playerTwoMoveOneValue = moveOneValue;
            playerTwoMoveTwoValue = moveTwoValue;
            playerTwoMoveThreeValue = moveThreeValue;
    }
}

//helper function
function getMoveWinner(playerOneMoveType, playerOneMoveValue, playerTwoMoveType, playerTwoMoveValue) {
    if (!playerOneMoveType || !playerOneMoveValue || !playerTwoMoveType || !playerTwoMoveValue) {
        return null;
    }

    if (playerOneMoveType === playerTwoMoveType) {

        if (playerOneMoveValue > playerTwoMoveValue) {
            return 'Player One';
        } else if (playerOneMoveValue < playerTwoMoveValue) {
            return 'Player Two';
        } else {
            return 'Tie';
        }
    }

    switch (playerOneMoveType) {
        case 'rock':
            if (playerTwoMoveType === 'paper') {
                return 'Player Two';
            } else {
                return 'Player One'
            }
        case 'paper':
            if (playerTwoMoveType === 'scissors') {
                return 'Player Two';
            } else {
                return 'Player One'
            }
        case 'scissors':
            if (playerTwoMoveType === 'rock') {
                return 'Player Two';
            } else {
                return 'Player One'
            }
    }
}

function getRoundWinner(round) {
    let winner;
    switch (round) {
        case 1:
            return getMoveWinner(playerOneMoveOneType, playerOneMoveOneValue, playerTwoMoveOneType, playerTwoMoveOneValue);
        case 2:
            return getMoveWinner(playerOneMoveTwoType, playerOneMoveTwoValue, playerTwoMoveTwoType, playerTwoMoveTwoValue);
        case 3:
            return getMoveWinner(playerOneMoveThreeType, playerOneMoveThreeValue, playerTwoMoveThreeType, playerTwoMoveThreeValue);
        default:
            return null;

    }
}

function getGameWinner() {
    if (!playerOneMoveOneType || !playerOneMoveTwoType || !playerOneMoveThreeType || !playerOneMoveOneValue || !playerOneMoveTwoValue || !playerOneMoveThreeValue ||
        !playerTwoMoveOneType || !playerTwoMoveTwoType || !playerTwoMoveThreeType || !playerTwoMoveOneValue || !playerTwoMoveTwoValue || !playerTwoMoveThreeValue) {
        return null;
    }

    playerOneWins = 0
    playerTwoWins = 0

    const roundOneWinner = getRoundWinner(1);
    const roundTwoWinner = getRoundWinner(2);
    const roundThreeWinner = getRoundWinner(3);

    winComputation(roundOneWinner);
    winComputation(roundTwoWinner);
    winComputation(roundThreeWinner);

    if (playerOneWins > playerTwoWins) {
        return 'Player One';
    } else if (playerOneWins < playerTwoWins) {
        return 'Player Two';
    } else {
        return 'Tie'
    }

}

function winComputation(winner) {
    if (winner === 'Player One') {
        playerOneWins = (playerOneWins + 1) || 1
    } else if (winner == 'Player Two') {
        playerTwoWins = (playerTwoWins + 1) || 1
    }
}

function assignMove(number){
    switch(number){
        case 0:
            return 'rock'
        case 1:
            return 'paper'
        case 2:
            return 'scissors'
    }
}

function setComputerMoves() {
    playerTwoMoveOneType = assignMove(Math.floor(Math.random() * 3));
    playerTwoMoveTwoType = assignMove( Math.floor(Math.random() * 3));
    playerTwoMoveThreeType = assignMove( Math.floor(Math.random() * 3));

    playerTwoMoveOneValue =  Math.floor(Math.random() * 100);
    playerTwoMoveTwoValue = Math.floor(Math.random() * (100 - playerTwoMoveOneValue));
    playerTwoMoveThreeValue = 99 - (playerTwoMoveOneValue + playerTwoMoveTwoValue);

}
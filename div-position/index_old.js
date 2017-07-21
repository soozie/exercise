var userChoice = prompt('Do you choose rock, paper or scissors?');
console.log('User: ' + userChoice);


var computerChoice = Math.random();
if (computerChoice < 0.26) {
	computerChoice = 'rock';
} else if(computerChoice <= 0.51) {
	computerChoice = 'paper';
} else if (computerChoice <= 0.76) {
	computerChoice = 'scissors';
} else {
    computerChoice = 'rope';
}
console.log('Computer: ' + computerChoice);

function compare(choice1, choice2) {
    if (choice1 === choice2) {
        return 'play again!';
    } else if (choice1 === 'rock') {
        if (choice2 === 'scissors') {
            return 'rock wins';
        } else {
            return 'paper wins';
        }
    } else if (choice1 === 'paper') {
        if (choice2 === 'rock') {
            return 'paper wins';
        } else {
            return 'scissors wins';
        }
    } else if (choice1 === 'scissors') {
        if (choice2 === 'paper') {
            return 'scissors wins';
        } else {
            return 'rock wins';
        }
    } else if (choice1 !== 'scissors' && choice1 !== 'paper' && choice1 !== 'rock' && choice1 !== 'rope') {
        return 'invalid choice';
    } else if (choice1 === 'rope' || choice2 === 'rope') {
        return 'rope wins over everything';
    }
}

compare(userChoice, computerChoice);

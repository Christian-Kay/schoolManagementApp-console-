const prompt = require('prompt-sync')();
const {signUpSelect, signIn} = require('./main.js')


console.log('--------------WELCOME TO SCHOOL MANAGEMENT----------------')

welcomeUser();
function welcomeUser() {
    let input = prompt('Enter 1 to Sign-In or 2 to Sign-Up: ');
    if (input == 1) {
        console.clear()
        signIn();
    } else if (input == 2) {
        console.clear()
        signUpSelect();
    } else {
        console.log('Please enter a valid input');
        welcomeUser()
    }
}
  
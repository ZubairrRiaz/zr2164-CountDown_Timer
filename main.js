import inquirer from 'inquirer';
let answer = await inquirer.prompt({
    name: 'num1',
    type: 'number',
    message: 'Enter the number for countDown.',
});
function inputnumber() {
    let countNumber = answer.num1;
    console.log(countNumber);
    answer.num1--;
}
let updateEverySecond = setInterval(inputnumber, 1000);
function stopTimer() {
    clearInterval(updateEverySecond);
    console.log(1);
    console.log('Finish!');
}
setTimeout(stopTimer, answer.num1 * 1000);

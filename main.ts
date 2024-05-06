/* 
Name :  Waheed Ahmed
Day : Saturday (07:00 - 10:00)
Roll No. 000208505
*/

import chalk from "chalk";  // We Import for Colourful Text
import inquirer from "inquirer"; // We import for Input 

// Class of Wrrior
class player {
    name: string;
    power: number = 100;
    constructor (name: string) {
        this.name = name;
    }
    fuelDecrease(){
        let power = this.power - 25;
        this.power = power;
    }
    fuelIncrease(){
        this.power = 100;
    }
}
// Class of Enemy
class myEnemy {
    name: string;
    power: number = 100;
    constructor (name: string) {
        this.name = name;
    }
    fuelDecrease(){ 
        let power = this.power - 25;
        this.power = power;
    }
    fuelIncrease(){
        this.power = 100;
    }
}
// Input of Warrior Player
let warrior = await inquirer.prompt ([
{
    name: "GameOfWarriors",
    message: "Enter Your name",
    type: "input",
}
]);

// Input for Enemy Player
let opponent = await inquirer.prompt ([
    {
        name: "EnemyName",
        message: "Select Your Choice",
        type: "list",
        choices: ["Nafs", "Greed", "Takabur"] // Most Powerfull Enemies of Human
    }
    ]);

// Collect the information of Warrior and Enemy in Player1 and Player2
    let player1 = new player(warrior.GameOfWarriors)
    let player2 = new myEnemy(opponent.EnemyName)

do{
    if (opponent.EnemyName == "Nafs"){
        
        console.log(`${chalk.bold.green(player1.name)} v/s ${chalk.bold.red(player2.name)}`)
        let ask = await inquirer.prompt([
        {
            name: "task",
            message: "Select Your Choice",
            type: "list",
            choices: ["Attack", "Drink", "Run"], // what is your Option
        },
    ]);
    if (ask.task == "Attack"){
        // Generate the Random Numbers for 1 and 0
        let num:number = Math.floor(Math.random()*2);
        if (num > 0) { // Check the Conditions
            player1.fuelDecrease();
            
            console.log(chalk.bold.green`${player1.name} and Power = ${player1.power}`);
            console.log(chalk.bold.red`${player2.name} and Power = ${player2.power}`);
            if (player1.power == 0){
                console.log(chalk.bold.red`${player2.name} You WIN, ${player1.name}, Better Luck Next Time`);
                process.exit();
            }
                
        }
        if (num <= 0) { // Check the Conditions
            player2.fuelDecrease()
            
            console.log(chalk.bold.green`${player1.name} and Power = ${player1.power}`);
            console.log(chalk.bold.red`${player2.name} and Power = ${player2.power}`);
            if (player2.power == 0){
                console.log(chalk.bold.red`${player1.name} You WIN, ${player2.name}, Better Luck Next Time`);
                process.exit();
            }
        }
       
    };
    if (ask.task == "Drink"){
        player1.fuelIncrease();
        console.log(chalk.bold.green`${player1.name} and Power = ${player1.power}`);
        // process.exit();
    };
    if (ask.task == "Run"){
        console.log(chalk.bold.underline.italic ("You Loose, Try Again after practice"));
        process.exit();
    };
}
// Greed
if (opponent.EnemyName == "Greed"){

    console.log(`${chalk.bold.green(player1.name)} v/s ${chalk.bold.red(player2.name)}`)
    let ask = await inquirer.prompt([
    {
        name: "task",
        message: "Select Your Choice",
        type: "list",
        choices: ["Attack", "Drink", "Run"], // what is your Option
    },
]);
if (ask.task == "Attack"){
    // Generate the Random Numbers for 1 and 0
    let num:number = Math.floor(Math.random()*2);
    if (num > 0) { // Check the Conditions
        player1.fuelDecrease();

        console.log(chalk.bold.green`${player1.name} and Power = ${player1.power}`);
        console.log(chalk.bold.red`${player2.name} and Power = ${player2.power}`);
        if (player1.power == 0){
            console.log(chalk.bold.red`${player2.name} You WIN, ${player1.name}, Better Luck Next Time`);
            process.exit();
        }
            
    }
    if (num <= 0) { // Check the Conditions
        player2.fuelDecrease()
        // console.log(`${player2.power}`)
        console.log(chalk.bold.green`${player1.name} and Power = ${player1.power}`);
        console.log(chalk.bold.red`${player2.name} and Power = ${player2.power}`);
        if (player2.power == 0){
            console.log(chalk.bold.red`${player1.name} You WIN, ${player2.name}, Better Luck Next Time`);
            process.exit();
        }
    }

};
if (ask.task == "Drink"){
    player1.fuelIncrease();
    console.log(chalk.bold.green`${player1.name} and Power = ${player1.power}`);
    // process.exit();
};
if (ask.task == "Run"){
    console.log(chalk.bold.underline.italic ("You Loose, Try Again after practice"));
    process.exit();
};
}
// Takabur

if (opponent.EnemyName == "Takabur"){

    console.log(`${chalk.bold.green(player1.name)} v/s ${chalk.bold.red(player2.name)}`)
    let ask = await inquirer.prompt([
    {
        name: "task",
        message: "Select Your Choice",
        type: "list",
        choices: ["Attack", "Drink", "Run"], // what is your Option
    },
]);
if (ask.task == "Attack"){
    // Generate the Random Numbers for 1 and 0
    let num:number = Math.floor(Math.random()*2);
    if (num > 0) { // Check the Conditions
        player1.fuelDecrease();
        // console.log(`${player1.power}`)
        console.log(chalk.bold.green`${player1.name} and Power = ${player1.power}`);
        console.log(chalk.bold.red`${player2.name} and Power = ${player2.power}`);
        if (player1.power == 0){
            console.log(chalk.bold.red`${player2.name} You WIN, ${player1.name}, Better Luck Next Time`);
            process.exit();
        }
    }
    if (num <= 0) { // Check the Conditions
        player2.fuelDecrease()
        
        console.log(chalk.bold.green`${player1.name} and Power = ${player1.power}`);
        console.log(chalk.bold.red`${player2.name} and Power = ${player2.power}`);
        if (player2.power == 0){
            console.log(chalk.bold.red`${player1.name} You WIN, ${player2.name}, Better Luck Next Time`);
            process.exit();
        }
    }

};
if (ask.task == "Drink"){
    player1.fuelIncrease();
    console.log(chalk.bold.green`${player1.name} and Power = ${player1.power}`);
    // process.exit();
};
if (ask.task == "Run"){
    console.log(chalk.bold.underline.italic ("You Loose, Try Again after practice"));
    process.exit();
};
}

}
while (true)
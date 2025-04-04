const fs = require('fs');
const chalk = require('chalk');

const name = process.argv[2];
const age = process.argv[3];
const city = process.argv[4];
const profession = process.argv[5];
const flag = process.argv[6];

if(!name || !age || !city || !profession){
    console.log(chalk.red("Missing inputs!"));
    Console.log(chalk.yellow("Day1Project.js, <name> <age> <city> <profession></profession> [--save]"));
    process.exit(1);
}

const createdAt = new  Date().toLocaleString();

const profile = {
    name: name,
    age: age,
    city: city,
    profession: profession,
    createdAt: createdAt
};


if (flag === '--save') {
    fs.writeFileSync('profile.txt', JSON.stringify(profile, null, 2)); 
    console.log(chalk.green('Profile saved to profile.txt'));
  } else {
    console.log(chalk.blue('Profile:'), profile);
  }


  console.log(chalk.gray("Directory:"), __dirname);
  console.log(chalk.gray("File     :" ), __filename);
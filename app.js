const figlet = require("figlet");
const commander = require("commander");
const inquirer = require("inquirer");
const fs = require("fs");
const cmd = require("node-cmd");
const path = require("path");
var shell = require('shelljs');
const welcomeMessage = "This nice page is generated using LazzyCode 😴😴"
//Style welcoming message ✌😁

figlet('Lazzy Coding XD ', function (err, data) {
    if (err) {
        console.log('Something went wrong...');
        console.dir(err);
        return;
    }
    console.log(data)
    inquirer.prompt([{
            type: "String",
            message: "Project type .. ?",
            name: "type",
            default: "webdesign",
        },
        {
            type: "String",
            message: "Project name .. ?",
            name: "proName",
            default: "projectName",
        }
    ]).then(answers => {
        if (answers.type === "webdesign") {
            // folder should be exist [css ,img ,fonts ,js]
            fs.mkdir(answers.proName, () => {
                fs.appendFileSync(`${answers.proName}/index.html`,
                    `<!---${welcomeMessage}-->
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>${answers.proName}</title>
    </head>
        <body>
        </body>
</html>`)
                fs.mkdir(`${answers.proName}/css`, () => {
                    fs.appendFileSync(`${answers.proName}/css/style.css`, `/*${welcomeMessage}*/`);
                })
                fs.mkdirSync(`${answers.proName}/js`, () => {
                    fs.appendFile(`${answers.proName}/js/custom.js`, `//${welcomeMessage}`)
                })
                fs.mkdirSync(`${answers.proName}/img`);
                fs.mkdirSync(`${answers.proName}/fonts`);
            })
        } 
        // I'm sorry Lazzy app thier's very hard bug 
        // but i swear I am not gonna forget you ever 💔
      /*  else if (answers.type === "nodejs") {
            fs.mkdir(answers.proName, () => {
                fs.appendFileSync(`${answers.proName}/app.js`, `//${welcomeMessage}`);
                inquirer.prompt([{
                    type: "input",
                    message: "NPM modules you are gonna need ",
                    name: "modules",
                }]).then(modules => {
                    // console.log(answers.proName)
                    // cmd.get(`cd ${__dirname} /${answers.proName}`, (err, data, stderr) => {
                    // It should excute this "npm init -y" in this path
                    shell.cd(`${answers.proName}`)
                    cmd.get(` 
                         ${answers.proName}/npm init -y`, (err, data, stderr) => {
                        if (err) console.log(err)
                        if (stderr) console.log(stderr)
                        else {
                            console.log(__dirname)
                            console.log(data)
                        }
                    });
                    // })
                    // console.log(__dirname)
                    // cmd.run(`cd ${answers.proName}`);
                })
            });
        }*/
    });
});
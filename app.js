const figlet = require("figlet");
//const commander = require("commander");
const inquirer = require("inquirer");
const fs = require("fs");
const cmd = require("node-cmd");
const path = require("path");
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
                fs.appendFileSync(`${answers.proName}/index.html`, `<!---${welcomeMessage}-->`)
                fs.mkdir(`${answers.proName}/css`, () => {
                    fs.appendFileSync(`${answers.proName}/css/style.css`, `/*${welcomeMessage}*/`);
                })
                fs.mkdirSync(`${answers.proName}/js`, () => {
                    fs.appendFile(`${answers.proName}/js/custom.js`, `//${welcomeMessage}`)
                })
                fs.mkdirSync(`${answers.proName}/img`);
                fs.mkdirSync(`${answers.proName}/fonts`);
            })
        } else if (answers.type === "nodejs") {
            fs.mkdir(answers.proName, () => {
                fs.appendFileSync(`${answers.proName}/app.js`, `//${welcomeMessage}`);
                inquirer.prompt([{
                    type: "input",
                    message: "NPM modules you are gonna need ",
                    name: "modules",
                }]).then(modules => {
                    cmd.run(`cd ${answers.proName}`) // not excuted :( 
                    console.log(__dirname);
                    // It should excute this "npm init -y" in this path
                    cmd.get(`npm init  -y`, (err, data, stderr) => {
                        if (err) return err
                        if (stderr) return stderr
                        else console.log(data)
                    });
                    // console.log(__dirname)
                    // cmd.run(`cd ${answers.proName}`);
                })
            });
        }
    });
});
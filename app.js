const figlet = require("figlet");
const commander = require("commander");
const inquirer = require("inquirer");
const fs = require("fs");
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
            default: "webDesign",
        },
        {
            type: "String",
            message: "Project name .. ?",
            name: "proName",
            default: "projectName",
        }
    ]).then(answers => {
        if (answers.type === "webDesign") {
            // folder should be exist [css ,img ,fonts ,js]
            fs.mkdir(answers.proName,()=>{
                fs.appendFile(`${answers.proName}/index.html`, `<!---${welcomeMessage}-->`)
                fs.mkdir(`${answers.proName}/css`, () => {
                    fs.appendFile(`${answers.proName}/css/style.css`, `/*${welcomeMessage}*/`);
                })
                fs.mkdir(`${answers.proName}/js`, () => {
                    fs.appendFile(`${answers.proName}/js/custom.js`, `//${welcomeMessage}`)
                })
                fs.mkdir(`${answers.proName}/img`);
                fs.mkdir(`${answers.proName}/fonts`);
            })
        }
    });
});
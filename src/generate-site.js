const generateTeam = (team) => {
    console.log (team);
    const html = [];

    const generateManager = manager => {
        console.log(manager);
        let managerHtml = `
        <div class="card" style ="width: 20rem;">
        ${manager.name} </br>
        <i class ="fas fa-mug-hot"></i>Manager</dive>
        <ul class="list-group list-group-flush">
        <li class="list-group-item">ID: ${manager.id}</li>
        <li class="list-group-item"> Email: <span id ="email"><a href="mailto:${manager.email}">${manager.email}</a></span></li>
        <li class="list-group-item">Office Number: ${manager.officePhone}</li>
        </ul>
        </div>
        `;
        html.push (managerHtml);
    }

    const generateEngineer = engineer => {
        console.log (engineer);
        let engineerHtml=`
        <div class="card" style ="width: 20rem;">
        ${engineer.name} </br>
        <i class ="fas fa-glasses"></i>Engineer</dive>
        <ul class="list-group list-group-flush">
        <li class="list-group-item">ID: ${engineer.id}</li>
        <li class="list-group-item"> Email: <span id ="email"><a href="mailto:${engineer.email}">${engineer.email}</a></span></li>
        <li class="list-group-item">Github Username: <a target="_blank" href="https://github.com/${engineer.githubUsername}">${engineer.githubUsername}</a></li>
        </ul>
        </div>
        `;
        html.push (engineerHtml);
    }
  
    const generateEngineer = intern => {
        console.log (intern);
        let internHtml=`
        <div class="card" style ="width: 20rem;">
        ${intern.name} </br>
        <i class ="fas fa-graduate"></i>Intern</dive>
        <ul class="list-group list-group-flush">
        <li class="list-group-item">ID: ${intern.id}</li>
        <li class="list-group-item"> Email: <span id ="email"><a href="mailto:${intern.email}">${intern.email}</a></span></li>
        <li class="list-group-item">School: ${intern.school}</li>
        </ul>
        </div>
        `;
        html.push (internHtml);
    }

    for (let i= 0; i < team.length; i++){
        if(team[i].getRole() === "Manager"){
            generateManager(team[i]);
        }
        if(team[i].getRole() === "Engineer"){
            generateEngineer(team[i]);
        }
        if(team[i].getRole() === "Intern"){
            generateIntern(team[i]);
        }
    }
    
    return html.join ('');
}


module.exports = team => {
        return `
 
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>TeamProfile </title>
    <link rel="stylesheet" href="https:/stackpath.bootstrapcdn.com/bootstrap.4.5.0/css/bootstrap.min.css"
        integrity="sha384-50oBHUEmvpQ+1lW4y57PTFmhCaXp0ML5d60M7uH2+nqUivzIebhndOJK28anvf" crossorgin="anonymous" />
        <script src="https://kit.fontawesome.com/1e0a13a89f.js" crossorigin="anonymous"></script>
        <link rel="stylesheet" href="../dist/style.css">
</head>
<body>
    
</body>
        <header>
            <h1>My Team</h1>
        </header>
        <main>${generateTeam(team)}</main>
</body>

</html>
`;
    }

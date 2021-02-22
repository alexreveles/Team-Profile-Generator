const buildTeam = teamArr => {
    const BuildManager = manager  => {
        return `
        <div class="card col employee-card" style="width: 18rem;">
        <div class="card-body card-header">
        <h2 class="card-title">${manager.getName()}</h2>
        <h3 class="card-title"><h3><i class="fas fa-mug-hot"></i>${manager.getRole()}</h3>
        </div>
        <div class = "card-body">
        <ul class ="list-group list-group-flush">
        <li class ="list-group-item">Employee ID: ${manager.getId()}</li>
        <li class ="list-group-item">Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></li>
        <li class ="list-group-item">Office Number: ${manager.getOfficeNumber()}</li>
        </ul>
        </div>
        </div>
        `;
    } ;

    const BuildEngineer = engineer => {
        return `
        <div class="card col employee-card" style="width: 18rem;">
        <div class="card-body card-header">
        <h2 class="card-title">${engineer.getName()}</h2>
        <h3 class="card-title"><h3><i class="fas fa-glasses"></i>${engineer.getRole()}</h3>
        </div>
        <div class = "card-body">
        <ul class ="list-group list-group-flush">
        <li class ="list-group-item">Employee ID: ${engineer.getId()}</li>
        <li class ="list-group-item">Email: <a href = "mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></li>
        <li class ="list-group-item">Github: <a href="https:github.com">${engineer.getGithub()}</a></li>
        </ul>
        </div>
        </div>
        `;
       
    };

    const BuildIntern = intern => {
        console.log(intern)
        return `
        <div class="card col employee-card" style="width: 18rem;">
        <div class="card-body card-header">
        <h2 class="card-title">${intern.getName()}</h2>
        <h3 class="card-title"><i class="fas fa-user-graduate"></i>${intern.getRole()}</h3>
        </div>
        <div class = "card-body">
        <ul class ="list-group list-group-flush">
        <li class ="list-group-item">Employee ID: ${intern.getId()}</li>
        <li class ="list-group-item">Email: <a href = "mailto:${intern.getEmail()}">${intern.getEmail()}</a></li>
        <li class ="list-group-item">School: ${intern.getSchool()}</li>
        </ul>
        </div>
        </div>
     `;
    };


   

    const html = [];
// ------------------------------------------ get Name  ------------------------------------------- //
    html.push(teamArr.filter(Employee => Employee.getRole() == 'Manager')
    .map(manager=> BuildManager(manager)))

    html.push(teamArr.filter(Employee => Employee.getRole() == 'Intern')
    .map(intern=> BuildIntern(intern)))

    html.push(teamArr.filter(Employee => Employee.getRole() == 'Engineer')
    .map(engineer=> BuildEngineer(engineer)))


    console.log(html)
    return html.join("")
}

module.exports = team => {
    console.log(team)
    return `
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>My Team</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <link rel="stylesheet" href="style.css">
    <script src="https://kit.fontawesome.com/c502137733.js"></script>
</head>
<body>
    <div class="container-fluid">
        <div class="row">
            <div class="col-12 jumbotron mb-3 team-heading">
                <h1 class="text-center">My Team</h1>
            </div>
        </div>
    </div>
    <div class="container">
        <div class="row">
            <div class="team-area col-12 d-flex justify-content-center">
                ${buildTeam(team)}
            </div>
        </div>
    </div>
</body>
</html>
    `;
}

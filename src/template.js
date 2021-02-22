const buildTeam = teamArr => {
    const BuildManager = manager  => {
        return `
            <div class="card" style="width: 18rem;">
            <div class="card-body">
              <h5 class="card-title">${manager.getName()}</h5>
              
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">${manager.getRole()}</li>
              <li class="list-group-item">${manager.getId()}</li>
               
              <li class="list-group-item">Email:<a href="#" class="card-link">Email:${intern.getEmail()}</a> </li>
              <li class="list-group-item">${manager.getOfficeNumber()}</li>
            </ul>
            </div>
        `
    } 

    const BuildEngineer = engineer => {
        return `
        <div class="card" style="width: 18rem;">
            <div class="card-body">
              <h5 class="card-title">${engineer.getName()}</h5>
              
            </div>
            <ul class="list-group list-group-flush">
            <li class="list-group-item">${engineer.getRole()}</li>
              <li class="list-group-item">${engineer.getId()}</li>
              <li class="list-group-item">Email:<a href="#" class="card-link">Email:${engineer.getEmail()}</a> </li>
              <li class="list-group-item" Github:>${engineer.getGithub()}</li>
            </ul>
            </div>


        `
    }

    const BuildIntern = intern => {
        console.log(intern)
        return `
        <div class="card" style="width: 18rem;">
            <div class="card-body">
              <h5 class="card-title">${intern.getName()}</h5>
              
            </div>
            <ul class="list-group list-group-flush">
            <li class="list-group-item">${intern.getRole()}</li>
              <li class="list-group-item">${intern.getId()}</li>
              <li class="list-group-item">Email:<a href="#" class="card-link">Email:${intern.getEmail()}</a> </li>
              <li class="list-group-item">${intern.getSchool()}</li>
            </ul>
            </div>


        `
    }


  

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

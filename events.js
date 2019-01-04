function Project() {
    this.name;
    this.date;
    this.implements;
    this.description;
}

var normal = new Project();
normal.name = "Justin's Projects";
normal.date = 'December 2017';
normal.implements = 'HTML, CSS';
normal.description = "Hello World! My name is Justin Xu. This site was created to be a collection of my prouder digital projects. This is not the complete set, but it showcases the variety of my digital experiences, which does not only include programming. Digital media or anything I can digitize is also included here.";

var hexagonal_2048 = new Project();
hexagonal_2048.name = 'Hexagonal 2048';
hexagonal_2048.date = 'July 2017';
hexagonal_2048.implements = 'JavaScript, p5.js';
hexagonal_2048.description = 'This game applies the rules of the popular game 2048 to a hexagonal grid, rather than a square grid. It uses primarily JavaScript and the p5 library to edit an HTML canvas element that contains the game. This is not the first time someone has made a hexagonal variant of 2048. Nonetheless, this project was constructed from scratch and without consultation of existing versions. Use the QWEASD keys to control the board.';

var water = new Project();
water.name = 'Water';
water.date = '2015 -';
water.implements = 'LMMS';
water.description = 'Starting in Grade 9, I dabbled occasionally in digital music production using LMMS. I am far from mastering it, but it has grown into a hobby that I am nearing the point where I would be proud of its results. This page contains some of my completed productions (the older of which I am not very proud of). Between these releases are many more incomplete projects.';

var concertino = new Project();
concertino.name = 'Concertino';
concertino.date = 'December 2016 - March 2017';
concertino.implements = 'Microsoft Excel, Visual Basic';
concertino.description = 'This spreadsheet was created for the Internal Assessment in the ITGS course I took in Grade 11. I consulted my former piano teacher as my client, and designed a scheduling tool to suit his needs. The tool needed to contain a database, but Microsoft Access could not be used, since the tool also needed to contain a dynamic timetable. Under the folly that a macro-based database-spreadsheet would function just as well as standalone software, Concertino was born.';

function hover(project) {
    project_name.innerHTML = '<h1>' + project.name + '</h1>';
    project_date.innerHTML = '<h2>' + project.date + '</h2>';
    project_implements.innerHTML = '<h2>' + project.implements + '</h2>';
    project_description.innerHTML = '<p>' + project.description + '</p>';
}

hover(normal);

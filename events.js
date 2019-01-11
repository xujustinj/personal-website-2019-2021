function hover(project) {
    project_name.textContent = project.name;
    project_date.textContent = project.date;
    project_implements.textContent = project.implements;
    project_description.textContent = project.description;
}


function Project(id, name, date, implements, description, link, img) {

    this.name = name;
    this.date = date;
    this.implements = implements;
    this.description = description;

    let tile = document.createElement('a');
    tile.setAttribute('class',       'tile');
    tile.setAttribute('onmouseover', 'hover(' + id + ');');
    tile.setAttribute('href',        link);

    tiles.appendChild(tile);

    let image = document.createElement('img');
    image.setAttribute('class', 'icon');
    image.setAttribute('src',   'img/' + img);
    image.setAttribute('alt',   name);

    tile.appendChild(image);

}

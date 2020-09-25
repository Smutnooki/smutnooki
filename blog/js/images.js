var image = document.getElementById("image");
var num = 1;

function gallery() {

    var img = '<img src="../gfx/img' + num + '.jpg" alt="img"></img>';

    image.innerHTML = img;
}

function prev_photo() {

    num = num - 1;
    if(num<1) num = 3;

    var img = '<img src="../gfx/img' + num + '.jpg" alt="img"></img>';

    image.innerHTML = img;
}

function next_photo() {

    num = num + 1;
    if(num>3) num = 1;

    var img = '<img src="../gfx/img' + num + '.jpg" alt="img"></img>';

    image.innerHTML = img;

}

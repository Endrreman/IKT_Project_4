var c = document.getElementById("c");
var ctx = c.getContext("2d");


//document.body.scrollHeight
//screen size
c.height = window.innerHeight;
c.width = window.innerWidth;

//what characters play
//all characters    var matrix = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ123456789@#$%^&*()*&^%+-/~{[|`]}";
var matrix = "01";

matrix = matrix.split("");

var font_size = 10;     //font size
var columns = c.width/font_size; //number of columns
//an array of drops - one per column
var drops = [];

for(var x = 0; x < columns; x++)    //x coordinate start
    drops[x] = 100;                   //y coordinate start of the first line

function draw()     //drawing the characters
{
    //translucent BG to show trail
    ctx.fillStyle = "rgba(0, 0, 0, .04)";          //BG color for the canvas
    ctx.fillRect(0, 0, c.width, c.height);

    ctx.fillStyle = "rgba(166, 142, 255, .5)";     //text color
    ctx.font = font_size + "Courier New";           //font family
    //looping over drops
    for(var i = 0; i < drops.length; i++) //i++ -> i+= 10 spaceing between collums
    {
        //a random chinese character to print
        var text = matrix[Math.floor(Math.random()*matrix.length)];
        //x = i*font_size, y = value of drops[i]*font_size
        ctx.fillText(text, i*font_size, drops[i]*font_size);

        //sending the drop back to the top randomly after it has crossed the screen
        //adding a randomness to the reset to make the drops scattered on the Y axis
        if(drops[i]*font_size > c.height && Math.random() > 0.975)
            drops[i] = 0;

        //incrementing Y coordinate
        drops[i]++;     //i+= 10 spaceing between rows
    }
}

setInterval(draw, 35); //speed of drops
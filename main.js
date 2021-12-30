var mouse_event="empty";
var last_position_of_x ;
var last_position_of_y ;

canvas=document.getElementById("myCanvas");

ctx=canvas.getContext("2d");
color="red";
width=5;

canvas.addEventListener("mousedown",my_mousedown);
function my_mousedown(e)
{
    mouse_event="mousedown";

}

canvas.addEventListener("mouseup",my_Mouseup);
function my_Mouseup(e)
{
    mouse_event="mouseup";
}
canvas.addEventListener("mouseleave",my_mouseleave);
function my_mouseleave(e)
{
    mouse_event="mouseleave";
}
canvas.addEventListener("mousemove",my_mousemove);
function my_mousemove(e)
{
    current_position_of_x = e.clientX - canvas.offsetLeft;
    current_position_of_y = e.clientY - canvas.offsetTop;

    if (mouse_event == "mousedown"){
        ctx.beginPath();
        ctx.strokeStyle=color;
        ctx.lineWidth= width;

        console.log("last position of the x and y cordinates");
        console.log("x =" + last_position_of_x + "y =" + last_position_of_y);
        ctx.moveTo(last_position_of_x,last_position_of_y);

        console.log("currentt position of the x and y cordinates");
        console.log("x =" + current_position_of_x + "y =" + current_position_of_y);
        ctx.lineTo(current_position_of_x,current_position_of_y);
        ctx.stroke();


    }
    last_position_of_x = current_position_of_x;
    last_position_of_y = current_position_of_y;
}
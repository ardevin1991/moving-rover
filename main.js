canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

rover_width=100;
rover_height=90;

rover_x=10
rover_y=10

mars_array=["mars1.jpg","mars2.jpg","mars3.jpg","mars4.jpg"];
random_number=Math.floor(Math.random()*4)
background_image=mars_array[random_number];
rover_image="rover.png";

function add(){
    background_imgtag=new Image();
    background_imgtag.onload=uploadbackground;
    background_imgtag.src=background_image;

    rover_imgtag=new Image();
    rover_imgtag.onload=uploadrover;
    rover_imgtag.src=rover_image;
}

function uploadbackground(){
    ctx.drawImage(background_imgtag,0,0,canvas.width,canvas.height);
}
function uploadrover(){
    ctx.drawImage(rover_imgtag,rover_x,rover_y,rover_width,rover_height);
}
window.addEventListener("keydown",mykeydown);

function mykeydown(e){
    keypreesed=e.keyCode;
    console.log(keypreesed);
    if(keypreesed=="38"){
        up();
        console.log("up")
    }
    if(keypreesed=="40"){
        down();
        console.log("down")
    }
    if(keypreesed=="37"){
        left();
        console.log("left")
    }
    if(keypreesed=="39"){
        right();
        console.log("right")
    }
}

function up(){
    if(rover_y>=0){
        rover_y=rover_y-10;
        console.log("when up arrow is pressed x= "+rover_x+" ,Y=  "+rover_y);
        uploadbackground();
        uploadrover();
        
    }
}
function down(){
    if(rover_y<=500){
        rover_y=rover_y+10;
        console.log("when down arrow is pressed x= "+rover_x+" ,Y=  "+rover_y);
        uploadbackground();
        uploadrover();
        
    }
}
function right(){
    if(rover_x<=700){
        rover_x=rover_x+10;
        console.log("when right arrow is pressed x= "+rover_x+" ,Y=  "+rover_y);
        uploadbackground();
        uploadrover();
        
    }
}
function left(){
    if(rover_x>=0){
        rover_x=rover_x-10;
        console.log("when left arrow is pressed x= "+rover_x+" ,Y=  "+rover_y);
        uploadbackground();
        uploadrover();
        
    }
}
let x, y, z;
x = 3;
y = 10;
z = 20;

function showDate(){
    document.getElementById('demo').innerHTML = Date()
}
function changeText(){
    document.getElementById("demo").innerHTML = "Hello JavaScript!"
}
function changeSize(){
    document.getElementById('demo').style.fontSize='35px'
}
function hideText(){
    document.getElementById('demo').style.display='none'
}
function showText(){
    document.getElementById('demo').style.display='block'
}
function beMegan(){
    document.getElementById('demo2').innerHTML = "okane kasegu orera was star"
}

function alertMe(){
    window.alert(x)
}

function logMe(){
    console.log(y)
}

function printMe(){
    window.print()
}

console.log('is this working? I think it is')
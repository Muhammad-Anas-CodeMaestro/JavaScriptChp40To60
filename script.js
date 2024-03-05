var constant = 5
function changeValue(){
    constant = 8
    console.log(constant)
}

changeValue();

// While Loop
var anas = 1;
while (anas <= 9) {
    document.write("My Name is Muhammad Anas <br>")
    anas++;
}

// Do While Loop
var i = 1;
do {
    document.write("Muhammad Anas <br>")
    i++;
} while (i>=5);

function greet(a,b) {
    var value = a + b
}

docu/ment.write(greet(47,7))

var shera = 0;
do {
    shera++
} while (shera <= 5);

function says() {
    alert("Assalam Alikum")
}


function changeColor() {
    document.getElementById('changeBtn').style.backgroundColor = 'red'
    document.getElementById('changeBtn').style.backgroundColor = 'white'
}


function onwrite(e){
    e.style.color = 'white'
    e.style.backgroundColor = 'black'
    e.style.border = "2px solid red"
}

function onout(e){
    e.style.color = 'black'
    e.style.backgroundColor = 'white'
}


function showPara(){
    document.getElementById('morePara').innerHTML = ' Placeat ipsum assumenda, cum suscipit est, a repellendus dolorum at inventore illo, repudiandae vel voluptates non.'
    document.getElementById('btn').style.display = 'none'
    document.getElementById('btn-remove').style.display = 'block'
}

function lessPara() {
    document.getElementById('morePara').innerHTML = ' '
    document.getElementById('btn').style.display = 'block'
    document.getElementById('btn-remove').style.display = 'none'
}


function cityZipCode(){
    var zip;
    var vef = document.getElementById('cityName').value;
    switch (vef) {
        case "karachi":
           zip = '404148' 
            break;
        case "lahore":
            zip = '404178'
            break;
        case "quetta":
            zip = '404121'
            break;
        case "islamabad":
            zip = '4041299'
            break;
        default:
            zip = 'NaN'
            break;
    }
    document.getElementById('zipCode').value = zip
}


function changeWidth(){
    document.getElementById('abc').className += ' difwidth'
}


function abc(){
    var abc = document.getElementById('change')
    var def = abc.getElementsByTagName('p')
    for (var i= 0;i < def.length;i++){
        def[i].style.backgroundColor = 'darkblue'
        def[i].style.color = 'yellow'
    }
    def[3].innerHTML = 'hi! Pakistan'
}


document.childNodes[1].childNodes[0].childNodes[5].childNodes[0].textContent = 'I Change Your document name by javaScript'

console.log(document.childNodes[1].childNodes[2].childNodes[23].childNodes[9].textContent = 'Muhammad Anas')


// WHILE LOOP


for(var i=0;i<=12;i++){
    document.write(i,"<br>")
}
document.write("<br>")


var arr=["anas",'saleem','hi','pakistan','my world','your world']
var i=3
do {
    document.write(arr[i],'<br>')
    i++;
} while (i < 0);

var table = 2;
var i=1;
while (i<=10) {
    document.write(table+' X '+i+' = '+(table*i)+'<br>')
    i++;
}




console.log(document.childNodes[1].childNodes[2].childNodes[42])











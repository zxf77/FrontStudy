function myFunctionTest() {
    document.getElementById('demo').innerHTML = '已经更改';
}
function myFunctionTest1() {
    var x,y,z;
    var length = 7; //定义数字
    var name = 'tom'    //定义字符串
    var cars = ['bmw', 'tesla'];    //定义数组
    var student = {firstname:'Tony', lastname:'Stark'}; //定义对象
    x = 10;
    y = 11;
    z = x + y;
    document.getElementById('calc').innerHTML = z;

}
function myFunction22() {
    var number = 911;
    var stringtest = 'test';
    document.getElementById('calctest').innerHTML = number + stringtest;
}
function myfunction001() {
    function toCelsius(f) {
        return (5 / 9) * (f - 32);
    }
    document.getElementById("celisus").innerHTML = toCelsius;
}
var cars = {
    type:"porsche",
    model:"911",
    color:"white",
    fullName:function () {
        return this.type + ' ' + this.model;
    }
};
function showCar() {
    document.getElementById("car").innerHTML = cars.fullName();
}

var testString = "loveZswLoveZsw"
function calclength() {
    var text = testString.length;
    document.getElementById("teststring").innerText = text;
}
function findFirst() {
    var first = testString.indexOf("Zsw");
    document.getElementById("teststring").innerHTML = first;
}
function findLast() {
    document.getElementById("teststring").innerHTML = testString.lastIndexOf("Zsw");
    console.log(testString.lastIndexOf("Zsw"))
}
function replaceSome() {
    document.getElementById("teststring").innerHTML = testString.replace("Love", "verylove");
}
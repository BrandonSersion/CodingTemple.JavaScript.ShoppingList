var i = 0;
var items = [];
var prices = [];
var total = 0;

function getGroceryItem() {
  items[i] = document.getElementById("name").value;
  prices[i] = document.getElementById("price").value;
  addGroceryItem(items[i], prices[i]);
  updateTotal(prices[i]);
  i++;
  document.getElementById("myForm").reset();
}

function addGroceryItem(nam, pri) {
  var table = document.getElementById("itemTable");
  var row = table.insertRow(1 + i);
  var cell0 = row.insertCell(0);
  var cell1 = row.insertCell(1);
  var cell2 = row.insertCell(2);
  cell1.innerHTML = items[i];
  cell2.innerHTML = prices[i];
}

function updateTotal(pri) {
  total = (total + parseInt(pri));
  var footer = document.getElementById("totalPrice");
  footer.innerHTML = total;

}

$(document).ready(function() {
  $('#btn').click(getGroceryItem);
});




/*
function GroceryItem(item,price) {
  this.item = item;
  this.price = price;
  this.getGroceryItem = function(){
    alert();
  };
}

var groceryItem1 = new GroceryItem("Rice", 10)
$(document).ready(function() {
  $('#btn').click(groceryItem[i].getGroceryItem);
});
*/







/*

function randomX(){
return Math.floor(Math.random()*(500));
}

function randomY()
{
return Math.floor(Math.random()*(280));
}

function randomT()
{
return Math.floor(Math.random()*(2001));
}

function scoreIncrement()
{
score += 1;
$('#score').html(score + ' pts');
$(this).hide();
}

function clickEvent()
{
start();
}

function start()
{
$('#start_button').off();
$('#timer').show();
$('#gamespace').css('background-color','#008000');
$("h1").css({"color":"green", "font-size":"20px", "padding":"5px"});
addMole();
runTimer();
removeDelay();
}

function runTimer()
{
var t;
timerSet = setTimeout("runTimer()", 1000);
timerDecrement();
}

function timerDecrement()
{
if(secondsLeft < 0)
{
endGame();
}
else
{
$('#timer').html(secondsLeft + ' seconds left');
secondsLeft -= 1;
}
}

function addMole(){
var x;
var y;
var rt;
x = randomX();
y = randomY();
rt = randomT();
$('.mole').off();
$('#gamespace').append('<img src="img/mole.png" class="mole" style="top:'+y+'px;left:'+x+'px;" id="a'+countAdd+'"/>');
$('.mole').on();
$('.mole').click(scoreIncrement);
countAdd++;
moleSet = setTimeout("addMole()", rt);
}

function removeDelay()
{
if(delay<=0)
{
delaySet = setTimeout("removeMole()", 4000);
delay++;
}
}

function removeMole()
{
var rs;
rs = randomT();
$('#a'+countRemove+'').hide();
countRemove++;
removeSet = setTimeout("removeMole()", rs);
}


function endGame(){
clearTimeout(timerSet);
clearTimeout(moleSet);
clearTimeout(removeSet);
$('.mole').hide();
if(score < 20)
{
alert("Your lawn never recovered. Score: " + score);
$('#gamespace').css('background-color','#9b7653');
}
else if(score < 30)
{
alert("You saved your lawn! But can you whack more? Score: "  + score);
}
else
{
alert("Mole apocalypse. Score: " +score);
$('#gamespace').css('background-color','#aad4e5');
}
waitSet = setTimeout("reloadPage()", 3000);
}

function reloadPage()
{
clearTimeout(waitSet);
window.location.reload();
}
*/

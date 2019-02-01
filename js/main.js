/*function show(){document.getElementbyNameTag("p").style.display= "block" };
document.getElementbyId("click").onclick=function(){show()};*/

/*function bold(){
	T=document.getElementsByTagName("p")
	for(i=0;i<T.length;i++)
	T[i].style.color = "red";

}
*/
function bold(){
  document.getElementById("p").style.fontWeight="bold";

}

function underline(){

                document.getElementById("p").style.textDecoration="underline"
            }

function italic(){

	document.getElementById("p").style.fontStyle="italic";
}

function show(){
document.getElementById("p").style.display="block";
document.getElementById("toolbar").style.display="block";
L=document.getElementById("bulb")
L.style.display="none";}

T=document.getElementsByClassName("fonts")

function hide()
{	for(i=0;i<T.length;i++)
T[i].style.display="none"; }

function drop()
{for(i=0;i<T.length;i++)
T[i].style.display="inline-block";}

S=document.getElementsByClassName("sizes")

function hidesize()
{	for(i=0;i<T.length;i++)
S[i].style.display="none"; }

function dropsize()
{for(i=0;i<T.length;i++)
S[i].style.display="inline-block";}

function change(btn)
{A=btn
document.getElementById("p").style.fontFamily=A;}


function changesize(button)
{B=button
document.getElementById("p").style.fontSize=B +	 "px";}


/*
function show(){
	 x=document.getElementById();
	if(x.style.display=="none"){
		x.style.display="block";
	}
	else
		x.style.display="none"
}

function myFunction() {
  document.getElementById("demo").innerHTML = "YOU CLICKED ME!";
}*/
//document.getElementById("demo").onclick = function() {myFunction()} 
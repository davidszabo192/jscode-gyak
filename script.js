//console.log("fájlban");

window.addEventListener("load",init);

function init() {
    document.getElementById("uzenet").innerHTML="Hahó";
}


/**változók a JS-ben var let const  */

var szoveg="hello vilag!";
var a=2;
var b=4;
var osszeg=Number(a)+Number(b);

console.log(osszeg);

if(a===2) {
    console.log("Az a változó egy szám");
}else {
    console.log("Az a változó NEM szám");
    console.log(typeof a);
}

var logikai=true;

var tomb=[];
var tomb2=[1,2,3,4,5];
var tomb3=[2];
//console.log(tomb3[0]);



//for(let index= 0; index <tomb2.length; index++) {
    //console.log(index+" "+tomb2[index]);
//}

/**A tomb2 elemeinek osszege */
for(let index= 0; index <tomb2.length; index++){
  
    osszeg = osszeg+tomb2[index];

}
console.log(osszeg)

/**van-e 3 nál kisebb elem? */
var i=0;
while (i < tomb2.length && tomb2[i]>3)  {
    i++;
}

var vane = i <tomb2.length;
console.log(vane)
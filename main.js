function LoadJson(file,callback){
  var a=new XMLHttpRequest();
  a.overrideMimeType("application/json");
  a.open("GET",file,true);
  a.onreadystatechange=function(){
    if (a.readyState===4 && a.status=="200"){
    callback(a.responseText);
    }
  }
  a.send();
};
LoadJson("data.json",function(text){
  let data=JSON.parse(text);
  console.log(data);
  // career(data.co);
  console.log(data.co);
})
var right= document.getElementById('right');
var career=document.createElement('h4');
career.trxtContent="career Object";
career.appendChild(document.createElement("HR"));
function career(careerObject){
  var p=document.createElement("p");
  cop.textContent=careerObject;
  career.appendChild(cop);
}
right.appendChild(career);
var edu=document.createElement("h4");
edu.textContent="Educational Qualification:";
edu.appendChild(document.createElement("HR"));
right.appendChild(career);
right.appendChild(edu);

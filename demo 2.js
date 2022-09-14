var obj = {
    name: "Phung Van Vu",
    age: 15,
    mark: 6,
    Girlfriends: "Nguyen Thuy Kieu","Nguyen Thuy Van","Ngoc Trinh";
    eat: function () {
        console.log("Phung Van Vu dang an...");
        console.log(this.name+" dang an...");
    }
}
console.log(obj.name);
obj.name="Nguyen Viet Cuong";
console.log(obj.name);
for(var i=0;i<obj.girlfriends.length;i++){
    console.log(obj.girlfriends[i]);
}
obj.eat();

var x= document.getElementById("abc");
x.innerText="xin chao tat ca cac sinh vien lop T2207A";
x.innerHTML= '<i>Hello world!</i>';
x.style.color="red";
x.style.fontSize='45px';

x.style.fontSize=f+'px';
     f+=5;
x.style.transform='rotate'('+f+'deg)';
    f+=10;

}
setInterval(demo,1000);

var m=10,s
function timer(){
    var min=document.getElementById("min");
    var sec=document.getElementById("sec");
    min.innerText=m;
    sec.innerText=s;
    s--;
    if(s<0){
        s=59;
        m---;
    }
    if (m<0){
        clearInterval("si");
         }
}
var si;
function startTimer(){
    si=setInterval(timer,1000);
}
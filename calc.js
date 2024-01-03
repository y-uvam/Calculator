var a,op,r;
function getdata(s){
   document.getElementById("display").value+=s
}
function getopr(o){
    a=parseInt(document.getElementById("display").value)
    document.getElementById("display").value=""
    op=o
}
function getres(){
    var b=parseInt(document.getElementById("display").value)
    if(op=='+')
    r=a+b
    else if(op=='-')
    r=a-b
    else if(op=='*')
    r=a*b
    else if(op=='/')
    r=a/b
document.getElementById("display").value=r
}
function clr(){
    document.getElementById("display").value=""
}

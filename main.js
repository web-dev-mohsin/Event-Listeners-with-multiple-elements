var len = document.get(".myButton").length;
for(i=0; i<len; i++){
    document.querySelectorAll(".myButton")[i].addEventListener("click",function(){
        var text = this.innerHTML;
        document.querySelector("h1").innerHTML = text + " Is clicked";
    });
}
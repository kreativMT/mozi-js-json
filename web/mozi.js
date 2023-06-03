var feliratkozas = function (){
    var xhr = new XMLHttpRequest();
    var emailbe = document.getElementById("email");
    var adat = document.getElementById("adatkezelesiInput");

    if (emailbe.value ==""){
        alert("Kérlek, add meg az email címed");
        return;

    }
    if(!adat.checked){
        alert("kérlek fogadd el az adatvédelmi szabályzatot");
        return;
    }

    xhr.onreadystatechange = function() {
        if(this.readyState === 4 && this.status === 200) {
          emailbe.value="";  
          alert("Köszönjük a feliratkozást");
        }
      };


xhr.open("POST", "http://localhost:8080/api/hirlevel");
xhr.send(JSON.stringify(
    {
        email: emailbe.value,

    }
)
    
    );
};

//Oldal teteje gomb függvény
var gomb = document.getElementById("back-to-top");
window.onscroll = function() {
    gorgetes()
};
function gorgetes() {
    if (document.documentElement.scrollTop >=100){
        gomb.style.display = "block";
    }
    else{
        gomb.style.display = "none";
    } 
}
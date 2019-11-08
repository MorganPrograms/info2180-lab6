window.onload = function(){
    var req = new XMLHttpRequest();
    req.open("GET", "superheroes.php",true);
    req.send(); 

    var press = document.getElementsByClassName("Search")[0];
    press.addEventListener("click", function(){
        alert(req.responseText);
    });
        


};

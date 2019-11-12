window.onload = function(){
    var press = document.getElementById("Search");
    var results = document.querySelector('#results');
    function sanitize(string) {
        const map = {
            '&': '&amp;',
            '<': '&lt;',
            '>': '&gt;',
            '"': '&quot;',
            "'": '&#x27;',
            "/": '&#x2F;',
        };
        const reg = /[&<>"'/]/ig;
        return string.replace(reg, (match)=>(map[match]));
      }
    
    press.addEventListener("click", function(){
        var name = document.querySelector('#name').value;
        name = sanitize(name);
        var req = new XMLHttpRequest();
        req.onreadystatechange = function(){
            if (this.readyState == 4 && this.status == 200){
                var r = this.responseText;
                if (r.length > 7){
                    var res = JSON.parse(this.responseText);
                    if (name == ""){
                        var ul = document.createElement('ul'); 
                        for (var i = 0; i < res.length; i++){
                            var line = document.createElement('li');
                            line.appendChild(document.createTextNode(res[i]));
                            ul.appendChild(line);
                        }
                        results.innerHTML = ul.innerHTML;
                    }
                    else if (name != ""){
                        var hero = "A.K.A. " + res[0];
                        var alias = res[1];
                        var bio = res[2];
                        var h3 = document.createElement('h3');
                        var h4 = document.createElement("h4");
                        var p = document.createElement('p'); 
                        h4.appendChild(document.createTextNode(hero));
                        h3.appendChild(document.createTextNode(alias));
                        p.appendChild(document.createTextNode(bio));
                        var holder = document.createElement('div');
                        holder.appendChild(h3);
                        holder.appendChild(h4);
                        holder.appendChild(p);
                        results.innerHTML = holder.innerHTML;
                        
                    
                    }
    
                }
                else{
                    results.innerHTML = "SUPERHERO NOT FOUND";
                    
                }
                
                
                    

                 
              }
             
              
            };
        req.open("GET", "superheroes.php?query=" + name,true);
        req.send();
        
        });

        
         
        
    
    
        


};

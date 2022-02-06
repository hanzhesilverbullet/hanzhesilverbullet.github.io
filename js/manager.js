container.reset();
function color(){
    var grid=document.getElementById("grid");
    var rows=grid.children;
    for(var i=0;i<4;i++){
        for(var j=0;j<4;j++){
            //console.log(rows[i].children[j].getAttribute("val"));
            switch(rows[i].children[j].getAttribute("val")){
                case "2":rows[i].children[j].setAttribute("class","tile-2"+" cell");break;
                case "4":rows[i].children[j].setAttribute("class","tile-4"+" cell");break;
                case "8":rows[i].children[j].setAttribute("class","tile-8"+" cell");break;
                case "16":rows[i].children[j].setAttribute("class","tile-16"+" cell");break;
                case "32":rows[i].children[j].setAttribute("class","tile-32"+" cell");break;
                case "64":rows[i].children[j].setAttribute("class","tile-64"+" cell");break;
                case "128":rows[i].children[j].setAttribute("class","tile-128"+" cell");break;
                case "256":rows[i].children[j].setAttribute("class","tile-256"+" cell");break;
                case "512":rows[i].children[j].setAttribute("class","tile-512"+" cell");break;
                case "1024":rows[i].children[j].setAttribute("class","tile-1024"+" cell");break;
                case "2048":rows[i].children[j].setAttribute("class","tile-2048"+" cell");break;
                case "0":rows[i].children[j].setAttribute("class","tile-0"+" cell");break;
            }
        }
    }
}
// function moveanimation(i,j,v,){

// }
function menubar(){
    a = document.getElementById('nav-bar').style;
    if(a.display == "none"){
        a.display = "flex";
    }
    else{
        a.display = "none";
    }
}
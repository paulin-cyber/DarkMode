const icon = document.getElementById("icon")
function mudar(){
    document.body.classList.toggle("dark")
    if(document.body.classList.contains("dark")){
        icon.classList.remove("bi-moon")
        icon.classList.add("bi-sun")
    }
    else{
        icon.classList.remove("bi-sun")
        icon.classList.add("bi-moon")
    }
}
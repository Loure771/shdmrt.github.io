const btn1 = document.getElementById("btn1");
const list = document.getElementById("list");

list.style.display = "none";

btn1.addEventListener("click", (event) => {
    if (list.style.display == "none"){
        list.style.display = "block";
    } else{
        list.style.display = "none";
    }
})
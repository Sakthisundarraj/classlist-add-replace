let btn = document.getElementById("btn")
let text = document.getElementById("add")
let rebtn = document.getElementById("rebtn")
let conbtn = document.getElementById("conbtn")
let remove = document.getElementById("removebtn")
let togglebtn = document.getElementById("togglebtn")
// Add class

btn.addEventListener('click',()=>{
    text.classList.add("color")
})

// Replace class

rebtn.addEventListener("click",()=>{
    text.classList.replace("color","newcolor")
})

//Remove class
remove.addEventListener("click",()=>{

    if(text.classList.contains("color"))
        {
            text.classList.remove("color")
        }
        else if(text.classList.contains("newcolor"))
            {
                text.classList.remove("newcolor")
            }
            else{
                alert("No class available")
            }
})

// Contains class

conbtn.addEventListener("click",()=>{

    if(text.classList.contains("color"))
        {
            alert("I have a Color class")
        }
        else if(text.classList.contains("newcolor"))
            {
                alert("I have a Newcolor  class")
            }
            else{
                alert("no class is added")
            }
})

//Toggle Class

togglebtn.addEventListener("click",()=>{
    text.classList.add("color")
    text.classList.toggle("newcolor")
})

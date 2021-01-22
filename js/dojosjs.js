console.log("Go Chuck !");


document.querySelector("div").onmouseover = function() {mouseOver()};
document.querySelector("div").onmouseout = function() {mouseOut()};

function mouseOver() {
    document.querySelector("div").style.borderRadius = "0%";
}

function mouseOut() {
    document.querySelector("div").style.borderRadius = "50%";
}


let coll = document.querySelectorAll("header");
let i;
for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function() {
        this.classList.toggle("active");
        let content = this.nextElementSibling;
        if (content.style.visibility === "hidden" || content.style.visibility === "" )
         {
            content.style.visibility = "visible"; 
            content.style.height = "auto";
        }  else {
            content.style.visibility = "hidden";
            content.style.height = "0px"
        }

    });
}

xhr = new XMLHttpRequest();
xhr.addEventListener("readystatechange", function(){
    
    if(xhr.readyState===4&& xhr.status===200){
        console.log(xhr.response);
    }
});

xhr.open("GET","data/menu.json",true);

xhr.send();


    // coll[i].addEventListener("click", function() {
    //     this.classList.toggle("active");
    //     if (content.style.display === "block")
    //      {
    //         content.style.display = "none"
            
    //     }  else {
    //         content.style.display = "block"  
    //     }
    // });

// let coll = document.querySelectorAll("header");
// let i;
// for (i = 0; i < coll.length; i++) {

// }
// let contenue = document.querySelectorAll("main")
// contenue.style.display = "none";
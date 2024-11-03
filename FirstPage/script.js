let products = [
    {
        Image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtLGOzfVkITJkXQsPwSToPwkEXdfz-PRhbVw&s",
        name:"Acer",
        desk: "Aspire 3",
        class:""
    },
    {
        Image:"https://strgimgr.umico.az/sized/840/681983-81b964fd4cda5ae10ccddc4767a821cd.jpg",
        name:"Acer",
        desk: "Aspire 5",
        class:"active"
    },
    {
        Image:"https://m.media-amazon.com/images/I/71jG+e7roXL._AC_UF1000,1000_QL80_.jpg",
        name:"Macbook",
        desk: "Air M1",
        class:""
    },
    {
        Image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToSwqMdVBn65rrvB6g7ms4WN0Ir90rrC02RA&s",
        name:"Asus",
        desk: "ASUS Zenbook 14 OLED (UX3405)",
        class:""
    },
]

products.forEach(card =>{
    let NewCard = `
    <div class="carousel-item ${card.class}">
          <img src="${card.Image}" class="d-block w-100" alt="...">
          <div class="carousel-caption d-none d-md-block">
            <h5>${card.name}</h5>
            <p>${card.desk}</p>
          </div>
    </div>
    `

    document.querySelector(".carousel-inner").innerHTML += NewCard
})





let currentUser = JSON.parse(localStorage.getItem("currentUser"));

document.querySelector(".btnlogin").addEventListener("click", function(){
    window.location.href = "../SignInPage/index.html"
})

document.querySelector(".btnalis").addEventListener("click", function(){
    window.location.href = "../ShopPage/index.html"
})


if (currentUser) {
    document.querySelector(".btnlogin").textContent = "Komputerlerim"
    document.querySelector(".ad").innerHTML += ": " + currentUser.ad
    document.getElementById("btndelete").style.display = "block"
}else{
    document.getElementById("btndelete").style.display = "none"
    document.querySelector(".ad").innerHTML += ""
    document.querySelector(".btnlogin").textContent = "Hesaba daxil olmaq"
}


document.getElementById("btndelete").addEventListener("click", function() {
    localStorage.removeItem("currentUser")
    window.location.href = "./index.html"
})

let btn = document.querySelector(".btnlogin")

btn.addEventListener("click", function(){
    if(btn.textContent === "Komputerlerim"){
        window.location.href = "../Basket/index.html"
    }else{
        window.location.href = "../SignInPage/index.html"
    }
})

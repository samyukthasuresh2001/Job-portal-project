

let menuBurgar = document.querySelector(".menuBurgar");
let catBurgar = document.querySelector(".catBurgar");
let clist = document.getElementsByClassName("clist");
let dropCategory = document.querySelector(".dropCategory")

menuBurgar.onclick = function(){
    catBurgar.classList.toggle("catvisible");


}

let home1 = document.querySelector(".home1");

let homeList1 = document.querySelector(".homeList1");

let homeList = document.getElementsByClassName("homeList");
let dropHome = document.querySelector(".dropHome");

home1.onclick = function(){
    homeList1.classList.toggle("homevisible")
}

let shop1 = document.querySelector(".shop1");

let shopList1 = document.querySelector(".shopList1");

let shopList = document.getElementsByClassName("shopList");
let dropShop = document.querySelector(".dropShop");

shop1.onclick = function(){
    shopList1.classList.toggle("shopvisible")
}

let page1 = document.querySelector(".page1");

let pageList1 = document.querySelector(".pageList1");

let pageList = document.getElementsByClassName("[pageList");
let dropPage = document.querySelector(".dropage");

page1.onclick = function(){
    pageList1.classList.toggle("pagevisible")
}

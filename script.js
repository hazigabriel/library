 
document.querySelector(".newBookButton").addEventListener("click", function(){
 	document.querySelector(".userModal").style.display = "flex";
 })
document.querySelector(".closeModalButton").addEventListener("click", function(){
 	document.querySelector(".userModal").style.display = "none";
 })

let myLibrary = [];

function Book(title, author, pageNo, readStatus) {
	this.title = title;
	this.author = author;
	this.pageNo = pageNo;
	this.readStatus = readStatus
}


function addBookToLibray() {
	let one = prompt("Ce title ie cartea");
	let two = prompt("Ce autor ie cartea");
	let three = prompt("Ce page ie cartea");
	let four = prompt("Ce citit ie cartea");
	myLibrary.push(new Book(one, two, three, four))
}
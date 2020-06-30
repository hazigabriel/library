const userInputModal = {
	open: function(){
		document.querySelector(".userModal").style.display = "flex";
	},
	close: function(){
		document.querySelector(".userModal").style.display = "none";
	},
	toggleReadStatus: function(){ //toggles the "active" class for the Read status radio buttons

		document.querySelectorAll(".readToggle").forEach(function(e){
			e.addEventListener("click", function(){
				if(e.classList.contains("readToggleTrue")) {
					if(e.classList.contains("active")) {
						return
					} else {
						document.querySelector(".readToggleTrue").classList.add("active")
						document.querySelector(".readToggleFalse").classList.remove("active")
					}
				} else {
					if(e.classList.contains("active")) {
						return
					} else {
						document.querySelector(".readToggleFalse").classList.add("active")
						document.querySelector(".readToggleTrue").classList.remove("active")
					}
				}

			})
		})
	},
	resetInput: function(){
		document.querySelector(".bookTitle").value = "";
		document.querySelector(".bookAuthor").value = "";
		document.querySelector(".bookPageNo").value = "";
		document.querySelector(".readToggleTrue").classList.remove("active");
		document.querySelector(".readToggleFalse").classList.remove("active")

	}


}
 
document.querySelector(".submitButton").addEventListener("click", function(){
	let returnUserInput = function(){
		let title = document.querySelector(".bookTitle").value;
		let author = document.querySelector(".bookAuthor").value;
		let pageNo = document.querySelector(".bookPageNo").value;

		let readStatus = function(){
			if(document.querySelector(".readToggleTrue").classList.contains("active")) {
				return true
			} else if(document.querySelector(".readToggleFalse").classList.contains("active")) {
				return false
			} else {
				return undefined
			}
		};
		if(isNaN(pageNo)) {
				alert("Please input only digits for the page number.")
			}  else if(title === "" || author == "" || pageNo == "" || readStatus() == undefined) {
				alert("Please complete all fields");
			} else {
				userInputModal.close()
				userInputModal.resetInput()
			}
		 
	} 
	returnUserInput()
})
document.querySelector(".newBookButton").addEventListener("click", function(){
	userInputModal.open()
	userInputModal.toggleReadStatus()
 })
document.querySelector(".closeModalButton").addEventListener("click", function(){
	userInputModal.close()
 })

let myLibrary = [];

function Book(title, author, pageNo, readStatus) {
	this.title = title;
	this.author = author;
	this.pageNo = pageNo;
	this.readStatus = readStatus
}


function addBookToLibray() {
	let one = prompt("book title?");
	let two = prompt("book author?");
	let three = prompt("page no?");
	let four = prompt("read?");
	myLibrary.push(new Book(one, two, three, four))
}
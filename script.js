let myLibrary = [];

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
				addBookToLibray(title, author, pageNo, readStatus());
				render();
				userInputModal.close();
				userInputModal.resetInput();

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


function Book(title, author, pageNo, readStatus) {
	this.title = title;
	this.author = author;
	this.pageNo = pageNo;
	this.readStatus = readStatus
}


function addBookToLibray(title, author, pageNo, readStatus) {
	myLibrary.push(new Book(title, author, pageNo, readStatus));
	
}

function render(){
	document.querySelector(".book-container").innerHTML = ""; //on each new call, we remove previous elements that were appeneded to the
															  //book container, so that there would be no book duplicates displayed
	for(let i = 0; i < myLibrary.length; i++) {
		let bookContainer = document.querySelector(".book-container");
		let book = document.createElement("div");
		let bookTitle = document.createElement("p");
		let bookAuthor = document.createElement("p");
		let bookPageNo = document.createElement("p");
		let bookReadStatus = document.createElement("button");
		let bookDelete = document.createElement("button");
		
		book.setAttribute("data-bookNumber", i);

		book.classList.add("book");
		bookDelete.classList.add("btn", "btn-danger");
		bookTitle.textContent = myLibrary[i].title;
		bookAuthor.textContent = `written by: ${myLibrary[i].author}`;
		bookPageNo.textContent = `Page number: ${myLibrary[i].pageNo}`;
		bookDelete.textContent = "Remove";

		if(myLibrary[i].readStatus == true) {
			bookReadStatus.classList.add("btn", "btn-primary");
			bookReadStatus.textContent = "Read"
		} else {
			bookReadStatus.classList.add("btn", "btn-warning");
			bookReadStatus.textContent = "Not yet read"
		}
		book.appendChild(bookTitle);
		book.appendChild(bookAuthor);
		book.appendChild(bookPageNo);
		book.appendChild(bookReadStatus);
		book.append(bookDelete)

		bookContainer.append(book)

	}
}

 
function deleteBook() {
	
	document.querySelectorAll(".book").forEach(function(e){
		e.addEventListener("click", function(){
			alert(book)

		})

	})
}
 
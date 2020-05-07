console.log("welcome to my library");

function Book(name, author, type) {
    this.name = name;
    this.author = author;
    this.type = type;
}

function Display() {

}

Display.prototype.add = function (book) {
    let tablebody = document.getElementById("tablebody");
    let uistring = `
                    <tr>
                        <td>${book.name}</td>
                        <td>${book.author}</td>
                        <td>${book.type}</td>
                    </tr> `;
    tablebody.innerHTML += uistring;
}
Display.prototype.clear = function () {
    let libraryform = document.getElementById("form");
    libraryform.reset();
}

Display.prototype.validate = function (book) {
    if (book.name.length < 2 || book.author.length < 2) {
        return false;
    }
    else {
        return true;
    }
}

Display.prototype.show = function (type, displaymessage) {
    let message = document.getElementById("message");
    let boldtext;
    if(type=="success")
    {
        boldtext="Success!";
    }
    else{
        boldtext="Error!"
    }
    message.innerHTML = `<div class="alert alert-${type} alert-dismissible fade show" role="alert">
  <strong>${boldtext}</strong> ${displaymessage}
  <button type="button" class="close" data-dismiss="alert" aria-label="Close">
    <span aria-hidden="true">&times;</span>
  </button>
</div>`;
setTimeout(() => {
    message.innerHTML="";
},5000);

}

let libraryform = document.getElementById("form");
libraryform.addEventListener("submit", formSubmit);

function formSubmit(e) {
    e.preventDefault();
    let name = document.getElementById("book name").value;
    let author = document.getElementById("author").value;
    let type;

    let Fiction = document.getElementById("Fiction");
    let programming = document.getElementById("programming");
    let Cooking = document.getElementById("Cooking");

    if (Fiction.checked) {
        type = Fiction.value;
    }
    else if (programming.checked) {
        type = programming.value;
    }
    else if (Cooking.checked) {
        type = Cooking.value;
    }
    let book = new Book(name, author, type);
    console.log(book);
    let display = new Display();
    if (display.validate(book)) {
        display.add(book);
        display.clear();
        display.show("success", "your book has been added successfully!");
    }
    else {
        display.show("danger", "Sorry you cannot add this book");
    }
}
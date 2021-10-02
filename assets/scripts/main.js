const books = [
  {
    title: "book1",
    author: {
      name: "John Doe",
      image: "https://www.focusedu.org/wp-content/uploads/2018/12/circled-user-male-skin-type-1-2.png"
    },
    image: "https://images.freeimages.com/images/large-previews/7ba/book-1421245.jpg"
  }, {
    title: "book2",
     author: {
      name: "Alaa Hijazi",
      image: "https://www.focusedu.org/wp-content/uploads/2018/12/circled-user-male-skin-type-1-2.png"
    },
    image: "https://images.freeimages.com/images/large-previews/d0f/grandmother-s-cookbook-1324977.jpg"
  }, {
    title: "book2",
     author: {
      name: "Alaa Hijazi",
      image: "https://www.focusedu.org/wp-content/uploads/2018/12/circled-user-male-skin-type-1-2.png"
    },
    image: "https://images.freeimages.com/images/large-previews/d0f/grandmother-s-cookbook-1324977.jpg"
  }
]

const addButton = document.getElementById("add-book"),
  modla = document.getElementById("modal"),
  container = document.getElementById("container"),
  form = document.getElementById("add-book-form"),
  closeForm = document.getElementById("close-form"),
  title = document.getElementById("form-title"),
  img = document.getElementById("form-img"),
  authorName = document.getElementById("form-author-name"),
  authorImage = document.getElementById("form-author-image"),
  submitForm = document.getElementById("submit-form");

function addBooks() {
  container.innerHTML = "";
  books.forEach(book => {
    const divElement = document.createElement("div");
    container.appendChild(divElement);
    divElement.classList.add("book-div");
    divElement.innerHTML = `
      <img src=${book.image} alt=${book.title}>
      <div>
        <h2>${book.title}</h2>
        <div class="author">
          <img src=${book.author.image} alt=${book.author.name}>
          <a>${book.author.name}</a>
        </div>
      </div>
    `;
  });
}

window.onload = addBooks();

addButton.addEventListener("click", () => modla.style.display = "flex");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const reader = new FileReader();
  reader.readAsDataURL(img.files[0]);
  reader.onload = () => {
    books.push({ 
      title: title.value, 
      author: { name: authorName.value, image: "https://www.focusedu.org/wp-content/uploads/2018/12/circled-user-male-skin-type-1-2.png" },
      image: reader.result
    });
    addBooks();
    modla.style.display = "none";
    title.value = "";
    img.value = "";
    authorName.value = "";
  };
  reader.onerror = () => console.log;


});

closeForm.addEventListener("click", () => {
  modla.style.display = "none";
});
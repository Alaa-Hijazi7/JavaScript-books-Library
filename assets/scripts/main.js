const books = [{
  category: "Fantasy",  
  title: "One Hundred Years of Solitude",
    author: {
      name: "Gabriel Garcia Marquez",
      image: "https://www.focusedu.org/wp-content/uploads/2018/12/circled-user-male-skin-type-1-2.png"
    },
    image: "https://www.basicbooks.com/wp-content/uploads/2021/02/9781541697454.jpg?fit=480%2C720"
  }, {
    category: "Historical Fiction",
    title: "The Great Gatsby",
     author: {
      name: "F. Scott Fitzgerald",
      image: "https://www.focusedu.org/wp-content/uploads/2018/12/circled-user-male-skin-type-1-2.png"
    },
    image: "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1607103555-51wmv-2LokL.jpg?crop=1xw:0.993xh;center,top&resize=480:*"
  }, {
    category: "Horror",
    title: "Moby Dick",
     author: {
      name: "Herman Melville",
      image: "https://www.focusedu.org/wp-content/uploads/2018/12/circled-user-male-skin-type-1-2.png"
    },
    image: "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1607103555-51wmv-2LokL.jpg?crop=1xw:0.993xh;center,top&resize=480:*"
  }, {
    category: "Fantasy",
    title: "Moby Dick",
     author: {
      name: "Herman Melville",
      image: "https://www.focusedu.org/wp-content/uploads/2018/12/circled-user-male-skin-type-1-2.png"
    },
    image: "https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1607103555-51wmv-2LokL.jpg?crop=1xw:0.993xh;center,top&resize=480:*"
  }, {
    category: "Historical Fiction",
    title: "Fantasy",
     author: {
      name: "F. Scott Fitzgerald",
      image: "https://www.focusedu.org/wp-content/uploads/2018/12/circled-user-male-skin-type-1-2.png"
    },
    image: "https://www.basicbooks.com/wp-content/uploads/2021/02/9781541697454.jpg?fit=480%2C720"
  }, {
    category: "Horror",
    title: "Fantasy",
     author: {
      name: "F. Scott Fitzgerald",
      image: "https://www.focusedu.org/wp-content/uploads/2018/12/circled-user-male-skin-type-1-2.png"
    },
    image: "https://www.basicbooks.com/wp-content/uploads/2021/02/9781541697454.jpg?fit=480%2C720"
  }, {
    category: "Action and Adventure",
    title: "Fantasy",
     author: {
      name: "F. Scott Fitzgerald",
      image: "https://www.focusedu.org/wp-content/uploads/2018/12/circled-user-male-skin-type-1-2.png"
    },
    image: "https://www.basicbooks.com/wp-content/uploads/2021/02/9781541697454.jpg?fit=480%2C720"
  }, {
    category: "Classics",
    title: "Fantasy",
     author: {
      name: "F. Scott Fitzgerald",
      image: "https://www.focusedu.org/wp-content/uploads/2018/12/circled-user-male-skin-type-1-2.png"
    },
    image: "https://www.basicbooks.com/wp-content/uploads/2021/02/9781541697454.jpg?fit=480%2C720"
  }, {
    category: "Comic Book or Graphic Novel",
    title: "Fantasy",
     author: {
      name: "F. Scott Fitzgerald",
      image: "https://www.focusedu.org/wp-content/uploads/2018/12/circled-user-male-skin-type-1-2.png"
    },
    image: "https://www.basicbooks.com/wp-content/uploads/2021/02/9781541697454.jpg?fit=480%2C720"
  }, {
    category: "Detective and Mystery",
    title: "Fantasy",
     author: {
      name: "F. Scott Fitzgerald",
      image: "https://www.focusedu.org/wp-content/uploads/2018/12/circled-user-male-skin-type-1-2.png"
    },
    image: "https://www.basicbooks.com/wp-content/uploads/2021/02/9781541697454.jpg?fit=480%2C720"
  }, {
    category: "Fantasy",
    title: "Fantasy",
     author: {
      name: "F. Scott Fitzgerald",
      image: "https://www.focusedu.org/wp-content/uploads/2018/12/circled-user-male-skin-type-1-2.png"
    },
    image: "https://www.basicbooks.com/wp-content/uploads/2021/02/9781541697454.jpg?fit=480%2C720"
  }, {
    category: "Historical Fiction",
    title: "Fantasy",
     author: {
      name: "F. Scott Fitzgerald",
      image: "https://www.focusedu.org/wp-content/uploads/2018/12/circled-user-male-skin-type-1-2.png"
    },
    image: "https://www.basicbooks.com/wp-content/uploads/2021/02/9781541697454.jpg?fit=480%2C720"
  }, {
    category: "Romance",
    title: "Fantasy",
     author: {
      name: "F. Scott Fitzgerald",
      image: "https://www.focusedu.org/wp-content/uploads/2018/12/circled-user-male-skin-type-1-2.png"
    },
    image: "https://www.basicbooks.com/wp-content/uploads/2021/02/9781541697454.jpg?fit=480%2C720"
  }
];

const categories = [
  "Action and Adventure", "Classics", 
  "Comic Book or Graphic Novel", "Detective and Mystery",
  "Fantasy", "Historical Fiction", "Horror", "Literary Fiction",
  "Romance", "Science Fiction (Sci-Fi)", "Short Stories"
];

const addButton = document.getElementById("add-book"),
  modla = document.getElementById("modal"),
  container = document.getElementById("container"),
  form = document.getElementById("add-book-form"),
  closeForm = document.getElementById("close-form"),
  title = document.getElementById("form-title"),
  img = document.getElementById("form-img"),
  authorName = document.getElementById("form-author-name"),
  authorImage = document.getElementById("form-author-image"),
  submitForm = document.getElementById("submit-form"),
  categorySelect = document.getElementById("category"),
  searchForm = document.getElementById("search-bar"),
  formCategory = document.getElementById("form-category");

function addBooks() {
  container.innerHTML = "";

  let localStrogeBooks = JSON.parse(localStorage.getItem("books")) || books;

  localStrogeBooks.forEach(book => {
    const divElement = document.createElement("div");
    container.appendChild(divElement);
    divElement.classList.add("book-div");
    divElement.innerHTML = `
      ${book.category && `<span class="category">${book.category}</span>`}
      <img src=${book.image} alt=${book.title} class="book-image">
      <div>
        <h2>${book.title}</h2>
        <div class="author">
          <a>by ${book.author.name}</a>
        </div>
      </div>
    `;
  });
  categories.forEach(category => {
    const optionElement = document.createElement("option");
    categorySelect.appendChild(optionElement);
    optionElement.innerHTML = category
  });
}

function searchBooks(a, b) {
  let localStrogeBooks = JSON.parse(localStorage.getItem("books")) || books;
  let newArray = localStrogeBooks.filter(book => b ?  book.category === b && book.title.includes(a) : book.title.includes(a) || book.category === b);
  if (newArray) container.innerHTML = "";


  newArray.forEach(book => {
    const divElement = document.createElement("div");
    container.appendChild(divElement);
    divElement.classList.add("book-div");
    divElement.innerHTML = `
      ${book.category && `<span class="category">${book.category}</span>`}
      <img src=${book.image} alt=${book.title} class="book-image">
      <div>
        <h2>${book.title}</h2>
        <div class="author">
          <a>${book.author.name}</a>
        </div>
      </div>
    `;
  });
}

searchForm.addEventListener("submit", event => {
  event.preventDefault();
  searchBooks(event.target[0].value, event.target[1].value);
});

categorySelect.addEventListener("change", event => {
  event.preventDefault();
  searchBooks("", event.target.value);
});

window.onload = addBooks();

addButton.addEventListener("click", () => {
  modla.style.display = "flex";

  formCategory.innerHTML = "";

  categories.forEach(category => {
    const optionElement = document.createElement("option");
    formCategory.appendChild(optionElement);
    optionElement.innerHTML = category;
  });
});

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const reader = new FileReader();
  reader.readAsDataURL(img.files[0]);
  reader.onload = () => {
    localStorage.setItem("books", JSON.stringify([...books, { 
      category: formCategory.value,
      title: title.value, 
      author: { name: authorName.value, image: "https://www.focusedu.org/wp-content/uploads/2018/12/circled-user-male-skin-type-1-2.png" },
      image: reader.result
    }]));
    books.push({ 
      category: formCategory.value,
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
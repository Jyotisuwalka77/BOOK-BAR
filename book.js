// const API_URL = 'https://www.googleapis.com/books/v1/volumes?q=';

// // Function to fetch books from the Google Books API
// async function fetchBooks(query) {
//     const bookList = document.getElementById('book-list');
//     bookList.innerHTML = '<p>Loading...</p>'; // Show loading message

//     try {
//         const response = await fetch(`${API_URL}${encodeURIComponent(query)}`);
//         if (!response.ok) throw new Error('Network response was not ok');
//         const data = await response.json();
//         displayBooks(data.items || []); // Display books after fetching
//     } catch (error) {
//         console.error('Error fetching data:', error);
//         bookList.innerHTML = '<p>Error fetching data. Please try again later.</p>'; // Show error message
//     }
// }

// // Function to display books in the book list
// function displayBooks(books) {
//     const bookList = document.getElementById('book-list');
//     bookList.innerHTML = '';

//     if (books.length === 0) {
//         bookList.innerHTML = '<p>No books found.</p>';
//         return;
//     }

//     books.forEach(book => {
//         const bookItem = document.createElement('div');
//         bookItem.classList.add('book-item');
//         const bookInfo = book.volumeInfo;
//         bookItem.innerHTML = `
//             <img src="${bookInfo.imageLinks ? bookInfo.imageLinks.thumbnail : 'https://via.placeholder.com/150'}" alt="Book Cover">
//             <h2>${bookInfo.title}</h2>
//             <p><strong>Author:</strong> ${bookInfo.authors ? bookInfo.authors.join(', ') : 'Unknown'}</p>
//         `;
        
//         // Adding click event listener to show book details
//         bookItem.addEventListener('click', () => showBookDetails(book));
//         bookList.appendChild(bookItem);
//     });
// }

// // Function to show details of a selected book
// function showBookDetails(book) {
//     const bookInfo = book.volumeInfo;
//     const bookDetails = document.getElementById('book-details');
//     bookDetails.innerHTML = `
//         <h2>${bookInfo.title}</h2>
//         <img src="${bookInfo.imageLinks ? bookInfo.imageLinks.thumbnail : 'https://via.placeholder.com/200x300'}" alt="Book Cover">
//         <p><strong>Author:</strong> ${bookInfo.authors ? bookInfo.authors.join(', ') : 'Unknown'}</p>
//         <p><strong>Published:</strong> ${bookInfo.publishedDate || 'N/A'}</p>
//         <p><strong>Publisher:</strong> ${bookInfo.publisher || 'N/A'}</p>
//         <p><strong>Description:</strong> ${bookInfo.description || 'No description available.'}</p>
//         <a href="https://books.google.com/books?id=${book.id}" target="_blank">Read this book</a>
//         <iframe src="https://books.google.com/books?id=${book.id}&printsec=frontcover&output=embed"></iframe>
//         <button onclick="document.getElementById('book-details').style.display='none'">Close</button>
//     `;
//     bookDetails.style.display = 'block'; // Show book details
// }

// // Event listener for the search form
// document.getElementById('search-form').addEventListener('submit', (event) => {
//     event.preventDefault(); // Prevent form submission
//     const query = document.getElementById('search-input').value;
//     if (query.length > 2) {  // Fetch books when the search query is at least 3 characters long
//         fetchBooks(query);
//     }
// });


const API_URL = 'https://www.googleapis.com/books/v1/volumes?q=';

// Function to fetch books from the Google Books API
async function fetchBooks(query) {
    const bookList = document.getElementById('book-list'); // Fix ID to match HTML
    bookList.innerHTML = '<p>Loading...</p>'; // Show loading message

    try {
        const response = await fetch(`${API_URL}${encodeURIComponent(query)}`);
        if (!response.ok) throw new Error('Network response was not ok');
        const data = await response.json();
        displayBooks(data.items || []); // Display books after fetching
    } catch (error) {
        console.error('Error fetching data:', error);
        bookList.innerHTML = '<p>Error fetching data. Please try again later.</p>'; // Show error message
    }
}

// Function to display books in the book list
function displayBooks(books) {
    const bookList = document.getElementById('book-list'); // Fix ID to match HTML
    bookList.innerHTML = '';

    if (books.length === 0) {
        bookList.innerHTML = '<p>No books found.</p>';
        return;
    }

    books.forEach(book => {
        const bookItem = document.createElement('div');
        bookItem.classList.add('book-item');
        const bookInfo = book.volumeInfo;
        bookItem.innerHTML = `
            <img src="${bookInfo.imageLinks ? bookInfo.imageLinks.thumbnail : 'https://via.placeholder.com/150'}" alt="Book Cover">
            <h2>${bookInfo.title}</h2>
            <p><strong>Author:</strong> ${bookInfo.authors ? bookInfo.authors.join(', ') : 'Unknown'}</p>
        `;
        
        // Adding click event listener to show book details
        bookItem.addEventListener('click', () => showBookDetails(book));
        bookList.appendChild(bookItem);
    });
}

// Function to show details of a selected book
function showBookDetails(book) {
    const bookInfo = book.volumeInfo;
    const bookDetails = document.getElementById('book-details'); // Fix ID to match HTML
    bookDetails.innerHTML = `
        <h2>${bookInfo.title}</h2>
        <img src="${bookInfo.imageLinks ? bookInfo.imageLinks.thumbnail : 'https://via.placeholder.com/200x300'}" alt="Book Cover">
        <p><strong>Author:</strong> ${bookInfo.authors ? bookInfo.authors.join(', ') : 'Unknown'}</p>
        <p><strong>Published:</strong> ${bookInfo.publishedDate || 'N/A'}</p>
        <p><strong>Publisher:</strong> ${bookInfo.publisher || 'N/A'}</p>
        <p><strong>Description:</strong> ${bookInfo.description || 'No description available.'}</p>
        <a href="#" onclick="window.open('https://books.google.com/books?id=${book.id}', '_blank')">Read this book</a>
        <iframe src="https://books.google.com/books?id=${book.id}&printsec=frontcover&output=embed"></iframe>
        <button onclick="document.getElementById('book-details').style.display='none'">Close</button>
    `;
    bookDetails.style.display = 'block'; // Show book details
}

document.getElementById('search-form').addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent form submission
    const query = document.getElementById('search-input').value;
    if (query.length > 2) {  // Fetch books when the search query is at least 3 characters long
        fetchBooks(query);
    }
});


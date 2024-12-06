// api.js
import axios from 'axios';

const API_URL = 'http://127.0.0.1:8000/api/books'; // Example of a laravel api build locally

export const fetchData = async () => {
  try {
    const response = await axios.get(API_URL);
    // console.log(response, 'resppopnse')
    return response.data.data; // Return the response data
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error; // Rethrow the error for handling in the component
  }
};


// export const BOOKS = [
//   {genre: "Fruits", price: "$1", stocked: true, author: "Apple", title: "ss"},
//   {genre: "Fruits", price: "$1", stocked: true, author: "Dragonfruit", title: "ss"},
//   {genre: "Fruits", price: "$2", stocked: false, author: "Passionfruit", title: "ss"},
//   {genre: "Vegetables", price: "$2", stocked: true, author: "Spinach", title: "ss"},
//   {genre: "Vegetables", price: "$4", stocked: false, author: "Pumpkin", title: "ss"},
//   {genre: "Vegetables", price: "$1", stocked: true, author: "Peas", title: "ss"}
// ];

// export const BOOKS = [
//     {title: "To Kill a Mockingbird", author: "Harper Lee", publication_year: 1960, genre: "Fiction", isbn: "978-0-06-112008-4"},
//     {title: "1984", author: "George Orwell", publication_year: 1949, genre: "Dystopian", isbn: "978-0-452-28423-4"},
//     {title: "Pride and Prejudice", author: "Jane Austen", publication_year: 1813, genre: "Classic", isbn: "978-1-59308-201-7"},
//     {title: "The Great Gatsby", author: "F. Scott Fitzgerald", publication_year: 1925, genre: "Classic", isbn: "978-0-7432-7356-5"},
//     {title: "Moby Dick", author: "Herman Melville", publication_year: 1851, genre: "Adventure", isbn: "978-0-14-243724-7"},
//     {title: "The Catcher in the Rye", author: "J.D. Salinger", publication_year: 1951, genre: "Fiction", isbn: "978-0-316-76948-0"}
// ];

// api.js
import axios from 'axios';
import { useEffect, useState } from 'react';

const API_URL = 'http://127.0.0.1:8000/api/books'; // Example of a laravel api build locally
let fetchedData = null;

const BOOKS = [
    {title: "To Kill a Mockingbird", author: "Harper Lee", publication_year: 1960, genre: "Fiction", isbn: "978-0-06-112008-4"},
    {title: "1984", author: "George Orwell", publication_year: 1949, genre: "Dystopian", isbn: "978-0-452-28423-4"},
    {title: "Pride and Prejudice", author: "Jane Austen", publication_year: 1813, genre: "Classic", isbn: "978-1-59308-201-7"},
    {title: "The Great Gatsby", author: "F. Scott Fitzgerald", publication_year: 1925, genre: "Classic", isbn: "978-0-7432-7356-5"},
    {title: "Moby Dick", author: "Herman Melville", publication_year: 1851, genre: "Adventure", isbn: "978-0-14-243724-7"},
    {title: "The Catcher in the Rye", author: "J.D. Salinger", publication_year: 1951, genre: "Fiction", isbn: "978-0-316-76948-0"}
];
const BooksDataFetch = () => {
    const [booksData, setBooksData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    // setBooksData(BOOKS);
    useEffect(() => {
        // setBooksData(BOOKS);
        const getDataFromApi = async () => {
            try {
                const response = await axios.get(API_URL);
                console.log(response, 'response from local host laravel api')
                if (response.data.status) {
                    setBooksData(response.data.data);
                    fetchedData = response.data.data;
                }
            } catch (error) {
                console.error('Error fetching data:', error);
                setError(error); // Handle any errors
                throw error; // Rethrow the error for handling in the component
            } finally {
                setLoading(false); // Set loading to false after fetching
            }
            // return booksData;
        };
        getDataFromApi();
    }, []); // Empty dependency array means this effect runs once after the first render.
    return (
     <ul>
        {booksData.map((item, index) => (
          <li key={index}>{item.author || item.genre || item.title}</li> // Adjust according to your data structure
        ))}
      </ul>
    )
};

export { fetchedData };
// BOOKS = BooksDataFetch();
export default BooksDataFetch;
// export default (<div>sddd</div>);

// export  BOOKS = [
//     {title: "To Kill a Mockingbird", author: "Harper Lee", publication_year: 1960, genre: "Fiction", isbn: "978-0-06-112008-4"},
//     {title: "1984", author: "George Orwell", publication_year: 1949, genre: "Dystopian", isbn: "978-0-452-28423-4"},
//     {title: "Pride and Prejudice", author: "Jane Austen", publication_year: 1813, genre: "Classic", isbn: "978-1-59308-201-7"},
//     {title: "The Great Gatsby", author: "F. Scott Fitzgerald", publication_year: 1925, genre: "Classic", isbn: "978-0-7432-7356-5"},
//     {title: "Moby Dick", author: "Herman Melville", publication_year: 1851, genre: "Adventure", isbn: "978-0-14-243724-7"},
//     {title: "The Catcher in the Rye", author: "J.D. Salinger", publication_year: 1951, genre: "Fiction", isbn: "978-0-316-76948-0"}
// ];


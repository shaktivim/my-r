// DataDisplay.js
import React, { useEffect, useState } from 'react';
import { fetchData } from './api'; // Adjust the path as necessary

const DataDisplay = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const result = await fetchData(); // Call the function to fetch data
        setData(result); // Set the fetched data
        console.log(result, 'result');
      } catch (err) {
        setError(err); // Handle any errors
      } finally {
        setLoading(false); // Set loading to false after fetching
      }
    };

    getData();
  }, []); // Empty dependency array means this effect runs once after the first render.

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <h1>Fetched Data:</h1>
      <ul>
        {data.map((item, index) => (
          <li key={index}>{item.author || item.genre || item.title}</li> // Adjust according to your data structure
        ))}
      </ul>
    </div>
  );
};

export default DataDisplay;

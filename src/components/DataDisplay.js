// DataDisplay.js
import React, { useEffect, useState } from 'react';
import  BooksDataFetch, {fetchedData} from './api'; // Adjust the path as necessary

const DataDisplay = () => {
  
  return (
    <div>
      <h1>Fetched Data:</h1>
     <BooksDataFetch />
     {/* <ul>
        {fetchedData.map((item, index) => (
          <li key={index}>{item.author || item.genre || item.title}</li> // Adjust according to your data structure
        ))}
      </ul> */}
    </div>
  );
};

export default DataDisplay;

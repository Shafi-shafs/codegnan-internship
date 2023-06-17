import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Admin.css'

function App() {
  const [datas, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:5000/data');
      setData(response.data);
    } catch (error) {
      console.log('Error fetching data:', error);
    }
  };

  return (
    <div>
      <h1>Request From People to Donate Food:</h1>
      <div>        
        <table >
          <thead>
            <tr>
              <th className='th'>Name</th>
              <th className='th'>Location</th>
              <th className='th'>Mobile No</th>
              <th className='th'>Mail</th>
              <th className='th'>Google Pin</th>
              <th className='th'>Date</th>
            </tr>
          </thead>
          <tbody>
            {datas.map(item => (
              <tr key={item._id}>
                <td className='td'>{item.fullName}</td>
                <td className='td'>{item.location}</td>
                <td className='td'>{item.mobile}</td>
                <td className='td'>{item.mail}</td>
                <td className='td'>{item.map}</td>
                <td className='td'>{item.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;

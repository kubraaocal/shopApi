import {useState, useEffect} from 'react';
import axios from 'axios';

function useFetch(url) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [data, setData] = useState([]);

  const fecthData = async () => {
    try {
      const {data: responseData} = await axios.get(url); //her sayfada kullanmak için generic olmalı // datayı productData adıyla parçala
      setData(responseData);
      setLoading(false);
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    fecthData();
  }, []);

  return {error, loading, data};
}

export default useFetch;

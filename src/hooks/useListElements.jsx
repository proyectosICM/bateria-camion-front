import { useState, useEffect } from 'react';
import axios from 'axios';

const useListElements = (url) => {
  const [elements, setElements] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchElements = async () => {
      try {
        const token = await localStorage.getItem("token"); 
        const response = await axios.get(`${url}`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
        setElements(response.data);
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };

    fetchElements();
  }, [url]);

  return { elements, loading, error };
};

export default useListElements;

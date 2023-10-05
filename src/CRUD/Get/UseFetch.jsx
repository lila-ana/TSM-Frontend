import React, { useState, useEffect } from "react";
import axios from "axios";

export default function UseFetch(url) {
  const [data, setData] = useState('');
  
  useEffect(() => {
    axios.get(url)
      .then((response) => {
        console.log(response);
        setData(response.data);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, [url]);

  return { data };
}


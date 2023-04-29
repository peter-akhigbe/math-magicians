import React, { useState, useEffect } from 'react';
import './Quotes.css';

function Quotes() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const url = 'https://api.api-ninjas.com/v1/quotes';
  const key = 'qCIz2pqGeE44Bxi4EgERbw==X8SSHtTBmpNSkNz0';

  useEffect(() => {
    fetch(url, {
      method: 'GET',
      headers: {
        'X-Api-Key': key,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setData(data[0]);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="quote-container">
      <p className="quote">
        {loading ? 'Loading...' : data.quote || `Error: ${error.message}`}
      </p>
      <p className="author">
        {loading === false && error === null ? `- ${data.author}` : ''}
      </p>
    </div>
  );
}

export default Quotes;

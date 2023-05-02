import React, { useState, useEffect } from 'react';

function Quotes() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const url = 'https://api.api-ninjas.com/v1/quotes';
  const key = 'qCIz2pqGeE44Bxi4EgERbw==X8SSHtTBmpNSkNz0';

  const fetcher = () => {
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
  };

  useEffect(fetcher, []);

  const styles = {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
    padding: '0 5vw',
  };

  return (
    <>
      <div
        style={styles}
        className="quote-container"
      >
        <p className="quote">{loading ? 'Loading...' : `${data ? data.quote : error}`}</p>
        <p style={{ marginLeft: 'auto' }} className="author">
          {!loading && data ? `- ${data.author}` : null}
        </p>
      </div>
    </>
  );
}

export default Quotes;

import { useState, useEffect } from 'react';
import './App.css';

function Clock() {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const timerID = setInterval(refresh, 1000);
    return () => {
      clearInterval(timerID);
    };
  }, []);

  const refresh = () => {
    setTime(new Date().toLocaleTimeString());
  };

  return (
    <div>
      <p>{time}</p>
    </div>
  );
}

function addMinutes(date: Date, minutes: number) {
  return new Date(date.getTime() + minutes * 60000);
}

function Clock2() {
  const [time, setTime] = useState(new Date());

  const handleClick1 = () => {
    setTime(addMinutes(time, -10));
  };

  const handleClick2 = () => {
    setTime((previousTime) => addMinutes(previousTime, 10));
  };

  return (
    <div>
      <p>{time.toLocaleTimeString()}</p>
      <button onClick={handleClick1}>- 10 Minutes</button>
      <button onClick={handleClick2}>+ 10 Minutes</button>
    </div>
  );
}

function App() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([0]);
  const [page, setPage] = useState(0);

  function loadData() {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      if (page === 1) {
        setData([1, 2, 3, 4, 5]);
      } else if (page === 2) {
        setData([6, 7, 8, 9, 10]);
      } else {
        setData([]);
      }
    }, 1000);
  }

  useEffect(loadData, [page]);

  function handlePrevious() {
    setPage((currentPage) => currentPage - 1);
  }

  function handleNext() {
    setPage((currentPage) => currentPage + 1);
  }

  return (
    <>
      <span>Current Page: {page}</span><br/>
      <button onClick={handlePrevious}>Previous</button>
      <button onClick={handleNext}>Next</button>
      {loading && <p>Loading...</p>}
      {data && <pre>{JSON.stringify(data, null, 1)}</pre>}
      <Clock />
      <Clock2 />
    </>
  );
}

export default App;

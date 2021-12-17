// framework modules
import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import axios from 'axios';

// components
import { Message } from 'semantic-ui-react';
import ReposResult from '../ReposResult';
import SearchBar from '../SearchBar';
import AppMessage from '../AppMessage';

const RepoFinder = () => {
  console.log('RepoFinder');

  const [resultLoading, setResultLoading] = useState(false);
  const [inputVal, setInputVal] = useState('');
  const [searchVal, setSearchVal] = useState('');
  const [queryRes, setQueryRes] = useState({});

  useEffect(async () => {
    if (searchVal) {
      try {
        setResultLoading(true);
        console.log("current Search Value is", searchVal);
        let res = await axios.get(`https://api.github.com/search/repositories?q=${searchVal}`);
        res = res.data;
        console.log("data", res);
        setQueryRes(res);
      }
      catch (e) {
        console.error(e);
      }
      finally {
        setSearchVal('');
        setInputVal('');
        setResultLoading(false);
      };
    };
  }, [searchVal]);

  const inputChange = (e) => {
    console.log(e.target.value);
    setInputVal(e.target.value);
  };

  const searchSubmit = (e) => {
    e.preventDefault();
    setSearchVal(inputVal);
  };

  console.log("QUERY RES", queryRes);
  const repos = queryRes.items;
  console.log(repos instanceof Array);

  /* if queryRes has not been set yet with query data, queryRes.items does not exists.
We use this feature later on to check which component we show */

  const ln = repos instanceof Array ? repos.length : null;

  return (
    <>
      <form onSubmit={searchSubmit}>
        <SearchBar onChange={inputChange} isLoading={resultLoading} />
      </form>
      {
        ln === null && <AppMessage content='Please "git" it a try.' status="info" />
      }
      {
        !resultLoading && ln !== null && (// if not loading and query has been done (means axios query.data.items exists) we show message
          <>
            <AppMessage
              title="Search result"
              status={ln > 0 ? "success" : "error"}
              content={ln > 0 ? `Found ${ln} repo${ln > 1 ? 's' : ''}` : 'No repo found.'}
            />
            <ReposResult repos={repos} />
          </>
        )
      }

    </>
  );
};

export default RepoFinder;

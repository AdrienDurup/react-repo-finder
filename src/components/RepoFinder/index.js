// framework modules
import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import axios from 'axios';

// components
import GetMoreButton from '../GetMoreButton';
import ReposResult from '../ReposResult';
import SearchBar from '../SearchBar';
import AppMessage from '../AppMessage';

const maxPerPage = 9;

const RepoFinder = () => {
  console.log('RepoFinder');

  const [resultLoading, setResultLoading] = useState(false);
  const [inputVal, setInputVal] = useState('');
  const [searchVal, setSearchVal] = useState('');
  const [queryRes, setQueryRes] = useState([]);//will be array but we need to test if null at start
  const [getMore, setGetMore] = useState(1);
  const [savedQuery,setSavedQuery]=useState('');

  useEffect(async () => {
    if (searchVal) {
      try {
        setResultLoading(true);
        setSavedQuery(searchVal);
        console.log("current Search Value is", searchVal);
        const query = `https://api.github.com/search/repositories?q=${searchVal}&sort=stars&order=desc&page=${getMore}&per_page=${maxPerPage}`;
        console.log(query);
        let res = await axios.get(query);
        res = res.data.items;
        console.log("data", res);
        if (queryRes.length !== 0) {
          res = [...queryRes, ...res];
        };
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

  const HandleSetGetMore = () => {
    console.log("please get more");
    setGetMore(getMore + 1);
    setSearchVal(savedQuery);
  };

  console.log("QUERY RES", queryRes);
  const repos = queryRes;
  console.log(repos instanceof Array);

  /* if queryRes has not been set yet with query data, queryRes.items does not exists.
We use this feature later on to check which component we show */

  const ln = repos instanceof Array ? repos.length : null;

  return (
    <>
      <GetMoreButton onClick={HandleSetGetMore} />
      <form onSubmit={searchSubmit}>
        <SearchBar onChange={inputChange} isLoading={resultLoading} />
      </form>
              {/* if search has not been triggered AND there is no query stored in state */}
      {
        !searchVal && ln === 0 && <AppMessage content='Please "git" it a try.' status="info" />
      }
      {
        !resultLoading && ln > 0 && (// if not loading and query has been done (means axios query.data.items exists) we show message
          <>
            <AppMessage
              title="Search result"
              status={ln > 0 ? "success" : "error"}
              content={ln > 0 ? `Found ${ln} repo${ln > 1 ? 's' : ''}` : 'No repo found.'}
            />
            <ReposResult repos={repos} />
            {ln > maxPerPage && <GetMoreButton />}
          </>
        )
      }

    </>
  );
};

export default RepoFinder;

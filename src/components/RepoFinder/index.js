// framework modules
import { useEffect, useState } from 'react';
import axios from 'axios';

// components
import GetMoreButton from '../GetMoreButton';
import ReposResult from '../ReposResult';
import SearchBar from '../SearchBar';
import AppMessage from '../AppMessage';
import ResultMessage from '../ResultMessage';

const maxPerPage = 9;

const RepoFinder = () => {
  const [resultLoading, setResultLoading] = useState(false);
  const [inputVal, setInputVal] = useState('');
  const [searchVal, setSearchVal] = useState('');
  const [queryRes, setQueryRes] = useState([]);//will be array but we need to test if null at start
  const [resCount, setResCount] = useState(0);
  const [getMore, setGetMore] = useState(0);
  const [savedInput, setSavedInput] = useState('');

  useEffect(async () => {
    if (searchVal) {
      try {
        setResultLoading(true);
        /* getMore start at 0 on purpose but what we really need is an index starting at 1 */
        const query = `https://api.github.com/search/repositories?q=${searchVal}&sort=stars&order=desc&page=${getMore + 1}&per_page=${maxPerPage}`;
        let res = await axios.get(query);
        setResCount(res.data.total_count);
        res = res.data.items;
        console.log(getMore, query);
        console.log("data", res);
        /* if current search is same as before we increase rended cards concatenating results */
        console.log(searchVal, savedInput);
        if (searchVal === savedInput) {
          console.log("searchVal === savedInput");
          res = [...queryRes, ...res];
          console.log(res);
        };
        /* we set queryRes and savedInput whatsoever */
        setQueryRes(res);
      }
      catch (e) {
        console.error(e);
      }
      finally {
        setInputVal('');
        setResultLoading(false);
      };
    };
  }, [searchVal, getMore]);

  useEffect(() => {
    if (searchVal !== savedInput) {
      /* we reset search : counter for incremental result, and set "input saved value" again  */
      console.log("ELSE");
      setSavedInput(searchVal);
    };
    /* we always clear search value */
  }, [queryRes]);

  const inputChange = (e) => {
    setInputVal(e.target.value);
  };

  const searchSubmit = (e) => {
    e.preventDefault();
    /* we reset getMore as we launch a new search. */
    setGetMore(0);
    /* we set the value to find */
    setSearchVal(inputVal);
  };

  const HandleSetGetMore = () => {
    /* we want more of the same search value */
    setGetMore(getMore + 1);
    /* we pass "previous search value" in search value */
    setSearchVal(savedInput);
    /* say we replace button with new cards and new button */
    setCanLoadMore(true);
  };

  // console.log("QUERY RES", queryRes, searchVal, resCount, getMore);
  const repos = queryRes;
  // console.log(repos instanceof Array);

  const total = resCount;

  return (
    <>
      <form onSubmit={searchSubmit}>
        <SearchBar onChange={inputChange} isLoading={resultLoading} />
      </form>
      {/* if search has not been triggered AND there is no query stored in state */}
      {
        !searchVal && !savedInput && <AppMessage status="info">'Please "git" it a try.</AppMessage>
      }
      {
        !resultLoading && savedInput && (// if not loading and query has been done (means axios query.data.items exists) we show message
          <ResultMessage total={total} />
        )
      }
      <ReposResult repos={repos} />
      {resCount > maxPerPage && <GetMoreButton getMore={HandleSetGetMore} />}
    </>
  );
};

export default RepoFinder;

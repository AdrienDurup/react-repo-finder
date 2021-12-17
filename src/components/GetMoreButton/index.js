// import { Button } from "semantic-ui-react";
import ReposResult from '../ReposResult';
import './style.scss';

const GetMoreButton = ({ getMore, canLoadMore, repos }) => {

  const handleComponent = () => {
  
    getMore();
  }

  return (
    <>
      {
        canLoadMore && <ReposResult repos={repos} key={getMore} />
      }
      <button type="button" className="get-more-button" onClick={handleComponent}>+</button>
    </>
  );
};
export default GetMoreButton;

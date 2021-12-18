import './style.scss';

const GetMoreButton = ({ getMore }) => {
  const handleComponent = () => {
    getMore();
  };

  return (
    <>
      <button type="button" className="get-more-button" onClick={handleComponent}>+</button>
    </>
  );
};
export default GetMoreButton;

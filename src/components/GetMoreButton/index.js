import { Button } from "semantic-ui-react";

const GetMoreButton = ({onClick}) => {
  console.log("get more button");
  return (
    <Button circular size="large" onClick={onClick}>+</Button>
  );
};
export default GetMoreButton;

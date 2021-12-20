import { Button } from "semantic-ui-react";

const PrevNextButton = ({ getPage, disabled }) => {
  const doGetPage = (modifier) => () => { 
    console.log("prevnext");
    getPage(modifier); };
  return (
    <>
      <Button onClick={doGetPage(-1)} disabled={disabled}>Page précédente</Button>
      <Button onClick={doGetPage(1)} disabled={disabled}>Page suivante</Button>
    </>
  );
};

export default PrevNextButton;

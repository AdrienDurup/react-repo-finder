//import React from 'react';
import faqData from '../../data/faqData.JSON';
import { Container, Header } from 'semantic-ui-react';

// styling
import './style.css';

const FAQ = () => {
  const data = faqData;
  console.log('FAQ');
  return (
    <>
      <Header textAlign="left" size="huge">FAQ</Header>
      {data.map((el) => (
        <Container key={el.q}>
          <Header textAlign="left" size="medium">
          {/* question */}
            {el.q}
          </Header>
          <p className="faq-p">
          {/* answer */}
          {el.r}
          </p>
          </Container>
      ))
      }
    </>
  );
};

export default FAQ;

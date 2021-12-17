import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'semantic-ui-react';
import ResultCard from '../ResultCard';
import './ReposResult.css';

const ReposResult = React.memo(({ repos }) => {

  console.log('ReposResult rendering');

  return (
    <Card.Group itemsPerRow="3">
      {
        repos.map((el) => (
          <ResultCard {...el} key={el.id} />
        ))
      }
    </Card.Group>
  );
});

export default ReposResult;

ReposResult.propTypes = {
  repos: PropTypes.array.isRequired,
};

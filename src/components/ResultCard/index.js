import React from 'react';
import { Card, Icon, Image } from 'semantic-ui-react';
import './ResultCard.css';

const ResultCard = React.memo(({ name, owner, watchers, description }) => (
  <Card className="result-card">
    <Image fluid centered src={owner.avatar_url} ui={true} className="card_avatar" />
    <Card.Content>
      <Card.Header>{name}</Card.Header>
      <Card.Meta>
        <span className="author">{owner.login}</span>
      </Card.Meta>
      <Card.Description>
        {description}
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <a>
        <Icon name="star" />
        {watchers}
      </a>
    </Card.Content>
  </Card>
));

export default ResultCard;

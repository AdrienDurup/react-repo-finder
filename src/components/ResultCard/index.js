import { Card, Icon, Image } from 'semantic-ui-react';
import './ResultCard.css';

const ResultCard = ({ name, owner,watchers,description }) => {
console.log(owner);

  return (
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
          <Icon name="user" />
          {watchers}
        </a>
      </Card.Content>
    </Card>
  );
}

export default ResultCard;

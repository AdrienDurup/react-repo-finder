import { Input, Icon } from 'semantic-ui-react';

const SearchBar = ({ onChange, isLoading }) => (
  <Input
    icon={isLoading ? <Icon name='circle notched' loading /> : "search"}
    placeholder="Search repo..."
    iconPosition="left"
    fluid
    onChange={onChange}
  />
);
export default SearchBar;

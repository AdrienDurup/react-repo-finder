// == Import
import './styles.css';
import logo from '/src/assets/images/logo-github.png';

// == Composant
import RepoFinder from '../RepoFinder';

const App = () => (
  <div className="app">
    <img src={logo} className="github_logo" />
    <RepoFinder />
  </div>
);

// == Export
export default App;

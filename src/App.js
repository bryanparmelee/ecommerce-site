import { CATEGORY_DATA } from './shopData';

import './App.css';
import Directory from './components/directory/directory.component';

const App = () => {

  return <Directory categories={CATEGORY_DATA}/>;
}

export default App;

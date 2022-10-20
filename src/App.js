import { Routes, Route } from 'react-router-dom';

import Navigation from './routes/navigation/navigation.component';

import Home from './routes/home/home.component';

const App = () => {
    
  const Shop = () => {
    return (
      <div>
        <h3>I am the shop</h3>
      </div>
    )
  }
  
  return (
    <Routes>
    <Route path='/' element={ <Navigation /> }>
      <Route index element={<Home />} />
      <Route path='shop' index element={<Shop />} />
    </Route>
      
    </Routes>
  );
};

export default App;

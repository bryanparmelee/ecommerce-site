import { Routes, Route } from 'react-router-dom';

import Home from './routes/home/home.component';
import Navigation from './routes/navigation/navigation.component';
import SignIn from './routes/sign-in/sign-in.component';

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
      <Route path='shop' element={<Shop />} />
      <Route path='sign-in' element={<SignIn />} />
    </Route>
      
    </Routes>
  );
};

export default App;

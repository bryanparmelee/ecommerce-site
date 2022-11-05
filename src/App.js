import { Routes, Route } from 'react-router-dom';

import Home from './routes/home/home.component';
import Navigation from './routes/navigation/navigation.component';
import Authentication from './routes/authentication/authentication.component';
import Shop from './routes/shop/shop.component';
import SignIn from './routes/sign-in/sign-in.component';
import SignUp from './routes/sign-up/sign-up.component';
import Checkout from './routes/checkout/checkout.component';
import ProductPage from './routes/product-page/product-page.component';
import NoMatch from './routes/no-match/no-match.component';

const App = () => {
      
  return (
    <Routes>
      <Route path='/' element={ <Navigation /> }>
        <Route index element={<Home />} />
        <Route path='shop' element={<Shop />} />
        <Route path='shop/:productId' element={<ProductPage />} />
        <Route path='sign-in' element={<SignIn />} />
        <Route path='sign-up' element={<SignUp />} />
        <Route path='checkout' element={<Checkout />} />
        <Route path="*" element={<NoMatch />} />   
      </Route>     
    </Routes>
  );
};

export default App;

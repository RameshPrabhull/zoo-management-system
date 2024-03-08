import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Customer from './comp/customer';
import Home from './comp/Landing';
import Layout from './comp/layout';
import Zoo from './comp/zoo';
function App(){
    return(
        <BrowserRouter>
        <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/customer" element={<Customer/>} />
          <Route path="/zoo" element={<Zoo/>} />
         {/*  <Route path="*" element={<d/>} /> */}
          </Route>
            </Routes>
        </BrowserRouter>
    )
}
export default App;
import Login from './LoginPg';
// import Navbar from './NavbarPage';
import { BrowserRouter,Routes,Route } from "react-router-dom";
// import Products from './Products';
import ProductDetailsPage from './ProductsPage';
// import AddProductForm from './AddProduct';
function App() {
  return (
    <div >
      {/* <Navbar/> */}
<BrowserRouter>
<Routes>
  <Route path='/login' element ={<Login/>}/>
  {/* <Route path='productdetails' element={<ProductDetailsPage/>}/>  */}
   <Route path='/productsPage/:productId' element ={<ProductDetailsPage/>}/>
  {/* <Route path='/products' element ={<Products/>}/> */}
  {/* <Route path ='/AddProduct' element={<AddProductForm/>}/> */}
</Routes>
</BrowserRouter>
    </div>
  );
}
export default App;
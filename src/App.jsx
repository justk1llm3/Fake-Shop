import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ShopPage from './pages/ShopPage';
import Navbar from './components/Navbar';
import { fetchProducts, fetchProductById } from './services/api';


const App = () => {
    console.log(fetchProducts()); 
    return (
        <div>
            <Router>
                <Navbar/>
                <Routes>
                    <Route exact path="/" component={HomePage} />
                    <Route path="/Shop" component={ShopPage} />
                </Routes>
            </Router>
        </div>
    );
};

export default App;

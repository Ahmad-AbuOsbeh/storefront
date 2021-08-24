import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Category from './components/Category';
import Products from './components/Products';
import SimpleCart from './components/SimpleCart ';

function App() {
  return (
    <>
      <Header />
      <SimpleCart />
      <Category />
      <Products />
      <Footer />
    </>
  );
}

export default App;

import { useLocation } from 'react-router-dom';
import Footer from "./components/Footer";
import Header from "./components/Header";
import RoutesConfig from "./Routes";


function App() {
  const location = useLocation();
  const isHirePage = location.pathname === '/hire';

  return (
    <div className="App" style={{position:"relative",fontFamily: 'Poppins, sans-serif'}}>
      <Header isHirePage={isHirePage}  />
    <RoutesConfig />
    <Footer />
    </div>
  );
}

export default App;

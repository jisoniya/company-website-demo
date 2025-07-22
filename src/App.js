import { useLocation } from 'react-router-dom';
import Footer from "./components/Footer";
import Header from "./components/Header";
import RoutesConfig from "./Routes";


function App() {
  const location = useLocation();
  const isHirePage = location.pathname === '/hire';
  const isMobileServicePage = location.pathname === '/services/mobile-app-development';

  return (
    <div className="App" style={{position:"relative",fontFamily: 'Poppins, sans-serif'}}>
      <Header isHirePage={isHirePage} isMobileServicePage={isMobileServicePage} />
    <RoutesConfig />
    <Footer />
    </div>
  );
}

export default App;

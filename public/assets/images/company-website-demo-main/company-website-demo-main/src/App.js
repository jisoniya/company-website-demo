import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home/Home";
import RoutesConfig from "./Routes";


function App() {
  return (
    <div className="App" style={{position:"relative"}}>
      <Header />
    <RoutesConfig />
    <Footer />
    </div>
  );
}

export default App;

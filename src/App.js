
import Header from './sections/Header';
import ImportanceEau from './sections/Importance';
import CausesSurconsommation from './sections/Causes';
import Pourquoi from './sections/Pourquoi';
import Consequences from './sections/Consequences';
import Solutions from './sections/Solutions';
import Contact from './sections/Contact';
import Footer from './sections/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './App.css';
import 'animate.css';

function App() {
  return (
    <div className="App">
      <Header />
      <ImportanceEau />
      <CausesSurconsommation />
      <Pourquoi />
      <Consequences />
      <Solutions />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;

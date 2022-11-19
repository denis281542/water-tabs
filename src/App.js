import Header from './components/Header'
import Footer from './components/Footer'
import Main from './components/Main';
import HelmetComponent from './components/Helmet';

function App() { 
  return (
    <>
      <HelmetComponent/>
      <Header/>
      <Main/>
      <Footer />
    </>
  );
}

export default App;

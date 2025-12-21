import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './components/Header';
import SocialHousingForAll from './pages/SocialHousingForAll';
import Preamble from './pages/Preamble';

function App() {
  return (
    <>
      <Header/>
      <h1 className="pt-5 text-center">Salem Workers Deserve More</h1>
      <Preamble/>
      <SocialHousingForAll/>
    </>
  )
}

export default App

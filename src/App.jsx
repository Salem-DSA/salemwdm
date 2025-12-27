import Header from './components/Header';
import SocialHousing from './pages/SocialHousing';
import Preamble from './pages/Preamble';
import FreeBuses from './pages/FreeBuses';
import AbolishICE from './pages/AbolishICE';
import TaxtheRich from './pages/TaxtheRich';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
      <Header/>
      <h1 className="pt-4 text-center">Salem Workers Deserve More</h1>
      <Preamble/>
      <SocialHousing/>
      <FreeBuses />
      <AbolishICE />
      <TaxtheRich />
    </>
  )
}

export default App

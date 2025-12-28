import React, { useState } from 'react';
import Header from './components/Header';
import SocialHousing from './pages/SocialHousing';
import Preamble from './pages/Preamble';
import FreeBuses from './pages/FreeBuses';
import AbolishICE from './pages/AbolishICE';
import TaxtheRich from './pages/TaxtheRich';
import useNavSection from './hooks/useNavSection';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [activeKey, setActiveKey] = useState('');

  const preambleRef = useNavSection('#preamble', setActiveKey).ref;
  const socialHousingRef = useNavSection('#social_housing', setActiveKey).ref;
  const freeBusesRef = useNavSection('#free_buses', setActiveKey).ref;
  const abolishICERef = useNavSection('#abolish_ICE', setActiveKey).ref;
  const taxTheRichRef = useNavSection('#tax_the_rich', setActiveKey).ref;

  return (
    <>
      <Header activeKey={activeKey}/>
      <h1 className="pt-4 text-center">Salem Workers Deserve More</h1>
      <Preamble ref={preambleRef}/>
      <SocialHousing ref={socialHousingRef}/>
      <FreeBuses ref={freeBusesRef}/>
      <AbolishICE ref={abolishICERef}/>
      <TaxtheRich ref={taxTheRichRef}/>
    </>
  )
}

export default App

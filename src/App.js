import React from 'react';
import { CardProvider } from './context/CardContext';
import Bulletin from './pages/bulletin';


const App = () => {
  return (
    <CardProvider>
      <Bulletin />
    </CardProvider>
  )
}
export default App;
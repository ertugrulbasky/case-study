import React from 'react';
import { CouponProvider } from './context/CouponContext';
import HomePage from './pages/HomePage';

const App = () => {
  return (
    <CouponProvider>
      <HomePage />
    </CouponProvider>
  )
}
export default App;
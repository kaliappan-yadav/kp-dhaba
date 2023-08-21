import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter } from 'react-router-dom';
import NavigationComponent from './kp-dhaba/NavigationComponent';
import { RouterConfiguration } from './kp-dhaba/RouterConfiguration';
import { AuthProvider } from './kp-dhaba/context/AuthContext';
import { PriceProvider } from './kp-dhaba/context/priceContext';
function App() {
  return (
    <>
      <AuthProvider>
        <PriceProvider>
      <BrowserRouter>
      <NavigationComponent />
      <RouterConfiguration/>
</BrowserRouter></PriceProvider>
</AuthProvider>
    </>
  );
}

export default App;

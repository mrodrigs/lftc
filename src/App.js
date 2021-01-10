import {  useEffect } from 'react';
import WebFont from 'webfontloader';

import { Header } from './components';
import AppRoutes from './routes';
import GlobalStyles from './styles/global';

function App() {
  function loadResources() {
    WebFont.load({
      google: {
        families: [
          'Montserrat:300,400,500,600,700,800,900',
          'Nunito:300,400,500,600,700,800,900',
        ],
      },
    });
  }

  useEffect(() => {
    loadResources();
  }, []);

  return (
    <>
      <GlobalStyles />
      <Header />
      <AppRoutes />
    </>
  );
}

export default App;

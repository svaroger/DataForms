import HeroSection from './components/HeroSection'
import { Provider } from 'react-redux';

import store from './redux/store';


function App() {
  return (
    <Provider store={store}>
      <HeroSection />
    </Provider>
  );
}

export default App;

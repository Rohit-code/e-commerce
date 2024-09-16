
import './App.css';
import StoreNavigation from './customer/component/storeNavigation/StoreNavigation';
import Homepage from './customer/Pages/Homepage/Homepage';

function App() {
  return (
    <div className="">
      <div>
        <StoreNavigation/>
      </div>
      <div>
        <Homepage/>
      </div>
    </div>
  );
}

export default App;

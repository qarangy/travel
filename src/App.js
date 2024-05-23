import Countries from './components/Countries/Countries';
import Deals from './components/Deals/Deals';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Offers from './components/Offers/Offers';
import Visa from './components/Visa/Visa';
import Location from './components/Locations/Location';
import Booking from './components/Booking/Booking';
import Contacts from './components/Contacts/Contacts';
import Footer from './components/Footer/Footer';
import './index.css';

function App() {
  return (
    <>
      <Header />
      <Main />
      <Offers />
      <Visa />
      <Deals />
      <Countries />
      <Location />
      <Booking />
      <Contacts />
      <Footer />
    </>
  );
}

export default App;

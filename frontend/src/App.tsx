import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import AboutJat from './pages/AboutJat';
import JatGotras from './pages/JatGotras';
import GotraMembers from './pages/GotraMembers';
import AreaWiseJat from './pages/AreaWiseJat';
import ReligionWiseJat from './pages/ReligionWiseJat';
import ReligionMembers from './pages/ReligionMembers';
import ProfessionWiseJat from './pages/ProfessionWiseJat';
import ProfessionMembers from './pages/ProfessionMembers';
import Gallery from './pages/Gallery';
import Events from './pages/Events';
import JatOrganisation from './pages/JatOrganisation';
import JatClub from './pages/JatClub';
import JatHelpline from './pages/JatHelpline';
import JatWorldRecords from './pages/JatWorldRecords';
import ContactUs from './pages/ContactUs';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsConditions from './pages/TermsConditions';
import SamelanMembership from './pages/SamelanMembership';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import EnrollmentPopup from './components/EnrollmentPopup';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import './App.css';

function App() {
  return (
    <div className="App">
      <EnrollmentPopup />
      <FloatingWhatsApp />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-jat" element={<AboutJat />} />
        <Route path="/jat-gotras" element={<JatGotras />} />
        <Route path="/jat-gotras/:gotraName" element={<GotraMembers />} />
        <Route path="/area-wise-jat" element={<AreaWiseJat />} />
        <Route path="/religion-wise-jat" element={<ReligionWiseJat />} />
        <Route path="/religion-wise-jat/:religionName" element={<ReligionMembers />} />
        <Route path="/profession-wise-jat" element={<ProfessionWiseJat />} />
        <Route path="/profession-wise-jat/:professionName" element={<ProfessionMembers />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/events" element={<Events />} />
        <Route path="/jat-organisation" element={<JatOrganisation />} />
        <Route path="/jat-club" element={<JatClub />} />
        <Route path="/jat-helpline" element={<JatHelpline />} />
        <Route path="/jat-book-of-world-records" element={<JatWorldRecords />} />
        <Route path="/samelan-membership" element={<SamelanMembership />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-conditions" element={<TermsConditions />} />
      </Routes>
    </div>
  );
}

export default App;

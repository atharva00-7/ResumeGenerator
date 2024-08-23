import React, { useEffect, useState } from 'react';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import SignUp from './Components/SignUp';
import LandingPage from './Components/LandingPage';
import Home from './Components/Home';
import Login from './Components/Login';
import Test from './pages/Test';
import { usePDF } from 'react-to-pdf';
import PersonalInfo from './pages/PersonalInfo';
import EducationalInfo from './pages/EducationalInfo';
import WorkExperience from './pages/WorkExperience';
import Skills from './pages/Skills';
import Summary from './pages/Summary';
import Resume from './pages/Resume';
function App() {
  const { toPDF, targetRef } = usePDF({ filename: 'resume.pdf' });
  const [personalInfo, setPersonalInfo] = useState({});
  const [education, setEducation] = useState([]);
  const [workExperience, setWorkExperience] = useState([]);
  const [skills, setSkills] = useState([]);
  const [summary, setSummary] = useState('');
  const [showResume, setShowResume] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  useEffect(() => {
    setTimeout(() => setShowResume(false), 100);
  }, [showResume]);
  return (

    <div className='w-full'>
      <div>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/personalInfo" element={<PersonalInfo personalInfo={personalInfo} setPersonalInfo={setPersonalInfo} />} />
          <Route path="/education" element={<EducationalInfo education={education} setEducation={setEducation} />} />
          <Route path="/skill" element={<Skills skills={skills} setSkills={setSkills} />} />
          <Route path="/work" element={<WorkExperience workExperience={workExperience} setWorkExperience={setWorkExperience} />} />
          <Route path="/summary" element={<Summary summary={summary} setSummary={setSummary} />} />
        </Routes>
      </div>
      <div id='resume' ref={targetRef} className={`w-1/2 ${showResume ? '' : 'hidden'}`}>
        <Resume personalInfo={personalInfo} education={education} workExperience={workExperience} skills={skills} summary={summary} />
      </div>
      <div className='flex justify-center items-center m-4'>
        {location.pathname === '/summary' ? <button onClick={() => {
          setShowResume(true);
          setTimeout(() => {
            toPDF();
          }, 100);
          navigate("/");
        }} className='text-center px-10 py-3 font-semibold text-white bg-red-400 hover:bg-red-500 rounded-lg'>Download PDF</button> : ''}
      </div>
    </div>
  );
}

export default App;
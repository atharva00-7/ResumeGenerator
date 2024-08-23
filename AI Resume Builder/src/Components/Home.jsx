import { useState } from 'react';
import { PlusIcon, MinusIcon } from '@heroicons/react/solid';

const Home = () => {
  const [personalInfo, setPersonalInfo] = useState({
    name: '',
    linkedin: '',
    github: '',
    email: '',
  });

  const [education, setEducation] = useState([{ school: '', degree: '', year: '' }]);

  const handlePersonalInfoChange = (e) => {
    const { name, value } = e.target;
    setPersonalInfo({ ...personalInfo, [name]: value });
  };

  const handleEducationChange = (index, e) => {
    const { name, value } = e.target;
    const newEducation = [...education];
    newEducation[index] = { ...newEducation[index], [name]: value };
    setEducation(newEducation);
  };

  const addEducation = () => {
    setEducation([...education, { school: '', degree: '', year: '' }]);
  };

  const removeEducation = (index) => {
    setEducation(education.filter((_, i) => i !== index));
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Resume Builder</h1>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Name</label>
        <input
          type="text"
          name="name"
          value={personalInfo.name}
          onChange={handlePersonalInfoChange}
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">LinkedIn</label>
        <input
          type="text"
          name="linkedin"
          value={personalInfo.linkedin}
          onChange={handlePersonalInfoChange}
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">GitHub</label>
        <input
          type="text"
          name="github"
          value={personalInfo.github}
          onChange={handlePersonalInfoChange}
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">Email</label>
        <input
          type="email"
          name="email"
          value={personalInfo.email}
          onChange={handlePersonalInfoChange}
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
        />
      </div>

      <div className="mb-4">
        <h2 className="text-xl font-bold mb-2">Education</h2>
        {education.map((edu, index) => (
          <div key={index} className="border p-4 mb-2 rounded-md">
            <div className="mb-2">
              <label className="block text-sm font-medium text-gray-700">School</label>
              <input
                type="text"
                name="school"
                value={edu.school}
                onChange={(e) => handleEducationChange(index, e)}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              />
            </div>
            <div className="mb-2">
              <label className="block text-sm font-medium text-gray-700">Degree</label>
              <input
                type="text"
                name="degree"
                value={edu.degree}
                onChange={(e) => handleEducationChange(index, e)}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              />
            </div>
            <div className="mb-2">
              <label className="block text-sm font-medium text-gray-700">Year</label>
              <input
                type="text"
                name="year"
                value={edu.year}
                onChange={(e) => handleEducationChange(index, e)}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              />
            </div>
            <button
              type="button"
              onClick={() => removeEducation(index)}
              className="text-red-500 hover:text-red-700"
            >
              <MinusIcon className="h-5 w-5 inline-block" /> Remove
            </button>
          </div>
        ))}
        <button
          type="button"
          onClick={addEducation}
          className="text-blue-500 hover:text-blue-700"
        >
          <PlusIcon className="h-5 w-5 inline-block" /> Add Education
        </button>
      </div>
    </div>
  );
};

export default Home;

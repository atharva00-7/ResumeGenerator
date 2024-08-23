import React, { useEffect } from 'react';
import { MinusIcon, PlusIcon } from '@heroicons/react/solid';
import { NavLink, useNavigate } from 'react-router-dom';

const EducationalInfo = ({ education, setEducation }) => {
    const navigate = useNavigate();

    const handleEducationChange = (index, e) => {
        const { name, value } = e.target;
        const newEducation = [...education];
        newEducation[index] = { ...newEducation[index], [name]: value };
        setEducation(newEducation);
    };

    const addEducation = () => {
        setEducation([...education, { institute: '', degree: '', year: '' }]);
    };

    const removeEducation = (index) => {
        setEducation(education.filter((_, i) => i !== index));
    };

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (!token) {
            navigate('/login');
        }
        if (education.length === 0) {
            setEducation([{ institute: '', degree: '', year: '' }]);
        }
    }, [education, navigate, setEducation]);

    return (
        <div>
            <div className="flex justify-between py-4 px-4 md:py-8 md:px-16">
                <NavLink
                    to="/personalInfo"
                    className="py-2 px-4 md:py-3 md:px-8 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600"
                >
                    Back
                </NavLink>
                <NavLink
                    to="/skill"
                    className="py-2 px-4 md:py-3 md:px-8 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600"
                >
                    Next
                </NavLink>
            </div>
            <div className="w-full px-4 md:px-32 py-4">
                <h1 className="text-3xl md:text-5xl text-blue-400 font-bold mb-6 text-center">Education</h1>
                {education.map((edu, index) => (
                    <div key={index} className="border p-4 mb-2 rounded-md">
                        <div className="mb-2">
                            <label className="block text-sm font-medium text-gray-700">Institute</label>
                            <input
                                type="text"
                                name="institute"
                                value={edu.institute}
                                onChange={(e) => handleEducationChange(index, e)}
                                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                        <div className="mb-2">
                            <label className="block text-sm font-medium text-gray-700">Degree</label>
                            <input
                                type="text"
                                name="degree"
                                value={edu.degree}
                                onChange={(e) => handleEducationChange(index, e)}
                                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                        <div className="mb-2">
                            <label className="block text-sm font-medium text-gray-700">Year</label>
                            <input
                                type="text"
                                name="year"
                                value={edu.year}
                                onChange={(e) => handleEducationChange(index, e)}
                                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                        <button
                            type="button"
                            onClick={() => removeEducation(index)}
                            className="text-red-500 hover:text-red-700 flex items-center"
                        >
                            <MinusIcon className="h-5 w-5 inline-block mr-1" /> Remove
                        </button>
                    </div>
                ))}
                <button
                    type="button"
                    onClick={addEducation}
                    className="text-blue-500 hover:text-blue-700 flex items-center"
                >
                    <PlusIcon className="h-5 w-5 inline-block mr-1" /> Add Education
                </button>
            </div>
        </div>
    );
};

export default EducationalInfo;

import React, { useEffect } from 'react';
import { MinusIcon, PlusIcon } from '@heroicons/react/solid';
import { NavLink, useNavigate } from 'react-router-dom';

const WorkExperience = ({ workExperience, setWorkExperience }) => {
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (!token) {
            navigate('/login');
        }
        if (workExperience.length === 0) {
            setWorkExperience([{ company: '', position: '', year: '', jobDone: '' }]);
        }
    }, [workExperience, setWorkExperience, navigate]);

    const handleWorkChange = (index, e) => {
        const { name, value } = e.target;
        const newWorkExperience = [...workExperience];
        newWorkExperience[index] = { ...newWorkExperience[index], [name]: value };
        setWorkExperience(newWorkExperience);
    };

    const addWorkExperience = () => {
        setWorkExperience([...workExperience, { company: '', position: '', year: '', jobDone: '' }]);
    };

    const removeWorkExperience = (index) => {
        setWorkExperience(workExperience.filter((_, i) => i !== index));
    };

    return (
        <div>
            <div className="flex justify-between py-4 px-4 md:py-8 md:px-16">
                <NavLink
                    to="/skill"
                    className="py-2 px-4 md:py-3 md:px-8 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600"
                >
                    Back
                </NavLink>
                <NavLink
                    to="/summary"
                    className="py-2 px-4 md:py-3 md:px-8 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600"
                >
                    Next
                </NavLink>
            </div>
            <div className="w-full px-4 md:px-32 py-4">
                <h1 className="text-3xl md:text-5xl text-blue-400 font-bold mb-6 text-center">Work Experience</h1>
                {workExperience.map((work, index) => (
                    <div key={index} className="border p-4 mb-8 rounded-md">
                        <div className="mb-2">
                            <label className="block text-sm font-medium text-gray-700">Company</label>
                            <input
                                type="text"
                                name="company"
                                value={work.company}
                                onChange={(e) => handleWorkChange(index, e)}
                                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                        <div className="mb-2">
                            <label className="block text-sm font-medium text-gray-700">Position</label>
                            <input
                                type="text"
                                name="position"
                                value={work.position}
                                onChange={(e) => handleWorkChange(index, e)}
                                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                        <div className="mb-2">
                            <label className="block text-sm font-medium text-gray-700">Year</label>
                            <input
                                type="text"
                                name="year"
                                value={work.year}
                                onChange={(e) => handleWorkChange(index, e)}
                                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                        <div className="mb-2">
                            <label className="block text-sm font-medium text-gray-700">Job Done</label>
                            <textarea
                                name="jobDone"
                                value={work.jobDone}
                                onChange={(e) => handleWorkChange(index, e)}
                                rows="3"
                                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                        {workExperience.length > 1 && (
                            <button
                                type="button"
                                onClick={() => removeWorkExperience(index)}
                                className="text-red-500 hover:text-red-700 flex items-center"
                            >
                                <MinusIcon className="h-5 w-5 inline-block mr-1" /> Remove
                            </button>
                        )}
                    </div>
                ))}
                <button
                    type="button"
                    onClick={addWorkExperience}
                    className="text-blue-500 hover:text-blue-700 flex items-center"
                >
                    <PlusIcon className="h-5 w-5 inline-block mr-1" /> Add Work Experience
                </button>
            </div>
        </div>
    );
};

export default WorkExperience;

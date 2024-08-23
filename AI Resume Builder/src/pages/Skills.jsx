import React, { useEffect } from 'react';
import { MinusIcon, PlusIcon } from '@heroicons/react/solid';
import { NavLink, useNavigate } from 'react-router-dom';

const Skills = ({ skills, setSkills }) => {
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (!token) {
            navigate('/login');
        }
        if (skills.length === 0) {
            setSkills([{ title: '', skill: '' }]);
        }
    }, [skills, setSkills, navigate]);

    const handleSkillChange = (index, e) => {
        const { name, value } = e.target;
        const newSkills = [...skills];
        newSkills[index] = { ...newSkills[index], [name]: value };
        setSkills(newSkills);
    };

    const addSkill = () => {
        setSkills([...skills, { title: '', skill: '' }]);
    };

    const removeSkill = (index) => {
        setSkills(skills.filter((_, i) => i !== index));
    };

    return (
        <div>
            <div className="flex justify-between py-4 px-4 md:py-8 md:px-16">
                <NavLink
                    to="/education"
                    className="py-2 px-4 md:py-3 md:px-8 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600"
                >
                    Back
                </NavLink>
                <NavLink
                    to="/work"
                    className="py-2 px-4 md:py-3 md:px-8 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600"
                >
                    Next
                </NavLink>
            </div>
            <div className="w-full px-4 md:px-32 py-4">
                <h1 className="text-3xl md:text-5xl text-blue-400 font-bold mb-6 text-center">Skills</h1>
                {skills.map((skillEntry, index) => (
                    <div key={index} className="border p-4 mb-2 rounded-md">
                        <div className="mb-2">
                            <label className="block text-sm font-medium text-gray-700">Title</label>
                            <input
                                type="text"
                                name="title"
                                value={skillEntry.title}
                                onChange={(e) => handleSkillChange(index, e)}
                                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                        <div className="mb-2">
                            <label className="block text-sm font-medium text-gray-700">Skill</label>
                            <input
                                type="text"
                                name="skill"
                                value={skillEntry.skill}
                                onChange={(e) => handleSkillChange(index, e)}
                                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                        {skills.length > 1 && (
                            <button
                                type="button"
                                onClick={() => removeSkill(index)}
                                className="text-red-500 hover:text-red-700 flex items-center"
                            >
                                <MinusIcon className="h-5 w-5 inline-block mr-1" /> Remove
                            </button>
                        )}
                    </div>
                ))}
                <button
                    type="button"
                    onClick={addSkill}
                    className="text-blue-500 hover:text-blue-700 flex items-center"
                >
                    <PlusIcon className="h-5 w-5 inline-block mr-1" /> Add Skill
                </button>
            </div>
        </div>
    );
};

export default Skills;

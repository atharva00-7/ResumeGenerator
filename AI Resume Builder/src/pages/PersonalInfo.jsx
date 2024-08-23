import React, { useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { UserIcon, LinkIcon, MailIcon } from '@heroicons/react/solid';

const PersonalInfo = ({ personalInfo, setPersonalInfo }) => {
    const navigate = useNavigate();

    const handleInputChange = (e) => {
        setPersonalInfo({ ...personalInfo, [e.target.name]: e.target.value });
    };

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (!token) {
            navigate('/login');
        }
    }, [navigate]);

    return (
        <div>
            <div className="flex justify-between py-4 px-4 md:py-8 md:px-16">
                <NavLink
                    to="/"
                    className="py-2 px-4 md:py-3 md:px-8 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600"
                >
                    Back
                </NavLink>
                <NavLink
                    to="/education"
                    className="py-2 px-4 md:py-3 md:px-8 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600"
                >
                    Next
                </NavLink>
            </div>
            <div className="w-full px-4 md:px-32 py-4">
                <div>
                    <h1 className="text-3xl md:text-5xl text-blue-400 font-bold mb-6 text-center">Personal Information</h1>
                    <form className="space-y-4 md:space-y-6 p-4 md:p-10">
                        <div className="relative">
                            <UserIcon className="h-5 w-5 absolute left-3 top-3 text-gray-400" />
                            <input
                                type="text"
                                name="name"
                                placeholder="Name"
                                value={personalInfo.name || ''}
                                onChange={handleInputChange}
                                className="pl-10 font-bold text-base md:text-lg pr-4 py-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                        <div className="relative">
                            <LinkIcon className="h-5 w-5 absolute left-3 top-3 text-gray-400" />
                            <input
                                type="text"
                                name="github"
                                placeholder="GitHub"
                                value={personalInfo.github || ''}
                                onChange={handleInputChange}
                                className="pl-10 font-bold text-base md:text-lg pr-4 py-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                        <div className="relative">
                            <LinkIcon className="h-5 w-5 absolute left-3 top-3 text-gray-400" />
                            <input
                                type="text"
                                name="linkedIn"
                                placeholder="LinkedIn"
                                value={personalInfo.linkedIn || ''}
                                onChange={handleInputChange}
                                className="pl-10 font-bold text-base md:text-lg pr-4 py-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                        <div className="relative">
                            <MailIcon className="h-5 w-5 absolute left-3 top-3 text-gray-400" />
                            <input
                                type="email"
                                name="email"
                                placeholder="Email"
                                value={personalInfo.email || ''}
                                onChange={handleInputChange}
                                className="pl-10 font-bold text-base md:text-lg pr-4 py-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default PersonalInfo;

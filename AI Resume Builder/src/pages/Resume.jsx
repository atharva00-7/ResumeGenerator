import React from 'react';

const Resume = ({ personalInfo, education, workExperience, skills, summary }) => {
    return (
        <div className="w-full px-6 py-8 md:px-10 md:py-16">
            <div className="mb-6">
                <h1 className="font-black text-2xl md:text-4xl break-words">{personalInfo.name}</h1>
                <div className="py-2">
                    <p className="font-semibold break-words">
                        Github: <a href={personalInfo.github} className="text-blue-500">{personalInfo.github}</a>
                    </p>
                    <p className="font-semibold break-words">
                        LinkedIn: <a href={personalInfo.linkedIn} className="text-blue-500">{personalInfo.linkedIn}</a>
                    </p>
                    <p className="font-semibold break-words">Email: {personalInfo.email}</p>
                </div>
            </div>
            <div className="mb-6">
                <h1 className="font-black text-xl md:text-2xl break-words">Education</h1>
                {education.map((edu, index) => (
                    <div key={index} className="mb-4">
                        <h2 className="font-bold text-lg md:text-xl break-words">{edu.institute}</h2>
                        <div className="flex flex-col md:flex-row md:gap-10">
                            <p className="font-semibold break-words">Degree: {edu.degree}</p>
                            <p className="font-semibold break-words">Year: {edu.year}</p>
                        </div>
                    </div>
                ))}
            </div>
            <div className="mb-6">
                <h1 className="font-black text-xl md:text-2xl break-words">Work Experience</h1>
                {workExperience.map((work, index) => (
                    <div key={index} className="mb-4">
                        <div className="flex flex-col md:flex-row md:justify-between md:items-center">
                            <div className="flex flex-col md:flex-row md:items-center">
                                <h2 className="font-bold text-lg md:text-xl break-words">{work.company} - </h2>
                                <p className="font-semibold mt-1 break-words">{work.position}</p>
                            </div>
                            <p className="font-semibold break-words">Year: {work.year}</p>
                        </div>
                        <p className="mt-2">{work.jobDone}</p>
                    </div>
                ))}
            </div>
            <div className="mb-6">
                <h1 className="font-black text-xl md:text-2xl break-words">Skills</h1>
                {skills.map((skill, index) => (
                    <div key={index} className="mb-4">
                        <div className="flex flex-col md:flex-row md:justify-between md:items-center">
                            <div className="flex flex-col md:flex-row md:items-center">
                                <h2 className="font-bold text-lg md:text-xl break-words">{skill.title} - </h2>
                                <p className="font-semibold mt-1 break-words">{skill.skill}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="mb-6">
                <h1 className="font-black text-xl md:text-2xl break-words">Summary</h1>
                <p className="mt-2 break-words">{summary}</p>
            </div>
        </div>
    );
};

export default Resume;

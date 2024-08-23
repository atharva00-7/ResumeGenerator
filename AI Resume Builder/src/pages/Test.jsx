import React from 'react';

const Test = ({ personalInfo, education, workExperience, skills, summary }) => {
    return (
        <div className='w-full text-wrap bg-yellow-50 px-10 py-16'>
            <div className='mb-2'>
                <h1 className='font-black text-4xl break-words'>Name:{personalInfo.name}</h1>
                <div className='py-2'>
                    <p className='font-semibold break-words'>Github:  <a href={`${personalInfo.github}`}>{personalInfo.github}</a></p>
                    <p className='font-semibold break-words'>LinkedIN:<a href=''>{personalInfo.linkedIn}</a></p>
                    <p className='font-semibold break-words'>Email: {personalInfo.email}</p>
                </div>
            </div>
            <div className='mb-2'>
                <h1 className='font-black text-xl break-words'>Education</h1>
                {education.map((edu, index) => {
                    return (
                        <div key={index}>
                            <h2 className='font-bold text-lg break-words'>{edu.institute}</h2>
                            <div className='flex gap-10'>
                                <p className='font-semibold break-words'>Degree: {edu.degree}</p>
                                <p className='font-semibold break-words'>Year: {edu.year}</p>
                            </div>
                        </div>
                    )
                })}
            </div>
            <div className='mb-2'>
                <h1 className='font-black text-xl break-words'>Work Experience</h1>
                {workExperience.map((work, index) => {
                    return (
                        <div key={index}>
                            <div className='flex justify-between items-center'>
                                <div className='flex items-center'><h2 className='font-bold text-lg break-words'>{work.company}-</h2>
                                    <p className='font-semibold break-words'>Degree: {work.position}</p></div>
                                <p className='font-semibold break-words'>Year: {work.year}</p>
                            </div>
                            <p>{work.jobDone}</p>
                        </div>
                    )
                }
                )}
            </div>
            <div className='mb-2'>
                <h1 className='font-black text-xl break-words'>Skills</h1>
                {skills.map((skill, index) => {
                    return (
                        <div key={index}>
                            <div className='flex justify-between items-center'>
                                <div className='flex items-center'><h2 className='font-bold text-lg break-words'>{skill.title}-</h2>
                                    <p className='font-semibold break-words'>{skill.skill}</p></div>
                            </div>
                        </div>
                    )
                }
                )}
            </div>
            <hr />
            <div className='mb-2'>
                <h1 className='font-black text-xl break-words'>Summary</h1>
                <p>{summary}</p>
            </div>
        </div>
    )
};

export default Test;
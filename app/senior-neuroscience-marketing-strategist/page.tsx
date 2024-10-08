'use client';
import { useState } from 'react';

function JobApplication() {
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setSubmitted(true);
    }

    return (
        <div className="flex flex-col px-5 bg-[#131213] text-base pl-60 pr-60 pt-60">
            <div className="self-center text-5xl font-medium text-center text-white max-md:max-w-full max-md:text-4xl max-md:leading-10">
                Senior Neuroscience Marketing Strategist
            </div>
            <div className="self-center mt-6 text-xl text-center text-white max-md:mt-10">
                Strategy - Full-time, Remote
            </div>
            <div className="mt-10 text-white">
                <h2 className="text-3xl font-bold mb-6">About the Role</h2>
                <p className="mb-6">
                    As a Senior Neuroscience Marketing Strategist, you will lead the development and implementation of innovative marketing strategies that leverage the power of neuroscience to drive significant business growth for our clients. You will collaborate with cross-functional teams to integrate AI-driven insights into comprehensive marketing plans, ensuring that our strategies are at the cutting edge of both neuroscience and marketing fields. If you are passionate about understanding consumer behavior at a neural level and transforming those insights into actionable marketing tactics, this is the perfect opportunity!
                </p>
                <p className="mb-6">
                    This role is remote. We use a hybrid work model of 3 days in the virtual office per week and offer relocation assistance to new employees if needed.
                </p>
                <h2 className="text-3xl font-bold mb-6">In this role, you will:</h2>
                <ul className="list-disc list-inside mb-6 space-y-2">
                    <li>Lead the creation and execution of neuroscience-based marketing strategies tailored to client needs.</li>
                    <li>Analyze consumer behavior and neurological data to identify key insights and trends.</li>
                    <li>Collaborate with data scientists and AI specialists to integrate machine learning models into marketing strategies.</li>
                    <li>Present complex findings and strategic recommendations to clients in a clear and actionable manner.</li>
                    <li>Stay updated with the latest research in neuroscience and its applications to marketing.</li>
                    <li>Mentor junior team members and provide thought leadership within the company.</li>
                </ul>
                <h2 className="text-3xl font-bold mb-6">You might thrive in this role if you:</h2>
                <ul className="list-disc list-inside mb-6 space-y-2">
                    <li>Have a deep understanding of neuroscience principles and their applications in marketing.</li>
                    <li>Possess strong analytical skills and experience with data analysis tools.</li>
                    <li>Have excellent communication skills, with the ability to translate complex data into clear insights.</li>
                    <li>Are adept at collaborating with cross-functional teams and managing multiple projects simultaneously.</li>
                    <li>Have a proven track record of developing successful marketing strategies based on consumer behavior insights.</li>
                    <li>Get a great deal of satisfaction from driving business growth through innovative marketing tactics.</li>
                </ul>
                <h2 className="text-3xl font-bold mb-6">These attributes are nice to have:</h2>
                <ul className="list-disc list-inside space-y-2">
                    <li>PhD or Master’s degree in Neuroscience, Psychology, or a related field.</li>
                    <li>Experience in applying machine learning models to marketing strategies.</li>
                    <li>Knowledge of advanced data visualization techniques and tools.</li>
                    <li>Background in consumer behavior research.</li>
                    <li>Experience working in a consulting environment.</li>
                </ul>
                <h2 className="text-3xl font-bold mb-6 mt-20">Apply for this position</h2>
                {submitted ? (
                    <div className="text-white text-center text-2xl mt-6 mb-20">
                        Thank you for your application. We will get back to you soon!
                    </div>
                ) : (
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <label className="block text-white mb-2">Full Name</label>
                            <input type="text" className="w-full px-3 py-2 text-black" required />
                        </div>
                        <div>
                            <label className="block text-white mb-2">Email</label>
                            <input type="email" className="w-full px-3 py-2 text-black" required />
                        </div>
                        <div>
                            <label className="block text-white mb-2">Phone Number</label>
                            <input type="tel" className="w-full px-3 py-2 text-black" required />
                        </div>
                        <div>
                        <label className="block text-white mb-2">Cover Letter</label>
                            <textarea className="w-full px-3 py-2 text-black" rows={4} required></textarea>
                        </div>
                        <div>
                            <label className="block text-white mb-2">Resume</label>
                            <input type="file" className="w-full text-white" required />
                        </div>
                        <div>
                            <button type="submit" className="px-6 mb-20 py-2 bg-[#F1D089] text-black font-medium rounded-3xl">
                                Submit Application
                            </button>
                        </div>
                    </form>
                )}
            </div>
        </div>
    );
}

export default JobApplication;

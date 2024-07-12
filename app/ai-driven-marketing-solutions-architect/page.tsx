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
                AI-Driven Marketing Solutions Architect
            </div>
            <div className="self-center mt-6 text-xl text-center text-white max-md:mt-10">
                Engineering - Full-time, Remote
            </div>
            <div className="mt-10 text-white">
                <h2 className="text-3xl font-bold mb-6">About the Role</h2>
                <p className="mb-6">
                    As an AI-Driven Marketing Solutions Architect, you will design and implement AI solutions for optimizing marketing strategies. You will work closely with data scientists and engineers to develop and deploy machine learning models. You will ensure scalability and efficiency of AI systems within client projects. If you are passionate about integrating cutting-edge AI technologies into practical marketing applications, this is the perfect opportunity!
                </p>
                <p className="mb-6">
                    This role is remote. We use a hybrid work model of 3 days in the virtual office per week and offer relocation assistance to new employees if needed.
                </p>
                <h2 className="text-3xl font-bold mb-6">In this role, you will:</h2>
                <ul className="list-disc list-inside mb-6 space-y-2">
                    <li>Design and implement AI solutions for optimizing marketing strategies.</li>
                    <li>Work closely with data scientists and engineers to develop and deploy machine learning models.</li>
                    <li>Ensure scalability and efficiency of AI systems within client projects.</li>
                    <li>Stay updated with the latest advancements in AI and their applications in marketing.</li>
                    <li>Present findings and strategic recommendations to clients.</li>
                    <li>Mentor junior team members and provide technical leadership.</li>
                </ul>
                <h2 className="text-3xl font-bold mb-6">You might thrive in this role if you:</h2>
                <ul className="list-disc list-inside mb-6 space-y-2">
                    <li>Have a deep understanding of AI and machine learning frameworks.</li>
                    <li>Possess strong programming skills in Python, R, or similar languages.</li>
                    <li>Have extensive experience with AI and machine learning frameworks.</li>
                    <li>Are adept at collaborating with cross-functional teams and managing multiple projects simultaneously.</li>
                    <li>Have a proven track record of developing and deploying AI-driven solutions.</li>
                    <li>Get a great deal of satisfaction from driving business growth through innovative AI applications.</li>
                </ul>
                <h2 className="text-3xl font-bold mb-6">These attributes are nice to have:</h2>
                <ul className="list-disc list-inside space-y-2">
                    <li>Master’s or PhD in Computer Science, AI, or related field.</li>
                    <li>Experience in marketing or related industries.</li>
                    <li>Knowledge of advanced data visualization techniques and tools.</li>
                    <li>Background in consumer behavior research.</li>
                    <li>Experience working in a consulting environment.</li>
                </ul>
                <h2 className="text-3xl font-bold mb-6 mt-20">Apply for this position</h2>
                {submitted ? (
                    <div className="text-white text-center text-2xl mt-6">
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
                            <button type="submit" className="px-6 py-2 bg-[#F1D089] text-black font-medium rounded-3xl mb-20">
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

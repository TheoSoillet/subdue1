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
                Chief Innovation Officer - Marketing Technology
            </div>
            <div className="self-center mt-6 text-xl text-center text-white max-md:mt-10">
                Technology - Full-time, Remote
            </div>
            <div className="mt-10 text-white">
                <h2 className="text-3xl font-bold mb-6">About the Role</h2>
                <p className="mb-6">
                    As a Chief Innovation Officer - Marketing Technology, you will lead the innovation strategy for integrating advanced technologies into marketing solutions. You will identify and evaluate emerging technologies and trends in AI and neuroscience, driving the development of new products and services that leverage cutting-edge technology. If you are passionate about fostering a culture of innovation and leading the charge in marketing technology, this is the perfect opportunity!
                </p>
                <p className="mb-6">
                    This role is remote. We use a hybrid work model of 3 days in the virtual office per week and offer relocation assistance to new employees if needed.
                </p>
                <h2 className="text-3xl font-bold mb-6">In this role, you will:</h2>
                <ul className="list-disc list-inside mb-6 space-y-2">
                    <li>Lead the innovation strategy for integrating advanced technologies into marketing solutions.</li>
                    <li>Identify and evaluate emerging technologies and trends in AI and neuroscience.</li>
                    <li>Drive the development of new products and services that leverage cutting-edge technology.</li>
                    <li>Foster a culture of innovation within the company.</li>
                    <li>Collaborate with cross-functional teams to ensure alignment with overall business goals.</li>
                    <li>Present findings and strategic recommendations to clients and stakeholders.</li>
                </ul>
                <h2 className="text-3xl font-bold mb-6">You might thrive in this role if you:</h2>
                <ul className="list-disc list-inside mb-6 space-y-2">
                    <li>Have a deep understanding of AI, neuroscience, and their applications in marketing.</li>
                    <li>Possess strong leadership and strategic thinking skills.</li>
                    <li>Have a proven track record of leading innovation initiatives in technology or marketing firms.</li>
                    <li>Are adept at collaborating with cross-functional teams and managing multiple projects simultaneously.</li>
                    <li>Have excellent communication skills, with the ability to inspire and motivate teams.</li>
                    <li>Get a great deal of satisfaction from driving business growth through innovative technology applications.</li>
                </ul>
                <h2 className="text-3xl font-bold mb-6">These attributes are nice to have:</h2>
                <ul className="list-disc list-inside space-y-2">
                    <li>Master's or PhD in Business, Technology Management, or related field.</li>
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

"use client";
import React, { useState } from "react";

const AboutUs = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        programme: "",
    });

    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setStatus(null);

        try {
            const response = await fetch('/api/counselling', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setStatus('Application sent successfully!');
                setFormData({
                    name: "",
                    email: "",
                    phone: "",
                    programme: "",
                });
            } else {
                setStatus('Failed to send application. Please try again.');
            }
        } catch (error) {
            console.error('Submission error:', error);
            setStatus('An error occurred. Please try again later.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <section
            className="relative py-20 overflow-hidden bg-cover bg-center"
            style={{
                backgroundImage: "url('/img/accurate-building.webp')",
            }}
        >
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-linear-to-r from-[#0f1b4c]/90 via-[#1c2a6e]/70 to-[#3046d4]/60"></div>

            <div className="relative max-w-7xl mx-auto px-6">
                {/* Grid */}
                <div className="flex gap-12 items-center">
                    {/* LEFT CONTENT */}
                    <div className="w-full lg:w-7/12">
                        {/* Heading */}
                        <h2 className="text-5xl font-bold text-white mb-4">Accurate College of Law</h2>

                        <p className="text-white/90 leading-relaxed mb-6">
                            Accurate College of Law, Greater Noida, is recognized by CCS University Meerut and also
                            approved by the Bar Council of India under section of AERS.
                        </p>

                        <p className="text-white/80 leading-relaxed mb-6">
                            The college is committed to developing a competitive international environment through
                            global legal consciousness in the community for realization of justice to the masses and the
                            objectives embodied in the Constitution of India.
                        </p>

                        <p className="text-white/80 leading-relaxed">
                            We have highly educated, globally trained, and experienced national and international
                            faculty members, alongside a motivated and dedicated group of learners.
                        </p>
                    </div>

                    {/* RIGHT FORM (GLASS EFFECT) */}
                    <div className="w-full lg:w-5/12">
                        <div className="backdrop-blur-xl bg-white/15 border border-white/20 rounded-2xl p-6 shadow-2xl">
                            <h3 className="text-2xl font-semibold text-white mb-2">Apply for Admission</h3>

                            <p className="text-sm text-white/80 mb-6">
                                Fill in the details and our team will contact you shortly.
                            </p>

                            <form className="space-y-4" onSubmit={handleSubmit}>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="Full Name"
                                    className="w-full bg-white/80 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-white text-gray-900 placeholder-gray-500"
                                    required
                                />

                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="Email Address"
                                    className="w-full bg-white/80 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-white text-gray-900 placeholder-gray-500"
                                    required
                                />

                                <input
                                    type="tel"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    placeholder="Mobile Number"
                                    className="w-full bg-white/80 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-white text-gray-900 placeholder-gray-500"
                                    required
                                />

                                <select
                                    name="programme"
                                    value={formData.programme}
                                    onChange={handleChange}
                                    className="w-full bg-white/80 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-white text-gray-900"
                                    required
                                >
                                    <option value="">Select Programme</option>
                                    <option value="LL.B (3 Years)">LL.B (3 Years)</option>
                                    <option value="B.A. LL.B (5 Years)">B.A. LL.B (5 Years)</option>
                                </select>

                                <button
                                    type="submit"
                                    disabled={loading}
                                    className="w-full bg-white text-[#1c2340] font-semibold py-3 rounded-lg hover:bg-gray-200 transition disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    {loading ? 'Sending...' : 'Submit Enquiry'}
                                </button>

                                {status && (
                                    <p className={`text-sm text-center mt-2 ${status.includes('successfully') ? 'text-green-300' : 'text-red-300'}`}>
                                        {status}
                                    </p>
                                )}
                            </form>

                            <p className="text-xs text-white/70 mt-4 text-center">
                                🔒 Your information is safe with us. No spam.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutUs;

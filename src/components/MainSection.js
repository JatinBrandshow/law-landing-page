"use client";

import React, { useState } from "react";

const MainSection = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        programme: "",
        qualification: "",
        percentage: "",
        consent: false
    });
    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState(null);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setStatus(null);

        try {
            const response = await fetch('/api/contact', {
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
                    qualification: "",
                    percentage: "",
                    consent: false
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
        <section className="relative min-h-[90vh] w-full overflow-hidden">
            {/* BACKGROUND VIDEO */}
            <video
                className="absolute inset-0 h-full w-full object-cover"
                src="/video/accurate-video.mp4"
                autoPlay
                muted
                loop
                playsInline
            />

            {/* OVERLAY */}
            <div className="absolute inset-0 bg-linear-to-r from-blue-950/80 via-blue-900/60 to-blue-800/40" />

            {/* CONTENT */}
            <div className="relative z-10 flex min-h-[90vh] items-center">
                <div className="mx-auto max-w-7xl px-6 w-full">
                    <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
                        {/* LEFT CONTENT */}
                        <div className="lg:col-span-2 text-white">
                            <span className="inline-block rounded-full bg-yellow-400 px-4 py-1 text-sm font-semibold text-black">
                                Admissions Open 2026
                            </span>

                            <h1 className="mt-5 text-4xl md:text-5xl xl:text-6xl font-bold leading-tight">
                                Law Programmes
                            </h1>

                            <p className="mt-3 text-lg text-gray-200">
                                Accurate College of Law – Shaping Future Legal Professionals with Excellence & Ethics
                            </p>

                            {/* INFO CARDS */}
                            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6">
                                {[
                                    ["Programme Duration", "3 Years (LL.B) / 5 Years (B.A. LL.B)"],
                                    ["Approval", "Bar Council of India (BCI) Approved"],
                                    ["Programmes Offered", "LL.B & B.A. LL.B"],
                                    ["Eligibility", "As per BCI & University Norms"],
                                ].map(([title, value]) => (
                                    <div
                                        key={title}
                                        className="rounded-xl bg-white/10 backdrop-blur-md p-5 border border-white/20"
                                    >
                                        <p className="text-sm font-semibold text-gray-300">{title}</p>
                                        <p className="mt-1 text-base font-medium">{value}</p>
                                    </div>
                                ))}
                            </div>

                            {/* ADMISSION INFO */}
                            <div className="mt-8 max-w-sm overflow-hidden rounded-xl border border-white/20">
                                <div className="bg-yellow-400 py-3 text-center font-semibold text-black">
                                    Law Admissions
                                </div>
                                <a
                                    href="https://law.accurate.in/law-admissions/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block w-full bg-white py-3 text-center font-bold text-gray-900 transition-all hover:bg-gray-50 hover:text-blue-900 uppercase tracking-widest text-sm"
                                >
                                    Apply Now
                                </a>
                            </div>
                        </div>

                        {/* RIGHT FORM */}
                        <div className="rounded-2xl bg-white p-3 shadow-2xl">
                            <div className="rounded-xl bg-green-700 p-2 text-white">
                                <h3 className="text-xl font-semibold">Talk To Our Law Expert</h3>
                                <p className="text-sm opacity-90">Get guidance for Law admissions</p>
                            </div>

                            <form className="mt-6 space-y-4 text-gray-400" onSubmit={handleSubmit}>
                                <input
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full rounded-md border px-4 py-3 text-sm"
                                    placeholder="Name*"
                                    required
                                />
                                <input
                                    name="email"
                                    type="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full rounded-md border px-4 py-3 text-sm"
                                    placeholder="Email*"
                                    required
                                />
                                <input
                                    name="phone"
                                    type="tel"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    className="w-full rounded-md border px-4 py-3 text-sm"
                                    placeholder="Phone*"
                                    required
                                />

                                <select
                                    name="programme"
                                    value={formData.programme}
                                    onChange={handleChange}
                                    className="w-full rounded-md border px-4 py-3 text-sm"
                                    required
                                >
                                    <option value="">Select Programme</option>
                                    <option value="LL.B (3 Years)">LL.B (3 Years)</option>
                                    <option value="B.A. LL.B (5 Years)">B.A. LL.B (5 Years)</option>
                                </select>

                                <select
                                    name="qualification"
                                    value={formData.qualification}
                                    onChange={handleChange}
                                    className="w-full rounded-md border px-4 py-3 text-sm"
                                    required
                                >
                                    <option value="">Qualification</option>
                                    <option value="Graduation Completed">Graduation Completed</option>
                                    <option value="12th Appearing">12th Appearing</option>
                                    <option value="12th Completed">12th Completed</option>
                                </select>

                                <select
                                    name="percentage"
                                    value={formData.percentage}
                                    onChange={handleChange}
                                    className="w-full rounded-md border px-4 py-3 text-sm"
                                    required
                                >
                                    <option value="">Percentage</option>
                                    <option value="Above 90%">Above 90%</option>
                                    <option value="75% - 90%">75% - 90%</option>
                                    <option value="60% - 75%">60% - 75%</option>
                                    <option value="Below 60%">Below 60%</option>
                                </select>

                                <label className="flex gap-2 text-xs text-gray-600">
                                    <input
                                        type="checkbox"
                                        name="consent"
                                        checked={formData.consent}
                                        onChange={handleChange}
                                        className="mt-1"
                                    />
                                    I consent to receive calls/SMS/WhatsApp/email regarding my enquiry
                                </label>

                                <button
                                    type="submit"
                                    disabled={loading}
                                    className="w-full rounded-lg bg-yellow-400 py-3 font-semibold text-black transition hover:bg-yellow-500 disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    {loading ? 'Sending...' : 'Apply for Law Counselling'}
                                </button>

                                {status && (
                                    <p className={`text-sm text-center mt-2 ${status.includes('successfully') ? 'text-green-600' : 'text-red-500'}`}>
                                        {status}
                                    </p>
                                )}
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MainSection;

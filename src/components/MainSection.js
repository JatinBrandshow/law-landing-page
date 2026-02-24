"use client";
import React from "react";

const MainSection = () => {
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
                                Admissions Open
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
                                    ["Specialisations", "LL.B & B.A. LL.B"],
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

                            {/* PLACEMENT SNAPSHOT */}
                            <div className="mt-10">
                                <p className="text-sm font-bold uppercase tracking-widest text-yellow-400 mb-4">Placement Snapshot</p>
                                <div className="grid grid-cols-3 gap-4 max-w-2xl bg-white/5 backdrop-blur-md p-6 rounded-2xl border border-white/10 shadow-2xl">
                                    <div className="text-center border-r border-white/10 last:border-0 px-2">
                                        <p className="text-[10px] md:text-xs text-gray-400 font-bold uppercase mb-1">Highest</p>
                                        <p className="text-xl md:text-3xl font-black text-white">85<span className="text-sm font-medium ml-1">LPA</span></p>
                                    </div>
                                    <div className="text-center border-r border-white/10 last:border-0 px-2">
                                        <p className="text-[10px] md:text-xs text-gray-400 font-bold uppercase mb-1">Average</p>
                                        <p className="text-xl md:text-3xl font-black text-green-400">6.5<span className="text-sm font-medium ml-1 text-white/70">LPA</span></p>
                                    </div>
                                    <div className="text-center border-r border-white/10 last:border-0 px-2">
                                        <p className="text-[10px] md:text-xs text-gray-400 font-bold uppercase mb-1">Lowest</p>
                                        <p className="text-xl md:text-3xl font-black text-yellow-400">4.5<span className="text-sm font-medium ml-1 text-white/70">LPA</span></p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* RIGHT FORM */}
                        <div className="rounded-2xl bg-white p-3 shadow-2xl">
                            <div className="rounded-xl bg-green-600 p-2 text-white">
                                <h3 className="text-xl font-semibold">Talk To Our Law Expert</h3>
                                <p className="text-sm opacity-90">Get guidance for Law admissions</p>
                            </div>

                            <form className="mt-6 space-y-4 text-gray-400">
                                <input className="w-full rounded-md border px-4 py-3 text-sm" placeholder="Name*" />
                                <input className="w-full rounded-md border px-4 py-3 text-sm" placeholder="Email*" />
                                <input className="w-full rounded-md border px-4 py-3 text-sm" placeholder="Phone*" />

                                <select className="w-full rounded-md border px-4 py-3 text-sm">
                                    <option>Select Law Branch</option>
                                    <option>B.A. LL.B (5 Years)</option>
                                    <option>LL.B (3 Years)</option>
                                    {/* <option>Civil Engineering</option> */}
                                    
                                </select>

                                <select className="w-full rounded-md border px-4 py-3 text-sm">
                                   <option>Qualification</option>
                                    <option>Graduation Completed</option>
                                    <option>12th Appearing</option>
                                    <option>12th Completed</option>
                                </select>

                                <select className="w-full rounded-md border px-4 py-3 text-sm">
                                    <option>Percentage</option>
                                    <option>Above 90%</option>
                                    <option>75% - 90%</option>
                                    <option>60% - 75%</option>
                                    <option>Below 60%</option>
                                </select>

                                <label className="flex gap-2 text-xs text-gray-600">
                                    <input type="checkbox" className="mt-1" />I consent to receive
                                    calls/SMS/WhatsApp/email regarding my enquiry
                                </label>

                                <button
                                    type="submit"
                                    className="w-full rounded-lg bg-yellow-400 py-3 font-semibold text-black transition hover:bg-yellow-500"
                                >
                                    Apply
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MainSection;

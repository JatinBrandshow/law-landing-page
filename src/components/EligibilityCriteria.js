"use client";
import { useState } from "react";

const EligibilityCriteria = () => {
    const [activeTab, setActiveTab] = useState("ballb"); // default tab

    return (
        <section className="bg-[#f5f8ff]">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid lg:grid-cols-3 gap-8 items-stretch">
                    {/* LEFT CARD */}
                    <div className="lg:col-span-2 bg-linear-to-br from-[#0b132b] to-[#0b1d3a] text-white rounded-[36px] p-10 shadow-xl">
                        {/* Heading */}
                        <h2 className="text-4xl font-bold mb-8">
                            Eligibility <span className="text-blue-400">Criteria</span>
                        </h2>

                        {/* TABS */}
                        <div className="flex gap-6 border-b border-white/20 mb-8">
                            <button
                                onClick={() => setActiveTab("ballb")}
                                className={`pb-3 text-lg font-semibold transition
                                    ${
                                        activeTab === "ballb"
                                            ? "text-blue-400 border-b-2 border-blue-400"
                                            : "text-gray-300 hover:text-white"
                                    }`}
                            >
                                BA.LLB Eligibility
                            </button>

                            <button
                                onClick={() => setActiveTab("llb")}
                                className={`pb-3 text-lg font-semibold transition
                                    ${
                                        activeTab === "llb"
                                            ? "text-blue-400 border-b-2 border-blue-400"
                                            : "text-gray-300 hover:text-white"
                                    }`}
                            >
                                LL.B Eligibility
                            </button>
                        </div>

                        {/* CONTENT */}
                        <div className="grid md:grid-cols-2 gap-8 text-sm text-gray-200">
                            {/* BALLB ENTRY */}
                            {activeTab === "ballb" && (
                                <>
                                    <div className="flex gap-4 md:col-span-2">
                                        <span className="w-3 h-3 mt-2 rounded-full bg-blue-500 shrink-0"></span>
                                        <p>
                                            Candidates must have passed Class 12 (10+2) from a recognized board in any
                                            stream.
                                        </p>
                                    </div>

                                    <div className="flex gap-4">
                                        <span className="w-3 h-3 mt-2 rounded-full bg-blue-500 shrink-0"></span>
                                        <p>
                                            Minimum 45% aggregate marks required (42% for OBC and 40% for SC/ST
                                            candidates).
                                        </p>
                                    </div>

                                    <div className="flex gap-4">
                                        <span className="w-3 h-3 mt-2 rounded-full bg-blue-500 shrink-0"></span>
                                        <p>
                                            Candidates should meet eligibility norms prescribed by CCS University and
                                            Bar Council of India (BCI).
                                        </p>
                                    </div>

                                    <div className="flex gap-4 md:col-span-2">
                                        <span className="w-3 h-3 mt-2 rounded-full bg-blue-500 shrink-0"></span>
                                        <p>
                                            Admission may be based on merit, entrance criteria, or university
                                            guidelines.
                                        </p>
                                    </div>
                                </>
                            )}

                            {/* LLB ENTRY */}
                            {activeTab === "llb" && (
                                <>
                                    <div className="flex gap-4">
                                        <span className="w-3 h-3 mt-2 rounded-full bg-blue-500 shrink-0"></span>
                                        <p>
                                            Candidates must have completed graduation in any discipline from a
                                            recognized university.
                                        </p>
                                    </div>

                                    <div className="flex gap-4">
                                        <span className="w-3 h-3 mt-2 rounded-full bg-blue-500 shrink-0"></span>
                                        <p>
                                            Minimum 45% aggregate marks required (42% for OBC and 40% for SC/ST
                                            candidates).
                                        </p>
                                    </div>

                                    <div className="flex gap-4 md:col-span-2">
                                        <span className="w-3 h-3 mt-2 rounded-full bg-blue-500 shrink-0"></span>
                                        <p>
                                            Candidates must satisfy eligibility norms set by CCS University and Bar
                                            Council of India (BCI).
                                        </p>
                                    </div>

                                    <div className="flex gap-4 md:col-span-2">
                                        <span className="w-3 h-3 mt-2 rounded-full bg-blue-500 shrink-0"></span>
                                        <p>
                                            Admission is subject to document verification and university admission
                                            policies.
                                        </p>
                                    </div>
                                </>
                            )}
                        </div>
                    </div>

                    {/* RIGHT CARD */}
                    <div className="bg-blue-600 rounded-[36px] p-10 text-white shadow-xl flex flex-col justify-between">
                        <div>
                            <h3 className="text-3xl font-bold mb-4">Start Your Journey</h3>
                            <p className="text-blue-100 text-sm leading-relaxed">
                                Take the first step towards a successful career in engineering and technology. Our
                                admissions team is here to guide you.
                            </p>
                        </div>

                        <button className="mt-10 bg-white text-blue-600 font-semibold py-4 rounded-full hover:bg-blue-50 transition">
                            Apply Online Now
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default EligibilityCriteria;
    
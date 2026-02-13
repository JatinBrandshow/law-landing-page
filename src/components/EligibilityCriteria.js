"use client";
import { useState } from "react";

const EligibilityCriteria = () => {
    const [activeTab, setActiveTab] = useState("regular"); // default tab

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
                                onClick={() => setActiveTab("regular")}
                                className={`pb-3 text-lg font-semibold transition
                                    ${
                                        activeTab === "regular"
                                            ? "text-blue-400 border-b-2 border-blue-400"
                                            : "text-gray-300 hover:text-white"
                                    }`}
                            >
                                Regular Entry (1st Year)
                            </button>

                            <button
                                onClick={() => setActiveTab("lateral")}
                                className={`pb-3 text-lg font-semibold transition
                                    ${
                                        activeTab === "lateral"
                                            ? "text-blue-400 border-b-2 border-blue-400"
                                            : "text-gray-300 hover:text-white"
                                    }`}
                            >
                                Lateral Entry (2nd Year)
                            </button>
                        </div>

                        {/* CONTENT */}
                        <div className="grid md:grid-cols-2 gap-8 text-sm text-gray-200">
                            {/* REGULAR ENTRY */}
                            {activeTab === "regular" && (
                                <>
                                    <div className="flex gap-4 md:col-span-2">
                                        <span className="w-3 h-3 mt-2 rounded-full bg-blue-500 shrink-0"></span>
                                        <p>
                                            Candidates must have passed Intermediate (10+2) examination from U.P. Board
                                            or any recognized board/university.
                                        </p>
                                    </div>

                                    <div className="flex gap-4">
                                        <span className="w-3 h-3 mt-2 rounded-full bg-blue-500 shrink-0"></span>
                                        <p>
                                            Mathematics and Physics are compulsory subjects in the qualifying
                                            examination.
                                        </p>
                                    </div>

                                    <div className="flex gap-4">
                                        <span className="w-3 h-3 mt-2 rounded-full bg-blue-500 shrink-0"></span>
                                        <p>
                                            Candidates must have studied any one of the following as an optional
                                            subject: Chemistry, Biotechnology, Computer Science, or Biology.
                                        </p>
                                    </div>

                                    <div className="flex gap-4 md:col-span-2">
                                        <span className="w-3 h-3 mt-2 rounded-full bg-blue-500 shrink-0"></span>
                                        <p>
                                            Admission is subject to fulfillment of minimum eligibility norms as
                                            prescribed by AKTU and AICTE from time to time.
                                        </p>
                                    </div>
                                </>
                            )}

                            {/* LATERAL ENTRY */}
                            {activeTab === "lateral" && (
                                <>
                                    <div className="flex gap-4">
                                        <span className="w-3 h-3 mt-2 rounded-full bg-blue-500 shrink-0"></span>
                                        <p>
                                            Candidates must have completed a three-year Diploma in Engineering with a
                                            minimum of 50% aggregate marks.
                                        </p>
                                    </div>

                                    <div className="flex gap-4">
                                        <span className="w-3 h-3 mt-2 rounded-full bg-blue-500 shrink-0"></span>
                                        <p>
                                            OR candidates must have completed a three-year B.Sc. degree with Mathematics
                                            as one of the subjects and secured a minimum of 50% aggregate marks.
                                        </p>
                                    </div>

                                    <div className="flex gap-4 md:col-span-2">
                                        <span className="w-3 h-3 mt-2 rounded-full bg-blue-500 shrink-0"></span>
                                        <p>
                                            Lateral entry admissions are subject to availability of seats and university
                                            norms.
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

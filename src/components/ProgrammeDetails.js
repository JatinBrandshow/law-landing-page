"use client";

import { useState } from "react";

const ProgrammeDetails = () => {
    const [activeTab, setActiveTab] = useState("fit");

    return (
        <section className="bg-white py-14">
            <div className="max-w-350 mx-auto px-6">
                {/* Tabs */}
                <div className="grid grid-cols-2 border-b border-gray-300">
                    <button
                        onClick={() => setActiveTab("fit")}
                        className={`text-4xl font-bold py-4 relative transition flex justify-center
                            ${activeTab === "fit" ? "text-green-700" : "text-gray-900"}
                        `}
                    >
                        Programme is Best Fit For?
                        {activeTab === "fit" && (
                            <span className="absolute left-1/2 -bottom-1 h-1 w-full -translate-x-1/2 bg-green-700"></span>
                        )}
                    </button>

                    <button
                        onClick={() => setActiveTab("learning")}
                        className={`text-4xl font-bold py-4 relative transition flex justify-center
                            ${activeTab === "learning" ? "text-green-700" : "text-gray-900"}
                        `}
                    >
                        Programme Learnings
                        {activeTab === "learning" && (
                            <span className="absolute left-1/2 -bottom-1 h-1 w-full -translate-x-1/2 bg-green-700"></span>
                        )}
                    </button>
                </div>

                {/* Content */}
                <div className="mt-10 text-gray-800">
                    {/* TAB 1 CONTENT */}
                    {/* TAB 1 CONTENT */}
                    {activeTab === "fit" && (
                        <div className="space-y-6">
                            <div>
                                <p className="font-semibold flex gap-2">
                                    <span className="text-green-700 font-bold">|</span>
                                    Ideal for students aspiring to build a strong foundation in engineering and
                                    technology
                                </p>

                                <ul className="list-disc pl-8 mt-3 space-y-2">
                                    <li>
                                        Suitable for students who want to develop problem-solving skills, technical
                                        knowledge, and practical exposure in their chosen engineering discipline.
                                    </li>
                                </ul>
                            </div>

                            <div>
                                <p className="font-semibold flex gap-2">
                                    <span className="text-green-700 font-bold">|</span>
                                    Best suited for learners aiming for industry-ready engineering careers
                                </p>

                                <ul className="list-disc pl-8 mt-3 space-y-2">
                                    <li>
                                        Designed for students seeking careers in IT, core engineering industries,
                                        startups, R&D, entrepreneurship, and emerging technology domains.
                                    </li>
                                </ul>
                            </div>

                            <div>
                                <p className="font-semibold flex gap-2">
                                    <span className="text-green-700 font-bold">|</span>
                                    Ideal for students planning higher studies or global opportunities
                                </p>

                                <ul className="list-disc pl-8 mt-3 space-y-2">
                                    <li>
                                        Strong academic base and project exposure prepare students for M.Tech, MBA,
                                        research programs, and international study opportunities.
                                    </li>
                                </ul>
                            </div>
                        </div>
                    )}

                    {/* TAB 2 CONTENT */}
                    {activeTab === "learning" && (
                        <div className="space-y-8">
                            {/* Technical Knowledge & Core Skills */}
                            <div>
                                <p className="font-semibold text-lg flex gap-2">
                                    <span className="text-green-700 font-bold">|</span>
                                    Strong Technical & Engineering Fundamentals
                                </p>

                                <ul className="list-disc pl-8 mt-3 space-y-2">
                                    <li>
                                        Gain in-depth understanding of core engineering subjects aligned with AKTU
                                        curriculum.
                                    </li>
                                    <li>
                                        Develop logical thinking and analytical skills to solve real-world engineering
                                        problems.
                                    </li>
                                </ul>
                            </div>

                            {/* Practical Learning */}
                            <div>
                                <p className="font-semibold text-lg flex gap-2">
                                    <span className="text-green-700 font-bold">|</span>
                                    Practical & Experiential Learning
                                </p>

                                <ul className="list-disc pl-8 mt-3 space-y-2">
                                    <li>
                                        Hands-on learning through modern laboratories, live projects, internships, and
                                        industrial training.
                                    </li>
                                    <li>
                                        Exposure to real industry scenarios through workshops, seminars, and industry
                                        visits.
                                    </li>
                                </ul>
                            </div>

                            {/* Industry Readiness */}
                            <div>
                                <p className="font-semibold text-lg flex gap-2">
                                    <span className="text-green-700 font-bold">|</span>
                                    Industry & Career Readiness
                                </p>

                                <ul className="list-disc pl-8 mt-3 space-y-2">
                                    <li>Learn industry-relevant tools, technologies, and best practices.</li>
                                    <li>
                                        Placement-focused training including aptitude, technical skills, and interview
                                        preparation.
                                    </li>
                                </ul>
                            </div>

                            {/* Communication & Soft Skills */}
                            <div>
                                <p className="font-semibold text-lg flex gap-2">
                                    <span className="text-green-700 font-bold">|</span>
                                    Communication & Professional Skills
                                </p>

                                <ul className="list-disc pl-8 mt-3 space-y-2">
                                    <li>
                                        Improve communication, teamwork, and leadership skills through presentations and
                                        group projects.
                                    </li>
                                    <li>Build confidence for corporate environments and professional growth.</li>
                                </ul>
                            </div>

                            {/* Innovation & Lifelong Learning */}
                            <div>
                                <p className="font-semibold text-lg flex gap-2">
                                    <span className="text-green-700 font-bold">|</span>
                                    Innovation, Ethics & Lifelong Learning
                                </p>

                                <ul className="list-disc pl-8 mt-3 space-y-2">
                                    <li>
                                        Develop ethical understanding, social responsibility, and sustainable
                                        engineering practices.
                                    </li>
                                    <li>
                                        Foster innovation, creativity, and adaptability for long-term career success.
                                    </li>
                                </ul>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default ProgrammeDetails;

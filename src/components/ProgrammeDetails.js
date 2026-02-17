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
                        className={`text-2xl md:text-4xl font-bold py-4 relative transition flex justify-center
                            ${activeTab === "fit" ? "text-yellow-600" : "text-gray-900"}
                        `}
                    >
                        Programme is Best Fit For?
                        {activeTab === "fit" && (
                            <span className="absolute left-1/2 -bottom-1 h-1 w-full -translate-x-1/2 bg-yellow-600"></span>
                        )}
                    </button>

                    <button
                        onClick={() => setActiveTab("learning")}
                        className={`text-2xl md:text-4xl font-bold py-4 relative transition flex justify-center
                            ${activeTab === "learning" ? "text-yellow-600" : "text-gray-900"}
                        `}
                    >
                        Programme Learnings
                        {activeTab === "learning" && (
                            <span className="absolute left-1/2 -bottom-1 h-1 w-full -translate-x-1/2 bg-yellow-600"></span>
                        )}
                    </button>
                </div>

                {/* Content */}
                <div className="mt-10 text-gray-800">
                    {/* TAB 1 CONTENT: Best Fit / Admissions / Eligibility */}
                    {activeTab === "fit" && (
                        <div className="space-y-6">
                            <div>
                                <p className="font-semibold text-lg flex gap-2">
                                    <span className="text-yellow-600 font-bold">|</span>
                                    Who can apply for BA LLB Course?
                                </p>
                                <ul className="list-disc pl-8 mt-3 space-y-2">
                                    <li>
                                        Students must have received a minimum cumulative score of 50% on their 10+2 exam from an accredited board.
                                    </li>
                                    <li>
                                        Students must have passed law entry exams at the national and university levels, such as the CLAT, LSAT, AILET, etc.
                                    </li>
                                </ul>
                            </div>

                            <div>
                                <p className="font-semibold text-lg flex gap-2">
                                    <span className="text-yellow-600 font-bold">|</span>
                                    Is CLAT necessary for BA LLB Admission?
                                </p>
                                <ul className="list-disc pl-8 mt-3 space-y-2">
                                    <li>
                                        No, studying for the CLAT is not required for the BA LLB. The SLAT, AILET, JMI BA LLB, and LSAT can also be used for BA LLB admission.
                                    </li>
                                    <li>
                                        Candidates can take this exam if they want to enrol in top NLUs because NLUs only recognize CLAT scores.
                                    </li>
                                </ul>
                            </div>

                            <div>
                                <p className="font-semibold text-lg flex gap-2">
                                    <span className="text-yellow-600 font-bold">|</span>
                                    Can a student benefit from a previous year’s CLAT score?
                                </p>
                                <ul className="list-disc pl-8 mt-3 space-y-2">
                                    <li>
                                        No, CLAT scores are only eligible till the end of the academic year. Once the admission process is over, you will have to retake the exam for admission next year.
                                    </li>
                                </ul>
                            </div>

                            <div>
                                <p className="font-semibold text-lg flex gap-2">
                                    <span className="text-yellow-600 font-bold">|</span>
                                    Can a student get direct admission to BA LLB?
                                </p>
                                <ul className="list-disc pl-8 mt-3 space-y-2">
                                    <li>
                                        Yes, you need not take any entrance exam in order to enrol in the 5-year BA LLB program. Due to the fact that some law schools in India grant admission to 5-year BA LLB programs on the basis of merit.
                                    </li>
                                </ul>
                            </div>
                        </div>
                    )}

                    {/* TAB 2 CONTENT: Learnings / Reviews / Scope */}
                    {activeTab === "learning" && (
                        <div className="space-y-8">
                            {/* Course Overview */}
                            <div>
                                <p className="font-semibold text-lg flex gap-2">
                                    <span className="text-yellow-600 font-bold">|</span>
                                    What is BA LLB Course?
                                </p>
                                <ul className="list-disc pl-8 mt-3 space-y-2">
                                    <li>
                                        B A LLB is a five-year undergraduate integrated degree program and is developed specifically to educate students on the socio-legal aspects of the law.
                                    </li>
                                    <li>
                                        Multidisciplinary topics like Political Science, Sociology, Economics, and Constitutional Law are covered in this degree. Criminal law and family law.
                                    </li>
                                    <li>
                                        The integrated program helps students gain a solid understanding of the topics and give students a foundation in law so they can relate to the social and political implications of various legislation.
                                    </li>
                                </ul>
                            </div>

                            {/* Subjects */}
                            <div>
                                <p className="font-semibold text-lg flex gap-2">
                                    <span className="text-yellow-600 font-bold">|</span>
                                    What are the main subjects in BA LLB?
                                </p>
                                <ul className="list-disc pl-8 mt-3 space-y-2">
                                    <li>Here are some of the popular topics you will learn in BA LLB syllabus:</li>
                                </ul>
                                <div className="pl-8 mt-2 grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-2 text-sm md:text-base">
                                    <ul className="list-disc pl-5 space-y-1">
                                        <li>Criminal Law</li>
                                        <li>Family Law</li>
                                        <li>Political Science</li>
                                        <li>Sociology</li>
                                        <li>English</li>
                                        <li>Jurisprudence</li>
                                        <li>Constitutional Law</li>
                                        <li>Taxation Laws</li>
                                    </ul>
                                    <ul className="list-disc pl-5 space-y-1">
                                        <li>International Law</li>
                                        <li>Cyber Laws</li>
                                        <li>Labor Laws</li>
                                        <li>Corporate Law</li>
                                        <li>International Trade Law</li>
                                        <li>Human Rights</li>
                                        <li>International Humanitarian and Refugee Law</li>
                                    </ul>
                                </div>
                            </div>

                            {/* Recruiters */}
                            <div>
                                <p className="font-semibold text-lg flex gap-2">
                                    <span className="text-yellow-600 font-bold">|</span>
                                    Which are the top recruiters for BA LLB?
                                </p>
                                <p className="pl-8 mt-2 mb-2 italic">Here are some of the top recruiters of BA LLB graduates in India:</p>
                                <div className="pl-8 grid grid-cols-1 md:grid-cols-2 gap-2">
                                    <ul className="list-disc space-y-1">
                                        <li>AZB & Partners</li>
                                        <li>Khaitan and Co.</li>
                                        <li>Shardul Amarchand Mangaldas & Co.</li>
                                        <li>Hammurabi and Solomon</li>
                                    </ul>
                                    <ul className="list-disc space-y-1">
                                        <li>S&R Associates</li>
                                        <li>Trilegal</li>
                                        <li>Desai and Diwanji</li>
                                        <li>Talwar Thakore and Associates</li>
                                    </ul>
                                </div>
                            </div>

                            {/* Distance Learning */}
                            <div>
                                <p className="font-semibold text-lg flex gap-2">
                                    <span className="text-yellow-600 font-bold">|</span>
                                    Can law be pursued in distance learning?
                                </p>
                                <ul className="list-disc pl-8 mt-3 space-y-2">
                                    <li>
                                        Distance education in BA LLB is offered by numerous colleges and universities in India, including IGNOU, National Law University, ILS, and JMI New Delhi.
                                    </li>
                                    <li>
                                        50% of the class 12 grade in any stream must have been earned in order to be eligible to apply for BA LLB Distance Education. Merit-based admissions are used in BA LLB distance learning colleges.
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

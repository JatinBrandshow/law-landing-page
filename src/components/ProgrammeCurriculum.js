"use client";

import Image from "next/image";
import React, { useState } from "react";

const curriculumData = {
    "B.A. LL.B": [
        {
            year: "Sem 1",
            title: "Foundation of Law",
            points: [
                "BL-1001 General English – I",
                "BL-1002 Sociology – I",
                "BL-1003 Political Science – I (Political Theory)",
                "BL-1004 Economics – I",
                "BL-1005 Indian History – I (Ancient And Modern Indian History)",
            ],
        },
        {
            year: "Sem 2",
            title: "Core Legal & Social Sciences",
            points: [
                "BL-2001 General English – II (English Language and Legal Writing)",
                "BL-2002 Sociology – II",
                "BL-2003 Political Science – II (International Relations)",
                "BL-2004 Economics – II (Economic Problems and Policies in India)",
                "BL-2005 Law of Torts And Consumer Protection",
            ],
        },
        {
            year: "Sem 3",
            title: "Advanced Legal Studies",
            points: [
                "BL-3001 General English – III (Communication Skills)",
                "BL-3002 Hindi – I OR BL-3002(A) Law and Media – I",
                "BL-3003 Political Science – III (Public Administration)",
                "BL-3004 Contract – I (General Principles of Contract)",
                "BL-3005 Indian Legal And Constitutional History",
            ],
        },
        {
            year: "Sem 4",
            title: "Specialized Laws",
            points: [
                "BL-4001 General English – IV",
                "BL-4002 Hindi – 2 (Vidhik Sanchar Ev Hindi Bhasha Gyan) OR BL-4002(A) Law And Media – II",
                "BL-4003 Political Science – IV (Indian Government And Politics)",
                "BL-4004 Indian History – II (Modern Indian History)",
                "BL-4005 Law of Human Rights",
            ],
        },
        {
            year: "Sem 5",
            title: "Procedural & Business Law",
            points: [
                "BL-5001 Law of Crimes (Indian Penal Code)",
                "BL-5002 Family Law – I (Hindu Law)",
                "BL-5003 Constitutional Law of India – I (Nature of The Constitution And Fundamental Rights)",
                "BL-5004 Contract – II (Specific Contract And Law of Partnership)",
                "BL-5005 Jurisprudence – I (Legal Theory)",
            ],
        },
        {
            year: "Sem 6",
            title: "Jurisprudence & International Law",
            points: [
                "BL-6001 Environmental Law",
                "BL-6002 Family Law – II (Muslim Law)",
                "BL-6003 Constitutional Law of India – II (Structure And Working of The Indian Constitution)",
                "BL-6004 Public International Law",
                "BL-6005 Jurisprudence – II (Legal Concepts)",
            ],
        },
        {
            year: "Sem 7",
            title: "Labour, Tax & Technology Law",
            points: [
                "BL-7001 Labour And Industrial Law",
                "BL-7002 Company Law",
                "BL-7003 Interpretation of Statutes",
                "BL-7004 Insurance Law And Accident Claims OR BL-7004(A) Criminology And Penology",
                "BL-7005 Professional Ethics, Accountancy of Lawyers And Bar Bench Relation (Practical Training)",
            ],
        },
        {
            year: "Sem 8",
            title: "IPR & Trade Law",
            points: [
                "BL-8001 Administrative Law",
                "BL-8002 Law of Property And Easement",
                "BL-8003 Intellectual Property Law OR BL-8003(A) Law Relating to Women And Child",
                "BL-8004 Banking Law Including Negotiable Instrument Act",
                "BL-8005 Arbitration, Conciliation And Alternate Dispute Resolution (Practical Training)",
            ],
        },
        {
            year: "Sem 9",
            title: "Civil Procedural & Clinical Legal Education",
            points: [
                "BL-9001 Code of Civil Procedure - I",
                "BL-9002 Code of Criminal Procedure - I",
                "BL-9003 Law of Evidence",
                "BL-9004 Consumer Protection Law and Competition Act",
                "BL-9005 Drafting, Pleading, and Conveyancing (Practical Training)",
            ],
        },
        {
            year: "Sem 10",
            title: "Land & Taxation Laws",
            points: [
                "BL-9006 Land Laws (U.P. Revenue Code, 2006)",
                "BL-9007 Law of Taxation",
                "BL-9008 Indian Judicial System OR BL-9008(A) Law of Trust, Equity And Fiduciary Relation",
                "BL-9009 Law Relating To Right To Information OR BL-9009(A) Information Technology And Cyber Laws",
                "BL-9010 Moot Court, Pre-Trial Preparations And Participation In Trial Proceedings (Practical Training)",
            ],
        },
    ],
    "LL.B": [
        {
            year: "Sem 1",
            title: "Foundation of Law",
            points: [
                "K-1001 Jurisprudence – I (Legal Theory)",
                "K-1002 Constitutional Law of India – I (Nature of The Constitution And Fundamental Rights)",
                "K-1003 Law of Torts",
                "K-1004 Law of Crimes – I (Indian Penal Code)",
                "K-1005 Contract – I (General Principles of Contract)",
            ],
        },
        {
            year: "Sem 2",
            title: "Core Legal & Social Sciences",
            points: [
                "K-2001 Jurisprudence – II (Legal Concepts)",
                "K-2002 Constitutional Law of India – II (Structure And Working of the Indian Constitution)",
                "K-2003 Family Law – I (Hindu Law)",
                "K-2004 Contract – II (Specific Contract And Law of Partnership)",
                "K-2005 Indian Legal And Constitutional History OR K-2006 Law of Taxation",
            ],
        },
        {
            year: "Sem 3",
            title: "Advanced Legal Studies",
            points: [
                "K-3001 Family Law – II (Muslim Law)",
                "K-3002 Public International Law",
                "K-3003 Administrative Law",
                "K-3004 Law of Property And Easement",
                "K-3005 Professional Ethics, Accountability of Lawyers and Bar Bench Relation (Practical Training)",
            ],
        },
        {
            year: "Sem 4",
            title: "Specialized Laws",
            points: [
                "K-4001 Company Law",
                "K-4002 Labour And Industrial Law",
                "K-4003 Environmental Law",
                "K-4004 Criminology And Penology OR K-4005 Law of Trust, Equity And Fiduciary Relation",
                "K-4006 Banking Law Including Negotiable Instrument Act OR K-4007 Arbitration, Conciliation And Alternate Dispute Resolution (Practical Training)",
            ],
        },
        {
            year: "Sem 5",
            title: "Procedural & Business Law",
            points: [
                "K-5001 Civil Procedure Code And Limitation Act",
                "K-5002 Law of Crimes – II (Code of Criminal Procedure)",
                "K-5003 Law of Evidence",
                "K-5004 Land Laws Including Ceiling And Other Local Laws",
                "K-5005 Drafting of Pleading And Conveyancing (Practical Training)",
            ],
        },
        {
            year: "Sem 6",
            title: "Jurisprudence & International Law",
            points: [
                "K-6001 Interpretation of Statutes",
                "K-6002 Legal Language and Legal Writing Including Proficiency In General English",
                "K-6003 Law of Human Rights",
                "K-6004 Intellectual Property Law OR K - 6005 Information Technology And Cyber Law",
                "K-6006 Law Relating To Women And Child OR K-6007 Law Relating To Right To Information",
                "K-6008 Moot Court, Pre-Trial Preparation And Participation In Trial Proceedings (Practical Training)",
            ],
        },
    ],
};

const ProgrammeCurriculum = () => {
    const [activeTab, setActiveTab] = useState(0);
    const [activeProgram, setActiveProgram] = useState("B.A. LL.B");

    const currentCurriculum = curriculumData[activeProgram];

    return (
        <>
            <section className="bg-white py-16">
                <div className="mx-auto max-w-7xl px-6">
                    {/* Heading & Program Toggle */}
                    <div className="mb-10 flex flex-col  justify-between gap-6 md:flex-row md:items-center">
                        <h2 className="text-4xl font-bold text-[#0b1c3f]">Programme Curriculum</h2>

                        {/* Program Buttons */}
                        <div className="flex rounded-lg bg-gray-100 p-1">
                            {Object.keys(curriculumData).map((program) => (
                                <button
                                    key={program}
                                    onClick={() => {
                                        setActiveProgram(program);
                                        setActiveTab(0); // Reset to 1st year on switch
                                    }}
                                    className={`rounded-md px-5 py-2 text-sm font-semibold transition-all ${activeProgram === program
                                        ? "bg-yellow-400 text-black shadow-sm"
                                        : "text-gray-600 hover:text-black"
                                        }`}
                                >
                                    {program}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="flex flex-col gap-14 lg:flex-row lg:items">
                        {/* LEFT CONTENT – 65% */}
                        <div className="w-full lg:w-[65%]">
                            {/* Tabs */}
                            <div className="flex w-full overflow-x-auto border-b border-gray-300">
                                {currentCurriculum.map((item, index) => (
                                    <button
                                        key={item.year}
                                        onClick={() => setActiveTab(index)}
                                        className={`relative max-w-[100px] flex-1 whitespace-nowrap pb-2 text-center text-lg font-semibold transition-colors
                                            ${activeTab === index ? "text-black" : "text-gray-600 hover:text-black"}`}
                                    >
                                        {item.year}

                                        {activeTab === index && (
                                            <span className="absolute left-0 -bottom-px h-0.75 w-full bg-yellow-400"></span>
                                        )}
                                    </button>
                                ))}
                            </div>

                            {/* Content */}
                            <div className="mt-10 max-h-[250px]">
                                <h4 className="relative mb-4 pl-4 text-lg font-semibold">
                                    <span className="absolute left-0 top-1 h-5 w-0.75 bg-yellow-400"></span>
                                    {currentCurriculum[activeTab].title}
                                </h4>

                                <ul className="space-y-3 text-gray-800">
                                    {currentCurriculum[activeTab].points.map((point, i) => {
                                        const isPractical = point.startsWith("Practical") || point.includes("(Practical Training)");
                                        const parts = point.split(" OR ");

                                        return (
                                            <li key={i} className="flex items-start gap-3">
                                                <span className={`mt-2 h-1.5 w-1.5 shrink-0 rounded-full ${isPractical ? "bg-red-600" : "bg-black"}`}></span>
                                                <div className="flex flex-col">
                                                    {parts.map((part, index) => (
                                                        <React.Fragment key={index}>
                                                            <span className={isPractical ? "font-bold text-red-600" : ""}>
                                                                {part.trim()}
                                                            </span>
                                                            {index < parts.length - 1 && (
                                                                <span className="my-1 text-sm font-bold text-yellow-600">OR</span>
                                                            )}
                                                        </React.Fragment>
                                                    ))}
                                                </div>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </div>
                        </div>

                        {/* RIGHT IMAGE – 35% */}
                        <div className="relative w-full lg:w-[35%]">
                            {/* Yellow shadow */}
                            <div className="absolute -right-3 -top-5 h-full w-full rounded-lg bg-yellow-400"></div>

                            <div className="relative overflow-hidden rounded-lg">
                                <Image
                                    src="/img/diksharambh-orientation-event-collage.webp"
                                    alt="Campus"
                                    width={600}
                                    height={400}
                                    className="h-full w-full object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ProgrammeCurriculum;

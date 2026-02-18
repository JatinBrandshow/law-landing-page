"use client";

import Image from "next/image";
import React, { useState } from "react";

const curriculumData = {
    "B.A. LL.B": [
        {
            year: "Sem 1",
            title: "Foundation of Law",
            points: [
                "101 Legal Method",
                "103 Law of Contract-I",
                "105 Legal English and Communication Skills",
                "107 History-I",
                "109 Sociology-I",
                "Practical: 151* Comprehensive Viva",
            ],
        },
        {
            year: "Sem 2",
            title: "Core Legal & Social Sciences",
            points: [
                "201 Family Law-I",
                "203 Constitutional Law-I",
                "205 Law of Crimes-I",
                "207 Economics-I",
                "209 Political Science-II",
                "Practical: 251* Comprehensive Viva",
            ],
        },
        {
            year: "Sem 3",
            title: "Advanced Legal Studies",
            points: [
                "201 Family Law-I",
                "203 Constitutional Law-I",
                "205 Law of Crimes-I",
                "207 Economics-I",
                "209 Political Science-II",
                "Practical: 251* Comprehensive Viva",
            ],
        },
        {
            year: "Sem 4",
            title: "Speciaized Laws",
            points: [
                "202 Family Law-II",
                "204 Constitutional Law-II",
                "206 Law of Crimes-II",
                "208 Administrative Law",
                "210 Economics-II",
                "Practical: 252* Comprehensive Viva",
            ],
        },
        {
            year: "Sem 5",
            title: "Procedural & Business Law",
            points: [
                "301 Environmental Studies and Environmental Laws",
                "303 Law of Evidence",
                "305 Corporate Law",
                "307 Code of Civil Procedure",
                "309 Alternative Dispute Resolution (ADR)",
                "Practical: 351* Comprehensive Viva and Summer Internship Assessment",
            ],
        },
        {
            year: "Sem 6",
            title: "Jurisprudence & International Law",
            points: [
                "302 Jurisprudence",
                "304 International Law",
                "306 Property Law",
                "308 Investment and Competition Law",
                "310 Code of Criminal Procedure",
                "Practical: 352* Comprehensive Viva",
            ],
        },
        {
            year: "Sem 7",
            title: "Labour, Tax & Technology Law",
            points: [
                "401 Labour Law-I",
                "403 Tax Law",
                "405 Law and Emerging Technologies",
                "407 Human Rights",
                "409 Seminar Paper-I",
                "Practical: 451* Comprehensive Viva and Summer Internship Assessment",
            ],
        },
        {
            year: "Sem 8",
            title: "IPR & Trade Law",
            points: [
                "402 Intellectual Property Rights",
                "404 Labour Law-II",
                "406 Interpretation of Statutes",
                "408 International Trade Law",
                "410 Seminar Paper-II",
                "Practical: 452* Comprehensive Viva",
            ],
        },
    ],
    "LL.B": [
        {
            year: "1st Year",
            title: "Core Legal Fundamentals",
            points: [
                "Constitutional Law",
                "Law of Torts",
                "Law of Crimes (IPC)",
                "Contract Law",
            ],
        },
        {
            year: "2nd Year",
            title: "Procedural & Administrative Law",
            points: [
                "Administrative Law",
                "Family Law",
                "Property Law",
                "Public International Law",
            ],
        },
        {
            year: "3rd Year",
            title: "Advanced Legal Studies & Practice",
            points: [
                "Code of Civil Procedure (CPC)",
                "Code of Criminal Procedure (CrPC)",
                "Law of Evidence",
                "Moot Court & Internship",
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
                    <div className="mb-10 flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
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
                                    className={`rounded-md px-6 py-2 text-sm font-semibold transition-all ${activeProgram === program
                                        ? "bg-yellow-400 text-black shadow-sm"
                                        : "text-gray-600 hover:text-black"
                                        }`}
                                >
                                    {program}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="flex flex-col gap-14 lg:flex-row">
                        {/* LEFT CONTENT – 65% */}
                        <div className="w-full lg:w-[65%]">
                            {/* Tabs */}
                            <div className="flex w-full overflow-x-auto border-b border-gray-300">
                                {currentCurriculum.map((item, index) => (
                                    <button
                                        key={item.year}
                                        onClick={() => setActiveTab(index)}
                                        className={`relative min-w-[80px] flex-1 whitespace-nowrap pb-4 text-center text-lg font-semibold transition-colors
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
                            <div className="mt-10 min-h-[200px]">
                                <h4 className="relative mb-4 pl-4 text-lg font-semibold">
                                    <span className="absolute left-0 top-1 h-5 w-0.75 bg-yellow-400"></span>
                                    {currentCurriculum[activeTab].title}
                                </h4>

                                <ul className="space-y-3 text-gray-800">
                                    {currentCurriculum[activeTab].points.map((point, i) => {
                                        const isPractical = point.startsWith("Practical");
                                        return (
                                            <li key={i} className="flex items-start gap-3">
                                                <span className={`mt-2 h-1.5 w-1.5 rounded-full ${isPractical ? "bg-red-600" : "bg-black"}`}></span>
                                                <span className={isPractical ? "font-bold text-red-600" : ""}>
                                                    {point}
                                                </span>
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

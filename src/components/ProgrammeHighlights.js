"use client";

import React, { useEffect, useRef } from "react";
import {
    BookOpen,
    FileCheck2,
    Briefcase,
    GraduationCap,
    Users,
    Building2,
    FlaskConical,
    Globe,
    Award,
    TrendingUp,
    ChevronLeft,
    ChevronRight,
} from "lucide-react";

/* ===== HIGHLIGHTS DATA ===== */
const highlights = [
    {
        icon: GraduationCap,
        title: "AICTE Approved & AKTU Affiliated",
        description:
            "Four-year full-time B.Tech program approved by AICTE and affiliated to Dr. A.P.J. Abdul Kalam Technical University (AKTU), Lucknow.",
    },
    {
        icon: Award,
        title: "Established Since 2006",
        description:
            "A well-established engineering program with a strong academic legacy and increasing intake reflecting student trust.",
    },
    {
        icon: BookOpen,
        title: "Industry-Relevant Specializations",
        description:
            "Choice of specializations including CSE, AI & ML, Data Science, IoT, Artificial Intelligence, Mechanical Engineering, and ECE.",
    },
    {
        icon: FileCheck2,
        title: "8-Semester Curriculum Structure",
        description:
            "Curriculum designed across eight semesters with a balance of core engineering fundamentals, specialization subjects, labs, and projects.",
    },
    {
        icon: FlaskConical,
        title: "Advanced Engineering Laboratories",
        description:
            "Advanced laboratories with industry-oriented equipment providing real-world exposure through modern engineering labs.",
    },
    {
        icon: Briefcase,
        title: "Experiential Learning Approach",
        description:
            "Strong focus on experiential learning through live projects, internships, national-level engineering competitions, and industry problem-solving.",
    },
    {
        icon: TrendingUp,
        title: "Value-Added Courses",
        description:
            "Value-added courses beyond the university syllabus to bridge the gap between academics and emerging technologies.",
    },
    {
        icon: Users,
        title: "Holistic Student Development",
        description:
            "Emphasis on holistic development through soft skills training, seminars, mini-projects, and personality development programs.",
    },
    {
        icon: Building2,
        title: "Strong Placement Record",
        description:
            "Consistent placement performance with a 100% placement track record and opportunities for domestic and international roles.",
    },
    {
        icon: Globe,
        title: "Training & Placement Cell",
        description:
            "Dedicated Training & Placement Cell fostering strong industry–institute interaction, industry visits, workshops, and pre-placement counseling.",
    },
    {
        icon: Building2,
        title: "Green 16+ Acre Campus",
        description:
            "Green 16+ acre campus with modern infrastructure, sports facilities, and a vibrant student life supporting overall growth.",
    },
];

const ProgrammeHighlights = () => {
    const sliderRef = useRef(null);

    const scrollByCard = (direction = "right") => {
        const slider = sliderRef.current;
        if (!slider) return;

        const cardWidth = slider.children[0].offsetWidth + 24;
        slider.scrollBy({
            left: direction === "right" ? cardWidth : -cardWidth,
            behavior: "smooth",
        });
    };

    useEffect(() => {
        const slider = sliderRef.current;
        if (!slider) return;

        const interval = setInterval(() => {
            const cardWidth = slider.children[0].offsetWidth + 24;
            const maxScroll = slider.scrollWidth - slider.clientWidth;

            if (slider.scrollLeft >= maxScroll) {
                slider.scrollTo({ left: 0, behavior: "smooth" });
            } else {
                slider.scrollBy({ left: cardWidth, behavior: "smooth" });
            }
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    return (
        <section className="py-6 bg-white">
            <div className="mx-auto max-w-7xl px-6">
                <h2 className="text-4xl font-bold text-blue-950 font-serif">Programme Highlights</h2>

                {/* SLIDER */}
                <div className="relative mt-4">
                    <div
                        ref={sliderRef}
                        className="flex gap-4 overflow-x-auto scroll-smooth [&::-webkit-scrollbar]:hidden"
                        style={{
                            scrollbarWidth: "none",
                            msOverflowStyle: "none",
                        }}
                    >
                        {highlights.map((item, index) => {
                            const Icon = item.icon;
                            return (
                                <div key={index} className="min-w-75 rounded-2xl bg-blue-950 p-6 text-white">
                                    <Icon className="h-10 w-10 mb-6" />
                                    <h3 className="text-lg font-semibold mb-3">{item.title}</h3>
                                    <p className="text-sm leading-relaxed text-blue-100">{item.description}</p>
                                </div>
                            );
                        })}
                    </div>

                    {/* ARROWS */}
                    <div className="mt-4 flex justify-center gap-4">
                        <button
                            onClick={() => scrollByCard("left")}
                            className="rounded-full border border-blue-950 p-2 text-blue-950 hover:bg-blue-950 hover:text-white transition"
                        >
                            <ChevronLeft size={20} />
                        </button>

                        <button
                            onClick={() => scrollByCard("right")}
                            className="rounded-full border border-blue-950 p-2 text-blue-950 hover:bg-blue-950 hover:text-white transition"
                        >
                            <ChevronRight size={20} />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProgrammeHighlights;

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
        icon: BookOpen,
        title: "PCSJ Exam Preparation Support",
        description:
            "In-house academic tie-ups and mentoring support for students preparing for the PCSJ examination alongside their law studies.",
    },
    {
        icon: Users,
        title: "Skill Development Cell",
        description:
            "Dedicated Skill Development Cell focused on enhancing communication, professional skills, and employability readiness.",
    },
    {
        icon: FlaskConical,
        title: "Research & Development Cell",
        description:
            "Active Research and Development Cell promoting interdisciplinary research aptitude and academic innovation among students.",
    },
    {
        icon: Briefcase,
        title: "Internship Training Programmes",
        description:
            "Structured internship training programmes ensuring practical exposure to legal practice, courts, and law firms.",
    },
    {
        icon: Building2,
        title: "Campus Recruitment & Training Support",
        description:
            "Dedicated campus recruitment cell providing professional training, placement facilitation, and career guidance.",
    },
    {
        icon: TrendingUp,
        title: "Customized Career Training",
        description:
            "Customized professional training modules designed according to students’ chosen legal career paths.",
    },
    {
        icon: GraduationCap,
        title: "Student Choice-Based Opportunities",
        description:
            "Flexible opportunities allowing students to choose specialization tracks and professional growth pathways.",
    },
    {
        icon: Award,
        title: "Certification & Personality Development Courses",
        description:
            "Additional certification courses to enhance personality, communication skills, and professional confidence.",
    },
    {
        icon: Globe,
        title: "Regular Court & Legal Visits",
        description:
            "Frequent court visits, legal institution exposure, and field-based learning to connect theory with practice.",
    },
    {
        icon: FileCheck2,
        title: "National & International Academic Exposure",
        description:
            "Participation in seminars, moot courts, workshops, conferences, essay competitions, and guest lectures at national and international levels.",
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
                <h2 className="text-4xl font-bold text-primary">Programme Highlights</h2>

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
                                <div key={index} className="min-w-75 rounded-2xl bg-blue-800 p-6 text-white">
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
                            className="rounded-full border border-primary p-2 text-primary hover:bg-primary hover:text-white transition"
                        >
                            <ChevronLeft size={20} />
                        </button>

                        <button
                            onClick={() => scrollByCard("right")}
                            className="rounded-full border border-primary p-2 text-primary hover:bg-primary hover:text-white transition"
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

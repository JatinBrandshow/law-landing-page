"use client";

import Image from "next/image";
import React, { useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const certifications = [
    {
        title: "Cyber Security",
        image: "/img/certifications/cyber-security.webp",
    },
    {
        title: "Legal Writing and Drafting",
        image: "/img/certifications/legal-writing-and-drafting.webp",
    },
    {
        title: "Intellectual Property Law",
        image: "/img/certifications/intellectual-property-law.webp",
    },
    {
        title: "Alternative Dispute Resolution",
        image: "/img/certifications/alternative-dispute-resolution.webp",
    },
    {
        title: "Media law",
        image: "/img/certifications/media-law.webp",
    },
    {
        title: "Soft Skills",
        image: "/img/certifications/soft-skills.webp",
    },
    {
        title: "Human Rights",
        image: "/img/certifications/human-rights.webp",
    },
    {
        title: "Citizen Centric Governance",
        image: "/img/certifications/citizen-centric-governance.webp",
    },
    {
        title: "Contract Law Boot Camp",
        image: "/img/certifications/contract-law-boot-camp.webp",
    },
    {
        title: "Internation Commerical Arbitration",
        image: "/img/certifications/international-commercial-arbitration.webp",
    },
    {
        title: "Negotiation Skills",
        image: "/img/certifications/negotiation-skills.webp",
    },
];

const CARD_WIDTH = 260;
const GAP = 16;

const LawCertifications = () => {
    const sliderRef = useRef(null);
    const autoScrollRef = useRef(null);

    const scrollByOneCard = (direction = 1) => {
        if (!sliderRef.current) return;

        sliderRef.current.scrollBy({
            left: direction * (CARD_WIDTH + GAP),
            behavior: "smooth",
        });
    };

    // Auto scroll (paused on hover)
    useEffect(() => {
        autoScrollRef.current = setInterval(() => {
            scrollByOneCard(1);
        }, 3000);

        return () => clearInterval(autoScrollRef.current);
    }, []);

    const pauseAutoScroll = () => clearInterval(autoScrollRef.current);
    const resumeAutoScroll = () => {
        autoScrollRef.current = setInterval(() => {
            scrollByOneCard(1);
        }, 3000);
    };
    return (
        <>
            <section className="py-10 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <h2 className="text-5xl font-extrabold text-[#0b1d3a] mb-4">Law Specializations</h2>

                    <div className="relative overflow-hidden">
                        <div
                            ref={sliderRef}
                            onMouseEnter={pauseAutoScroll}
                            onMouseLeave={resumeAutoScroll}
                            className="flex gap-4 overflow-x-auto scroll-smooth
                        [&::-webkit-scrollbar]:hidden
                        [-ms-overflow-style:none]
                        [scrollbar-width:none]"
                        >
                            {certifications.map((item, index) => (
                                <div
                                    key={index}
                                    className="w-65 shrink-0 bg-white rounded-xl shadow-md overflow-hidden"
                                >
                                    <div className="relative h-44 w-full">
                                        <Image src={item.image} alt={item.title} fill className="object-cover" />
                                    </div>

                                    <div className="bg-green-600 text-white text-center py-3 font-semibold text-sm">
                                        {item.title}
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Controls */}
                        <div className="flex justify-center gap-8 mt-4">
                            <button
                                onClick={() => {
                                    pauseAutoScroll();
                                    scrollByOneCard(-1);
                                }}
                                className="w-12 h-12 rounded-full border border-blue-900 text-blue-900 flex items-center justify-center hover:bg-blue-900 hover:text-white transition"
                            >
                                <ChevronLeft className="w-6 h-6" />
                            </button>

                            <button
                                onClick={() => {
                                    pauseAutoScroll();
                                    scrollByOneCard(1);
                                }}
                                className="w-12 h-12 rounded-full border border-blue-900 text-blue-900 flex items-center justify-center hover:bg-blue-900 hover:text-white transition"
                            >
                                <ChevronRight className="w-6 h-6" />
                            </button>
                        </div>
                    </div>

                    <div className="text-center mt-4">
                        <button className="bg-[#0b2a5b] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#0e3a7c] transition">
                            Download Brochure
                        </button>
                    </div>
                </div>
            </section>
        </>
    );
};

export default LawCertifications;

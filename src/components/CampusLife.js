"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const campusHighlights = [
    {
        title: "Modern Infrastructure",
        description: "State-of-the-art classrooms, advanced laboratories, and a tech-enabled campus environment designed for excellence.",
        image: "/img/accurate-building.webp", // Using existing building image as a placeholder
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
        ),
    },
    {
        title: "Vibrant Student Life",
        description: "From cultural fests to technical symposiums, our campus is always buzzing with energy and creativity.",
        image: "/img/diksharambh-orientation-event-collage.webp", // Existing event image
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
        ),
    },
    {
        title: "Sports & Fitness",
        description: "Extensive sports facilities including cricket grounds, basketball courts, and a modern gymnasium.",
        image: "/img/diksharambh-orientation-event-collage.webp", // Placeholder
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        ),
    },
    {
        title: "Hostel & Dining",
        description: "Comfortable residential facilities with nutritious dining options, ensuring a home away from home.",
        image: "/img/diksharambh-orientation-event-collage.webp", // Placeholder
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
        ),
    },
];

const CampusLife = () => {
    return (
        <section className="py-24 bg-white relative overflow-hidden">
            {/* Background Decorations */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-10">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-500 rounded-full blur-[120px]" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-indigo-600 rounded-full blur-[120px]" />
            </div>

            <div className="max-w-8xl mx-auto px-6 relative z-10">
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-4xl md:text-6xl font-black text-primary mb-6 uppercase tracking-tight">
                            Campus <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-600 to-indigo-600">Life</span>
                        </h2>
                        <div className="h-1.5 w-24 bg-blue-600 mx-auto rounded-full mb-8" />
                        <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
                            Experience a holistic learning environment where academic rigour meets vibrant
                            extracurricular growth. Discover the world beyond textbooks.
                        </p>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {campusHighlights.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group relative aspect-square rounded-[2rem] overflow-hidden cursor-pointer shadow-lg hover:shadow-xl transition-all duration-500"
                        >
                            <Image
                                src={item.image}
                                alt={item.title}
                                width={600}
                                height={600}
                                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                            />
                            {/* Gradient Overlay for Text Readability */}
                            <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-300" />

                            {/* Content */}
                            <div className="absolute inset-0 p-6 flex flex-col justify-end translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                <div className="flex flex-col gap-3 mb-2">
                                    <div className="w-12 h-12 rounded-xl bg-blue-500/20 backdrop-blur-xl border border-white/30 flex items-center justify-center text-blue-400">
                                        {item.icon}
                                    </div>
                                    <h3 className="text-xl md:text-2xl font-black text-white uppercase tracking-wide leading-tight">
                                        {item.title}
                                    </h3>
                                </div>

                                {/* <p className="text-gray-200 leading-relaxed text-sm md:text-base opacity-0 group-hover:opacity-100 transition-all duration-300 delay-100 line-clamp-4">
                                    {item.description}
                                </p> */}
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Bottom Gallery Call to Action */}
                {/* <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="mt-20 text-center"
                >
                    <button className="px-12 py-5 rounded-2xl bg-primary text-white font-black text-xl hover:bg-blue-900 transition-all shadow-xl hover:shadow-primary/20 scale-100 active:scale-95">
                        VIEW FULL CAMPUS GALLERY
                    </button>
                </motion.div> */}
            </div>
        </section>
    );
};

export default CampusLife;

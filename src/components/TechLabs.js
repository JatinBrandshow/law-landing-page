"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const labsData = [
    {
        name: "Advanced AI & Computing Center",
        description: "Equipped with high-performance GPU workstations and cloud-integrated systems for AI research.",
        features: ["NVIDIA RTX Workstations", "Cloud Computing Hub"],
        image: "https://images.unsplash.com/photo-1581092921461-7d15cb8905cd?q=80&w=600&h=600&fit=crop",
        color: "blue"
    },
    {
        name: "Precision Robotics & Manufacturing",
        description: "State-of-the-art facility featuring industrial CNC machines and automated robotic arms.",
        features: ["CNC Machining", "Robotic Arm Prototyping"],
        image: "https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?q=80&w=600&h=600&fit=crop",
        color: "gold"
    },
    {
        name: "VLSI & Embedded Systems Hub",
        description: "Advanced tools for circuit design, microcontroller programming, and IoT testing.",
        features: ["IoT Testbeds", "Circuit Prototyping"],
        image: "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?q=80&w=600&h=600&fit=crop",
        color: "green"
    },
    {
        name: "Cybersecurity & Blockchain Lab",
        description: "Specialized facility for digital defense, network forensics, and secure development.",
        features: ["Ethical Hacking Tools", "Blockchain Nodes"],
        image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=600&h=600&fit=crop",
        color: "purple"
    }
];

const TechLabs = () => {
    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="max-w-8xl mx-auto px-6">
                {/* Header Section */}
                <div className="mb-16 relative">
                    <motion.span
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        className="text-secondary font-black tracking-widest uppercase text-sm mb-4 block"
                    >
                        Research & Innovation
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-6xl font-black text-primary leading-tight"
                    >
                        MOOT <span className="text-secondary italic font-black">Court.</span>
                    </motion.h2>
                </div>

                {/* Labs Grid - 4 in a row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {labsData.map((lab, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="group relative flex flex-col h-full bg-gray-50 rounded-[2rem] p-4 border border-gray-100/50 hover:shadow-2xl hover:shadow-secondary/5 transition-all duration-500"
                        >
                            {/* Image Container */}
                            <div className="relative aspect-square rounded-[1.5rem] overflow-hidden mb-6">
                                <Image
                                    src={lab.image}
                                    alt={lab.name}
                                    width={600}
                                    height={600}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

                                {/* Badge */}
                                <div className="absolute top-4 left-4">
                                    <span className="bg-white/90 backdrop-blur-sm text-primary text-[10px] font-black tracking-tighter px-3 py-1 rounded-full uppercase">
                                        Court{index + 1}
                                    </span>
                                </div>
                            </div>

                            {/* Content */}
                            {/* <div className="flex-grow space-y-3 px-2">
                                <h3 className="text-xl font-black text-primary leading-tight group-hover:text-secondary transition-colors duration-300">
                                    {lab.name}
                                </h3>
                                <p className="text-gray-500 text-sm leading-relaxed line-clamp-3">
                                    {lab.description}
                                </p>
                            </div> */}

                            {/* Features Tags */}
                            {/* <div className="mt-6 flex flex-wrap gap-2 px-2">
                                {lab.features.map((feat, fIdx) => (
                                    <span key={fIdx} className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">
                                        • {feat}
                                    </span>
                                ))}
                            </div> */}

                            {/* Hover Arrow Indicator */}
                            {/* <div className="mt-6 px-2 flex justify-end">
                                <div className="w-8 h-8 rounded-full border border-secondary/20 flex items-center justify-center group-hover:bg-secondary group-hover:border-secondary transition-all duration-300">
                                    <svg
                                        className="w-4 h-4 text-secondary group-hover:text-white transform group-hover:translate-x-0.5 transition-all"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                    </svg>
                                </div>
                            </div> */}
                        </motion.div>
                    ))}
                </div>

                {/* Footer Link */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="mt-16 flex justify-center"
                >
                    <button className="flex items-center gap-4 text-xs font-black tracking-[0.3em] text-primary/40 uppercase hover:text-secondary transition-colors group">
                        EXPLORE ALL FACILITIES
                        <div className="w-12 h-[1px] bg-primary/20 group-hover:w-20 group-hover:bg-secondary transition-all" />
                    </button>
                </motion.div>
            </div>
        </section>
    );
};

export default TechLabs;

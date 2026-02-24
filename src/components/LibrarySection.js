"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const libraryData = [
    {
        title: "Digital Research Hub",
        desc: "Access to IEEE, Springer, and global e-journals.",
        image: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?q=80&w=600&h=600&fit=crop",
    },
    {
        title: "Reading Sanctuary",
        desc: "Quiet zones designed for deep focus and academic research.",
        image: "https://images.unsplash.com/photo-1507738911748-9c7846274f3d?q=80&w=600&h=600&fit=crop",
    },
    {
        title: "Reference Wing",
        desc: "Extensive collection of engineering and tech manuscripts.",
        image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?q=80&w=600&h=600&fit=crop",
    },
    {
        title: "Digital Archive",
        desc: "Seamless RFID-based book tracking and search system.",
        image: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?q=80&w=600&h=600&fit=crop",
    }
];

const LibrarySection = () => {
    return (
        <section className="py-24 bg-[#0b1d3a] overflow-hidden">
            <div className="max-w-8xl mx-auto px-6">
                {/* Header Section */}
                <div className="mb-16 relative">
                    <motion.span
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        className="text-secondary font-black tracking-widest uppercase text-sm mb-4 block"
                    >
                        Knowledge Center
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-6xl font-black text-white leading-tight"
                    >
                        Central <span className="text-secondary italic font-black">Library.</span>
                    </motion.h2>
                    <p className="mt-6 text-white/60 max-w-2xl text-lg leading-relaxed">
                        A modern research sanctuary housing over 50,000 volumes and providing
                        access to millions of digital journals and research papers globally.
                    </p>
                </div>

                {/* Library Grid - 4 in a row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {libraryData.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="group relative flex flex-col h-full bg-white/5 rounded-[2rem] p-4 border border-white/10 hover:shadow-2xl hover:shadow-secondary/5 transition-all duration-500"
                        >
                            {/* Image Container */}
                            <div className="relative aspect-square rounded-[1.5rem] overflow-hidden">
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    width={600}
                                    height={600}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#0b1d3a]/60 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

                                {/* Badge */}
                                <div className="absolute top-4 left-4">
                                    <span className="bg-[#fbbf24] text-primary text-[10px] font-black tracking-tighter px-3 py-1 rounded-full uppercase">
                                        Collection 0{index + 1}
                                    </span>
                                </div>
                            </div>

                            {/* Content - Commented out to match other sections' recent patterns */}
                            {/* <div className="mt-6 space-y-3 px-2">
                                <h3 className="text-xl font-black text-white leading-tight group-hover:text-secondary transition-colors duration-300">
                                    {item.title}
                                </h3>
                                <p className="text-white/50 text-sm leading-relaxed line-clamp-3">
                                    {item.desc}
                                </p>
                            </div> */}
                        </motion.div>
                    ))}
                </div>

                {/* Additional Stats - Commented out to match other sections' recent patterns */}
                {/* <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="mt-16 pt-12 border-t border-white/10 flex flex-wrap justify-between items-center gap-8"
                >
                    <div className="flex items-center gap-4">
                        <div className="text-4xl font-black text-white">50K+</div>
                        <div className="text-xs font-black uppercase tracking-[0.2em] text-white/40">
                            Printed <br /> Volumes
                        </div>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="text-4xl font-black text-white">10M+</div>
                        <div className="text-xs font-black uppercase tracking-[0.2em] text-white/40">
                            Digital <br /> Resources
                        </div>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="text-4xl font-black text-white">500+</div>
                        <div className="text-xs font-black uppercase tracking-[0.2em] text-white/40">
                            Reading <br /> Capacity
                        </div>
                    </div>
                </motion.div> */}
            </div>
        </section>
    );
};

export default LibrarySection;

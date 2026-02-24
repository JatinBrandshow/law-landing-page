"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const LectureHalls = () => {
    const images = [
        {
            src: "https://images.unsplash.com/photo-1497493292307-31c376b6e479?q=80&w=600&h=600&fit=crop",
            title: "Main Auditorium",
            desc: "Spacious with 4K projection"
        },
        {
            src: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=600&h=600&fit=crop",
            title: "Interactive Hall",
            desc: "Designed for collaboration"
        },
        {
            src: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=600&h=600&fit=crop",
            title: "Discussion Pad",
            desc: "Acoustically optimized"
        },
        {
            src: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=600&h=600&fit=crop",
            title: "Smart Infrastructure",
            desc: "Hybrid-ready classrooms"
        }
    ];

    return (
        <section className="relative py-24 bg-[#0b1d3a] overflow-hidden">
            {/* Background Texture/Pattern */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(#fbbf24 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                {/* Header Content */}
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="inline-block px-4 py-1 rounded-full bg-[#fbbf24] text-[#0b1d3a] text-xs md:text-sm font-bold tracking-widest uppercase mb-4">
                            Prime Learning Environment
                        </span>
                        <h2 className="text-4xl md:text-6xl font-black text-white leading-tight mb-6">
                            World-Class <span className="text-[#fbbf24]">Lecture Pavilions.</span>
                        </h2>
                        <p className="text-white/80 text-lg leading-relaxed max-w-2xl mx-auto">
                            Our air-conditioned lecture halls are equipped with advanced audio-visual aids,
                            tiered seating for perfect visibility, and high-speed connectivity.
                        </p>
                    </motion.div>
                </div>

                {/* Grid Layout - Four in a row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {images.map((img, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: idx * 0.1 }}
                            className="group relative aspect-square rounded-3xl overflow-hidden border-2 border-white/10 shadow-xl"
                        >
                            <Image
                                src={img.src}
                                alt={img.title}
                                width={600}
                                height={600}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-linear-to-t from-[#0b1d3a] via-[#0b1d3a]/20 to-transparent opacity-80" />

                            <div className="absolute inset-0 p-6 flex flex-col justify-end">
                                <h4 className="text-white font-bold text-xl mb-1 group-hover:text-[#fbbf24] transition-colors">
                                    {img.title}
                                </h4>
                                <p className="text-white/60 text-sm transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                                    {img.desc}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Feature Tags or CTA if needed */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="mt-16 flex flex-wrap justify-center gap-4 md:gap-8"
                >
                    {[
                        "Digital Projection",
                        "Acoustic Design",
                        "Comfort Seating",
                        "Global Connectivity"
                    ].map((tag, i) => (
                        <div key={i} className="flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-[#fbbf24]" />
                            <span className="text-white/70 font-medium uppercase tracking-wider text-xs md:text-sm">{tag}</span>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default LectureHalls;

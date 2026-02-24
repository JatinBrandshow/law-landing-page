"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const hostelData = [
    {
        title: "Modern Living Quarters",
        desc: "Well-furnished, ventilated rooms designed for comfort and privacy.",
        image: "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?q=80&w=600&h=600&fit=crop",
    },
    {
        title: "Nutritious Dining",
        desc: "Hygienic mess serving multi-cuisine meals and balanced nutrition.",
        image: "https://images.unsplash.com/photo-1544648107-160161476d91?q=80&w=600&h=600&fit=crop",
    },
    {
        title: "Recreation Zones",
        desc: "Common lounges with indoor games and relaxation spaces.",
        image: "https://images.unsplash.com/photo-1591825729269-caeb344f6df2?q=80&w=600&h=600&fit=crop",
    },
    {
        title: "24/7 Security & High-Speed Wi-Fi",
        desc: "Safe environment with surveillance and high-speed broadband.",
        image: "https://images.unsplash.com/photo-1517502884422-41eaead166d4?q=80&w=600&h=600&fit=crop",
    }
];

const HostelFacilities = () => {
    return (
        <section className="py-24 bg-gray-50 overflow-hidden">
            <div className="max-w-8xl mx-auto px-6">
                {/* Header Section */}
                <div className="mb-16 relative">
                    <motion.span
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        className="text-secondary font-black tracking-widest uppercase text-sm mb-4 block"
                    >
                        Residential Life
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-6xl font-black text-primary leading-tight"
                    >
                        Hostel <span className="text-secondary italic font-black">Facilities.</span>
                    </motion.h2>
                    <p className="mt-6 text-gray-500 max-w-2xl text-lg leading-relaxed">
                        Experience a safe, comfortable, and vibrant residential life on campus.
                        A perfect environment to grow, learn, and make lifelong friends.
                    </p>
                </div>

                {/* Facilities Grid - 4 in a row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {hostelData.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="group relative flex flex-col h-full bg-white rounded-[2rem] p-4 border border-gray-100/50 hover:shadow-2xl hover:shadow-secondary/5 transition-all duration-500"
                        >
                            {/* Image Container */}
                            <div className="relative aspect-square rounded-[1.5rem] overflow-hidden mb-6">
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    width={600}
                                    height={600}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

                                {/* Badge */}
                                <div className="absolute top-4 left-4">
                                    <span className="bg-white/90 backdrop-blur-sm text-primary text-[10px] font-black tracking-tighter px-3 py-1 rounded-full uppercase">
                                        Facility 0{index + 1}
                                    </span>
                                </div>
                            </div>

                           
                            {/* <div className="flex-grow space-y-3 px-2">
                                <h3 className="text-xl font-black text-primary leading-tight group-hover:text-secondary transition-colors duration-300">
                                    {item.title}
                                </h3>
                                <p className="text-gray-500 text-sm leading-relaxed line-clamp-3">
                                    {item.desc}
                                </p>
                            </div> */}

                           
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

                {/* Additional Info / Social Proof */}
                {/* <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="mt-16 pt-12 border-t border-gray-100 flex flex-wrap justify-between items-center gap-8"
                >
                    <div className="flex items-center gap-4">
                        <div className="text-4xl font-black text-primary">100%</div>
                        <div className="text-xs font-black uppercase tracking-[0.2em] text-gray-400">
                            Safe & Secure <br /> Environment
                        </div>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="text-4xl font-black text-primary">24/7</div>
                        <div className="text-xs font-black uppercase tracking-[0.2em] text-gray-400">
                            Power Backup <br /> & Water
                        </div>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="text-4xl font-black text-primary">Separate</div>
                        <div className="text-xs font-black uppercase tracking-[0.2em] text-gray-400">
                            Boys & Girls <br /> Hostels
                        </div>
                    </div>
                </motion.div> */}
            </div>
        </section>
    );
};

export default HostelFacilities;

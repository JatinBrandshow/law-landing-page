"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const sportsItems = [
    {
        title: "Olympic Size Pool",
        category: "Aquatics",
        image: "https://images.unsplash.com/photo-1519315901367-f34ff9154487?q=80&w=600&h=600&fit=crop",
    },
    {
        title: "Badminton Arena",
        category: "Indoor Sports",
        image: "https://images.unsplash.com/photo-1626225967045-9410ee7b3d39?q=80&w=600&h=600&fit=crop",
    },
    {
        title: "Cricket Grounds",
        category: "Outdoor",
        image: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?q=80&w=600&h=600&fit=crop",
    },
    {
        title: "Basketball Court",
        category: "Athletics",
        image: "https://images.unsplash.com/photo-1546519638-68e109498ffc?q=80&w=600&h=600&fit=crop",
    }
];

const SportsGallery = () => {
    return (
        <section className="py-24 bg-white overflow-hidden">
            <div className="max-w-8xl mx-auto px-6">
                {/* Section Header */}
                <div className="mb-16 relative">
                    <motion.span
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        className="text-secondary font-black tracking-[0.3em] uppercase text-sm mb-4 block"
                    >
                        Arena & Athletics
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-6xl font-black text-primary leading-tight"
                    >
                        Games & <span className="text-secondary italic font-black">Sports.</span>
                    </motion.h2>
                    <p className="mt-6 text-gray-500 max-w-2xl text-lg leading-relaxed">
                        Pioneering physical excellence with world-class sporting infrastructure
                        designed for champions and holistic student development.
                    </p>
                </div>

                {/* Sports Grid - 4 in a row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {sportsItems.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="group relative h-full bg-gray-50 rounded-[2rem] p-4 border border-gray-100/50 hover:shadow-2xl hover:shadow-secondary/5 transition-all duration-500"
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
                                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

                                {/* Badge */}
                                <div className="absolute top-4 left-4">
                                    <span className="bg-white/90 backdrop-blur-sm text-primary text-[10px] font-black tracking-tighter px-3 py-1 rounded-full uppercase">
                                        Arena 0{index + 1}
                                    </span>
                                </div>
                            </div>

                            {/* Content - Hidden by default like other sections */}
                            {/* <div className="mt-6 space-y-3 px-2">
                                <h3 className="text-xl font-black text-primary leading-tight group-hover:text-secondary transition-colors duration-300">
                                    {item.title}
                                </h3>
                                <p className="text-gray-500 text-sm leading-relaxed line-clamp-3">
                                    {item.category} facilities for student athletes.
                                </p>
                            </div> */}
                        </motion.div>
                    ))}
                </div>

               
            </div>
        </section>
    );
};

export default SportsGallery;

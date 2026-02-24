"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const specializations = [
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

const LawSpecializations = () => {
    const [activeTab, setActiveTab] = useState(0);

    return (
        <section className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-4xl md:text-5xl font-extrabold text-[#0b1d3a] mb-4"
                    >
                        Law Specializations
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-gray-600 max-w-2xl mx-auto text-lg"
                    >
                        
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                    {/* Tabs Navigation */}
                    <div className="lg:col-span-5 flex flex-col gap-4">
                        {specializations.map((item, index) => (
                            <button
                                key={index}
                                onClick={() => setActiveTab(index)}
                                className={`w-full text-left p-6 rounded-2xl transition-all duration-300 flex items-center justify-between group relative overflow-hidden ${activeTab === index
                                    ? "bg-[#0b1d3a] text-white shadow-xl translate-x-2"
                                    : "bg-white text-[#0b1d3a] hover:bg-blue-50/50 border border-gray-100 shadow-sm"
                                    }`}
                            >
                                <div className="flex items-center gap-4 z-10">
                                    <span className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg transition-colors ${activeTab === index ? "bg-white/20 text-white" : "bg-gray-100 text-[#0b1d3a]"
                                        }`}>
                                        {index + 1}
                                    </span>
                                    <span className="font-bold text-lg leading-tight">{item.title}</span>
                                </div>

                                {activeTab === index && (
                                    <motion.div
                                        layoutId="activeGlow"
                                        className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-transparent"
                                        initial={false}
                                    />
                                )}
                            </button>
                        ))}
                    </div>

                    {/* Content Display */}
                    <div className="lg:col-span-7">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeTab}
                                initial={{ opacity: 0, x: 30 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -30 }}
                                transition={{ duration: 0.5, ease: "easeOut" }}
                                className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100 h-full"
                            >
                                <div className="relative h-[300px] md:h-[450px] w-full">
                                    <Image
                                        src={specializations[activeTab].image}
                                        alt={specializations[activeTab].title}
                                        fill
                                        className="object-cover"
                                        priority
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#0b1d3a]/80 via-transparent to-transparent" />
                                    <div className="absolute bottom-6 left-8 right-8 text-white">
                                        <motion.div
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 0.2 }}
                                        >
                                            <h3 className="text-3xl font-bold mb-2">
                                                {specializations[activeTab].title}
                                            </h3>
                                            <div className="h-1 w-20 bg-green-500 rounded-full" />
                                        </motion.div>
                                    </div>
                                </div>
                                <div className="p-8 md:p-10">
                                    <motion.p
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ delay: 0.3 }}
                                        className="text-gray-600 text-lg leading-relaxed mb-8"
                                    >
                                        {specializations[activeTab].description}
                                    </motion.p>
                                    <div className="flex flex-wrap gap-4">
                                        <button className="bg-[#0b1d3a] text-white px-10 py-4 rounded-xl font-bold hover:bg-[#1a3a6e] transition-all shadow-lg hover:shadow-[#0b1d3a]/20 scale-100 active:scale-95">
                                            Enroll Now
                                        </button>
                                        <button className="border-2 border-[#0b1d3a] text-[#0b1d3a] px-10 py-4 rounded-xl font-bold hover:bg-gray-50 transition-all scale-100 active:scale-95">
                                            View Curriculum
                                        </button>
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>

               
            </div>
        </section>
    );
};

export default LawSpecializations;

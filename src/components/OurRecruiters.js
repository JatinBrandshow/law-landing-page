"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const recruiters = [
    { name: "Deloitte", image: "/img/our-recuiters/deloitte.webp" },
    { name: "HDFC Bank", image: "/img/our-recuiters/hdfc-bank.webp" },
    { name: "KPMG", image: "/img/our-recuiters/kpmg.webp" },
    { name: "ICICI", image: "/img/our-recuiters/icici.webp" },
    { name: "Amazon", image: "/img/our-recuiters/amazon.webp" },
    { name: "Airtel", image: "/img/our-recuiters/airtel.webp" },
    { name: "EY", image: "/img/our-recuiters/ey.webp" },
    { name: "ITC", image: "/img/our-recuiters/itc.webp" },
    { name: "Infosys", image: "/img/our-recuiters/infosys.webp" },
    { name: "TCS", image: "/img/our-recuiters/tcs.webp" },
    { name: "Wipro", image: "/img/our-recuiters/wipro.webp" },
    { name: "Accenture", image: "/img/our-recuiters/accenture.webp" },
    { name: "Cognizant", image: "/img/our-recuiters/cognizant.webp" },
    { name: "PwC", image: "/img/our-recuiters/pwc.webp" },
    { name: "Gartner", image: "/img/our-recuiters/gartner.webp" },
    { name: "bajaj-capital", image: "/img/our-recuiters/bajaj-capital.webp" },
    { name: "bajaj-finserv", image: "/img/our-recuiters/bajaj-finserv.webp" },
    { name: "bank-of-maharashtra", image: "/img/our-recuiters/bank-of-maharashtra.webp" },
    { name: "capgemini-Logo", image: "/img/our-recuiters/capgemini-Logo.webp" },
    { name: "capitalboon-logo", image: "/img/our-recuiters/capitalboon-logo.webp" },
    { name: "citi-bank", image: "/img/our-recuiters/citi-bank.webp" },
    { name: "cq-logo", image: "/img/our-recuiters/cq-logo.webp" },
    { name: "d-mart", image: "/img/our-recuiters/d-mart.webp" },
    { name: "first-point-creations", image: "/img/our-recuiters/first-point-creations.webp" },
    { name: "genpact_logo", image: "/img/our-recuiters/genpact_logo.webp" },
    { name: "hdfc", image: "/img/our-recuiters/hdfc.webp" },
    { name: "icici-bank-logo", image: "/img/our-recuiters/icici-bank-logo.webp" },
    { name: "idbi-bank", image: "/img/our-recuiters/idbi-bank.webp" },
    { name: "infotech", image: "/img/our-recuiters/infotech.webp" },
    { name: "kotak-bank", image: "/img/our-recuiters/kotak-bank.webp" },
];

const OurRecruiters = () => {
    return (
        <>
            <section className="bg-linear-to-br from-blue-50 to-indigo-50 p-8 md:p-12 border border-blue-100">
                <div className="text-center mb-12">
                    <motion.h3
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
                    >
                        Our Esteemed <span className="text-[#0b1d3a]">Recruiters</span>
                    </motion.h3>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-gray-600 text-lg"
                    >
                        Leading industry giants that trust and hire graduates from Accurate Group of Institutions.
                    </motion.p>
                </div>

                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6 items-center justify-center">
                        {recruiters.map((recruiter, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.3, delay: index * 0.05 }}
                                viewport={{ once: true }}
                                className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex justify-center items-center aspect-square hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group"
                            >
                                <div className="relative w-full h-full">
                                    <Image
                                        src={recruiter.image}
                                        alt={recruiter.name}
                                        fill
                                        className="object-contain filter grayscale group-hover:grayscale-0 transition-all duration-500 p-2"
                                    />
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default OurRecruiters;

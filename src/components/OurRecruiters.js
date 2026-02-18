"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

const recruiters = [
    { name: "Infosys", image: "/img/our-recuiters/course-logo2.webp" },
    { name: "HDFC Bank", image: "/img/our-recuiters/course-logo3.webp" },
    { name: "KPMG", image: "/img/our-recuiters/course-logo4.webp" },
    { name: "ICICI", image: "/img/our-recuiters/course-logo5.webp" },
    { name: "Amazon", image: "/img/our-recuiters/course-logo6.webp" },
    { name: "Airtel", image: "/img/our-recuiters/course-logo7.webp" },
    { name: "EY", image: "/img/our-recuiters/course-logo8.webp" },
    { name: "ITC", image: "/img/our-recuiters/course-logo9.webp" },
    { name: "Infosys", image: "/img/our-recuiters/course-logo10.webp" },
    { name: "TCS", image: "/img/our-recuiters/course-logo11.webp" },
    { name: "Wipro", image: "/img/our-recuiters/course-logo12.webp" },
    { name: "Accenture", image: "/img/our-recuiters/course-logo13.webp" },
    { name: "Cognizant", image: "/img/our-recuiters/recruiters-logo1.webp" },
    { name: "PwC", image: "/img/our-recuiters/recruiters-logo2.webp" },
    { name: "Gartner", image: "/img/our-recuiters/recruiters-logo3.webp" },
    { name: "Bajaj Capital", image: "/img/our-recuiters/recruiters-logo4.webp" },
    { name: "Bajaj Finserv", image: "/img/our-recuiters/recruiters-logo5.webp" },
    { name: "Bank of Maharashtra", image: "/img/our-recuiters/recruiters-logo6.webp" },
    { name: "Capgemini", image: "/img/our-recuiters/recruiters-logo7.webp" },
    { name: "Capital Boon", image: "/img/our-recuiters/recruiters-logo8.webp" },
    { name: "Citi Bank", image: "/img/our-recuiters/recruiters-logo9.webp" },
    { name: "CQ", image: "/img/our-recuiters/recruiters-logo10.webp" },
    { name: "D-Mart", image: "/img/our-recuiters/recruiters-logo11.webp" },
    { name: "First Point Creations", image: "/img/our-recuiters/recruiters-logo12.webp" },
    { name: "Genpact", image: "/img/our-recuiters/recruiters-logo13.webp" },
    { name: "HDFC", image: "/img/our-recuiters/recruiters-logo14.webp" },
    { name: "ICICI Bank", image: "/img/our-recuiters/recruiters-logo15.webp" },
    { name: "IDBI Bank", image: "/img/our-recuiters/recruiters-logo16.webp" },
    { name: "Infotech", image: "/img/our-recuiters/recruiters-logo17.webp" },
    { name: "Kotak Bank", image: "/img/our-recuiters/recruiters-logo18.webp" },
    { name: "Kotak Bank", image: "/img/our-recuiters/recruiters-logo19.webp" },
    { name: "Kotak Bank", image: "/img/our-recuiters/recruiters-logo20.webp" },
];

const OurRecruiters = () => {
    const [images, setImages] = useState(recruiters);

    useEffect(() => {
        const interval = setInterval(() => {
            setImages((prevImages) => {
                const updated = [...prevImages];

                // Pick two different random indexes
                const i1 = Math.floor(Math.random() * updated.length);
                let i2 = Math.floor(Math.random() * updated.length);

                while (i2 === i1) {
                    i2 = Math.floor(Math.random() * updated.length);
                }

                // Swap ONLY two images (keeps uniqueness)
                const temp = updated[i1];
                updated[i1] = updated[i2];
                updated[i2] = temp;

                console.log(
                    `%cShuffled → Swapped: ${updated[i1].name} ↔ ${updated[i2].name}`,
                    "color: green; font-weight: bold;"
                );

                return updated;
            });
        }, 2000);

        return () => clearInterval(interval);
    }, []);

    // Pyramid Pattern: [1, 3, 5, 7]
    const rows = [1, 3, 5, 7];

    let i = 0;
    return (
        <>
            <section className="bg-linear-to-br from-blue-50 to-indigo-50 p-8 md:p-12 border border-blue-100">
                <div className="text-center mb-8">
                    <h3 className="text-3xl font-semibold text-gray-900 mb-2">Our Esteemed Recruiters</h3>
                    <p className="text-gray-600">Leading companies trust Accurate graduates</p>
                </div>

                <div className="flex flex-col items-center gap-4 max-sm:hidden max-md:hidden">
                    {rows.map((count, rowIndex) => (
                        <div
                            key={rowIndex}
                            className="grid gap-4"
                            style={{
                                gridTemplateColumns: `repeat(${count}, minmax(0, 1fr))`,
                            }}
                        >
                            {[...Array(count)].map((_, col) => {
                                const recruiter = images[i % images.length];
                                i++;

                                return (
                                    <div
                                        key={col}
                                        className="bg-white rounded-xl p-3 shadow-sm border border-gray-100 flex justify-center items-center h-28 w-28 hover:shadow-md transition"
                                    >
                                        <Image
                                            src={recruiter.image}
                                            alt={recruiter.name}
                                            width={120}
                                            height={120}
                                            className="object-contain transition duration-300"
                                        />
                                    </div>
                                );
                            })}
                        </div>
                    ))}
                </div>
                {/* MOBILE + TABLET VIEW (sm & md) */}
                <div className="block lg:hidden">
                    <Swiper
                        modules={[Autoplay]}
                        autoplay={{ delay: 2000 }}
                        slidesPerView={3}
                        spaceBetween={20}
                        loop
                        breakpoints={{
                            0: { slidesPerView: 2 },
                            640: { slidesPerView: 3 },
                            768: { slidesPerView: 4 },
                        }}
                    >
                        {recruiters.map((item, index) => (
                            <SwiperSlide key={index}>
                                <div className="bg-white rounded-xl p-3 shadow-sm border border-gray-100 flex justify-center items-center h-24">
                                    <Image
                                        src={item.image}
                                        alt={item.name}
                                        width={90}
                                        height={90}
                                        className="object-contain"
                                    />
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </section>
        </>
    );
};

export default OurRecruiters;

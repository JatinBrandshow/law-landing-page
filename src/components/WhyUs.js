"use client";
import React from "react";
import {
    Award,
    BadgeCheck,
    Trophy,
    BookOpenCheck,
    FlaskConical,
    Building2,
    Briefcase,
    Users,
    UserStar,
    TreePine,
    Heart,
    GraduationCap,
    MapPin,
} from "lucide-react";

const features = [
    {
        icon: Award,
        title: "Academic Excellence",
        description: "Experienced faculty, updated industry-vetted curriculum and a student-centric learning approach.",
    },
    {
        icon: Trophy,
        title: "Moot Court & Practical Training",
        description: "Hands-on exposure through moot courts, legal aid clinics and internships with top law firms.",
    },
    {
        icon: Building2,
        title: "State-of-the-Art Infrastructure",
        description: "Well-equipped library, smart classrooms and modern legal research facilities.",
    },
    {
        icon: Users,
        title: "Industry Connect & Expert Sessions",
        description: "Regular interactions with judges, lawyers and legal professionals for real-world insights.",
    },
    {
        icon: Briefcase,
        title: "Placement & Career Support",
        description:
            "Dedicated placement cell ensuring opportunities in top law firms, corporate houses and judiciary.",
    },
    {
        icon: UserStar,
        title: "Holistic Development",
        description:
            "Emphasis on leadership, ethics and professional skills through seminars, debates and competitions.",
    },
    {
        icon: MapPin,
        title: "Strategic Location",
        description:
            "Situated in the heart of Greater Noida with excellent metro connectivity and a thriving educational environment.",
    },
    {
        icon: GraduationCap,
        title: "Merit-Based Scholarships",
        description: "Various merit-based scholarships and financial aid options available for deserving students.",
    },
    {
        icon: Heart,
        title: "Special Girls Scholarship",
        description:
            "In line with the Beti Bachao, Beti Padhao initiative, exclusive scholarships are offered to support and empower female students in the legal profession.",
    },
];
const WhyUs = () => {
    return (
        <section className="bg-yellow-100 py-16">
            <div className="mx-auto max-w-350 px-6">
                {/* Heading */}
                <div className="max-w-3xl mb-7">
                    <h2 className="text-4xl font-bold text-blue-950 font-serif">Why Choose Accurate College of Law?</h2>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {features.map((item, index) => {
                        const Icon = item.icon;
                        return (
                            <div
                                key={index}
                                className="group rounded-2xl bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg flex flex-col gap-4 border border-gray-100"
                            >
                                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-yellow-50 border border-yellow-200 group-hover:bg-blue-950 transition-colors duration-300">
                                    <Icon className="h-6 w-6 text-blue-950 group-hover:text-white transition-colors duration-300" />
                                </div>

                                <div>
                                    <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                                    <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default WhyUs;

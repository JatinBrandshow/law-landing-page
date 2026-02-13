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
} from "lucide-react";

const features = [
    { icon: Award, text: "Engineering Excellence Since 2006" },
    { icon: BadgeCheck, text: "AICTE Approved & AKTU Affiliated" },
    { icon: Trophy, text: "National & Regional Awards" },
    { icon: BookOpenCheck, text: "Industry-Oriented Curriculum" },
    { icon: FlaskConical, text: "Advanced Modern Laboratories" },
    { icon: Building2, text: "Strong Industry–Institute Interface" },
    { icon: Briefcase, text: "100% Placement Track Record" },
    { icon: Users, text: "Holistic Student Development" },
    { icon: UserStar, text: "Experienced & Dedicated Faculty" },
    { icon: TreePine, text: "16+ Acre Green Campus" },
];

const WhyUs = () => {
    return (
        <section className="bg-yellow-100 py-16">
            <div className="mx-auto max-w-350 px-6">
                {/* Heading */}
                <div className="max-w-3xl mb-7">
                    <h2 className="text-4xl font-bold text-blue-950 font-serif">Why Accurate?</h2>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {features.map((item, index) => {
                        const Icon = item.icon;
                        return (
                            <div
                                key={index}
                                className="group rounded-2xl bg-white p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg flex items-center gap-2"
                            >
                                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-yellow-50 border border-yellow-200 group-hover:bg-blue-950 transition">
                                    <Icon className="h-6 w-6 text-blue-950 group-hover:text-white transition" />
                                </div>

                                <p className="text-base font-semibold text-gray-900 leading-snug">{item.text}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default WhyUs;

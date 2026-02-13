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
                                className="group rounded-2xl bg-white p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg flex items-center gap-2"
                            >
                                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-yellow-50 border border-yellow-200 group-hover:bg-blue-950 transition">
                                    <Icon className="h-6 w-6 text-blue-950 group-hover:text-white transition" />
                                </div>

                                <p className="text-base font-semibold text-gray-900 leading-snug">{item.title}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default WhyUs;

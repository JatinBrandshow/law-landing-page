import React from "react";

const ProgrammeOverview = () => {
    return (
        <section className="py-12 bg-white">
            <div className="mx-auto max-w-7xl px-6">
                
                <h2 className="text-4xl font-bold text-blue-950 font-serif text-center">
                    Programme Overview – Law Programmes
                </h2>

                <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8">
                    
                    {/* BA LLB CARD */}
                    <div className="rounded-2xl border border-blue-100 shadow-md p-8 hover:shadow-xl transition duration-300">
                        <h3 className="text-2xl font-semibold text-blue-900">
                            B.A. LL.B.
                            <span className="block text-base font-medium text-gray-600">
                                (Integrated 5-Year Programme)
                            </span>
                        </h3>

                        <p className="mt-4 text-gray-700 text-sm leading-relaxed">
                            Interdisciplinary study of social sciences and legal education including
                            Political Science, Sociology, History, Economics, English along with
                            Constitutional Law, Criminal Law, Civil Law, Corporate Law,
                            Cyber Law, Banking Law and Environmental Law.
                        </p>

                        <div className="mt-4 text-sm text-gray-700">
                            <p><strong>Eligibility:</strong> 10+2 as per BCI norms</p>

                            <ul className="mt-3 space-y-1 list-disc ml-5 text-gray-600">
                                <li>General – 45%</li>
                                <li>OBC (UP) – 42%</li>
                                <li>SC/ST (UP) – 40%</li>
                                <li>OBC/SC/ST (Other States) – 45%</li>
                            </ul>
                        </div>
                    </div>

                    {/* LLB CARD */}
                    <div className="rounded-2xl border border-blue-100 shadow-md p-8 hover:shadow-xl transition duration-300">
                        <h3 className="text-2xl font-semibold text-blue-900">
                            LL.B.
                            <span className="block text-base font-medium text-gray-600">
                                (3-Year Programme)
                            </span>
                        </h3>

                        <p className="mt-4 text-gray-700 text-sm leading-relaxed">
                            Comprehensive coverage of Jurisprudence, Constitutional Law,
                            Criminal Law, Civil Law, Corporate Law, Property Law,
                            Banking Law and Environmental Law with strong focus
                            on advocacy and research skills.
                        </p>

                        <div className="mt-4 text-sm text-gray-700">
                            <p><strong>Eligibility:</strong> Graduation (10+2+3/4/5) as per BCI norms</p>

                            <ul className="mt-3 space-y-1 list-disc ml-5 text-gray-600">
                                <li>General – 45%</li>
                                <li>OBC (UP) – 42%</li>
                                <li>SC/ST (UP) – 40%</li>
                                <li>OBC/SC/ST (Other States) – 45%</li>
                            </ul>

                            <p className="mt-3 text-xs text-gray-500">
                                *Candidates with less than 45% in graduation but 45% or more in post-graduation are also eligible.
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default ProgrammeOverview;

"use client";

const FeeStructure = () => {
    return (
        <section
            className="relative py-20 overflow-hidden bg-cover bg-center"
            style={{
                backgroundImage: "url('/img/accurate-landing-vector.webp')",
            }}
        >
            {/* Background decorative elements */}
            <div className="absolute inset-0 bg-white/75 backdrop-blur-[2px]"></div>

            {/* Content wrapper */}
            <div className="relative max-w-7xl mx-auto px-6">
                {/* Heading */}
                <div className="text-center mb-14">
                    <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
                        B.Tech Fee <span className="text-indigo-600">Structure</span>
                    </h2>
                    <p className="text-slate-600 max-w-2xl mx-auto">
                        Detailed and transparent year-wise fee structure for B.Tech programs.
                    </p>
                </div>

                {/* Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* B.Tech Regular */}
                    <div className="rounded-2xl border border-slate-200 shadow-sm hover:shadow-lg transition-all p-8 bg-white">
                        <div className="flex justify-between items-start mb-6">
                            <div>
                                <h3 className="text-2xl font-semibold text-slate-900">B.Tech</h3>
                                <p className="text-slate-500">Duration: 4 Years</p>
                            </div>
                            <span className="px-4 py-1 rounded-full text-sm bg-indigo-50 text-indigo-600 font-medium">
                                Regular
                            </span>
                        </div>

                        <div className="mb-6">
                            <p className="text-slate-500 text-sm">Total Program Fee</p>
                            <p className="text-3xl font-bold text-indigo-600">₹5,65,000</p>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div className="fee-pill">
                                <span>1st Year</span>
                                <strong>₹1,45,000</strong>
                            </div>
                            <div className="fee-pill">
                                <span>2nd Year</span>
                                <strong>₹1,40,000</strong>
                            </div>
                            <div className="fee-pill">
                                <span>3rd Year</span>
                                <strong>₹1,40,000</strong>
                            </div>
                            <div className="fee-pill">
                                <span>4th Year</span>
                                <strong>₹1,40,000</strong>
                            </div>
                        </div>
                    </div>

                    {/* B.Tech Lateral */}
                    <div className="rounded-2xl border border-slate-200 shadow-sm hover:shadow-lg transition-all p-8 bg-white">
                        <div className="flex justify-between items-start mb-6">
                            <div>
                                <h3 className="text-2xl font-semibold text-slate-900">B.Tech (Lateral Entry)</h3>
                                <p className="text-slate-500">Duration: 3 Years</p>
                            </div>
                            <span className="px-4 py-1 rounded-full text-sm bg-emerald-50 text-emerald-600 font-medium">
                                Lateral
                            </span>
                        </div>

                        <div className="mb-6">
                            <p className="text-slate-500 text-sm">Total Program Fee</p>
                            <p className="text-3xl font-bold text-emerald-600">₹3,45,000</p>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div className="fee-pill opacity-50">
                                <span>1st Year</span>
                                <strong>—</strong>
                            </div>
                            <div className="fee-pill">
                                <span>2nd Year</span>
                                <strong>₹1,15,000</strong>
                            </div>
                            <div className="fee-pill">
                                <span>3rd Year</span>
                                <strong>₹1,15,000</strong>
                            </div>
                            <div className="fee-pill">
                                <span>4th Year</span>
                                <strong>₹1,15,000</strong>
                            </div>
                        </div>
                    </div>
                </div>

                <p className="text-center text-sm text-slate-500 mt-10">
                    Fees are subject to change as per university and government norms.
                </p>
            </div>

            {/* Fee pill style */}
            <style jsx>{`
                .fee-pill {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    padding: 0.75rem 1rem;
                    border-radius: 0.75rem;
                    background-color: #f8fafc;
                    font-size: 0.95rem;
                    color: #334155;
                    font-weight: 500;
                }
            `}</style>
        </section>
    );
};

export default FeeStructure;

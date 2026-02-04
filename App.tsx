
import React from 'react';
import MarTechTile from './components/MarTechTile';
import { Component, Search, ArrowUp, BarChart2, Zap, Database, BrainCircuit, Settings2, TrendingUp } from 'lucide-react';

export default function App() {
    return (
        <div className="w-full h-full bg-background-dark font-display text-white">
            {/* Navigation */}
            <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-b-[#223149] px-6 md:px-20 py-4 bg-background-dark/80 backdrop-blur-md sticky top-0 z-50">
                <div className="flex items-center gap-8">
                    <div className="flex items-center gap-4 text-white">
                        <div className="size-6 bg-primary rounded flex items-center justify-center">
                            <Component className="text-white h-4 w-4" />
                        </div>
                        <h2 className="text-white text-lg font-bold leading-tight tracking-[-0.015em]">MarTech AI</h2>
                    </div>
                    <nav className="hidden md:flex items-center gap-9">
                        <a className="text-white text-sm font-medium hover:text-primary transition-colors" href="#">Platform</a>
                        <a className="text-white text-sm font-medium hover:text-primary transition-colors" href="#">Integrations</a>
                        <a className="text-white text-sm font-medium hover:text-primary transition-colors" href="#">ROI Calculator</a>
                        <a className="text-white text-sm font-medium hover:text-primary transition-colors" href="#">Case Studies</a>
                    </nav>
                </div>
                <div className="flex items-center gap-4">
                    <div className="hidden lg:flex items-center rounded-lg bg-[#223149] px-3 py-1.5">
                        <Search className="text-[#90a7cb] h-5 w-5" />
                        <input className="bg-transparent border-none focus:ring-0 text-sm placeholder:text-[#90a7cb] w-32" placeholder="Search stack..." />
                    </div>
                    <button className="bg-primary hover:bg-primary/80 transition-all text-white text-sm font-bold py-2 px-6 rounded-lg">
                        Get Started
                    </button>
                </div>
            </header>

            <main className="relative">
                {/* Hero Section with Workflow Visualization */}
                <section className="relative min-h-[700px] flex items-center justify-center overflow-hidden grid-pattern">
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background-dark/50 to-background-dark"></div>
                    <div className="container mx-auto px-4 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
                        {/* Text Content */}
                        <div className="flex flex-col gap-6 max-w-xl">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 w-fit">
                                <span className="flex h-2 w-2 rounded-full bg-primary animate-pulse"></span>
                                <span className="text-primary text-xs font-bold uppercase tracking-wider">Enterprise Ready</span>
                            </div>
                            <h1 className="text-white text-5xl md:text-6xl font-black leading-tight tracking-tighter">
                                Optimize Your <span className="text-primary">Marketing Stack</span> for Maximum ROI
                            </h1>
                            <p className="text-[#90a7cb] text-lg font-normal leading-relaxed">
                                Connect your CRM, Automation, and Analytics tools into a high-performance ecosystem. Achieve up to 68% better utilization with AI-driven orchestration.
                            </p>
                            <div className="flex flex-wrap gap-4 mt-4">
                                <button className="bg-primary hover:scale-105 transition-transform text-white text-base font-bold py-3 px-8 rounded-lg shadow-lg shadow-primary/20">
                                    Start Free Trial
                                </button>
                                <button className="bg-[#223149] hover:bg-[#2c3d5a] transition-colors text-white text-base font-bold py-3 px-8 rounded-lg border border-[#314668]">
                                    View Tech Demo
                                </button>
                            </div>
                        </div>
                        {/* Visualization Panel */}
                        <MarTechTile />
                    </div>
                </section>

                {/* Metrics Bar */}
                <section className="bg-[#16202e] border-y border-[#223149] py-12">
                    <div className="container mx-auto px-4 max-w-6xl">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div className="flex flex-col gap-2 rounded-xl p-6 bg-[#223149]/30 border border-[#314668] hover:border-primary/50 transition-colors">
                                <p className="text-[#90a7cb] text-sm font-medium uppercase tracking-widest">Growth Factor</p>
                                <p className="text-white text-4xl font-bold leading-tight">+68%</p>
                                <div className="flex items-center gap-2">
                                    <span className="text-[#0bda5e] text-sm font-bold">+15% vs LY</span>
                                    <ArrowUp className="text-[#0bda5e] h-4 w-4" />
                                </div>
                            </div>
                            <div className="flex flex-col gap-2 rounded-xl p-6 bg-[#223149]/30 border border-[#314668] hover:border-primary/50 transition-colors">
                                <p className="text-[#90a7cb] text-sm font-medium uppercase tracking-widest">System ROI</p>
                                <p className="text-white text-4xl font-bold leading-tight">3.7x</p>
                                <div className="flex items-center gap-2">
                                    <span className="text-[#0bda5e] text-sm font-bold">+24% efficiency</span>
                                    <BarChart2 className="text-[#0bda5e] h-4 w-4" />
                                </div>
                            </div>
                            <div className="flex flex-col gap-2 rounded-xl p-6 bg-[#223149]/30 border border-[#314668] hover:border-primary/50 transition-colors">
                                <p className="text-[#90a7cb] text-sm font-medium uppercase tracking-widest">Integration Speed</p>
                                <p className="text-white text-4xl font-bold leading-tight">Real-time</p>
                                <div className="flex items-center gap-2">
                                    <span className="text-[#fa6238] text-sm font-bold">-40% latency</span>
                                    <Zap className="text-[#fa6238] h-4 w-4" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Feature Section */}
                <section className="py-24">
                    <div className="container mx-auto px-4 max-w-6xl">
                        <div className="flex flex-col items-center text-center gap-4 mb-16">
                            <h2 className="text-white text-4xl font-bold tracking-tight">Seamless System Integration</h2>
                            <p className="text-[#90a7cb] text-lg max-w-2xl">Our platform serves as the central intelligent node for your entire marketing technology ecosystem, ensuring data flows where it's needed most.</p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div className="flex flex-col gap-5 p-6 rounded-2xl bg-[#16202e] border border-[#223149] group hover:bg-primary/5 transition-all">
                                <div className="w-full h-48 bg-cover bg-center rounded-lg border border-[#314668]" style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDhTga4rozKitjqxJIQjtj4_sc0BEcv4jU-p987Fgu2EfkbyijD22MZMNMWE9V-qzkGsVr1wTzb1C9Ha2ZC91s8y784vjKo2OM5Ks9LpQ4ORFYXIMqQ_sBir1gRr9yvPTQgGNGLZhhNBmlmprXOO4aKDEA3Zix_ugPgD8e5s4EL000hWRH6MCGnY9eKCrSvrwUcy1hTyvBIghsHImKEfp4FamrPyVv8pEFYS_54D8afePRdzSDiTzEamGrAg4NXG7wvajsVzFepzbjw')"}}></div>
                                <div>
                                    <h3 className="text-white text-xl font-bold mb-2">Unified CRM Sync</h3>
                                    <p className="text-[#90a7cb] text-sm">Bi-directional synchronization across all platforms, ensuring your sales and marketing teams always have the latest lead intelligence.</p>
                                </div>
                            </div>
                            <div className="flex flex-col gap-5 p-6 rounded-2xl bg-[#16202e] border border-[#223149] group hover:bg-primary/5 transition-all">
                                <div className="w-full h-48 bg-cover bg-center rounded-lg border border-[#314668]" style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCSMz8ekU-ljFLYimbZqmia9m0qA-TPUD1BCnN8nY7InKt7eLWghnZ_g84WMsopLKq2L47lgWsM_VIj1AyZnGji4JItDkWXUPzjq4_cdGc5DRr7TOgDlHgJLXD9z-d9z_HrNWlhvVB3mMd84o3QgF6isS6wdL5ukQ3lYoSPZn8TquM37duOoj0JT41gFX2Sh5C1_KY9NR81IfHIepcEPa7RT2rdNF_xbhOPpujdFpTrUt7_qYwW3PUYjAJdap6IZUCUs5HPj5C_bmW2')"}}></div>
                                <div>
                                    <h3 className="text-white text-xl font-bold mb-2">Automated Workflows</h3>
                                    <p className="text-[#90a7cb] text-sm">Eliminate manual tasks with AI-driven paths. Deploy multi-step campaigns across channels with a single trigger.</p>
                                </div>
                            </div>
                            <div className="flex flex-col gap-5 p-6 rounded-2xl bg-[#16202e] border border-[#223149] group hover:bg-primary/5 transition-all">
                                <div className="w-full h-48 bg-cover bg-center rounded-lg border border-[#314668]" style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAILdqHPIKXeZ02Pi7fPz3p82N9nckz-On0qCDWci-akJ54BLma4NgTRCX2s-wCUy9auUc-aXeexIyFkGsXoqNKldYRGuQvUG4PdvKRrWpdMWydzdBJdF4ZD4v5KrDqt9-OrtRMkX5lcXcMTQoloLdHfvexAdd7ci_A5aZMpWuacduecvMfPBFbUkkPAJyPMTjZ9Cr4uKYXK9MF1xKxYnhBrQKyLtSWN6cfnpJTPpgA2eDB_0D5vxlGxyRW0864S3p82PecNFSPl-Jr')"}}></div>
                                <div>
                                    <h3 className="text-white text-xl font-bold mb-2">Predictive Analytics</h3>
                                    <p className="text-[#90a7cb] text-sm">Visualize growth with high-contrast metrics. Use machine learning to forecast lead conversion and revenue attribution.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Process Timeline */}
                <section className="bg-[#0b0f17] py-24">
                    <div className="container mx-auto px-4 max-w-4xl">
                        <div className="mb-12 text-center">
                            <h2 className="text-3xl font-bold">Optimization Roadmap</h2>
                            <p className="text-[#90a7cb]">Our 4-phase approach to modernizing your stack.</p>
                        </div>
                        <div className="grid grid-cols-[60px_1fr] gap-x-4">
                            {/* Phase 1 */}
                            <div className="flex flex-col items-center gap-1">
                                <div className="size-12 rounded-full border border-primary/40 bg-primary/10 flex items-center justify-center text-primary shadow-lg shadow-primary/20">
                                    <Database />
                                </div>
                                <div className="w-[2px] bg-gradient-to-b from-primary/50 to-primary/20 h-16"></div>
                            </div>
                            <div className="flex flex-col pb-12">
                                <span className="text-primary text-xs font-bold uppercase tracking-widest mb-1">Phase 1</span>
                                <h4 className="text-white text-lg font-bold">Data Ingestion</h4>
                                <p className="text-[#90a7cb] text-sm mt-1">Consolidate disparate data sources from your CRM, social, and web analytics into a single source of truth.</p>
                            </div>
                            {/* Phase 2 */}
                            <div className="flex flex-col items-center gap-1">
                                <div className="size-12 rounded-full border border-primary/40 bg-primary/10 flex items-center justify-center text-primary">
                                    <BrainCircuit />
                                </div>
                                <div className="w-[2px] bg-gradient-to-b from-primary/20 to-primary/10 h-16"></div>
                            </div>
                            <div className="flex flex-col pb-12">
                                <span className="text-primary text-xs font-bold uppercase tracking-widest mb-1">Phase 2</span>
                                <h4 className="text-white text-lg font-bold">Pattern Recognition</h4>
                                <p className="text-[#90a7cb] text-sm mt-1">Our AI engine identifies inefficiencies and cross-platform bottlenecks in your current user journey.</p>
                            </div>
                            {/* Phase 3 */}
                            <div className="flex flex-col items-center gap-1">
                                <div className="size-12 rounded-full border border-primary/40 bg-primary/10 flex items-center justify-center text-primary">
                                    <Settings2 />
                                </div>
                                <div className="w-[2px] bg-gradient-to-b from-primary/10 to-transparent h-16"></div>
                            </div>
                            <div className="flex flex-col pb-12">
                                <span className="text-primary text-xs font-bold uppercase tracking-widest mb-1">Phase 3</span>
                                <h4 className="text-white text-lg font-bold">Optimization Logic</h4>
                                <p className="text-[#90a7cb] text-sm mt-1">Automated deployment of optimized workflows and audience segments across your entire tech stack.</p>
                            </div>
                            {/* Phase 4 */}
                            <div className="flex flex-col items-center gap-1">
                                <div className="size-12 rounded-full border border-[#0bda5e]/40 bg-[#0bda5e]/10 flex items-center justify-center text-[#0bda5e]">
                                    <TrendingUp />
                                </div>
                            </div>
                            <div className="flex flex-col">
                                <span className="text-[#0bda5e] text-xs font-bold uppercase tracking-widest mb-1">Phase 4</span>
                                <h4 className="text-white text-lg font-bold">ROI Realization</h4>
                                <p className="text-[#90a7cb] text-sm mt-1">Live dashboarding of your improved conversion rates, customer lifetime value, and stack utilization.</p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <footer className="bg-background-dark border-t border-[#223149] py-10 px-6 md:px-20">
                <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                    <div className="flex items-center gap-3">
                        <Component className="text-primary" />
                        <span className="font-bold text-lg">MarTech AI</span>
                    </div>
                    <div className="flex gap-8 text-[#90a7cb] text-sm">
                        <a className="hover:text-white transition-colors" href="#">Privacy Policy</a>
                        <a className="hover:text-white transition-colors" href="#">Terms of Service</a>
                        <a className="hover:text-white transition-colors" href="#">Security</a>
                    </div>
                    <p className="text-[#90a7cb] text-xs">© 2024 MarTech AI Optimization Platform. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
}

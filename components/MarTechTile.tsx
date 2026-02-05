
'use client';
import React, { useState, useEffect } from 'react';
// FIX: Imported the `Variants` type from framer-motion to correctly type animation variants.
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { Rocket, Users, Mail, TrendingUp, TrendingDown, Wallet, AreaChart, Blocks } from 'lucide-react';

// FIX: Explicitly typed cardVariants with `Variants` to resolve a TypeScript error where the `ease` property was inferred as a generic `string` instead of the required `Easing` type.
const cardVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: i * 0.2,
            duration: 0.5,
            ease: 'easeOut',
        },
    }),
};

// FIX: Explicitly typed numberVariant with `Variants` for consistency and type safety.
const numberVariant: Variants = {
  initial: { opacity: 0, y: -10 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 10 },
};

export default function MarTechTile() {
    const [stats, setStats] = useState({ utilization: 68, roi: 3.7 });
    const [isOptimized, setIsOptimized] = useState(true);

    useEffect(() => {
        let intervalId: number | undefined;

        if (isOptimized) {
            setStats({ utilization: 68, roi: 3.7 });
            intervalId = window.setInterval(() => {
                setStats({
                    utilization: 68 + (Math.random() * 4 - 2),
                    roi: 3.7 + (Math.random() * 0.2 - 0.1),
                });
            }, 3000);
        } else {
            setStats({ utilization: 24, roi: 1.2 });
        }

        return () => {
            if (intervalId) {
                clearInterval(intervalId);
            }
        };
    }, [isOptimized]);

    return (
        <div className="w-full h-full flex justify-center items-center">
            <div className="relative aspect-square w-full max-w-[500px] lg:h-[500px] lg:w-[500px] lg:max-w-none bg-[#16202e] rounded-2xl border border-[#223149] overflow-hidden shadow-2xl">
                {/* Toggle Switch */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-30 flex items-center gap-2 text-xs font-bold">
                    <span className={`transition-colors ${!isOptimized ? 'text-white' : 'text-gray-500'}`}>Before</span>
                    <div
                        className={`w-10 h-5 flex items-center rounded-full p-1 cursor-pointer transition-colors ${isOptimized ? 'bg-primary' : 'bg-gray-600'}`}
                        onClick={() => setIsOptimized(!isOptimized)}
                    >
                        <motion.div
                            className="w-4 h-4 bg-white rounded-full"
                            layout
                            transition={{ type: 'spring', stiffness: 700, damping: 30 }}
                        />
                    </div>
                    <span className={`transition-colors ${isOptimized ? 'text-white' : 'text-gray-500'}`}>After</span>
                </div>

                {/* Central Hub */}
                <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.5, ease: 'backOut' }}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                    <motion.div 
                        animate={{boxShadow: isOptimized ? '0 0 20px rgba(61, 132, 245, 0.3)' : '0 0 20px rgba(239, 68, 68, 0.4)'}}
                        className={`w-24 h-24 rounded-full bg-primary/20 border-2 flex items-center justify-center`}
                    >
                        <Rocket className="text-4xl text-white" />
                    </motion.div>
                </motion.div>

                {/* Connection Lines */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-40" preserveAspectRatio="xMidYMid meet" viewBox="0 0 500 500">
                    <motion.path d="M100,100 Q250,150 250,250" fill="none" animate={{stroke: isOptimized ? '#3d84f5' : '#4b5563'}} strokeDasharray="8 4" strokeWidth="2"></motion.path>
                    <motion.path d="M400,100 Q250,150 250,250" fill="none" animate={{stroke: isOptimized ? '#3d84f5' : '#4b5563'}} strokeDasharray="8 4" strokeWidth="2"></motion.path>
                    <motion.path d="M100,180 Q250,215 250,250" fill="none" animate={{stroke: isOptimized ? '#3d84f5' : '#4b5563'}} strokeDasharray="8 4" strokeWidth="2"></motion.path>
                    <motion.path d="M400,180 Q250,215 250,250" fill="none" animate={{stroke: isOptimized ? '#3d84f5' : '#4b5563'}} strokeDasharray="8 4" strokeWidth="2"></motion.path>
                    <motion.path d="M100,400 Q250,350 250,250" fill="none" animate={{stroke: isOptimized ? '#0bda5e' : '#ef4444'}} strokeWidth="2"></motion.path>
                    <motion.path d="M400,400 Q250,350 250,250" fill="none" animate={{stroke: isOptimized ? '#0bda5e' : '#ef4444'}} strokeWidth="2"></motion.path>
                </svg>

                {/* Tool Nodes */}
                <motion.div custom={1} initial="hidden" animate="visible" variants={cardVariants} className="absolute top-10 left-10 p-3 bg-[#223149]/80 backdrop-blur rounded-xl border border-[#314668] flex items-center gap-3">
                    <div className="size-10 bg-violet-600 rounded flex items-center justify-center"><Users className="text-white" /></div>
                    <div><p className="text-[10px] text-[#90a7cb] uppercase font-bold tracking-tighter">CRM Node</p><p className="text-xs font-bold text-white">Salesforce</p></div>
                </motion.div>
                <motion.div custom={1.2} initial="hidden" animate="visible" variants={cardVariants} className="absolute top-10 right-10 p-3 bg-[#223149]/80 backdrop-blur rounded-xl border border-[#314668] flex items-center gap-3">
                    <div className="size-10 bg-orange-500 rounded flex items-center justify-center"><Mail className="text-white" /></div>
                    <div><p className="text-[10px] text-[#90a7cb] uppercase font-bold tracking-tighter">Automation</p><p className="text-xs font-bold text-white">Marketo</p></div>
                </motion.div>
                <motion.div custom={1.4} initial="hidden" animate="visible" variants={cardVariants} className="absolute top-36 left-10 p-3 bg-[#223149]/80 backdrop-blur rounded-xl border border-[#314668] flex items-center gap-3">
                    <div className="size-10 bg-sky-500 rounded flex items-center justify-center"><AreaChart className="text-white" /></div>
                    <div><p className="text-[10px] text-[#90a7cb] uppercase font-bold tracking-tighter">Analytics</p><p className="text-xs font-bold text-white">Google Analytics</p></div>
                </motion.div>
                <motion.div custom={1.6} initial="hidden" animate="visible" variants={cardVariants} className="absolute top-36 right-10 p-3 bg-[#223149]/80 backdrop-blur rounded-xl border border-[#314668] flex items-center gap-3">
                    <div className="size-10 bg-emerald-500 rounded flex items-center justify-center"><Blocks className="text-white" /></div>
                    <div><p className="text-[10px] text-[#90a7cb] uppercase font-bold tracking-tighter">Content Mngmt</p><p className="text-xs font-bold text-white">Contentful</p></div>
                </motion.div>

                {/* Metric Cards */}
                <motion.div custom={1.8} initial="hidden" animate="visible" variants={cardVariants} className={`absolute bottom-10 left-10 p-4 bg-[#101722]/90 backdrop-blur rounded-xl border flex flex-col gap-1 transition-all ${isOptimized ? 'border-[#0bda5e]/40 glow-green' : 'border-red-500/40 glow-red'}`}>
                    <div className="flex items-center gap-2">
                        <motion.div animate={{backgroundColor: isOptimized ? 'rgba(11, 218, 94, 0.2)' : 'rgba(239, 68, 68, 0.2)'}} className="size-8 rounded flex items-center justify-center">
                           {isOptimized ? <TrendingUp className="text-sm text-[#0bda5e]" /> : <TrendingDown className="text-sm text-red-500" />}
                        </motion.div>
                        <AnimatePresence mode="wait">
                            <motion.span key={`util-${isOptimized}`} variants={numberVariant} initial="initial" animate="animate" exit="exit" className="text-2xl font-bold text-white tabular-nums">+{stats.utilization.toFixed(0)}%</motion.span>
                        </AnimatePresence>
                    </div>
                    <p className="text-[10px] text-[#90a7cb] uppercase font-bold">Stack Utilization</p>
                </motion.div>
                <motion.div custom={2.0} initial="hidden" animate="visible" variants={cardVariants} className={`absolute bottom-10 right-10 p-4 bg-[#101722]/90 backdrop-blur rounded-xl border flex flex-col gap-1 transition-all ${isOptimized ? 'border-primary/40 glow-blue' : 'border-red-500/40 glow-red'}`}>
                    <div className="flex items-center gap-2">
                         <motion.div animate={{backgroundColor: isOptimized ? 'rgba(61, 132, 245, 0.2)' : 'rgba(239, 68, 68, 0.2)', color: isOptimized ? '#3d84f5' : '#ef4444' }} className="size-8 rounded flex items-center justify-center">
                            <Wallet className="text-sm" />
                        </motion.div>
                         <AnimatePresence mode="wait">
                            <motion.span key={`roi-${isOptimized}`} variants={numberVariant} initial="initial" animate="animate" exit="exit" className="text-2xl font-bold text-white tabular-nums">{stats.roi.toFixed(1)}x</motion.span>
                         </AnimatePresence>
                    </div>
                    <p className="text-[10px] text-[#90a7cb] uppercase font-bold">Average ROI</p>
                </motion.div>

                <div className="absolute inset-0 z-0 bg-cover bg-center mix-blend-overlay opacity-10" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAWjSzUMlo2kKQYPtnNJDik3ttRWgVL2Wo9LRIkmZimhbFLsZGU_OrG8LODa-xZyJaKezuohulV3YZLfdnRPYtFORWVcKc7iJDsMuZBAArYZNm4S4Ycd-R5ByvVFuwTsy84UVe8y5Wiau-a6w47qgNDhWsCJWqaCQtm3i4FO0B7rsUgm6Ndzp5assY2xlx-rUALjBr3qo8GHl2fAeFFMq_Dme4x93TPP6EitkO1gDzI4knhNe5Pqw2RHNSrhg2r3nKiTXVJf4GQrfnu')" }}></div>
            </div>
        </div>
    );
}

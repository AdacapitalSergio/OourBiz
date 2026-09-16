import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
    Clock, Calendar as CalendarIcon, TrendingUp, 
    AlertCircle, CheckCircle2, ArrowUpRight 
} from 'lucide-react';

const Inicio = ({ setActiveTab }) => {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => setTime(new Date()), 1000);
        return () => clearInterval(timer);
    }, []);

    const stats = [
        { label: "ACR em Análise", value: "03", color: "bg-blue-500/80", icon: <TrendingUp size={20}/> },
        { label: "ACRC oncluídos", value: "12", color: "bg-brand-emerald/80", icon: <CheckCircle2 size={20}/> },
        { label: "ACR Pendentes", value: "01", color: "bg-amber-500/80", icon: <AlertCircle size={20}/> },
    ];

    return (
        <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }}
            className="space-y-8"
        >
            {/* Top Bar: Saudação e Relógio */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 bg-white px-8 py-6 rounded-2xl border border-slate-100 shadow-sm">
                <div>
                    <h1 className="text-2xl font-serif font-bold text-slate-800">Olá, Noé Paulo!</h1>
                    <p className="text-slate-600 mt-1">Aqui está o resumo da sua saúde financeira hoje.</p>
                </div>
                <div className="flex items-center gap-4 bg-slate-100 px-6 py-3 rounded-2xl border border-slate-300">
                    <Clock className="text-brand-emerald animate-pulse" />
                    <span className="text-2xl font-mono font-bold text-slate-700">
                        {time.toLocaleTimeString('pt-PT')}
                    </span>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Stats Cards */}
                <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-3 gap-4">
                    {stats.map((stat, i) => (
                        <div key={i} className="bg-white px-6 py-4 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all group">
                            <div className={`${stat.color} w-14 h-10 rounded-xl flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform`}>
                                {stat.icon}
                            </div>
                            <p className="text-3xl font-bold text-slate-800 mt-1">{stat.value}</p>
                            <p className="text-slate-600 text-xs font-bold uppercase tracking-wider">{stat.label}</p>
                        </div>
                    ))}
                    
                    {/* Atalho Rápido */}
                    <div className="md:col-span-3 bg-brand-dark p-8 rounded-2xl text-white flex justify-between items-center overflow-hidden relative group">
                        <div className="relative z-10">
                            <h3 className="text-xl font-bold">Precisa de uma nova análise?</h3>
                            <p className="text-white/80 text-sm mt-2">Inicie uma solicitação de ACR agora mesmo.</p>
                            <button 
                                onClick={() => setActiveTab('solicitar')}
                                className="mt-6 bg-brand-emerald text-brand-dark px-6 py-3 rounded-xl font-bold flex items-center gap-2 hover:bg-white transition-all animate-pulse"
                            >
                                Solicitar Agora <ArrowUpRight size={18}/>
                            </button>
                        </div>
                        <div className="absolute -right-5 -top-5 opacity-10 group-hover:rotate-12 transition-transform">
                            <TrendingUp size={200} />
                        </div>
                    </div>
                </div>

                {/* Calendário Minimalista */}
                <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm">
                    <div className="flex items-center gap-3 mb-6">
                        <CalendarIcon className="text-brand-emerald" size={20} />
                        <h3 className="font-bold text-slate-800 uppercase text-sm tracking-widest">Calendário</h3>
                    </div>
                    <div className="text-center">
                        <p className="text-brand-emerald font-bold text-lg uppercase">
                            {time.toLocaleDateString('pt-PT', { month: 'long' })}
                        </p>
                        <p className="text-5xl font-serif font-black text-slate-800 my-2">
                            {time.getDate()}
                        </p>
                        <p className="text-slate-600 font-medium">
                            {time.toLocaleDateString('pt-PT', { weekday: 'long' })}
                        </p>
                    </div>
                    <div className="mt-8 pt-8 border-t border-slate-50">
                        <div className="flex items-center gap-3 text-sm text-slate-600 italic">
                            <div className="w-2 h-2 bg-brand-emerald rounded-full animate-ping"></div>
                            Próxima atualização em 24h
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default Inicio;

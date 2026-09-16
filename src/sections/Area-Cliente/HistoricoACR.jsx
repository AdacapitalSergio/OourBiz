import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
    Search, Filter, Eye, Download, 
    Clock, CheckCircle2, AlertCircle, ListFilter 
} from 'lucide-react';

const HistoricoACR = () => {
    const [filtro, setFiltro] = useState('todos');
    const [busca, setBusca] = useState('');

    // Carrega dados salvos e junta com mocks padrão
    const [dadosHistorico] = useState(() => {
        const defaultMocks = [
            { id: 'ACR-9821', data: '02/05/2026', tipo: 'PF', valor: 'R$ 12.450,00', status: 'andamento', cliente: 'Noé Paulo' },
            { id: 'ACR-9750', data: '28/04/2026', tipo: 'PJ', valor: 'R$ 45.000,00', status: 'concluida', cliente: 'NP Tech Solutions' },
            { id: 'ACR-9610', data: '20/04/2026', tipo: 'PF', valor: 'R$ 5.200,00', status: 'pendente', cliente: 'Noé Paulo' },
            { id: 'ACR-9544', data: '15/04/2026', tipo: 'PF', valor: 'R$ 8.900,00', status: 'concluida', cliente: 'Noé Paulo' },
        ];
        
        try {
            const saved = localStorage.getItem('capital_recupera_solicitacoes');
            if (saved) {
                const parsed = JSON.parse(saved);
                return [...parsed, ...defaultMocks];
            }
        } catch (e) {
            console.error('Erro ao ler solicitações locais:', e);
        }
        return defaultMocks;
    });

    const getCountByStatus = (status) => {
        if (status === 'todos') return dadosHistorico.length;
        return dadosHistorico.filter(item => item.status === status).length;
    };

    const stats = [
        { id: 'todos', label: 'Todos', count: getCountByStatus('todos'), icon: <ListFilter />, color: 'bg-slate-800' },
        { id: 'andamento', label: 'Em Andamento', count: getCountByStatus('andamento'), icon: <Clock />, color: 'bg-blue-500' },
        { id: 'pendente', label: 'Pendentes', count: getCountByStatus('pendente'), icon: <AlertCircle />, color: 'bg-amber-500' },
        { id: 'concluida', label: 'Concluídas', count: getCountByStatus('concluida'), icon: <CheckCircle2 />, color: 'bg-brand-emerald' },
    ];

    const filtrados = dadosHistorico.filter(item => {
        const matchesStatus = filtro === 'todos' || item.status === filtro;
        const matchesBusca = item.id.toLowerCase().includes(busca.toLowerCase()) || item.cliente.toLowerCase().includes(busca.toLowerCase());
        return matchesStatus && matchesBusca;
    });

    return (
        <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }}
            className="space-y-8 pb-10"
        >
            {/* Header e Busca */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                    <h2 className="text-2xl font-serif font-bold text-slate-800">Histórico de ACR</h2>
                    <p className="text-slate-600">Gerencie e acompanhe o progresso das suas solicitações.</p>
                </div>
                <div className="relative w-full md:w-96">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" size={18} />
                    <input 
                        type="text" 
                        placeholder="Buscar por ID ou Nome..." 
                        className="w-full pl-12 pr-4 py-3 bg-white border border-slate-900 rounded-lg shadow-sm outline-none focus:ring-1 focus:ring-slate-900 transition-all"
                        onChange={(e) => setBusca(e.target.value)}
                    />
                </div>
            </div>

            {/* Cards de Filtro */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {stats.map((item) => (
                    <button
                        key={item.id}
                        onClick={() => setFiltro(item.id)}
                        className={`px-6 py-3 rounded-lg shadow-xl text-left transition-all relative overflow-hidden group ${filtro === item.id ? 'bg-white shadow-xl ring-2 ring-brand-emerald' : 'bg-white/50 hover:bg-white border border-slate-100'}`}
                    >
                        <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-4 ${filtro === item.id ? item.color + ' text-white' : 'bg-slate-100 text-slate-400'}`}>
                            {item.icon}
                        </div>
                        <p className="text-xl font-bold text-slate-800">0{item.count}</p>
                        <p className={`text-xs font-black uppercase tracking-widest ${filtro === item.id ? 'text-slate-600' : 'text-slate-600'}`}>{item.label}</p>
                        {filtro === item.id && (
                            <motion.div layoutId="activeDot" className="absolute top-4 right-4 w-2 h-2 bg-brand-emerald rounded-full" />
                        )}
                    </button>
                ))}
            </div>

            {/* Tabela Moderna */}
            <div className="bg-white rounded-lg border border-slate-900 shadow-sm overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-slate-50/50 border-b border-slate-300">
                                <th className="px-8 py-6 text-xs font-black text-slate-600 uppercase tracking-widest">ID Solicitação</th>
                                <th className="px-6 py-6 text-xs font-black text-slate-600 uppercase tracking-widest">Cliente / Empresa</th>
                                <th className="px-6 py-6 text-xs font-black text-slate-600 uppercase tracking-widest">Data</th>
                                <th className="px-6 py-6 text-xs font-black text-slate-600 uppercase tracking-widest">Valor</th>
                                <th className="px-6 py-6 text-xs font-black text-slate-600 uppercase tracking-widest">Estado</th>
                                <th className="px-8 py-6 text-xs font-black text-slate-600 uppercase tracking-widest text-right">Ações</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-50">
                            <AnimatePresence>
                                {filtrados.map((item) => (
                                    <motion.tr 
                                        key={item.id}
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        className="hover:bg-slate-50/80 transition-colors group border-b border-slate-200"
                                    >
                                        <td className="px-8 py-6">
                                            <span className="font-mono font-bold text-brand-dark">{item.id}</span>
                                            <div className="text-[10px] bg-slate-100 text-slate-500 px-2 py-0.5 rounded mt-1 inline-block">{item.tipo}</div>
                                        </td>
                                        <td className="px-6 py-6 font-bold text-slate-700">{item.cliente}</td>
                                        <td className="px-6 py-6 text-slate-500 text-sm">{item.data}</td>
                                        <td className="px-6 py-6 font-bold text-slate-800">{item.valor}</td>
                                        <td className="px-6 py-6">
                                            <StatusBadge status={item.status} />
                                        </td>
                                        <td className="px-8 py-6 text-right">
                                            <div className="flex justify-end gap-2">
                                                <button className="p-2 text-slate-600 hover:text-brand-dark bg-slate-200 hover:bg-white rounded-xl transition-all shadow-sm">
                                                    <Eye size={16} />
                                                </button>
                                                <button className="p-2 text-slate-600 hover:text-brand-emerald bg-slate-200 hover:bg-white rounded-xl transition-all shadow-sm">
                                                    <Download size={16} />
                                                </button>
                                            </div>
                                        </td>
                                    </motion.tr>
                                ))}
                            </AnimatePresence>
                        </tbody>
                    </table>
                </div>
                
                {filtrados.length === 0 && (
                    <div className="p-20 text-center">
                        <div className="bg-slate-50 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 text-slate-300">
                            <Filter size={32} />
                        </div>
                        <p className="text-slate-400 font-medium">Nenhum registro encontrado para este filtro.</p>
                    </div>
                )}
            </div>
        </motion.div>
    );
};

// Componente para as Badges de Status
const StatusBadge = ({ status }) => {
    const config = {
        andamento: { label: 'Em análise', class: 'bg-blue-50 text-blue-600 border-blue-100' },
        concluida: { label: 'Concluído', class: 'bg-emerald-50 text-emerald-600 border-emerald-100' },
        pendente: { label: 'Pendente', class: 'bg-amber-50 text-amber-600 border-amber-100' },
    };

    const current = config[status];

    return (
        <span className={`px-4 py-1.5 rounded-full text-xs font-bold border ${current.class}`}>
            {current.label}
        </span>
    );
};

export default HistoricoACR;
import React from 'react';
import { motion } from 'framer-motion';
import { 
    LayoutDashboard, FilePlus2, History, ShieldCheck, UserCircle, Settings, LogOut 
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import logo from '../../assets/imagens/logotipo.png';

const Sidebar = ({ isCollapsed, isMobileOpen, setIsMobileOpen, activeTab, setActiveTab }) => {
    const navigate = useNavigate();

    const menuItems = [
        { name: "Início", icon: <LayoutDashboard size={22} />, id: "inicio" },
        { name: "Solicitar ACR", icon: <FilePlus2 size={22} />, id: "solicitar" },
        { name: "Histórico", icon: <History size={22} />, id: "historico" },
        { name: "Meu Perfil", icon: <UserCircle size={22} />, id: "perfil" },
        { name: "Configurações", icon: <Settings size={22} />, id: "config" },
        {/* name: "Meu ACR", icon: <ShieldCheck size={22} />, id: "meu-acr" */},
    ];

    const handleMenuClick = (id) => {
        setActiveTab(id); // Muda o conteúdo
        if (isMobileOpen) setIsMobileOpen(false); // Fecha o menu no mobile ao clicar
    };

    return (
        <>
            {isMobileOpen && (
                <div className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 lg:hidden" onClick={() => setIsMobileOpen(false)} />
            )}

            <motion.aside
                animate={isCollapsed ? { width: "75px" } : { width: "220px" }}
                className={`fixed lg:relative z-50 h-screen bg-white border-r border-slate-200 flex flex-col transition-all ${isMobileOpen ? 'left-0' : '-left-full lg:left-0'}`}
            >
                <div className="h-20 flex items-center px-6 border-b border-slate-50">
                    <img src={logo} alt="Logo" className="h-10 w-auto" />
                </div>

                <nav className="flex-1 py-6 px-3 space-y-2 overflow-y-auto">
                    {menuItems.map((item) => (
                        <button
                            key={item.id}
                            onClick={() => handleMenuClick(item.id)}
                            className={`w-full flex items-center gap-4 p-3 rounded-xl transition-all group
                                ${activeTab === item.id 
                                    ? 'bg-brand-dark text-white shadow-lg shadow-brand-dark/20' 
                                    : 'text-slate-600 hover:bg-slate-50 hover:text-brand-dark'}`}
                        >
                            <div className={`${activeTab === item.id ? 'text-brand-emerald' : 'text-slate-600 group-hover:text-brand-emerald'}`}>
                                {item.icon}
                            </div>
                            {!isCollapsed && (
                                <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="font-medium text-sm">
                                    {item.name}
                                </motion.span>
                            )}
                        </button>
                    ))}
                </nav>

                <div className="p-4 border-t border-slate-50">
                    <button onClick={() => navigate('/login')} className="flex items-center gap-3 w-full p-2 text-white hover:text-red-500 bg-red-500/90 hover:bg-red-50 rounded-xl transition-all">
                        <LogOut size={20} />
                        {!isCollapsed && <span className="font-bold text-sm">Sair</span>}
                    </button>
                </div>
            </motion.aside>
        </>
    );
};

export default Sidebar;

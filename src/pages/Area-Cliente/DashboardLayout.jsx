import React, { useState } from 'react';
import Sidebar from '../../components/Area-Cliente/Sidebar';
import Header from '../../components/Area-Cliente/Header';

// Importe seus novos componentes aqui
import SolicitarACR from '../../sections/Area-Cliente/SolicitarACR';
import Inicio from '../../sections/Area-Cliente/Inicio';
import MeuPerfil from '../../sections/Area-Cliente/MeuPerfil';
import HistoricoACR from '../../sections/Area-Cliente/HistoricoACR';

const DashboardLayout = () => {
    const [isCollapsed, setIsCollapsed] = useState(false);
    const [isMobileOpen, setIsMobileOpen] = useState(false);
    
    // Estado para controlar qual aba está ativa
    const [activeTab, setActiveTab] = useState('inicio');

    // Função para renderizar o componente correto
    const renderContent = () => {
        switch (activeTab) {
            case 'inicio':
                return <Inicio setActiveTab={setActiveTab} />;
            case 'solicitar':
                return <SolicitarACR setActiveTab={setActiveTab} />;
            case 'perfil':
                return <MeuPerfil setActiveTab={setActiveTab} />;
            case 'historico':
                return <HistoricoACR setActiveTab={setActiveTab} />;
            default:
                return <Inicio setActiveTab={setActiveTab} />;
        }
    };

    return (
        <div className="flex h-screen bg-slate-100 font-sans overflow-hidden">
            <Sidebar 
                isCollapsed={isCollapsed} 
                isMobileOpen={isMobileOpen} 
                setIsMobileOpen={setIsMobileOpen}
                activeTab={activeTab} // Passa a aba atual
                setActiveTab={setActiveTab} // Passa a função de mudar aba
            />

            <div className="flex-1 flex flex-col min-w-0 h-screen overflow-hidden">
                <Header 
                    toggleSidebar={() => setIsCollapsed(!isCollapsed)} 
                    toggleMobile={() => setIsMobileOpen(!isMobileOpen)}
                />

                <main className="flex-1 p-4 md:p-8 overflow-y-auto">
                    <div className="max-w-7xl mx-auto">
                        {/* Renderização Dinâmica */}
                        {renderContent()}
                    </div>
                </main>
            </div>
        </div>
    );
};

export default DashboardLayout;

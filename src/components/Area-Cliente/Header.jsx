import React from 'react';
import { Menu, Search, Bell, UserCircle2 } from 'lucide-react';

const Header = ({ toggleSidebar, toggleMobile }) => {
    return (
        <header className="h-20 bg-white border-b border-slate-200 px-4 md:px-8 flex items-center justify-between sticky top-0 z-30">
            <div className="flex items-center gap-4">
                {/* Menu Hamburguer (Atua no Mobile e Desktop) */}
                <button 
                    onClick={toggleMobile} 
                    className="p-2 hover:bg-slate-50 rounded-lg lg:hidden text-slate-700"
                >
                    <Menu size={24} />
                </button>
                <button 
                    onClick={toggleSidebar} 
                    className="p-2 hover:bg-slate-50 rounded-lg hidden lg:block text-slate-700"
                >
                    <Menu size={24} />
                </button>

                <div className="hidden md:flex items-center bg-slate-100 px-4 py-2 rounded-xl border border-slate-200 w-90">
                    <Search size={18} className="text-slate-400" />
                    <input 
                        type="text" 
                        placeholder="Pesquisar..." 
                        className="bg-transparent border-none focus:ring-0 text-sm ml-2 w-full"
                    />
                </div>
            </div>

            <div className="flex items-center gap-2 md:gap-6">
                <button className="relative p-2 text-slate-600 hover:text-brand-dark transition-colors">
                    <Bell size={22} />
                    <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
                </button>

                <div className="h-10 w-px bg-slate-100 hidden sm:block"></div>

                <div className="flex items-center gap-3 pl-2">
                    <div className="text-right hidden sm:block">
                        <p className="text-sm font-bold text-slate-800">Noé Paulo</p>
                        <p className="text-[9px] text-slate-500 uppercase font-bold tracking-tighter">Cliente</p>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-slate-200 overflow-hidden border-2 border-brand-emerald/20">
                        <img src="https://ui-avatars.com/api/?name=Noe+Paulo&background=8CC63F&color=fff" alt="Perfil" />
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;

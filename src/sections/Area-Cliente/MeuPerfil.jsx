import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { User, Mail, Phone, MapPin, Camera, Save, Shield } from 'lucide-react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { getInitialCountry } from '../../utils/phoneDetection';

const PhoneInputComponent = PhoneInput.default || PhoneInput;

const MeuPerfil = () => {
    const [isEditing, setIsEditing] = useState(false);
    const [perfil, setPerfil] = useState({
        nome: "Noé Paulo",
        email: "noe.paulo@capitalrecupera.ao",
        telefone: "244923000000",
        localizacao: "Luanda, Angola"
    });

    const handleSave = () => {
        setIsEditing(false);
    };

    return (
        <motion.div 
            initial={{ opacity: 0, x: 20 }} 
            animate={{ opacity: 1, x: 0 }}
            className="max-w-5xl mx-auto space-y-8"
        >
            {/* Header do Perfil */}
            <div className="relative bg-white rounded-2xl border border-slate-100 overflow-hidden shadow-sm">
                <div className="h-26 bg-linear-to-r from-brand-dark to-slate-800"></div>
                <div className="px-8 pb-8">
                    <div className="relative -mt-16 mb-6 flex items-end justify-between flex-wrap gap-4">
                        <div className="relative">
                            <div className="w-22 h-22 rounded-full border-3 border-white bg-slate-200 overflow-hidden shadow-lg">
                                <img src="https://ui-avatars.com/api/?name=Noe+Paulo&background=8CC63F&color=fff&size=128" alt="Avatar" />
                            </div>
                            <button className="absolute bottom-2 right-2 bg-brand-emerald text-white p-2 rounded-xl shadow-lg hover:scale-110 transition-transform">
                                <Camera size={16} />
                            </button>
                        </div>
                        <div className="flex gap-3">
                            <button 
                                onClick={() => setIsEditing(!isEditing)}
                                className={`px-6 py-3 rounded-2xl font-semibold transition-all cursor-pointer ${isEditing ? 'bg-slate-200 text-slate-600' : 'bg-brand-dark text-white hover:bg-brand-emerald'}`}
                            >
                                {isEditing ? "Cancelar" : "Editar Perfil"}
                            </button>
                        </div>
                    </div>
                    <div>
                        <h2 className="text-xl font-bold text-slate-800">{perfil.nome}</h2>
                        <p className="text-brand-dark font-bold text-xs uppercase tracking-[0.2em]">Conta Cliente</p>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Dados Pessoais */}
                <div className="md:col-span-2 bg-white p-8 rounded-[40px] border border-slate-100 shadow-sm space-y-6">
                    <h3 className="text-lg font-bold text-slate-800 flex items-center gap-2">
                        <User size={18} className="text-brand-emerald"/> Informações Pessoais
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <ProfileField 
                            label="Nome Completo" 
                            value={perfil.nome} 
                            onChange={(val) => setPerfil(prev => ({ ...prev, nome: val }))}
                            isEditing={isEditing} 
                        />
                        <ProfileField 
                            label="E-mail" 
                            value={perfil.email} 
                            onChange={(val) => setPerfil(prev => ({ ...prev, email: val }))}
                            isEditing={isEditing} 
                        />
                        <ProfileField 
                            label="Telefone" 
                            value={perfil.telefone} 
                            onChange={(val) => setPerfil(prev => ({ ...prev, telefone: val }))}
                            isEditing={isEditing} 
                        />
                        <ProfileField 
                            label="Localização" 
                            value={perfil.localizacao} 
                            onChange={(val) => setPerfil(prev => ({ ...prev, localizacao: val }))}
                            isEditing={isEditing} 
                        />
                    </div>
                    {isEditing && (
                        <motion.button 
                            onClick={handleSave}
                            initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                            className="mt-6 bg-brand-dark text-white px-8 py-4 rounded-2xl font-bold flex items-center gap-2 hover:bg-brand-emerald transition-all cursor-pointer"
                        >
                            <Save size={18}/> Salvar Alterações
                        </motion.button>
                    )}
                </div>

                {/* Segurança e Status */}
                <div className="space-y-6">
                    <div className="bg-white p-8 rounded-[40px] border border-slate-100 shadow-sm">
                        <h3 className="text-lg font-bold text-slate-800 flex items-center gap-2 mb-6">
                            <Shield size={18} className="text-brand-emerald"/> Segurança
                        </h3>
                        <div className="space-y-4">
                            <div className="flex justify-between items-center p-4 bg-slate-50 rounded-2xl">
                                <span className="text-sm font-medium text-slate-600">Autenticação 2FA</span>
                                <span className="text-[10px] bg-green-100 text-green-600 px-2 py-1 rounded-full font-bold uppercase">Ativo</span>
                            </div>
                            <button className="w-full py-3 text-sm font-semibold text-brand-dark hover:underline">
                                Alterar palavra-passe
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

const ProfileField = ({ label, value, onChange, isEditing }) => (
    <div className="flex flex-col gap-2">
        <label className="text-xs font-bold text-slate-600 uppercase ml-1">{label}</label>
        {isEditing ? (
            label === "Telefone" ? (
                <div className="w-full">
                    <PhoneInputComponent
                        country={getInitialCountry()}
                        value={value}
                        onChange={onChange}
                        placeholder="Telefone"
                        inputStyle={{
                            width: '100%',
                            height: '42px',
                            background: '#ffffff',
                            border: '1px solid #0f172a',
                            borderRadius: '8px',
                            fontSize: '14px',
                            paddingLeft: '48px',
                            color: '#334155'
                        }}
                        buttonStyle={{
                            background: 'transparent',
                            border: 'none',
                            borderRight: '1px solid #0f172a',
                            borderRadius: '8px 0 0 8px',
                            paddingLeft: '6px'
                        }}
                        containerStyle={{
                            width: '100%'
                        }}
                    />
                </div>
            ) : (
                <input 
                    type="text" 
                    value={value}
                    onChange={(e) => onChange(e.target.value)}
                    className="w-full bg-white border border-slate-900 px-4 py-2.5 rounded-lg outline-none text-sm text-slate-800 placeholder:text-slate-400 focus:ring-1 focus:ring-slate-900 transition-all"
                />
            )
        ) : (
            <p className="p-4 bg-slate-50 rounded-lg border border-slate-200 text-slate-700 font-medium">
                {label === "Telefone" && value && !value.startsWith('+') ? `+${value}` : value}
            </p>
        )}
    </div>
);

export default MeuPerfil;

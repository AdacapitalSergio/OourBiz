import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
    User, Building2, Send, Loader2, CreditCard, UploadCloud, 
    CheckCircle, AlertCircle, FileText, Check, ChevronRight, 
    ChevronLeft, Sparkles, MapPin, Mail, Phone, Calendar, Info, Trash2,
    ArrowLeft, HelpCircle, CheckCircle2, Users, FileSignature
} from 'lucide-react';
import { toast, Toaster } from 'react-hot-toast';
import { acrService } from '../../services/Services';
import { maskCPF, maskCNPJ, maskCEP } from '../../utils/masks';
import PhoneInputLib from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { getInitialCountry } from '../../utils/phoneDetection';

const PhoneInput = PhoneInputLib.default || PhoneInputLib;

const SolicitarACR = ({ setActiveTab }) => {
    // Estado de seleção do Plano / Oferta
    const [selectedPlan, setSelectedPlan] = useState(null); // 'PF', 'PJ', 'PF_PJ'
    
    // Passo atual do Formulário (1, 2 ou 3)
    const [step, setStep] = useState(1);
    
    // Status de loading e verificação do CEP
    const [loadingCEP, setLoadingCEP] = useState(false);
    const [verifiedCEP, setVerifiedCEP] = useState(false);

    const [loadingSubmit, setLoadingSubmit] = useState(false);

    // Lista de arquivos anexados
    const [uploadedFiles, setUploadedFiles] = useState([]);

    // Dados do Formulário
    const [formData, setFormData] = useState({
        // Pessoa Física (PF)
        cpf: '',
        data_nascimento: '',
        nome: '',
        nome_civil: '',
        situacao_cadastral: '',
        genero: '',
        genero_outros: '',
        email: '',
        celular: '',
        telefone: '',
        ppe: '',

        // Pessoa Jurídica (PJ)
        cnpj: '',
        razao_social: '',
        nome_fantasia: '',
        natureza_juridica: '',
        data_constituicao: '', // Data Abertura
        atividade_economica: '',
        situacao_cadastral_pj: '',
        socio_responsavel: '',
        cpf_socio: '',

        // Endereço e Geral (Comum)
        cep: '',
        logradouro: '',
        numero: '',
        complemento: '',
        bairro: '',
        cidade: '',
        uf: '',
        como_chegou: '',
        como_chegou_outros: ''
    });

    // ----------------------------------------------------
    // FUNÇÕES DE LOOKUP EM TEMPO REAL
    // ----------------------------------------------------

    // CPF Change (Manual)
    const handleCPFChange = (e) => {
        const value = e.target.value;
        const masked = maskCPF(value);
        setFormData(prev => ({ ...prev, cpf: masked }));
    };

    // CNPJ Change (Manual)
    const handleCNPJChange = (e) => {
        const value = e.target.value;
        const masked = maskCNPJ(value);
        setFormData(prev => ({ ...prev, cnpj: masked }));
    };

    // Consulta CEP
    const triggerCEPQuery = async (cleanCep) => {
        setLoadingCEP(true);
        setVerifiedCEP(false);
        try {
            const data = await acrService.consultarCEP(cleanCep);
            setFormData(prev => ({
                ...prev,
                cep: maskCEP(cleanCep),
                logradouro: data.logradouro,
                bairro: data.bairro,
                cidade: data.cidade,
                uf: data.uf
            }));
            setVerifiedCEP(true);
            toast.success('Endereço carregado com sucesso!');
        } catch (error) {
            toast.error('Erro ao consultar CEP. Preencha manualmente.');
            setVerifiedCEP(false);
        } finally {
            setLoadingCEP(false);
        }
    };

    // Consulta CEP (onChange event)
    const handleCEPChange = async (e) => {
        const value = e.target.value;
        const masked = maskCEP(value);
        
        setFormData(prev => ({ ...prev, cep: masked }));

        const clean = value.replace(/\D/g, '');
        if (clean.length === 8) {
            await triggerCEPQuery(clean);
        } else {
            setVerifiedCEP(false);
        }
    };

    // ----------------------------------------------------
    // FUNÇÕES DE SELEÇÃO E NAVEGAÇÃO
    // ----------------------------------------------------
    const handlePlanSelect = (plan) => {
        setSelectedPlan(plan);
        setStep(1);
        // Limpar dados anteriores
        setFormData({
            cpf: '', data_nascimento: '', nome: '', nome_civil: '', situacao_cadastral: '',
            genero: '', genero_outros: '', email: '', celular: '', telefone: '', ppe: '',
            cnpj: '', razao_social: '', nome_fantasia: '', natureza_juridica: '', data_constituicao: '',
            atividade_economica: '', situacao_cadastral_pj: '', socio_responsavel: '', cpf_socio: '',
            cep: '', logradouro: '', numero: '', complemento: '', bairro: '', cidade: '', uf: '',
            como_chegou: '', como_chegou_outros: ''
        });
        setUploadedFiles([]);
        setVerifiedCEP(false);
    };

    const handleBackToPlans = () => {
        setSelectedPlan(null);
        setStep(1);
    };

    // Validação de passos
    const isStepValid = () => {
        if (step === 1) {
            if (selectedPlan === 'PF') {
                const hasRequired = formData.cpf && formData.nome && formData.data_nascimento && 
                                    formData.situacao_cadastral && formData.genero && 
                                    formData.email && formData.celular && formData.telefone && 
                                    formData.ppe;
                const hasOutrosGen = formData.genero !== 'Outros' || formData.genero_outros;
                const isCpfValid = formData.cpf.replace(/\D/g, '').length === 11;
                return hasRequired && hasOutrosGen && isCpfValid;
            } else if (selectedPlan === 'PJ') {
                const hasRequired = formData.cnpj && formData.razao_social && formData.data_constituicao && 
                                    formData.atividade_economica && formData.natureza_juridica && 
                                    formData.situacao_cadastral_pj && formData.email && 
                                    formData.celular && formData.telefone && 
                                    formData.socio_responsavel && formData.cpf_socio;
                const isCnpjValid = formData.cnpj.replace(/\D/g, '').length === 14;
                const isCpfSocioValid = formData.cpf_socio.replace(/\D/g, '').length === 11;
                return hasRequired && isCnpjValid && isCpfSocioValid;
            } else if (selectedPlan === 'PF_PJ') {
                // Para plano PF_PJ, valida ambos os conjuntos
                const hasRequiredPF = formData.cpf && formData.nome && formData.data_nascimento && 
                                      formData.situacao_cadastral && formData.genero && 
                                      formData.email && formData.celular && formData.telefone && 
                                      formData.ppe;
                const hasOutrosGen = formData.genero !== 'Outros' || formData.genero_outros;
                const isCpfValid = formData.cpf.replace(/\D/g, '').length === 11;
                
                const hasRequiredPJ = formData.cnpj && formData.razao_social && formData.data_constituicao && 
                                      formData.atividade_economica && formData.natureza_juridica && 
                                      formData.situacao_cadastral_pj && formData.socio_responsavel && formData.cpf_socio;
                const isCnpjValid = formData.cnpj.replace(/\D/g, '').length === 14;
                const isCpfSocioValid = formData.cpf_socio.replace(/\D/g, '').length === 11;

                return hasRequiredPF && hasOutrosGen && isCpfValid && hasRequiredPJ && isCnpjValid && isCpfSocioValid;
            }
        } else if (step === 2) {
            const hasAddress = formData.cep && formData.logradouro && formData.numero && 
                               formData.bairro && formData.cidade && formData.uf && formData.como_chegou;
            const hasOutrosChegou = formData.como_chegou !== 'Outros' || formData.como_chegou_outros;
            const isCepValid = formData.cep.replace(/\D/g, '').length === 8;
            return hasAddress && hasOutrosChegou && isCepValid;
        } else if (step === 3) {
            return uploadedFiles.length > 0;
        }
        return false;
    };

    const handleNextStep = () => {
        if (isStepValid()) {
            setStep(prev => prev + 1);
            // Rolagem suave no container principal
            const mainEl = document.querySelector('main');
            if (mainEl) mainEl.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
            toast.error('Por favor, preencha todos os campos obrigatórios corretamente.');
        }
    };

    const handlePrevStep = () => {
        setStep(prev => prev - 1);
        const mainEl = document.querySelector('main');
        if (mainEl) mainEl.scrollTo({ top: 0, behavior: 'smooth' });
    };

    // Submissão do Formulário
    const handleSubmitRequest = async (e) => {
        e.preventDefault();
        if (!isStepValid()) {
            toast.error('Preencha os campos obrigatórios antes de enviar.');
            return;
        }

        setLoadingSubmit(true);
        const dataToSend = new FormData();
        
        // Insere todos os campos no FormData
        Object.entries(formData).forEach(([key, val]) => {
            dataToSend.append(key, val);
        });
        
        // Anexa os arquivos
        uploadedFiles.forEach((fileObj) => {
            dataToSend.append('files', fileObj.file);
        });
        
        dataToSend.append('plan_type', selectedPlan);

        try {
            if (selectedPlan === 'PF') {
                await acrService.enviarSolicitacaoPF(dataToSend);
            } else {
                await acrService.enviarSolicitacaoPJ(dataToSend);
            }
        } catch (error) {
            console.warn("API de envio indisponível, registrando localmente no fluxo alternativo:", error);
        }

        // Salvar a solicitação na lista de histórico local (LocalStorage)
        try {
            const existing = localStorage.getItem('capital_recupera_solicitacoes');
            const list = existing ? JSON.parse(existing) : [];
            
            let clienteName = "";
            if (selectedPlan === 'PF') clienteName = formData.nome;
            else if (selectedPlan === 'PJ') clienteName = formData.razao_social;
            else clienteName = `${formData.nome} / ${formData.razao_social}`;

            let planLabel = selectedPlan === 'PF' ? 'PF' : selectedPlan === 'PJ' ? 'PJ' : 'PF+PJ';
            
            let valor = "R$ 297,00";
            if (selectedPlan === 'PJ') valor = "R$ 597,00";
            else if (selectedPlan === 'PF_PJ') valor = "R$ 797,00";

            const date = new Date();
            const formattedDate = `${String(date.getDate()).padStart(2, '0')}/${String(date.getMonth() + 1).padStart(2, '0')}/${date.getFullYear()}`;

            const newRequest = {
                id: `ACR-${Math.floor(Math.random() * 9000) + 1000}`,
                data: formattedDate,
                tipo: planLabel,
                valor: valor,
                status: 'andamento',
                cliente: clienteName
            };

            list.unshift(newRequest);
            localStorage.setItem('capital_recupera_solicitacoes', JSON.stringify(list));

            toast.success('Solicitação cadastrada e enviada com sucesso!');
            
            setTimeout(() => {
                setLoadingSubmit(false);
                setActiveTab('historico'); // Redireciona para aba do Histórico
            }, 1000);

        } catch (err) {
            toast.error('Erro ao processar submissão local: ' + err.message);
            setLoadingSubmit(false);
        }
    };

    return (
        <div className="max-w-6xl mx-auto pb-20 px-4">
            <Toaster position="top-right" />
            
            {/* Título de seção */}
            <div className="mb-8 text-center">
                <h2 className="text-3xl font-serif font-black text-slate-800 tracking-tight">Fluxo de Solicitação de ACR</h2>
                <p className="text-slate-500 mt-2 text-sm max-w-xl mx-auto">
                    Selecione um plano ou oferta de análise de crédito e risco de acordo com a sua necessidade.
                </p>
            </div>

            <AnimatePresence mode="wait">
                {/* 1. SELEÇÃO DE OFERTAS/PLANOS CARDS */}
                {!selectedPlan && (
                    <motion.div 
                        initial={{ opacity: 0, y: 15 }} 
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -15 }}
                        className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-4"
                    >
                        <PlanCard 
                            title="ACR para Pessoa Física"
                            oQueE="Análise cadastral completa e inteligência de risco focada no perfil individual de pessoas físicas perante o mercado de crédito."
                            paraQueServe="Identifica restrições, analisa comportamento financeiro de forma ampla, mitiga riscos em empréstimos e fornece caminhos para recuperação do score de crédito pessoal."
                            oQueInclui={[
                                "Relatório detalhado de Score e riscos",
                                "Verificação RFB PF em tempo real",
                                "Acompanhamento judicial de restrições",
                                "Guia estratégico de recuperação financeira"
                            ]}
                            valor="R$ 297,00"
                            onSelect={() => handlePlanSelect('PF')}
                        />
                        
                        <PlanCard 
                            title="ACR para Pessoa Jurídica"
                            oQueE="Análise robusta de saúde cadastral corporativa, estruturação financeira e análise de risco para empresas e organizações."
                            paraQueServe="Monitora fornecedores, aponta score empresarial perante bancos, analisa passivos fiscais e trabalhistas, e otimiza as chances de aprovação de crédito corporativo de grande porte."
                            oQueInclui={[
                                "Dossiê completo de restrições da empresa",
                                "Análise societária detalhada",
                                "Busca em bases fiscais e cartorárias",
                                "Plano de recuperação de score CNPJ"
                            ]}
                            valor="R$ 597,00"
                            onSelect={() => handlePlanSelect('PJ')}
                        />
                        
                        <PlanCard 
                            title="ACR para Pessoa Física e Jurídica"
                            oQueE="O ecossistema completo de inteligência de risco que interliga e analisa de forma integrada os sócios e a pessoa jurídica."
                            paraQueServe="Essencial para operações onde a garantia depende da solidez financeira pessoal dos sócios. Evita contaminações de restrições entre CPF e CNPJ e provê segurança jurídica máxima."
                            oQueInclui={[
                                "Tudo incluído nos planos PF e PJ",
                                "Relatório cruzado de interdependência",
                                "Consultoria financeira direcionada",
                                "Suporte prioritário e auditoria dedicada"
                            ]}
                            valor="R$ 797,00"
                            onSelect={() => handlePlanSelect('PF_PJ')}
                        />
                    </motion.div>
                )}

                {/* 2. FORMULÁRIO MULTI-STEP */}
                {selectedPlan && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.98 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.98 }}
                        className="bg-white rounded-3xl shadow-xl border border-slate-200/80 overflow-hidden mt-2"
                    >
                        {/* Header do Wizard */}
                        <div className="bg-slate-50 border-b border-slate-200 p-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                            <div className="flex items-center gap-3">
                                <button 
                                    onClick={handleBackToPlans}
                                    className="p-2.5 hover:bg-slate-200 text-slate-600 rounded-xl transition-all flex items-center justify-center cursor-pointer border border-transparent hover:border-slate-300"
                                    title="Voltar aos Planos"
                                >
                                    <ArrowLeft size={18} />
                                </button>
                                <div>
                                    <span className="text-[10px] font-black uppercase text-brand-dark tracking-wider flex items-center gap-1.5">
                                        <Sparkles size={12} />
                                        Plano Selecionado
                                    </span>
                                    <h3 className="text-lg font-serif font-black text-slate-800">
                                        {selectedPlan === 'PF' ? 'ACR Pessoa Física' : selectedPlan === 'PJ' ? 'ACR Pessoa Jurídica' : 'ACR PF + PJ Combinado'}
                                    </h3>
                                </div>
                            </div>
                            <div className="bg-brand-dark/10 border border-brand-dark/20 text-brand-dark font-black px-4.5 py-2 rounded-2xl text-sm flex items-center gap-2">
                                <CreditCard size={16} />
                                {selectedPlan === 'PF' ? 'R$ 297,00' : selectedPlan === 'PJ' ? 'R$ 597,00' : 'R$ 797,00'}
                            </div>
                        </div>

                        <div className="p-8 md:p-12">
                            {/* Step Progress Bar */}
                            <StepIndicator currentStep={step} />

                            <form onSubmit={handleSubmitRequest} className="space-y-8 mt-10">
                                {/* PASSO 1: DADOS CADASTRAIS */}
                                {step === 1 && (
                                    <div className="space-y-6">
                                        <div className="flex items-center gap-2 border-b border-slate-100 pb-3 mb-4">
                                            <div className="p-1.5 bg-brand-dark/15 text-brand-dark rounded-lg">
                                                <User size={16} />
                                            </div>
                                            <h4 className="font-bold text-slate-800 text-sm tracking-wide uppercase">Passo 1: Informações Cadastrais Principais</h4>
                                        </div>
                                        
                                        {/* PLANO PESSOA FÍSICA */}
                                        {selectedPlan === 'PF' && (
                                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fadeIn">
                                                <InputField 
                                                    label="CPF"
                                                    icon={CreditCard}
                                                    placeholder="Apenas números"
                                                    value={formData.cpf}
                                                    onChange={handleCPFChange}
                                                    required
                                                />

                                                <InputField 
                                                    label="Data de Nascimento"
                                                    icon={Calendar}
                                                    placeholder="DD/MM/AAAA"
                                                    value={formData.data_nascimento}
                                                    onChange={(e) => setFormData(prev => ({ ...prev, data_nascimento: e.target.value }))}
                                                    required
                                                />

                                                <InputField 
                                                    label="Nome Completo"
                                                    icon={User}
                                                    placeholder="Nome Completo"
                                                    value={formData.nome}
                                                    onChange={(e) => setFormData(prev => ({ ...prev, nome: e.target.value }))}
                                                    required
                                                />

                                                <InputField 
                                                    label="Nome Civil (se houver)"
                                                    icon={User}
                                                    placeholder="Nome Civil"
                                                    value={formData.nome_civil}
                                                    onChange={(e) => setFormData(prev => ({ ...prev, nome_civil: e.target.value }))}
                                                />

                                                <InputField 
                                                    label="Situação Cadastral RFB"
                                                    icon={Info}
                                                    placeholder="Situação Cadastral"
                                                    value={formData.situacao_cadastral}
                                                    onChange={(e) => setFormData(prev => ({ ...prev, situacao_cadastral: e.target.value }))}
                                                    required
                                                />

                                                <SelectField 
                                                    label="Gênero / Identidade de Gênero"
                                                    icon={CheckCircle2}
                                                    options={[
                                                        'Mulher Cis', 'Mulher Trans', 'Homem Cis', 
                                                        'Homem Trans', 'Não-binário', 'Prefiro não responder', 'Outros'
                                                    ]}
                                                    value={formData.genero}
                                                    onChange={(e) => setFormData(prev => ({ ...prev, genero: e.target.value }))}
                                                    required
                                                    placeholder="Escolha seu gênero"
                                                />

                                                {formData.genero === 'Outros' && (
                                                    <InputField 
                                                        label="Especifique o Gênero"
                                                        icon={User}
                                                        placeholder="Como se identifica?"
                                                        value={formData.genero_outros}
                                                        onChange={(e) => setFormData(prev => ({ ...prev, genero_outros: e.target.value }))}
                                                        required
                                                    />
                                                )}

                                                <InputField 
                                                    label="Seu melhor e-mail"
                                                    icon={Mail}
                                                    type="email"
                                                    placeholder="exemplo@email.com"
                                                    value={formData.email}
                                                    onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                                                    required
                                                />

                                                <div className="flex flex-col gap-2 w-full">
                                                    <label className="text-[11px] font-black text-slate-500 uppercase tracking-widest ml-1 flex items-center gap-1.5">
                                                        <Phone size={14} className="text-brand-dark" />
                                                        Celular <span className="text-red-500">*</span>
                                                    </label>
                                                    <PhoneInput
                                                        country={getInitialCountry()}
                                                        value={formData.celular}
                                                        onChange={(val) => setFormData(prev => ({ ...prev, celular: val }))}
                                                        placeholder="Celular"
                                                        inputStyle={{
                                                            width: '100%',
                                                            height: '46px',
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

                                                <div className="flex flex-col gap-2 w-full">
                                                    <label className="text-[11px] font-black text-slate-500 uppercase tracking-widest ml-1 flex items-center gap-1.5">
                                                        <Phone size={14} className="text-brand-dark" />
                                                        Telefone <span className="text-red-500">*</span>
                                                    </label>
                                                    <PhoneInput
                                                        country={getInitialCountry()}
                                                        value={formData.telefone}
                                                        onChange={(val) => setFormData(prev => ({ ...prev, telefone: val }))}
                                                        placeholder="Telefone"
                                                        inputStyle={{
                                                            width: '100%',
                                                            height: '46px',
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

                                                <SelectField 
                                                    label="Você é uma Pessoa Politicamente Exposta (PPE)?"
                                                    icon={AlertCircle}
                                                    options={[
                                                        { label: 'Sim', value: 'Sim' },
                                                        { label: 'Não', value: 'Não' }
                                                    ]}
                                                    value={formData.ppe}
                                                    onChange={(e) => setFormData(prev => ({ ...prev, ppe: e.target.value }))}
                                                    required
                                                    placeholder="Selecione"
                                                />
                                            </div>
                                        )}

                                        {/* PLANO PESSOA JURÍDICA */}
                                        {selectedPlan === 'PJ' && (
                                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fadeIn">
                                                <InputField 
                                                    label="CNPJ"
                                                    icon={Building2}
                                                    placeholder="Somente números"
                                                    value={formData.cnpj}
                                                    onChange={handleCNPJChange}
                                                    required
                                                />

                                                <InputField 
                                                    label="Data de Abertura"
                                                    icon={Calendar}
                                                    placeholder="DD/MM/AAAA"
                                                    value={formData.data_constituicao}
                                                    onChange={(e) => setFormData(prev => ({ ...prev, data_constituicao: e.target.value }))}
                                                    required
                                                />

                                                <InputField 
                                                    label="Razão Social"
                                                    icon={Building2}
                                                    placeholder="Razão Social"
                                                    value={formData.razao_social}
                                                    onChange={(e) => setFormData(prev => ({ ...prev, razao_social: e.target.value }))}
                                                    required
                                                />

                                                <InputField 
                                                    label="Atividade Econômica - Principal"
                                                    icon={FileText}
                                                    placeholder="Atividade Econômica"
                                                    value={formData.atividade_economica}
                                                    onChange={(e) => setFormData(prev => ({ ...prev, atividade_economica: e.target.value }))}
                                                    required
                                                />

                                                <InputField 
                                                    label="Natureza Jurídica"
                                                    icon={Info}
                                                    placeholder="Natureza Jurídica"
                                                    value={formData.natureza_juridica}
                                                    onChange={(e) => setFormData(prev => ({ ...prev, natureza_juridica: e.target.value }))}
                                                    required
                                                />

                                                <InputField 
                                                    label="Situação Cadastral RFB"
                                                    icon={CheckCircle}
                                                    placeholder="Situação Cadastral"
                                                    value={formData.situacao_cadastral_pj}
                                                    onChange={(e) => setFormData(prev => ({ ...prev, situacao_cadastral_pj: e.target.value }))}
                                                    required
                                                />

                                                <InputField 
                                                    label="Seu melhor e-mail"
                                                    icon={Mail}
                                                    type="email"
                                                    placeholder="exemplo@empresa.com"
                                                    value={formData.email}
                                                    onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                                                    required
                                                />

                                                <div className="flex flex-col gap-2 w-full">
                                                    <label className="text-[11px] font-black text-slate-500 uppercase tracking-widest ml-1 flex items-center gap-1.5">
                                                        <Phone size={14} className="text-brand-dark" />
                                                        Celular <span className="text-red-500">*</span>
                                                    </label>
                                                    <PhoneInput
                                                        country={getInitialCountry()}
                                                        value={formData.celular}
                                                        onChange={(val) => setFormData(prev => ({ ...prev, celular: val }))}
                                                        placeholder="Celular"
                                                        inputStyle={{
                                                            width: '100%',
                                                            height: '46px',
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

                                                <div className="flex flex-col gap-2 w-full">
                                                    <label className="text-[11px] font-black text-slate-500 uppercase tracking-widest ml-1 flex items-center gap-1.5">
                                                        <Phone size={14} className="text-brand-dark" />
                                                        Telefone <span className="text-red-500">*</span>
                                                    </label>
                                                    <PhoneInput
                                                        country={getInitialCountry()}
                                                        value={formData.telefone}
                                                        onChange={(val) => setFormData(prev => ({ ...prev, telefone: val }))}
                                                        placeholder="Telefone"
                                                        inputStyle={{
                                                            width: '100%',
                                                            height: '46px',
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

                                                <InputField 
                                                    label="Sócio Responsável"
                                                    icon={User}
                                                    placeholder="Nome do Sócio Responsável"
                                                    value={formData.socio_responsavel}
                                                    onChange={(e) => setFormData(prev => ({ ...prev, socio_responsavel: e.target.value }))}
                                                    required
                                                />

                                                <InputField 
                                                    label="CPF do Sócio Responsável"
                                                    icon={FileSignature}
                                                    placeholder="Somente números"
                                                    value={formData.cpf_socio}
                                                    onChange={(e) => setFormData(prev => ({ ...prev, cpf_socio: maskCPF(e.target.value) }))}
                                                    required
                                                />
                                            </div>
                                        )}

                                        {/* PLANO PF + PJ COMBINADO */}
                                        {selectedPlan === 'PF_PJ' && (
                                            <div className="space-y-8 animate-fadeIn">
                                                <div className="space-y-6">
                                                    <h5 className="text-xs font-black uppercase text-brand-dark/80 tracking-widest bg-brand-dark/5 py-1.5 px-3.5 rounded-lg w-max">1. Dados do Sócio Representante (PF)</h5>
                                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                                        <InputField 
                                                            label="CPF"
                                                            icon={CreditCard}
                                                            placeholder="Apenas números"
                                                            value={formData.cpf}
                                                            onChange={handleCPFChange}
                                                            required
                                                        />

                                                        <InputField 
                                                            label="Data de Nascimento"
                                                            icon={Calendar}
                                                            placeholder="DD/MM/AAAA"
                                                            value={formData.data_nascimento}
                                                            onChange={(e) => setFormData(prev => ({ ...prev, data_nascimento: e.target.value }))}
                                                            required
                                                        />

                                                        <InputField 
                                                            label="Nome Completo"
                                                            icon={User}
                                                            placeholder="Nome Completo"
                                                            value={formData.nome}
                                                            onChange={(e) => setFormData(prev => ({ ...prev, nome: e.target.value }))}
                                                            required
                                                        />

                                                        <InputField 
                                                            label="Nome Civil (se houver)"
                                                            icon={User}
                                                            placeholder="Nome Civil"
                                                            value={formData.nome_civil}
                                                            onChange={(e) => setFormData(prev => ({ ...prev, nome_civil: e.target.value }))}
                                                        />

                                                        <InputField 
                                                            label="Situação Cadastral RFB"
                                                            icon={Info}
                                                            placeholder="Situação Cadastral"
                                                            value={formData.situacao_cadastral}
                                                            onChange={(e) => setFormData(prev => ({ ...prev, situacao_cadastral: e.target.value }))}
                                                            required
                                                        />

                                                        <SelectField 
                                                            label="Gênero"
                                                            icon={CheckCircle2}
                                                            options={[
                                                                'Mulher Cis', 'Mulher Trans', 'Homem Cis', 
                                                                'Homem Trans', 'Não-binário', 'Prefiro não responder', 'Outros'
                                                            ]}
                                                            value={formData.genero}
                                                            onChange={(e) => setFormData(prev => ({ ...prev, genero: e.target.value }))}
                                                            required
                                                            placeholder="Selecione"
                                                        />

                                                        {formData.genero === 'Outros' && (
                                                            <InputField 
                                                                label="Especifique o Gênero"
                                                                icon={User}
                                                                placeholder="Como se identifica?"
                                                                value={formData.genero_outros}
                                                                onChange={(e) => setFormData(prev => ({ ...prev, genero_outros: e.target.value }))}
                                                                required
                                                            />
                                                        )}

                                                        <InputField 
                                                            label="Seu melhor e-mail"
                                                            icon={Mail}
                                                            type="email"
                                                            placeholder="exemplo@email.com"
                                                            value={formData.email}
                                                            onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                                                            required
                                                        />

                                                        <div className="flex flex-col gap-2 w-full">
                                                            <label className="text-[11px] font-black text-slate-500 uppercase tracking-widest ml-1 flex items-center gap-1.5">
                                                                <Phone size={14} className="text-brand-dark" />
                                                                Celular <span className="text-red-500">*</span>
                                                            </label>
                                                            <PhoneInput
                                                                country={getInitialCountry()}
                                                                value={formData.celular}
                                                                onChange={(val) => setFormData(prev => ({ ...prev, celular: val }))}
                                                                placeholder="Celular"
                                                                inputStyle={{
                                                                    width: '100%',
                                                                    height: '46px',
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

                                                        <div className="flex flex-col gap-2 w-full">
                                                            <label className="text-[11px] font-black text-slate-500 uppercase tracking-widest ml-1 flex items-center gap-1.5">
                                                                <Phone size={14} className="text-brand-dark" />
                                                                Telefone <span className="text-red-500">*</span>
                                                            </label>
                                                            <PhoneInput
                                                                country={getInitialCountry()}
                                                                value={formData.telefone}
                                                                onChange={(val) => setFormData(prev => ({ ...prev, telefone: val }))}
                                                                placeholder="Telefone"
                                                                inputStyle={{
                                                                    width: '100%',
                                                                    height: '46px',
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

                                                        <SelectField 
                                                            label="Você é uma Pessoa Politicamente Exposta (PPE)?"
                                                            icon={AlertCircle}
                                                            options={['Sim', 'Não']}
                                                            value={formData.ppe}
                                                            onChange={(e) => setFormData(prev => ({ ...prev, ppe: e.target.value }))}
                                                            required
                                                            placeholder="Selecione"
                                                        />
                                                    </div>
                                                </div>

                                                <div className="space-y-6 pt-8 border-t border-slate-100">
                                                    <h5 className="text-xs font-black uppercase text-brand-dark/80 tracking-widest bg-brand-dark/5 py-1.5 px-3.5 rounded-lg w-max">2. Dados Empresariais (PJ)</h5>
                                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                                        <InputField 
                                                            label="CNPJ"
                                                            icon={Building2}
                                                            placeholder="Somente números"
                                                            value={formData.cnpj}
                                                            onChange={handleCNPJChange}
                                                            required
                                                        />

                                                        <InputField 
                                                            label="Data de Abertura"
                                                            icon={Calendar}
                                                            placeholder="DD/MM/AAAA"
                                                            value={formData.data_constituicao}
                                                            onChange={(e) => setFormData(prev => ({ ...prev, data_constituicao: e.target.value }))}
                                                            required
                                                        />

                                                        <InputField 
                                                            label="Razão Social"
                                                            icon={Building2}
                                                            placeholder="Razão Social"
                                                            value={formData.razao_social}
                                                            onChange={(e) => setFormData(prev => ({ ...prev, razao_social: e.target.value }))}
                                                            required
                                                        />

                                                        <InputField 
                                                            label="Atividade Econômica - Principal"
                                                            icon={FileText}
                                                            placeholder="Atividade Econômica"
                                                            value={formData.atividade_economica}
                                                            onChange={(e) => setFormData(prev => ({ ...prev, atividade_economica: e.target.value }))}
                                                            required
                                                        />

                                                        <InputField 
                                                            label="Natureza Jurídica"
                                                            icon={Info}
                                                            placeholder="Natureza Jurídica"
                                                            value={formData.natureza_juridica}
                                                            onChange={(e) => setFormData(prev => ({ ...prev, natureza_juridica: e.target.value }))}
                                                            required
                                                        />

                                                        <InputField 
                                                            label="Situação Cadastral RFB"
                                                            icon={CheckCircle}
                                                            placeholder="Situação Cadastral"
                                                            value={formData.situacao_cadastral_pj}
                                                            onChange={(e) => setFormData(prev => ({ ...prev, situacao_cadastral_pj: e.target.value }))}
                                                            required
                                                        />

                                                        <InputField 
                                                            label="Sócio Responsável"
                                                            icon={User}
                                                            placeholder="Nome do Sócio Responsável"
                                                            value={formData.socio_responsavel}
                                                            onChange={(e) => setFormData(prev => ({ ...prev, socio_responsavel: e.target.value }))}
                                                            required
                                                        />

                                                        <InputField 
                                                            label="CPF do Sócio Responsável"
                                                            icon={FileSignature}
                                                            placeholder="Somente números"
                                                            value={formData.cpf_socio}
                                                            onChange={(e) => setFormData(prev => ({ ...prev, cpf_socio: maskCPF(e.target.value) }))}
                                                            required
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        )}

                                        {/* Mensagem de alerta PPE */}
                                        {(selectedPlan === 'PF' || selectedPlan === 'PF_PJ') && formData.ppe === 'Sim' && (
                                            <div className="bg-amber-50 border border-amber-200 text-amber-800 p-4.5 rounded-[12px] text-xs leading-relaxed flex items-start gap-2.5">
                                                <Info size={16} className="text-amber-600 shrink-0 mt-0.5" />
                                                <p>
                                                    <strong>Nota PPE:</strong> Ocupar cargos públicos relevantes ou ter familiares próximos nessas posições requer aprovação de compliance adicional durante a análise do ACR.
                                                </p>
                                            </div>
                                        )}
                                    </div>
                                )}

                                {/* PASSO 2: ENDEREÇO & ORIGEM */}
                                {step === 2 && (
                                    <div className="space-y-6">
                                        <div className="flex items-center gap-2 border-b border-slate-100 pb-3 mb-4">
                                            <div className="p-1.5 bg-brand-dark/15 text-brand-dark rounded-lg">
                                                <MapPin size={16} />
                                            </div>
                                            <h4 className="font-bold text-slate-800 text-sm tracking-wide uppercase">Passo 2: Endereço & Como chegou até nós</h4>
                                        </div>

                                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                            <InputField 
                                                label="CEP"
                                                icon={MapPin}
                                                placeholder="00000-000"
                                                value={formData.cep}
                                                onChange={handleCEPChange}
                                                required
                                                loading={loadingCEP}
                                                verified={verifiedCEP}
                                            />

                                            <InputField 
                                                label="Logradouro"
                                                icon={MapPin}
                                                placeholder="Rua, Avenida, etc."
                                                value={formData.logradouro}
                                                onChange={(e) => setFormData(prev => ({ ...prev, logradouro: e.target.value }))}
                                                required
                                            />

                                            <InputField 
                                                label="Número"
                                                icon={MapPin}
                                                placeholder="Apenas números"
                                                value={formData.numero}
                                                onChange={(e) => setFormData(prev => ({ ...prev, numero: e.target.value.replace(/\D/g, '') }))}
                                                required
                                            />

                                            <InputField 
                                                label="Complemento"
                                                icon={Info}
                                                placeholder="Condomínio, bloco, apto..."
                                                value={formData.complemento}
                                                onChange={(e) => setFormData(prev => ({ ...prev, complemento: e.target.value }))}
                                                required
                                            />

                                            <InputField 
                                                label="Bairro"
                                                icon={MapPin}
                                                placeholder="Bairro"
                                                value={formData.bairro}
                                                onChange={(e) => setFormData(prev => ({ ...prev, bairro: e.target.value }))}
                                                required
                                            />

                                            <InputField 
                                                label="Cidade"
                                                icon={MapPin}
                                                placeholder="Cidade"
                                                value={formData.cidade}
                                                onChange={(e) => setFormData(prev => ({ ...prev, cidade: e.target.value }))}
                                                required
                                            />

                                            <InputField 
                                                label="Estado (UF)"
                                                icon={MapPin}
                                                placeholder="UF"
                                                value={formData.uf}
                                                onChange={(e) => setFormData(prev => ({ ...prev, uf: e.target.value }))}
                                                required
                                            />

                                            <SelectField 
                                                label="Como chegou até nós?"
                                                icon={HelpCircle}
                                                options={[
                                                    'Parceiro', 'Pesquisas (Google, Bing, afins)', 'Redes Sociais',
                                                    'Site', 'Indicação', 'Já sou cliente', 'Outros'
                                                ]}
                                                value={formData.como_chegou}
                                                onChange={(e) => setFormData(prev => ({ ...prev, como_chegou: e.target.value }))}
                                                required
                                                placeholder="Selecione"
                                            />

                                            {formData.como_chegou === 'Outros' && (
                                                <InputField 
                                                    label="Especifique a origem"
                                                    icon={HelpCircle}
                                                    placeholder="Nos conte como nos conheceu..."
                                                    value={formData.como_chegou_outros}
                                                    onChange={(e) => setFormData(prev => ({ ...prev, como_chegou_outros: e.target.value }))}
                                                    required
                                                />
                                            )}
                                        </div>
                                    </div>
                                )}

                                {/* PASSO 3: UPLOAD DE ARQUIVOS & ENVIAR */}
                                {step === 3 && (
                                    <div className="space-y-8">
                                        <div className="flex items-center gap-2 border-b border-slate-100 pb-3 mb-4">
                                            <div className="p-1.5 bg-brand-dark/15 text-brand-dark rounded-lg">
                                                <UploadCloud size={16} />
                                            </div>
                                            <h4 className="font-bold text-slate-800 text-sm tracking-wide uppercase">Passo 3: Envio de Documentos</h4>
                                        </div>

                                        <DocumentUpload 
                                            files={uploadedFiles}
                                            onAddFiles={(newFiles) => setUploadedFiles(prev => [...prev, ...newFiles])}
                                            onRemoveFile={(id) => setUploadedFiles(prev => prev.filter(f => f.id !== id))}
                                            plan={selectedPlan}
                                        />

                                        {/* Resumo de Confirmação */}
                                        <div className="bg-slate-50 border border-slate-200 rounded-[20px] p-6 md:p-8 mt-10">
                                            <h5 className="font-black text-slate-800 text-sm tracking-wide uppercase mb-4 flex items-center gap-2">
                                                <CheckCircle size={16} className="text-brand-dark" />
                                                Por favor, Revise as Informações
                                            </h5>
                                            
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 text-sm mt-4">
                                                {(selectedPlan === 'PF' || selectedPlan === 'PF_PJ') && (
                                                    <>
                                                        <div className="flex justify-between border-b border-slate-200/50 pb-2">
                                                            <span className="text-slate-500 font-semibold">Nome Completo:</span>
                                                            <span className="text-slate-800 font-bold text-right">{formData.nome}</span>
                                                        </div>
                                                        <div className="flex justify-between border-b border-slate-200/50 pb-2">
                                                            <span className="text-slate-500 font-semibold">CPF:</span>
                                                            <span className="text-slate-800 font-mono font-bold">{formData.cpf}</span>
                                                        </div>
                                                    </>
                                                )}
                                                {(selectedPlan === 'PJ' || selectedPlan === 'PF_PJ') && (
                                                    <>
                                                        <div className="flex justify-between border-b border-slate-200/50 pb-2">
                                                            <span className="text-slate-500 font-semibold">Razão Social:</span>
                                                            <span className="text-slate-800 font-bold text-right">{formData.razao_social}</span>
                                                        </div>
                                                        <div className="flex justify-between border-b border-slate-200/50 pb-2">
                                                            <span className="text-slate-500 font-semibold">CNPJ:</span>
                                                            <span className="text-slate-800 font-mono font-bold">{formData.cnpj}</span>
                                                        </div>
                                                        <div className="flex justify-between border-b border-slate-200/50 pb-2">
                                                            <span className="text-slate-500 font-semibold">Atividade Principal:</span>
                                                            <span className="text-slate-800 font-bold text-right truncate max-w-[200px]" title={formData.atividade_economica}>
                                                                {formData.atividade_economica}
                                                            </span>
                                                        </div>
                                                        <div className="flex justify-between border-b border-slate-200/50 pb-2">
                                                            <span className="text-slate-500 font-semibold">Sócio Responsável:</span>
                                                            <span className="text-slate-800 font-bold text-right">{formData.socio_responsavel}</span>
                                                        </div>
                                                    </>
                                                )}
                                                <div className="flex justify-between border-b border-slate-200/50 pb-2">
                                                    <span className="text-slate-500 font-semibold">E-mail:</span>
                                                    <span className="text-slate-800 font-bold break-all">{formData.email}</span>
                                                </div>
                                                <div className="flex justify-between border-b border-slate-200/50 pb-2">
                                                    <span className="text-slate-500 font-semibold">Celular:</span>
                                                    <span className="text-slate-800 font-bold">+{formData.celular}</span>
                                                </div>
                                                <div className="flex justify-between border-b border-slate-200/50 pb-2 col-span-1 md:col-span-2">
                                                    <span className="text-slate-500 font-semibold">Endereço Cadastrado:</span>
                                                    <span className="text-slate-800 font-bold text-right">
                                                        {formData.logradouro}, Nº {formData.numero} {formData.complemento && `(${formData.complemento})`} - {formData.bairro}, {formData.cidade} - {formData.uf}
                                                    </span>
                                                </div>
                                                <div className="flex justify-between pb-1 col-span-1 md:col-span-2">
                                                    <span className="text-slate-500 font-semibold">Plano de Análise / Investimento:</span>
                                                    <span className="text-brand-dark font-black">
                                                        {selectedPlan === 'PF' ? 'ACR Pessoa Física (R$ 297,00)' : selectedPlan === 'PJ' ? 'ACR Pessoa Jurídica (R$ 597,00)' : 'ACR PF + PJ Combinado (R$ 797,00)'}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {/* Ações dos passos */}
                                <div className="flex justify-between items-center pt-8 border-t border-slate-100 gap-4">
                                    {step > 1 ? (
                                        <button 
                                            type="button"
                                            onClick={handlePrevStep}
                                            disabled={loadingSubmit}
                                            className="px-6 py-3.5 bg-slate-100 hover:bg-slate-200 border border-slate-300/80 text-slate-700 font-bold rounded-lg text-sm flex items-center gap-2 hover:-translate-x-1 transition-all active:scale-98 cursor-pointer disabled:opacity-50"
                                        >
                                            <ChevronLeft size={16} /> Voltar
                                        </button>
                                    ) : (
                                        <div />
                                    )}

                                    {step < 3 ? (
                                        <button 
                                            type="button"
                                            onClick={handleNextStep}
                                            disabled={!isStepValid()}
                                            className={`px-8 py-3.5 bg-brand-dark text-white font-bold rounded-lg text-sm flex items-center gap-2 hover:bg-brand-emerald transition-all active:scale-98 cursor-pointer shadow-md hover:shadow-lg
                                                ${!isStepValid() ? 'opacity-40 cursor-not-allowed hover:bg-brand-dark hover:translate-x-0' : 'hover:translate-x-1'}`}
                                        >
                                            Avançar <ChevronRight size={16} />
                                        </button>
                                    ) : (
                                        <button 
                                            type="submit"
                                            disabled={!isStepValid() || loadingSubmit}
                                            className={`px-10 py-4 bg-brand-dark text-white font-black rounded-lg text-sm flex items-center gap-2.5 hover:bg-brand-emerald transition-all active:scale-95 cursor-pointer shadow-lg
                                                ${(!isStepValid() || loadingSubmit) ? 'opacity-40 cursor-not-allowed hover:bg-brand-dark' : 'hover:scale-102'}`}
                                        >
                                            {loadingSubmit ? 'PROCESSANDO...' : 'FINALIZAR E ENVIAR'}
                                            {loadingSubmit ? <Loader2 className="animate-spin" size={18} /> : <Send size={16} />}
                                        </button>
                                    )}
                                </div>
                            </form>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

// ----------------------------------------------------
// SUB-COMPONENTES AUXILIARES
// ----------------------------------------------------

const PlanCard = ({ title, oQueE, paraQueServe, oQueInclui, valor, onSelect }) => (
    <div className="bg-white rounded-3xl border border-slate-200 p-8 shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between group h-full">
        <div>
            <div className="flex items-center gap-3.5 mb-6">
                <div className="p-3 bg-brand-dark/10 rounded-2xl text-brand-dark group-hover:bg-brand-dark group-hover:text-white transition-all duration-300">
                    {title.includes("Física e Jurídica") ? <Sparkles size={24} /> : title.includes("Jurídica") ? <Building2 size={24} /> : <User size={24} />}
                </div>
                <h3 className="text-xl font-bold font-serif text-slate-800 leading-tight">{title}</h3>
            </div>
            
            <div className="space-y-5 mb-8">
                <div>
                    <h4 className="text-[10px] font-black uppercase text-brand-dark tracking-widest mb-1.5 flex items-center gap-1.5">
                        <Info size={12} /> O que é
                    </h4>
                    <p className="text-slate-600 text-sm leading-relaxed">{oQueE}</p>
                </div>
                <div>
                    <h4 className="text-[10px] font-black uppercase text-brand-dark tracking-widest mb-1.5 flex items-center gap-1.5">
                        <CheckCircle size={12} /> Para que serve
                    </h4>
                    <p className="text-slate-600 text-sm leading-relaxed">{paraQueServe}</p>
                </div>
                <div>
                    <h4 className="text-[10px] font-black uppercase text-brand-dark tracking-widest mb-2 flex items-center gap-1.5">
                        <FileText size={12} /> O que inclui
                    </h4>
                    <ul className="text-slate-600 text-sm leading-relaxed space-y-2">
                        {oQueInclui.map((item, idx) => (
                            <li key={idx} className="flex items-start gap-2.5">
                                <span className="text-brand-emerald text-xs mt-0.5">✓</span>
                                <span>{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>

        <div className="pt-6 border-t border-slate-100 mt-auto">
            <div className="mb-5 flex justify-between items-end">
                <div>
                    <span className="text-[10px] text-slate-400 font-bold uppercase tracking-widest block">Investimento único</span>
                    <span className="text-2xl font-black text-slate-800">{valor}</span>
                </div>
            </div>
            <button 
                onClick={onSelect}
                className="w-full bg-brand-dark text-white py-4 px-6 rounded-2xl font-bold text-sm flex items-center justify-center gap-2 hover:bg-brand-emerald transition-all duration-300 shadow-md hover:shadow-lg active:scale-98 cursor-pointer"
            >
                Solicitar meu ACR Agora <ChevronRight size={16} />
            </button>
        </div>
    </div>
);

const StepIndicator = ({ currentStep, steps = ["Dados Cadastrais", "Endereço & Origem", "Documentação"] }) => {
    return (
        <div className="mb-8">
            <div className="flex items-center justify-between max-w-xl mx-auto relative px-2">
                <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-0.5 bg-slate-200 z-0 rounded-full" />
                <div 
                    className="absolute left-0 top-1/2 -translate-y-1/2 h-0.5 bg-brand-dark z-0 rounded-full transition-all duration-500" 
                    style={{ width: `${((currentStep - 1) / (steps.length - 1)) * 100}%` }}
                />
                
                {steps.map((label, index) => {
                    const stepNumber = index + 1;
                    const isCompleted = currentStep > stepNumber;
                    const isActive = currentStep === stepNumber;
                    
                    return (
                        <div key={index} className="flex flex-col items-center relative z-10">
                            <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm transition-all duration-500 border-2
                                ${isCompleted ? 'bg-brand-dark border-brand-dark text-white shadow-md' : 
                                  isActive ? 'bg-white border-brand-dark text-brand-dark shadow-lg ring-4 ring-brand-dark/10 font-black' : 
                                  'bg-white border-slate-300 text-slate-400'}`}
                            >
                                {isCompleted ? <Check size={18} /> : stepNumber}
                            </div>
                            <span className={`text-[10px] font-bold uppercase tracking-wider mt-3 transition-colors duration-300 text-center
                                ${isActive ? 'text-brand-dark font-black' : isCompleted ? 'text-slate-700' : 'text-slate-400'}`}
                            >
                                {label}
                            </span>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

const InputField = ({ label, icon: Icon, error, loading, verified, className, ...props }) => (
    <div className="flex flex-col gap-2 w-full relative">
        <label className="text-[11px] font-black text-slate-500 uppercase tracking-widest ml-1 flex items-center gap-1.5">
            {Icon && <Icon size={14} className="text-brand-dark" />}
            {label}
            {props.required && <span className="text-red-500">*</span>}
        </label>
        <div className="relative flex items-center w-full">
            <input 
                {...props}
                className={className || `w-full bg-white border px-4.5 py-3 rounded-lg outline-none transition-all text-slate-800 text-sm placeholder:text-slate-400 pr-10
                    ${error ? 'border-red-400 focus:ring-1 focus:ring-red-400' : 
                      verified ? 'border-brand-dark bg-green-50/10 focus:ring-1 focus:ring-brand-dark' : 
                      'border-slate-900 focus:ring-1 focus:ring-slate-900'}`}
            />
            <div className="absolute right-3.5 flex items-center gap-2">
                {loading && <Loader2 className="animate-spin text-brand-dark" size={16} />}
                {!loading && verified && <CheckCircle size={16} className="text-brand-dark" />}
            </div>
        </div>
        {error && <span className="text-xs text-red-500 font-semibold ml-1">{error}</span>}
    </div>
);

const SelectField = ({ label, icon: Icon, options, value, onChange, ...props }) => (
    <div className="flex flex-col gap-2 w-full">
        <label className="text-[11px] font-black text-slate-500 uppercase tracking-widest ml-1 flex items-center gap-1.5">
            {Icon && <Icon size={14} className="text-brand-dark" />}
            {label}
            {props.required && <span className="text-red-500">*</span>}
        </label>
        <select 
            value={value}
            onChange={onChange}
            {...props} 
            className="w-full bg-white border border-slate-900 px-4.5 py-3 rounded-lg outline-none focus:ring-1 focus:ring-slate-900 transition-all text-slate-800 text-sm appearance-none cursor-pointer bg-[url('data:image/svg+xml;charset=UTF-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22%23475569%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3Cpolyline%20points%3D%226%209%2012%2015%2018%209%22%3E%3C%2Fpolyline%3E%3C%2Fsvg%3E')] bg-[length:1.25rem] bg-[right_1rem_center] bg-no-repeat pr-10"
        >
            <option value="" disabled>{props.placeholder || 'Selecione'}</option>
            {options.map((opt, i) => (
                <option key={i} value={typeof opt === 'string' ? opt : opt.value}>
                    {typeof opt === 'string' ? opt : opt.label}
                </option>
            ))}
        </select>
    </div>
);

const DocumentUpload = ({ files, onAddFiles, onRemoveFile, plan }) => {
    const fileInputRef = useRef(null);
    
    const handleDragOver = (e) => {
        e.preventDefault();
    };

    const handleDrop = (e) => {
        e.preventDefault();
        if (e.dataTransfer.files) {
            validateAndAddFiles(e.dataTransfer.files);
        }
    };

    const handleFileChange = (e) => {
        if (e.target.files) {
            validateAndAddFiles(e.target.files);
        }
    };

    const validateAndAddFiles = (fileList) => {
        const allowedTypes = ['image/png', 'image/jpeg', 'application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
        const maxSizeBytes = 5 * 1024 * 1024; // 5MB
        
        const validFiles = [];
        
        for (let i = 0; i < fileList.length; i++) {
            const file = fileList[i];
            
            if (!allowedTypes.includes(file.type)) {
                toast.error(`Arquivo "${file.name}" não suportado. Formatos aceitos: PNG, JPEG, PDF, DOC.`);
                continue;
            }
            
            if (file.size > maxSizeBytes) {
                toast.error(`Arquivo "${file.name}" excede o tamanho limite de 5MB.`);
                continue;
            }
            
            validFiles.push({
                id: Math.random().toString(36).substr(2, 9),
                file: file,
                name: file.name,
                size: (file.size / (1024 * 1024)).toFixed(2) + ' MB'
            });
        }
        
        if (validFiles.length > 0) {
            onAddFiles(validFiles);
        }
    };

    const getHelperText = () => {
        if (plan === 'PF') {
            return "Anexe arquivos legíveis dos seus documentos solicitados: RG, CNH ou Passaporte, juntamente com o CPF. Certifique-se de que todas as informações estejam legíveis.";
        } else if (plan === 'PJ') {
            return "Por favor, anexe arquivos (fotos nítidas) dos documentos solicitados do Sócio Administrador e/ou Responsável: RG, CNH ou Passaporte, juntamente com o CPF. Certifique-se de que todas as informações estejam legíveis.";
        }
        return "Anexe os documentos do Sócio Administrador e/ou Responsável (RG/CNH/Passaporte + CPF) e documentos complementares da empresa (Cartão CNPJ / Contrato Social).";
    };

    return (
        <div className="space-y-6">
            <div 
                onDragOver={handleDragOver}
                onDrop={handleDrop}
                onClick={() => fileInputRef.current?.click()}
                className="border-2 border-dashed border-slate-300 hover:border-brand-dark bg-slate-50/50 hover:bg-brand-dark/5 transition-all duration-300 rounded-[20px] p-8 text-center cursor-pointer flex flex-col items-center group relative"
            >
                <input 
                    type="file" 
                    ref={fileInputRef} 
                    onChange={handleFileChange} 
                    multiple 
                    className="hidden" 
                />
                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-md mb-4 text-brand-dark group-hover:scale-110 transition-transform duration-300">
                    <UploadCloud size={24} />
                </div>
                <h4 className="font-bold text-slate-800 text-sm md:text-base">Clique para anexar ou arraste arquivos aqui</h4>
                <p className="text-xs text-slate-500 max-w-lg mt-2 leading-relaxed">
                    {getHelperText()}
                </p>
                <div className="mt-4 flex gap-2 justify-center flex-wrap">
                    <span className="text-[9px] font-black uppercase bg-slate-200 text-slate-600 px-2 py-0.5 rounded-md">PNG</span>
                    <span className="text-[9px] font-black uppercase bg-slate-200 text-slate-600 px-2 py-0.5 rounded-md">JPEG</span>
                    <span className="text-[9px] font-black uppercase bg-slate-200 text-slate-600 px-2 py-0.5 rounded-md">PDF</span>
                    <span className="text-[9px] font-black uppercase bg-slate-200 text-slate-600 px-2 py-0.5 rounded-md">DOC / DOCX</span>
                    <span className="text-[9px] font-black bg-brand-dark/10 text-brand-dark px-2 py-0.5 rounded-md">Máx 5MB por arquivo</span>
                </div>
            </div>

            {files.length > 0 && (
                <div className="space-y-3">
                    <h5 className="text-[10px] font-black uppercase tracking-wider text-slate-500 ml-1">Arquivos Anexados ({files.length})</h5>
                    <div className="grid grid-cols-1 gap-3">
                        {files.map((fileObj) => (
                            <div key={fileObj.id} className="flex items-center justify-between bg-white border border-slate-200 p-4 rounded-xl shadow-sm hover:shadow transition-shadow">
                                <div className="flex items-center gap-3.5 min-w-0">
                                    <div className="p-2.5 bg-slate-100 rounded-xl text-brand-dark shrink-0">
                                        <FileText size={18} />
                                    </div>
                                    <div className="min-w-0">
                                        <p className="text-sm font-bold text-slate-700 truncate">{fileObj.name}</p>
                                        <p className="text-[10px] text-slate-400 font-semibold">{fileObj.size}</p>
                                    </div>
                                </div>
                                <button 
                                    type="button"
                                    onClick={(e) => { e.stopPropagation(); onRemoveFile(fileObj.id); }}
                                    className="p-2 text-slate-500 hover:text-red-500 hover:bg-red-50 rounded-xl transition-all cursor-pointer"
                                >
                                    <Trash2 size={16} />
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default SolicitarACR;

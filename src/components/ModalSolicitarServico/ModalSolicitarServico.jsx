import { useState } from "react"; 
import { motion, AnimatePresence } from "framer-motion"; 
import { X } from "lucide-react"; 
import { toast } from "sonner"; 
import "./ModalSolicitarServico.css"; 
import { area_atuacao, servicos, sub_servicos } from "../../data/servicoDetalhes";
import { municipiosList, cidades } from "../../data/CidadesList";
import { enviarFormulario } from "../../services/websiteService";

export default function ModalSolicitarServico({ open, onClose }) {

	const [formData, setFormData] = useState({ 
		seuNome: "", 
		servico: "",
		servicoLabel: "",
		subServico: "" , 
		cidade: "", 
		cidadeLabel: "", 
		municipio: "", 
		suaEmpresa: "", 
		seuTelefone: "", 
		seuEmail: "",
		contactoPreferido: ""
	}); 
	const [municipios, setMunicipios] = useState([]);
	const [subServicos, setSubServicos] = useState([]); 
	const [loading, setLoading] = useState(false);

	const handleChange = (e) => { 
		const { name, value } = e.target; 
		if (name === "cidade") { 
			const cidadeSelecionada = cidades.find(c => c.value === value); 
			setMunicipios(municipiosList[value] || []); 
			setFormData(prev => ({ 
				...prev, 
				cidade: value, 
				cidadeLabel: cidadeSelecionada ? cidadeSelecionada.label : "", 
				municipio: "" 
			}));

		} else if (name === "servico") { 
			const servicoSelecionado = servicos.find(s => s.value === value); 
			setSubServicos(sub_servicos[value] || []); 
			setFormData(prev => ({ 
				...prev, 
				servico: value, 
				servicoLabel: servicoSelecionado ? servicoSelecionado.label : "", 
				subServico: "" 
			}));

		} else { 
			setFormData(prev => ({ ...prev, [name]: value })); 
		} 
	}; 
	const handleSubmit = async (e) => { 
		e.preventDefault(); 
		setLoading(true); 
		const formDataParaEnvio = { ...formData, cidade: formData.cidadeLabel, servico: formData.servicoLabel }; 
		try { await enviarFormulario(formDataParaEnvio); 
			toast.success("Formulário enviado com sucesso!", { description: "Entraremos em contacto em breve.", }); 
			setFormData({ 
				seuNome: "", 
				servico: "",
				servicoLabel: "",
				subServico: "" , 
				cidade: "", 
				cidadeLabel: "", 
				municipio: "", 
				suaEmpresa: "", 
				seuTelefone: "", 
				seuEmail: "",
				contactoPreferido: ""
			});
      console.log("Formulário enviado:", formDataParaEnvio);
			setMunicipios([]); 
			onClose(); // fecha o modal após sucesso

		} catch (error) { 
			toast.error("Erro ao enviar o formulário.", { description: "Verifique os dados e tente novamente.", });
      console.log("Formulário enviado:", formDataParaEnvio);
		} finally { 
			setLoading(false); 
		} 
	};

	return ( 
		<AnimatePresence> 
			{open && ( 
				<motion.div 
					initial={{ opacity: 0 }} 
					animate={{ opacity: 1 }} 
					exit={{ opacity: 0 }} 
					className="modal-overlay2" 
				> 
					<motion.div 
						initial={{ scale: 0.9, opacity: 0 }} 
						animate={{ scale: 1, opacity: 1 }} 
						exit={{ scale: 0.9, opacity: 0 }} 
						className="modal-container" 
					> 
						<button onClick={onClose} className="modal-closem"> 
							<X /> 
						</button> 
						
						<div className="card"> 
							<div className="modal-contentm"> 
								<h2 className="modal-title"> Entre em contacto agora mesmo! </h2> 
								
								<form onSubmit={handleSubmit} className="modal-grid"> 
									<div className="modal-column"> 
										<input type="text" name="seuNome" placeholder="Digite seu nome completo" value={formData.seuNome} onChange={handleChange} required /> 
										<select name="cidade" value={formData.cidade} onChange={handleChange} required > 
											<option value="">Selecione sua província de residência</option> 
											{cidades.map(cidade => ( 
												<option key={cidade.value} value={cidade.value}> {cidade.label} </option> 
											))}
										</select> 
										<select name="municipio" value={formData.municipio} onChange={handleChange} required disabled={!municipios.length} > 
											<option value="">Selecione seu município de residência</option> 
											{municipios.map(municipio => ( 
												<option key={municipio} value={municipio}> {municipio} </option> ))} 
										</select> 
                    					<input type="email" name="seuEmail" placeholder="Digite o seu e-mail profissional ou pessoal" value={formData.seuEmail} onChange={handleChange} required /> 
                 						<input type="text" name="seuTelefone" placeholder="Digite seu número de telefone ex: 900 000 000" value={formData.seuTelefone} onChange={handleChange} required /> 
									</div> 
									
									<div className="modal-column"> 
										
										<select name="suaEmpresa" value={formData.suaEmpresa} onChange={handleChange} required > 
											<option value="">Selecione a área de atuação</option> 
											{area_atuacao.map(area => ( 
												<option key={area.value} value={area.value}> {area.value} </option>
											))} 
										</select>

										<select name="servico" value={formData.servico} onChange={handleChange} required > 
											<option value="">Selecione um serviço que deseja</option> 
											{servicos.map(servico => ( 
												<option key={servico.value} value={servico.value}> {servico.label} </option>
											))} 
										</select>

										<select name="subServico" value={formData.subServico} onChange={handleChange} required disabled={!subServicos.length} > 
											<option value="">Selecione um sub-serviço</option> 
											{subServicos.map(sub => ( 
												<option key={sub} value={sub}> {sub} </option> 
											))} 
										</select> 
										<div className="contact-box">
										<p style={{fontWeight: "bolder", fontSize: "14px"}}>Como prefere ser contactado?</p>
										<div className="radio-group">
											<label>
											<input type="radio" name="contactoPreferido" value="whatsapp" checked={formData.contactoPreferido === "whatsapp"} onChange={handleChange} />
											Whatsapp
											</label>
											<label>
											<input type="radio" name="contactoPreferido" value="email" checked={formData.contactoPreferido === "email"} onChange={handleChange} />
											Pelo e-mail
											</label>
										</div>
										<p className="contact-note">
											Você não estará se comprometendo com nada ao nos contactar.
										</p>
										</div>
										<div className="modal-actions"> 
											<button type="submit" disabled={loading} className="btn-enviar" > {loading ? "Enviando..." : "Enviar pedido"} </button> 
										</div> 
									</div> 
								</form> 
							</div> 
						</div> 
					</motion.div> 
				</motion.div> )
			} 
		</AnimatePresence> 
	); 
}

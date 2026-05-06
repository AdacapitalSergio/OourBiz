import { useState } from "react";
import "./MultiStepForm.css";
import { enviarFormularioVoluntariado } from "../../../services/websiteService";
import { CheckCircle, ChevronLeft, ChevronRight } from "lucide-react";
import { toast } from "sonner";
import { div } from "framer-motion/m";

export default function MultiStepForm() {
    const [step, setStep] = useState(1);

    const [formData, setFormData] = useState({
        nome: "",
        nascimento: "",
        email: "",
        telefone: "",
        localidade: "",
        instituicao: "",
        ano: "",
        motivacao: "",
        experiencia: "",
        sobre: "",
        area: [],
        disponibilidade_datas: "",
        disponibilidade_reunioes: "",
        compromisso: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleCheckbox = (value) => {
        let updated = [...formData.area];

        if (updated.includes(value)) {
            updated = updated.filter((v) => v !== value);
        } else {
            updated.push(value);
        }

        setFormData({ ...formData, area: updated });
    };

    const next = () => setStep((prev) => prev + 1);
    const prev = () => setStep((prev) => prev - 1);

    const staps = [
        {
            id: 1,
            texteo: "Dados pessoais e acadêmicos"
        },
        {
            id: 2,
            texteo: "Motivação e perfil"
        },
        {
            id: 3,
            texteo: "Disponibilidade"
        },
        {
            id: 4,
            texteo: "Confirmação"
        }
    ]

    const handleSubmit = async () => {
        try {
            await enviarFormularioVoluntariado(formData);
            toast.success("Inscrição realizada com sucesso, entraremos em contacto!");

            setFormData({
                nome: "",
                nascimento: "",
                email: "",
                telefone: "",
                localidade: "",
                instituicao: "",
                ano: "",
                motivacao: "",
                experiencia: "",
                sobre: "",
                area: [],
                outras_experiencia: "string",
                disponibilidade_datas: "",
                disponibilidade_reunioes: "",
                compromisso: ""
            });

            setTimeout(() => {
                window.location.reload(); 
            }, 2000);

        } catch {
            toast.error("Erro ao enviar inscrição, preencha todos os campos e tente mais novamente!");
        }
    }; 

    return (
        <section className="multistep-section">
            <h1>Formulário de voluntariado OurBiz-NextGen</h1>
            <div className="div-multistep">
                <article>
                    <p>
                        Procuramos por pessoas comprometidas, responsáveis 
                        e alinhadas com o espírito da mudança e uma mentalidade 
                        virada para o futuro.
                    </p>
                    <p className="p-color-multistep">
                        É importante que preste bem atenção ao preencher este formulário. 
                        A sua participação começa aqui.
                    </p>
                </article>
                <div className="form-container">

                    {/* STEPS */}
                    <div className="steps">
                        {staps.map((s) => (
                            <div key={s.id} className="step-container">
                                <div className={`step ${step === s.id ? "active" : ""}`}>
                                    <span>{s.id}</span>
                                </div>
                                <p>{s.texteo}</p>
                            </div>
                        ))}
                    </div>
                    
                    {/* STEP 1 */}
                    {step === 1 && (
                        <div className="form-step">
                            <label htmlFor="nome">Seu nome completo</label>
                            <input placeholder="Seu nome completo" name="nome" onChange={handleChange} required />
                            <label htmlFor="nascimento">Data de nascimento</label>
                            <input type="date" name="nascimento" onChange={handleChange} required />
                            <label htmlFor="email">Seu e-mail</label>
                            <input placeholder="Seu e-mail" name="email" onChange={handleChange} required />
                            <label htmlFor="telefone">Telefone</label>
                            <input placeholder="Telefone" name="telefone" onChange={handleChange} required />
                            <label htmlFor="localidade">Localidade onde vives atualmente</label>
                            <input placeholder="Localidade onde vive" name="localidade" onChange={handleChange} required />

                            <label htmlFor="instituicao">Instituição de ensino</label>
                            <select name="instituicao" onChange={handleChange} required>
                                <option value="">Instituição de ensino</option>
                                <option value="IPH-UMN">IPH-UMN</option>
                                <option value="Medicina-UMN">Medicina-UMN</option>
                                <option value="Economia-UMN">Economia-UMN</option>
                                <option value="Direito-UMN">Direito-UMN</option>
                                <option value="ISPI">ISPI</option>
                                <option value="ISPEL">ISPEL</option>
                                <option value="Tundavala">Tundavala</option>
                            </select>
                            <label htmlFor="ano">Ano curricular</label>
                            <select name="ano" onChange={handleChange} required>
                                <option value="">Ano curricular</option>
                                <option value="1º Ano">1º Ano</option>
                                <option value="2º Ano">2º Ano</option>
                                <option value="3º Ano">3º Ano</option>
                                <option value="4º Ano">4º Ano</option>
                                <option value="5º Ano">5º Ano</option>
                                <option value="6º Ano">6º Ano</option>
                            </select>

                            <div className="buttons">
                                <button onClick={next}>Próximo <ChevronRight size={20} className="btn-prox"/> </button>
                            </div>
                        </div>
                    )}

                    {/* STEP 2 */}
                    {step === 2 && (
                        <div className="form-step">
                            <label htmlFor="motivacao">Porquê pretende ser um voluntário/a no Ourbiz-NextGen?</label>
                            <textarea
                                placeholder="Faça uma pequena descrição do porquê pretende se voluntariar."
                                name="motivacao"
                                onChange={handleChange}
                                required
                            />

                            <div className="radio-group">
                                <label htmlFor="experiencia">Já participaste em algum evento semelhante?</label>
                                <div className="teste-div">
                                    <span>Sim, como público</span>
                                    <input type="radio" name="experiencia" className="teste-inp" value="Sim, como público" onChange={handleChange} required />
                                </div>
                                <div className="teste-div">
                                    <span>Sim, como voluntário/a</span>
                                    <input type="radio" name="experiencia" className="teste-inp" value="Sim, como voluntário/a" onChange={handleChange} required />
                                </div>
                                <div className="teste-div">
                                    <span>Sim, de outra forma</span>
                                    <input type="radio" name="experiencia" className="teste-inp" value="Sim, de outra forma" onChange={handleChange} required />
                                </div>
                                <div className="teste-div">
                                    <span>Não</span>
                                    <input type="radio" name="experiencia" className="teste-inp" value="Não" onChange={handleChange} required />
                                </div>
                            </div>

                            <div className="checkbox-group">
                                <label htmlFor="area">Tens alguma experiência e algumas das seguintes áreas?</label>
                                {["Acolhimento e apoia ao público", "Apoio à produção e logística", "Comunicação / redes sociais", "Gestão de oradores", "Apoio em backstage", "Outras (especificar)"].map((item) => (
                                    <div className="teste-div" key={item}>
                                        <span>{item}</span>
                                        <input type="checkbox" name="area" className="teste-inp" onChange={() => handleCheckbox(item)} required />
                                    </div>  
                                ))}
                            </div>

                            <label htmlFor="outras_experiencia">Se escolheste “Outras” especifique</label>
                            <textarea
                                placeholder="Especifique as outras áreas de experiência"
                                name="outras_experiencia"
                                onChange={handleChange}
                                required
                            />

                            <label htmlFor="sobre">Fale-nos um pouco de sí</label>
                            <textarea
                                placeholder="Faça uma pequena descrição do porquê pretende se voluntariar."
                                name="sobre"
                                onChange={handleChange}
                                required
                            />

                            <div className="buttons">
                                <button onClick={prev} className="btn-prev"><ChevronLeft size={20} /> Anterior</button>
                                <button onClick={next}>Próximo <ChevronRight size={20} className="btn-prox"/> </button>
                            </div>
                        </div>
                    )}

                    {/* STEP 3 */}
                    {step === 3 && (
                        <div className="form-step">

                            <div className="radio-group">
                                <label htmlFor="disponibilidade_datas">Estás disponível para estrar presente em todas as datas do evento?</label>
                                <div className="teste-div">
                                    <span>Sim</span>
                                    <input type="radio" name="disponibilidade_datas" className="teste-inp" value="Sim" onChange={handleChange} required />
                                </div>
                                <div className="teste-div">
                                    <span>Não</span>
                                    <input type="radio" name="disponibilidade_datas" className="teste-inp" value="Não" onChange={handleChange} required />
                                </div>
                                <div className="teste-div">
                                    <span>Ainda não sei</span>
                                    <input type="radio" name="disponibilidade_datas" className="teste-inp" value="Ainda não sei" onChange={handleChange} required />
                                </div>
                            </div>

                            <div className="radio-group">
                                <label htmlFor="disponibilidade_reunioes">Estás disponível para estrar presente em reuniões e ensaios preparatórios do evento?</label>
                                <div className="teste-div">
                                    <span>Sim</span>
                                    <input type="radio" name="disponibilidade_reunioes" className="teste-inp" value="Sim" onChange={handleChange} required />
                                </div>
                                <div className="teste-div">
                                    <span>Não</span>
                                    <input type="radio" name="disponibilidade_reunioes" className="teste-inp" value="Não" onChange={handleChange} required />
                                </div>
                                <div className="teste-div">
                                    <span>Ainda não sei</span>
                                    <input type="radio" name="disponibilidade_reunioes" className="teste-inp" value="Ainda não sei" onChange={handleChange} required />
                                </div>
                            </div>

                            <div className="buttons">
                                <button onClick={prev} className="btn-prev"><ChevronLeft size={20} /> Anterior</button>
                                <button onClick={next}>Próximo <ChevronRight size={21} className="btn-prox"/> </button>
                            </div>
                        </div>
                    )}

                    {/* STEP 4 */}
                    {step === 4 && (
                        <div className="form-step">

                            <div className="radio-group">
                                <label htmlFor="compromisso">Comprometes-te em participar com responsabilidade, pontualidade e espírito de equipa?</label>
                                <div className="teste-div">
                                    <span>Sim</span>
                                    <input type="radio" name="compromisso" className="teste-inp" value={true} onChange={handleChange} required />
                                </div>
                            </div>

                            <div className="buttons">
                                <button onClick={prev} className="btn-prev"><ChevronLeft size={20} /> Anterior</button>
                                <button onClick={handleSubmit}>Confirmar <CheckCircle size={20} /> </button>
                            </div>
                        </div>
                    )}

                </div>
            </div>
        </section>
    );
}

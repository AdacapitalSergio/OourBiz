import { useState } from "react";
import "./MultiStepForm.css";
import { enviarFormularioVoluntariado } from "../../../services/websiteService";
import { CheckCircle, ChevronLeft, ChevronRight } from "lucide-react";
import { toast } from "sonner";

export default function MultiStepForm() {
    const [step, setStep] = useState(1);

    const [formData, setFormData] = useState({
        nome: "",
        nascimento: "",
        email: "",
        telefone: "",
        localizacao: "",
        instituicao: "",
        ano: "",
        motivacao: "",
        experiencia: "",
        area: [],
        sobre: "",
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

    const handleSubmit = async () => {
        try {
            await enviarFormulario(formData);
            toast.success("Inscrição realizada com sucesso!");

            setFormData({
                nome: "",
                nascimento: "",
                email: "",
                telefone: "",
                localizacao: "",
                instituicao: "",
                ano: "",
                motivacao: "",
                experiencia: "",
                area: [],
                sobre: "",
                disponibilidade_datas: "",
                disponibilidade_reunioes: "",
                compromisso: ""
            });

        } catch {
            toast.error("Erro ao enviar inscrição, tente mais tarde!");
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
                        {[1, 2, 3, 4].map((s) => (
                            <div key={s} className={`step ${step === s ? "active" : ""}`}>
                                <span>{s}</span>
                            </div>
                        ))}
                        <p>teste</p>
                    </div>
                    
                    {/* STEP 1 */}
                    {step === 1 && (
                        <div className="form-step">
                            <input placeholder="Seu nome completo" name="nome" onChange={handleChange} />
                            <input type="date" name="nascimento" onChange={handleChange} />
                            <input placeholder="Seu e-mail" name="email" onChange={handleChange} />
                            <input placeholder="Telefone" name="telefone" onChange={handleChange} />
                            <input placeholder="Localidade onde vive" name="localizacao" onChange={handleChange} />

                            <select name="instituicao" onChange={handleChange}>
                                <option>Instituição de ensino</option>
                            </select>

                            <select name="ano" onChange={handleChange}>
                                <option>Ano curricular</option>
                            </select>

                            <div className="buttons">
                                <button onClick={next}>Próximo <ChevronRight size={20} className="btn-prox"/> </button>
                            </div>
                        </div>
                    )}

                    {/* STEP 2 */}
                    {step === 2 && (
                        <div className="form-step">

                            <textarea
                                placeholder="Motivação"
                                name="motivacao"
                                onChange={handleChange}
                            />

                            <div className="radio-group">
                                <span>Já participou?</span>
                                <div className="teste-div">
                                    <label htmlFor="experiencia">Sim</label>
                                    <input type="radio" name="experiencia" className="teste-inp" value="sim" onChange={handleChange} />
                                </div>
                                <div className="teste-div">
                                    <label htmlFor="experiencia">Não</label>
                                    <input type="radio" name="experiencia" className="teste-inp" value="nao" onChange={handleChange} />
                                </div>
                            </div>

                            <div className="checkbox-group">
                                <span>Experiência:</span>
                                {["Acolhimento", "Logística", "Comunicação", "Gestão", "Backstage"].map((item) => (
                                    <div className="teste-div" key={item}>
                                        <label>{item}</label>
                                        <input type="checkbox" className="teste-inp" onChange={() => handleCheckbox(item)} />
                                    </div>  
                                ))}
                            </div>

                            <textarea
                                placeholder="Fale sobre si"
                                name="sobre"
                                onChange={handleChange}
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
                                <span>Disponível nas datas?</span>
                                <div className="teste-div">
                                    <label htmlFor="disponibilidade_datas">Sim</label>
                                    <input type="radio" name="disponibilidade_datas" className="teste-inp" value="sim" onChange={handleChange} />
                                </div>
                                <div className="teste-div">
                                    <label htmlFor="disponibilidade_datas">Não</label>
                                    <input type="radio" name="disponibilidade_datas" className="teste-inp" value="nao" onChange={handleChange} />
                                </div>
                            </div>

                            <div className="radio-group">
                                <span>Disponível em reuniões?</span>
                                <div className="teste-div">
                                    <label htmlFor="disponibilidade_reunioes">Sim</label>
                                    <input type="radio" name="disponibilidade_reunioes" className="teste-inp" value="sim" onChange={handleChange} />
                                </div>
                                <div className="teste-div">
                                    <label htmlFor="disponibilidade_reunioes">Não</label>
                                    <input type="radio" name="disponibilidade_reunioes" className="teste-inp" value="nao" onChange={handleChange} />
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
                                <span>Compromisso</span>
                                <div className="teste-div">
                                    <label htmlFor="compromisso">Sim</label>
                                    <input type="radio" name="compromisso" className="teste-inp" value="sim" onChange={handleChange} />
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

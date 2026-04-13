import React, { useState } from 'react';
import { 
  CheckCircle2, Star, Heart, Accessibility, 
  MessageCircle, ArrowRight, MapPin, Clock, 
  ShieldCheck, Wifi, CreditCard, Dumbbell 
} from 'lucide-react';
import { motion } from 'framer-motion';
import './App.css';

const App: React.FC = () => {
  const [formData, setFormData] = useState({
    nome: '',
    telefone: '',
    objetivo: 'Emagrecer',
    jaTreina: 'Não',
    mensagem: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const numeroWhatsApp = "554333366115";
    const textoGerado = `🔥 Novo contato - Athletic Mania
👤 Nome: ${formData.nome}
📞 Telefone: ${formData.telefone}
🎯 Objetivo: ${formData.objetivo}
🏋️ Já treina: ${formData.jaTreina}
📝 Observações: ${formData.mensagem}`;
    
    window.open(`https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(textoGerado)}`, '_blank');
  };

  return (
    <div className="landing-page">
      {/* BARRA DE INFORMAÇÕES TOPO */}
      <div className="info-bar">
        <div className="container">
          <div className="info-item">
            <MapPin size={14} color="var(--primary)" />
            Av. Saul Elkind, 1030 - Londrina, PR
          </div>
          <div className="info-item">
            <Clock size={14} color="var(--primary)" />
            Segunda a Sexta: 08h-12h / 14h-22h
          </div>
        </div>
      </div>

      {/* BOTÃO WHATSAPP */}
      <a href="https://wa.me/554333366115" className="whatsapp-float" target="_blank" rel="noreferrer">
        <MessageCircle size={30} />
      </a>

      {/* HERO */}
      <header className="hero">
        <div className="container hero-content">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="badge">👊 MAIS QUE UMA ACADEMIA, UMA TERAPIA</span>
            <h2>Onde você se <span>supera</span> todos os dias.</h2>
            <p style={{ color: 'var(--text-dim)', maxWidth: '650px', margin: '0 auto 30px' }}>
              Um ambiente acolhedor, motivador e 100% inclusivo. Treine com profissionais empenhados no seu resultado.
            </p>
            <a href="#contato" className="btn-primary">Começar Minha Transformação <ArrowRight size={20} /></a>
          </motion.div>
        </div>
      </header>

      {/* DEPOIMENTOS (PROVA SOCIAL) */}
      <section className="section container">
        <h3 className="section-title">O que nossos <span>alunos dizem</span></h3>
        <div className="testimonials-grid">
          <div className="testimonial-card">
            <div style={{ display: 'flex', gap: '4px', marginBottom: '15px' }}>
              {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="var(--primary)" color="var(--primary)" />)}
            </div>
            <p>"Gosto muito das aulas de zumba. Ambiente acolhedor e profissionais empenhados em te ajudar! Me sinto motivada a treinar todos os dias!"</p>
          </div>
          <div className="testimonial-card">
            <div style={{ display: 'flex', gap: '4px', marginBottom: '15px' }}>
              {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="var(--primary)" color="var(--primary)" />)}
            </div>
            <p>"Treinar aqui não é só exercício, é terapia! Um ambiente que incentiva a superação e instrutores super atenciosos."</p>
          </div>
          <div className="testimonial-card">
            <div style={{ display: 'flex', gap: '4px', marginBottom: '15px' }}>
              {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="var(--primary)" color="var(--primary)" />)}
            </div>
            <p>"Minha segunda casa, sou muito grata por todos dessa academia. Recomendo, você é bem recebido pelos donos!"</p>
          </div>
        </div>
      </section>

      {/* DIFERENCIAIS E ACESSIBILIDADE */}
      <section className="section" style={{ background: 'var(--surface)' }}>
        <div className="container">
          <div className="contact-grid">
            <div>
              <h3 style={{ fontSize: '2.5rem', marginBottom: '20px' }}>Um espaço feito para <span>você</span></h3>
              <p style={{ color: 'var(--text-dim)' }}>
                Na Athletic Mania, a inclusão é regra. Nossa estrutura está pronta para garantir conforto e segurança a todos os alunos.
              </p>
              
              <div className="features-icon-grid">
                <div className="feature-tag"><Accessibility color="var(--primary)" /> Acessibilidade para cadeirantes</div>
                <div className="feature-tag"><Heart color="var(--primary)" /> LGBTQ+ Friendly</div>
                <div className="feature-tag"><ShieldCheck color="var(--primary)" /> Espaço Seguro Trans</div>
                <div className="feature-tag"><Wifi color="var(--primary)" /> Wi-Fi Gratuito</div>
                <div className="feature-tag"><CreditCard color="var(--primary)" /> Aceitamos NFC e Cartões</div>
                <div className="feature-tag"><Dumbbell color="var(--primary)" /> Aulas de Zumba e Funcional</div>
              </div>
            </div>

            <div className="form-wrapper">
              <h4 style={{ marginBottom: '20px', fontSize: '1.2rem', color: 'var(--primary)' }}>Horários de Funcionamento</h4>
              <div className="hour-row"><span>Segunda-feira</span> <span>08h-12h | 14h-22h</span></div>
              <div className="hour-row"><span>Terça-feira</span> <span>08h-12h | 14h-22h</span></div>
              <div className="hour-row"><span>Quarta-feira</span> <span>08h-12h | 14h-22h</span></div>
              <div className="hour-row"><span>Quinta-feira</span> <span>08h-12h | 14h-22h</span></div>
              <div className="hour-row"><span>Sexta-feira</span> <span>08h-12h | 14h-22h</span></div>
              <div className="hour-row"><span>Sábado</span> <span>09:00 – 12:00</span></div>
              <div className="hour-row" style={{ color: '#ff4444', border: 'none' }}><span>Domingo</span> <span>Fechado</span></div>
            </div>
          </div>
        </div>
      </section>

      {/* FORMULÁRIO DE CONTATO */}
      <section id="contato" className="section container">
        <div className="contact-grid">
          <div className="contact-info">
            <span className="badge">BORA TREINAR?</span>
            <h3 style={{ fontSize: '3rem', margin: '20px 0' }}>Fale com a gente e comece <span>hoje.</span></h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
              <div className="info-item"><CheckCircle2 color="var(--primary)" /> Agendamento simplificado</div>
              <div className="info-item"><CheckCircle2 color="var(--primary)" /> Resposta rápida via WhatsApp</div>
              <div className="info-item"><CheckCircle2 color="var(--primary)" /> Avaliação física personalizada</div>
            </div>
          </div>

          <div className="form-wrapper">
            <form onSubmit={handleSubmit} className="premium-form">
              <div className="input-field">
                <label>Como podemos te chamar?</label>
                <input 
                  type="text" 
                  placeholder="Seu nome" 
                  required 
                  onChange={(e) => setFormData({...formData, nome: e.target.value})} 
                />
              </div>
              <div className="input-field">
                <label>WhatsApp</label>
                <input 
                  type="tel" 
                  placeholder="(43) 99999-9999" 
                  required 
                  onChange={(e) => setFormData({...formData, telefone: e.target.value})} 
                />
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
                <div className="input-field">
                  <label>Seu Objetivo</label>
                  <select onChange={(e) => setFormData({...formData, objetivo: e.target.value})}>
                    <option>Emagrecer</option>
                    <option>Ganhar massa</option>
                    <option>Zumba</option>
                    <option>Saúde</option>
                  </select>
                </div>
                <div className="input-field">
                  <label>Já treina?</label>
                  <select onChange={(e) => setFormData({...formData, jaTreina: e.target.value})}>
                    <option>Não</option>
                    <option>Sim</option>
                  </select>
                </div>
              </div>
              <button type="submit" className="btn-submit">Falar no WhatsApp Agora</button>
            </form>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="section container" style={{ borderTop: '1px solid var(--accent)', textAlign: 'center' }}>
        <h1 className="logo" style={{ marginBottom: '10px' }}>Athletic<span>Mania</span></h1>
        <p style={{ color: 'var(--text-dim)', fontSize: '0.9rem' }}>
          Av. Saul Elkind, 1030 - Conj. Hab. Maria Cecilia Serrano de Oliveira, Londrina - PR
        </p>
        <p style={{ color: 'var(--text-dim)', fontSize: '0.9rem', marginTop: '5px' }}>
          Telefone: (43) 3336-6115
        </p>
        <div style={{ marginTop: '40px', color: '#333', fontSize: '0.7rem' }}>
          © {new Date().getFullYear()} Athletic Mania Londrina.
        </div>
      </footer>
    </div>
  );
};

export default App;
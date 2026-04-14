import React, { useState } from 'react';
import { 
  CheckCircle2, Star, Users, Heart, Shield, 
  MessageCircle, ArrowRight, Sword, MapPin, Clock
} from 'lucide-react';
import { motion } from 'framer-motion';
import './App.css';

interface FormData {
  nome: string;
  telefone: string;
  modalidade: string;
  experiencia: string;
  mensagem: string;
}

const App: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    nome: '',
    telefone: '',
    modalidade: 'Muay Thai',
    experiencia: 'Iniciante',
    mensagem: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const numeroWhatsApp = "5543984470451"; 
    
    const textoGerado = `🥊 Novo Contato - Team Aguiar
👤 Nome: ${formData.nome}
📞 WhatsApp: ${formData.telefone}
🥋 Interesse: ${formData.modalidade}
💪 Nível: ${formData.experiencia}
📝 Recado: ${formData.mensagem}`;
    
    const url = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(textoGerado)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="landing-page">
      <a href="#contato" className="whatsapp-float" aria-label="Contato via WhatsApp">
        <MessageCircle />
      </a>

      {/* 1. HERO SECTION */}
      <header className="hero team-aguiar-hero">
        <nav className="nav-header container">
          <h1 className="logo">TEAM<span>AGUIAR</span></h1>
          <a href="#contato" className="badge" style={{textDecoration: 'none'}}>Aula Experimental</a>
        </nav>
        <div className="container hero-content">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}
          >
            <div style={{textAlign: 'center', width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
              <span className="badge">🇹🇭 MUAY THAI • JIU-JITSU • BOXE</span>
              <h2>Transforme seu corpo e sua <span>mente</span> no tatame.</h2>
              <p>O melhor centro de treinamento de Londrina. Ambiente familiar, local amplo e focado na sua evolução física e pessoal.</p>
              <a href="#contato" className="btn-primary">Agendar aula grátis <ArrowRight size={20} /></a>
            </div>
          </motion.div>
        </div>
      </header>

      {/* 2. PROVA SOCIAL (Google Reviews) */}
      <section className="social-proof">
        <div className="container proof-grid">
          <div className="rating">
            <div className="stars">
              {[...Array(5)].map((_, i) => (
                <Star key={i} fill="var(--primary)" color="var(--primary)" size={18} />
              ))}
            </div>
            <p><strong>5.0/5.0</strong> Excelência no Google Maps</p>
          </div>
          <div className="proof-text">
            "CT top demais, clima de família, geral se ajuda e evolui junto. Mestre cobra e incentiva!"
          </div>
        </div>
      </section>

      {/* 3. DIFERENCIAIS DO CT */}
      <section className="section container">
        <h3 className="section-title">Por que treinar no <span>Team Aguiar?</span></h3>
        <div className="cards-grid">
          <div className="card">
            <Sword className="icon-box" />
            <h4>Para todas as idades</h4>
            <p>Metodologia adaptada desde crianças (Baby/Kids) até adultos que buscam saúde e defesa.</p>
          </div>
          <div className="card">
            <Users className="icon-box" />
            <h4>Clima de Família</h4>
            <p>Ambiente receptivo onde o aprendizado vai muito além do tatame e da técnica.</p>
          </div>
          <div className="card">
            <Shield className="icon-box" />
            <h4>Instrutores Especializados</h4>
            <p>Liderados pela Mestre Flávia, dedicada e cuidadosa com cada detalhe do seu treino.</p>
          </div>
           <div className="card">
            <Clock className="icon-box" />
            <h4>Grade Completa</h4>
            <p>Horários disponíveis todos os dias para você não ter desculpas para não treinar.</p>
          </div>
        </div>
      </section>

      {/* 4. DEPOIMENTOS REAIS */}
      <section className="section" style={{background: '#0a0a0a'}}>
        <div className="container">
          <h3 className="section-title">Opinião de <span>Quem Treina</span></h3>
          <div className="cards-grid">
            <div className="card" style={{background: 'var(--surface)', borderRadius: '16px'}}>
                <p style={{fontStyle: 'italic', fontSize: '0.95rem', color: 'var(--text-main)'}}>
                  "Local bem equipado e instrução excelente! Me senti em casa desde o primeiro dia :) Sempre muito respeitosos e pacientes."
                </p>
                <p style={{fontSize: '0.8rem', marginTop: '10px', color: 'var(--primary)'}}>★ ★ ★ ★ ★ - Google Review</p>
            </div>
            <div className="card" style={{background: 'var(--surface)', borderRadius: '16px'}}>
                <p style={{fontStyle: 'italic', fontSize: '0.95rem', color: 'var(--text-main)'}}>
                  "Aqui não forma só lutador, forma caráter. Quem treina aqui cresce no corpo, na mente e na vida."
                </p>
                <p style={{fontSize: '0.8rem', marginTop: '10px', color: 'var(--primary)'}}>★ ★ ★ ★ ★ - Google Review</p>
            </div>
             <div className="card" style={{background: 'var(--surface)', borderRadius: '16px'}}>
                <p style={{fontStyle: 'italic', fontSize: '0.95rem', color: 'var(--text-main)'}}>
                  "Ambiente familiar e receptivo, a professora Flávia é dedicada e cuidadosa com a academia e os alunos."
                </p>
                <p style={{fontSize: '0.8rem', marginTop: '10px', color: 'var(--primary)'}}>★ ★ ★ ★ ★ - Google Review</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. INFRAESTRUTURA */}
      <section className="section container">
        <h3 className="section-title">Nossa <span>Estrutura</span></h3>
        <div className="cards-grid" style={{gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))'}}>
          <div className="card" style={{borderStyle: 'dashed', padding: '25px'}}>
            <h4>Acessibilidade</h4>
            <ul style={{listStyle: 'none', color: 'var(--text-dim)', fontSize: '0.95rem', display: 'flex', flexDirection: 'column', gap: '5px'}}>
              <li style={{display: 'flex', gap: '8px', alignItems: 'center'}}><CheckCircle2 size={14} color="var(--primary)"/> Entrada para cadeirantes</li>
              <li style={{display: 'flex', gap: '8px', alignItems: 'center'}}><CheckCircle2 size={14} color="var(--primary)"/> Estacionamento acessível</li>
            </ul>
          </div>
          <div className="card" style={{borderStyle: 'dashed', padding: '25px'}}>
            <h4>Facilidades</h4>
            <ul style={{listStyle: 'none', color: 'var(--text-dim)', fontSize: '0.95rem', display: 'flex', flexDirection: 'column', gap: '5px'}}>
              <li style={{display: 'flex', gap: '8px', alignItems: 'center'}}><CheckCircle2 size={14} color="var(--primary)"/> Vestiários e Banheiro</li>
              <li style={{display: 'flex', gap: '8px', alignItems: 'center'}}><CheckCircle2 size={14} color="var(--primary)"/> Aulas On-line disponíveis</li>
            </ul>
          </div>
          <div className="card" style={{borderStyle: 'dashed', padding: '25px'}}>
            <h4>Pagamento</h4>
            <ul style={{listStyle: 'none', color: 'var(--text-dim)', fontSize: '0.95rem', display: 'flex', flexDirection: 'column', gap: '5px'}}>
              <li style={{display: 'flex', gap: '8px', alignItems: 'center'}}><CheckCircle2 size={14} color="var(--primary)"/> Cartões (Crédito/Débito)</li>
              <li style={{display: 'flex', gap: '8px', alignItems: 'center'}}><CheckCircle2 size={14} color="var(--primary)"/> Pagamento via Celular/NFC</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 6. CONTATO E LOCALIZAÇÃO */}
      <section id="contato" className="contact-section">
        <div className="container contact-grid">
          <div className="contact-info">
            <span className="badge">VENHA NOS VISITAR</span>
            <h3>Pronto para o primeiro round?</h3>
            
            <div className="info-item" style={{marginTop: '25px'}}>
              <MapPin color="var(--primary)" size={20} style={{flexShrink: 0, marginTop: '3px'}}/>
              <span>Av. Saul Elkind, 2222 - 3º andar - Vivi Xavier, Londrina/PR</span>
            </div>

            <div className="info-item">
              <Clock color="var(--primary)" size={20} style={{flexShrink: 0, marginTop: '3px'}}/>
              <div style={{width: '100%'}}>
                <strong>Horários Principais:</strong>
                <p style={{fontSize: '0.9rem', marginTop: '5px'}}>Muay Thai de Seg. à Sáb.<br/>Jiu-Jitsu Seg, Qua e Sex (Noite).</p>
              </div>
            </div>
          </div>

          <div className="form-wrapper">
            <form onSubmit={handleSubmit} className="premium-form">
              <div className="input-row">
                <div className="input-field">
                  <label>Seu Nome</label>
                  <input type="text" required placeholder="Nome completo" value={formData.nome} onChange={(e) => setFormData({...formData, nome: e.target.value})}/>
                </div>
                <div className="input-field">
                  <label>WhatsApp</label>
                  <input type="tel" required placeholder="(43) 98447-0451" value={formData.telefone} onChange={(e) => setFormData({...formData, telefone: e.target.value})}/>
                </div>
              </div>
              <div className="input-row">
                <div className="input-field">
                  <label>Modalidade</label>
                  <select value={formData.modalidade} onChange={(e) => setFormData({...formData, modalidade: e.target.value})}>
                    <option value="Muay Thai">Muay Thai</option>
                    <option value="Jiu Jitsu">Jiu Jitsu</option>
                    <option value="Boxe">Boxe</option>
                  </select>
                </div>
                <div className="input-field">
                  <label>Experiência</label>
                  <select value={formData.experiencia} onChange={(e) => setFormData({...formData, experiencia: e.target.value})}>
                    <option value="Iniciante">Iniciante (Nunca treinei)</option>
                    <option value="Intermediário">Já treinei antes</option>
                    <option value="Avançado">Sou graduado</option>
                  </select>
                </div>
              </div>
              <button type="submit" className="btn-submit">Enviar mensagem via WhatsApp</button>
            </form>
          </div>
        </div>
      </section>

      <footer className="footer container">
        <p style={{fontSize: '0.85rem', color: '#666'}}>© 2026 CT Team Aguiar Londrina. Sawasdee Krap! Oss!</p>
      </footer>
    </div>
  );
};

export default App;
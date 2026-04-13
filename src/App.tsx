import React, { useState } from 'react';
import { 
  CheckCircle2, Star, Users, Heart, Accessibility, 
  MessageCircle, ArrowRight, Dumbbell, MapPin, Clock
} from 'lucide-react';
import { motion } from 'framer-motion';
import './App.css';

// Definição de Tipos Original
interface FormData {
  nome: string;
  telefone: string;
  objetivo: string;
  jaTreina: string;
  mensagem: string;
}

const App: React.FC = () => {
  // Estado Original
  const [formData, setFormData] = useState<FormData>({
    nome: '',
    telefone: '',
    objetivo: 'Emagrecer', // Valor padrão original
    jaTreina: 'Não',      // Valor padrão original
    mensagem: ''
  });

  // Lógica de Envio Original
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const numeroWhatsApp = "5543999999999"; // Coloque o número da academia aqui
    
    const textoGerado = `🔥 Novo contato - Athletic Mania
👤 Nome: ${formData.nome}
📞 Telefone: ${formData.telefone}
🎯 Objetivo: ${formData.objetivo}
🏋️ Já treina: ${formData.jaTreina}
📝 Observações: ${formData.mensagem}`;
    
    const url = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(textoGerado)}`;
    window.open(url, '_blank');
  };

  return (
    <div className="landing-page">
      {/* Botão Flutuante WhatsApp Original */}
      <a href="#contato" className="whatsapp-float" aria-label="Contato via WhatsApp">
        <MessageCircle />
      </a>

      {/* 1. HERO SECTION - Estrutura Original Refinada */}
      <header className="hero">
        <nav className="nav-header container">
          <h1 className="logo">Athletic<span>Mania</span></h1>
          {/* Adicionei um link de contato no nav para mobile friendly */}
          <a href="#contato" className="badge" style={{textDecoration: 'none'}}>Contato</a>
        </nav>
        <div className="container hero-content">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}
          >
            <div style={{textAlign: 'center', width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
              <span className="badge">👊 MAIS QUE TREINO, TERAPIA</span>
              <h2>Um lugar onde você se <span>supera</span> todos os dias.</h2>
              <p>Ambiente acolhedor, motivador e inclusivo para todos os corpos. Venha treinar com profissionais empenhados!</p>
              <a href="#contato" className="btn-primary">Começar agora <ArrowRight size={20} /></a>
            </div>
          </motion.div>
        </div>
      </header>

      {/* 2. PROVA SOCIAL ORIGINAL - Texto e Avaliação Reais */}
      <section className="social-proof">
        <div className="container proof-grid">
          <div className="rating">
            <div className="stars">
              {[...Array(5)].map((_, i) => (
                <Star key={i} fill="var(--primary)" color="var(--primary)" size={18} />
              ))}
            </div>
            <p><strong>4.9/5.0</strong> baseada em 68 avaliações no Google</p>
          </div>
          <div className="proof-text">
            "Me sinto acolhida e motivada a treinar todos os dias! Ambiente acolhedor e profissionais empenhados."
          </div>
        </div>
      </section>

      {/* 3. DIFERENCIAIS ORIGINAIS (Cards Inclusivos) - Texto e Ícones Reais */}
      <section className="section container">
        <h3 className="section-title">Aqui você é <span>bem-vindo</span></h3>
        <div className="cards-grid">
          {/* Card 1: Original */}
          <div className="card">
            <Heart className="icon-box" />
            <h4>Espaço Inclusivo</h4>
            <p>Totalmente LGBTQ+ friendly e espaço seguro para pessoas transgênero.</p>
          </div>
          {/* Card 2: Original com texto de acessibilidade real */}
          <div className="card">
            <Accessibility className="icon-box" />
            <h4>Acessibilidade</h4>
            <p>Entrada com acessibilidade e estrutura preparada para pessoas em cadeira de rodas.</p>
          </div>
          {/* Card 3: Original com texto de comunidade real */}
          <div className="card">
            <Users className="icon-box" />
            <h4>Comunidade</h4>
            <p>Aulas sempre muito divertidas (Zumba e funcional) que elevam sua energia.</p>
          </div>
           {/* Card 4: Adicionado para incluir os profissionais mencionados */}
           <div className="card">
            <Dumbbell className="icon-box" />
            <h4>Profissionais</h4>
            <p>Instrutores super atenciosos e empenhados em te ajudar a treinar!</p>
          </div>
        </div>
      </section>

      {/* 4. DEPOIMENTOS REAIS ADICIONADOS (Copiei do texto que você enviou) */}
      <section className="section" style={{background: '#0a0a0a'}}>
        <div className="container">
          <h3 className="section-title">Depoimentos dos <span>Nossos Alunos</span></h3>
          <div className="cards-grid">
            {/* Depoimento 1 */}
            <div className="card" style={{background: 'var(--surface)', borderRadius: '16px'}}>
                <div className="stars" style={{marginBottom: '10px'}}>
                  {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="var(--primary)" color="var(--primary)"/>)}
                </div>
                <p style={{fontStyle: 'italic', fontSize: '0.95rem', color: 'var(--text-main)'}}>
                  "Gosto muito das aulas de zumba. Ambiente acolhedor e profissionais empenhados... Me sinto acolhida e motivada a treinar!"
                </p>
                <p style={{fontSize: '0.8rem', marginTop: '10px', color: 'var(--primary)'}}>- 2 meses atrás</p>
            </div>
            {/* Depoimento 2 */}
            <div className="card" style={{background: 'var(--surface)', borderRadius: '16px'}}>
                <div className="stars" style={{marginBottom: '10px'}}>
                  {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="var(--primary)" color="var(--primary)"/>)}
                </div>
                <p style={{fontStyle: 'italic', fontSize: '0.95rem', color: 'var(--text-main)'}}>
                  "Treinar aqui na academia Atletc Mania não é só exercicio é terapia, um ambiente que incentiva a superação..."
                </p>
                <p style={{fontSize: '0.8rem', marginTop: '10px', color: 'var(--primary)'}}>- 2 meses atrás</p>
            </div>
             {/* Depoimento 3 */}
             <div className="card" style={{background: 'var(--surface)', borderRadius: '16px'}}>
                <div className="stars" style={{marginBottom: '10px'}}>
                  {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="var(--primary)" color="var(--primary)"/>)}
                </div>
                <p style={{fontStyle: 'italic', fontSize: '0.95rem', color: 'var(--text-main)'}}>
                  "Experiência muito boa. Minha segunda casa sou muito grata por todos dessa academia..."
                </p>
                <p style={{fontSize: '0.8rem', marginTop: '10px', color: 'var(--primary)'}}>- 2 meses atrás</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. CONTATO E INFORMAÇÕES ORIGINAIS - Estrutura e Dados Reais */}
      <section id="contato" className="contact-section">
        <div className="container contact-grid">
          {/* Coluna 1: Informações Originais + Dados Reais */}
          <div className="contact-info">
            <span className="badge">ATENDIMENTO RÁPIDO</span>
            <h3>Fale com a gente e comece sua transformação.</h3>
            
            {/* Info Items Originais */}
            <div className="info-item">
              <CheckCircle2 color="var(--primary)" size={20} style={{flexShrink: 0, marginTop: '3px'}}/>
              <span>Resposta personalizada via WhatsApp.</span>
            </div>
            <div className="info-item">
              <CheckCircle2 color="var(--primary)" size={20} style={{flexShrink: 0, marginTop: '3px'}}/>
              <span>Ambiente seguro e acolhedor para todos.</span>
            </div>

            {/* Endereço Real Adicionado */}
            <div className="info-item" style={{marginTop: '25px'}}>
              <MapPin color="var(--primary)" size={20} style={{flexShrink: 0, marginTop: '3px'}}/>
              <span>Av. Saul Elkind, 1030 - Londrina, PR, 86088-000</span>
            </div>

            {/* Horários Reais Adicionados (Tabela Mobile Friendly) */}
            <div className="info-item">
              <Clock color="var(--primary)" size={20} style={{flexShrink: 0, marginTop: '3px'}}/>
              <div style={{width: '100%'}}>
                <strong>Nossos Horários:</strong>
                <div style={{display: 'flex', flexDirection: 'column', gap: '5px', marginTop: '10px', fontSize: '0.9rem'}}>
                  <div style={{display: 'flex', justifyContent: 'space-between'}}><span>Segunda a Sexta</span> <span>08h-12h | 14h-22h</span></div>
                  <div style={{display: 'flex', justifyContent: 'space-between'}}><span>Sábado</span> <span>09h-12h</span></div>
                  <div style={{display: 'flex', justifyContent: 'space-between', color: '#ff4444'}}><span>Domingo</span> <span>Fechado</span></div>
                </div>
              </div>
            </div>
          </div>

          {/* Coluna 2: Formulário Premium Original com Lógica Completa */}
          <div className="form-wrapper">
            <form onSubmit={handleSubmit} className="premium-form">
              {/* Input Row 1: Nome e Telefone (Fica 1 col no mobile, 2 no desktop) */}
              <div className="input-row">
                <div className="input-field">
                  <label>Seu Nome</label>
                  <input 
                    type="text" 
                    required 
                    placeholder="Ex: Gustavo Felício"
                    value={formData.nome}
                    onChange={(e) => setFormData({...formData, nome: e.target.value})}
                  />
                </div>
                <div className="input-field">
                  <label>WhatsApp</label>
                  <input 
                    type="tel" 
                    required 
                    placeholder="(43) 99999-9999"
                    value={formData.telefone}
                    onChange={(e) => setFormData({...formData, telefone: e.target.value})}
                  />
                </div>
              </div>

              {/* Input Row 2: Objetivo e Já Treina Original */}
              <div className="input-row">
                <div className="input-field">
                  <label>Objetivo</label>
                  <select 
                    value={formData.objetivo}
                    onChange={(e) => setFormData({...formData, objetivo: e.target.value})}
                  >
                    <option value="Emagrecer">Emagrecer</option>
                    <option value="Ganhar massa">Ganhar massa</option>
                    <option value="Melhorar saúde">Melhorar saúde</option>
                    <option value="Outro">Outro</option>
                  </select>
                </div>
                <div className="input-field">
                  <label>Já treina?</label>
                  <select 
                    value={formData.jaTreina}
                    onChange={(e) => setFormData({...formData, jaTreina: e.target.value})}
                  >
                    <option value="Não">Não</option>
                    <option value="Sim">Sim</option>
                  </select>
                </div>
              </div>

              {/* Observações Original */}
              <div className="input-field">
                <label>Observações</label>
                <textarea 
                  rows={3} 
                  placeholder="Conte um pouco sobre suas metas..."
                  value={formData.mensagem}
                  onChange={(e) => setFormData({...formData, mensagem: e.target.value})}
                ></textarea>
              </div>

              {/* Botão Submit Original */}
              <button type="submit" className="btn-submit">
                Falar no WhatsApp agora
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* 6. COMODIDADES E ACESSIBILIDADE DETALHADA ADICIONADA (Texto Real) */}
      <section className="section container" style={{paddingTop: '0'}}>
        <h3 className="section-title">Estrutura e <span>Serviços</span></h3>
        <div className="cards-grid" style={{gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))'}}>
          {/* Bloco 1: Acessibilidade */}
          <div className="card" style={{borderStyle: 'dashed', padding: '25px'}}>
            <h4>Acessibilidade</h4>
            <ul style={{listStyle: 'none', color: 'var(--text-dim)', fontSize: '0.95rem'}}>
              <li style={{display: 'flex', gap: '8px', alignItems: 'center'}}><CheckCircle2 size={14} color="var(--primary)"/> Entrada acessível para cadeiras de rodas</li>
            </ul>
          </div>
          {/* Bloco 2: Comodidades */}
          <div className="card" style={{borderStyle: 'dashed', padding: '25px'}}>
            <h4>Comodidades</h4>
            <ul style={{listStyle: 'none', color: 'var(--text-dim)', fontSize: '0.95rem', display: 'flex', flexDirection: 'column', gap: '5px'}}>
              <li style={{display: 'flex', gap: '8px', alignItems: 'center'}}><CheckCircle2 size={14} color="var(--primary)"/> Banheiro</li>
              <li style={{display: 'flex', gap: '8px', alignItems: 'center'}}><CheckCircle2 size={14} color="var(--primary)"/> Wi-Fi</li>
              <li style={{display: 'flex', gap: '8px', alignItems: 'center'}}><CheckCircle2 size={14} color="var(--primary)"/> Wi-Fi gratuito</li>
            </ul>
          </div>
          {/* Bloco 3: Pagamentos */}
          <div className="card" style={{borderStyle: 'dashed', padding: '25px'}}>
            <h4>Pagamentos</h4>
            <ul style={{listStyle: 'none', color: 'var(--text-dim)', fontSize: '0.95rem', display: 'flex', flexDirection: 'column', gap: '5px'}}>
              <li style={{display: 'flex', gap: '8px', alignItems: 'center'}}><CheckCircle2 size={14} color="var(--primary)"/> Cartão de crédito</li>
              <li style={{display: 'flex', gap: '8px', alignItems: 'center'}}><CheckCircle2 size={14} color="var(--primary)"/> Cartão de débito</li>
              <li style={{display: 'flex', gap: '8px', alignItems: 'center'}}><CheckCircle2 size={14} color="var(--primary)"/> NFC (Pagamento móvel)</li>
            </ul>
          </div>
        </div>
        <p style={{textAlign: 'center', color: 'var(--text-dim)', fontSize: '0.8rem', marginTop: '20px'}}>* Planejamento: Necessário fazer agendamento.</p>
      </section>

      {/* FOOTER ORIGINAL - Texto Real */}
      <footer className="footer container">
        <div className="social-links">
          {/* Ícone Instagram Original SVG */}
          <svg 
            width="20" height="20" viewBox="0 0 24 24" fill="none" 
            stroke="currentColor" strokeWidth="2" strokeLinecap="round" 
            strokeLinejoin="round"
          >
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
          </svg>
          <span>@academiaathleticmania</span>
        </div>
        <p style={{fontSize: '0.75rem', color: '#444', marginTop: '10px'}}>Av. Saul Elkind, 1030 - Londrina, PR</p>
      </footer>
    </div>
  );
};

export default App;
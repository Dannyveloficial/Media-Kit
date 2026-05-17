!DOCTYPE html>
<html lang="es">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Dannyvel — Media Kit</title>
<link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400&family=Jost:wght@200;300;400;500&display=swap" rel="stylesheet">
<style>
  :root {
    --rose: #f2c4ce;
    --rose-deep: #e8a0b0;
    --rose-light: #fce8ed;
    --gold: #a07830;
    --gold-light: #c9a96e;
    --gold-pale: #f5eedd;
    --white: #fffaf9;
    --cream: #fdf6f0;
    --text: #3a2a2e;
    --text-soft: #7a5a62;
    --text-faint: #b89aa0;
  }

  * { margin: 0; padding: 0; box-sizing: border-box; }

  body {
    background: var(--white);
    color: var(--text);
    font-family: 'Jost', sans-serif;
    font-weight: 300;
    width: 900px;
    margin: 0 auto;
  }

  /* ── HERO ── */
  .hero {
    background: linear-gradient(150deg, var(--rose-light) 0%, var(--cream) 50%, var(--gold-pale) 100%);
    min-height: 520px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    position: relative;
    overflow: hidden;
  }

  .hero::before {
    content: '';
    position: absolute;
    width: 420px; height: 420px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(242,196,206,0.5) 0%, transparent 70%);
    top: -80px; right: 180px;
    pointer-events: none;
  }

  .hero::after {
    content: '';
    position: absolute;
    width: 280px; height: 280px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(201,169,110,0.2) 0%, transparent 70%);
    bottom: 30px; left: 80px;
    pointer-events: none;
  }

  .hero-left {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 60px 40px 60px 60px;
    position: relative;
    z-index: 1;
  }

  .hero-tag {
    font-family: 'Jost', sans-serif;
    font-size: 10px;
    letter-spacing: 4px;
    text-transform: uppercase;
    color: var(--gold);
    margin-bottom: 20px;
  }

  .hero-name {
    font-family: 'Cormorant Garamond', serif;
    font-size: 72px;
    font-weight: 300;
    line-height: 1;
    color: var(--text);
    margin-bottom: 8px;
  }

  .hero-name span {
    color: var(--rose-deep);
    font-style: italic;
  }

  .hero-tagline {
    font-size: 12px;
    letter-spacing: 3px;
    text-transform: uppercase;
    color: var(--gold);
    margin-bottom: 28px;
  }

  .hero-desc {
    font-size: 14px;
    line-height: 1.8;
    color: var(--text-soft);
    max-width: 340px;
  }

  .hero-divider {
    width: 50px;
    height: 1px;
    background: linear-gradient(90deg, var(--gold), transparent);
    margin: 24px 0;
  }

  .hero-right {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 40px;
  }

  .photo-frame {
    width: 260px;
    height: 340px;
    border-radius: 140px 140px 60px 60px;
    background: linear-gradient(180deg, var(--rose) 0%, var(--rose-deep) 100%);
    position: relative;
    overflow: hidden;
    box-shadow: 0 20px 60px rgba(232,160,176,0.35);
  }

  .photo-frame::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(180deg, rgba(255,255,255,0.15) 0%, transparent 50%);
  }

  .photo-placeholder {
    position: absolute;
    inset: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 8px;
  }

  .photo-icon {
    width: 48px; height: 48px;
    border-radius: 50%;
    background: rgba(255,255,255,0.4);
    display: flex; align-items: center; justify-content: center;
    font-size: 20px;
  }

  .photo-label {
    font-size: 10px;
    letter-spacing: 2px;
    text-transform: uppercase;
    color: rgba(255,255,255,0.8);
  }

  .frame-deco {
    position: absolute;
    width: 290px; height: 370px;
    border-radius: 150px 150px 70px 70px;
    border: 1px solid rgba(201,169,110,0.3);
    top: 25px; left: 50%;
    transform: translateX(-50%);
  }

  .frame-deco2 {
    position: absolute;
    width: 310px; height: 390px;
    border-radius: 160px 160px 80px 80px;
    border: 1px solid rgba(201,169,110,0.15);
    top: 15px; left: 50%;
    transform: translateX(-50%);
  }

  /* ── STATS BAR ── */
  .stats-bar {
    background: linear-gradient(90deg, var(--rose-deep) 0%, var(--rose) 40%, var(--gold-light) 100%);
    padding: 32px 60px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
    position: relative;
  }

  .stats-bar::before {
    content: '';
    position: absolute;
    inset: 0;
    background: repeating-linear-gradient(90deg, transparent, transparent 88px, rgba(255,255,255,0.1) 88px, rgba(255,255,255,0.1) 89px);
  }

  .stat {
    text-align: center;
    position: relative;
    z-index: 1;
  }

  .stat-num {
    font-family: 'Cormorant Garamond', serif;
    font-size: 36px;
    font-weight: 600;
    color: var(--white);
    line-height: 1;
  }

  .stat-label {
    font-size: 9px;
    letter-spacing: 2.5px;
    text-transform: uppercase;
    color: rgba(255,255,255,0.75);
    margin-top: 6px;
  }

  /* ── SECTIONS ── */
  .section {
    padding: 60px;
  }

  .section-alt {
    background: var(--cream);
  }

  .section-title {
    font-family: 'Cormorant Garamond', serif;
    font-size: 11px;
    letter-spacing: 4px;
    text-transform: uppercase;
    color: var(--gold);
    margin-bottom: 10px;
  }

  .section-heading {
    font-family: 'Cormorant Garamond', serif;
    font-size: 38px;
    font-weight: 300;
    color: var(--text);
    margin-bottom: 32px;
    line-height: 1.1;
  }

  .section-heading em {
    font-style: italic;
    color: var(--rose-deep);
  }

  /* ── CONTENT TYPES ── */
  .content-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
  }

  .content-card {
    background: var(--white);
    border-radius: 20px;
    padding: 28px 24px;
    border: 1px solid var(--rose-light);
    position: relative;
    overflow: hidden;
  }

  .content-card::before {
    content: '';
    position: absolute;
    top: 0; left: 0; right: 0;
    height: 3px;
    background: linear-gradient(90deg, var(--rose-deep), var(--gold));
  }

  .card-emoji {
    font-size: 28px;
    margin-bottom: 12px;
    display: block;
  }

  .card-title {
    font-family: 'Cormorant Garamond', serif;
    font-size: 18px;
    font-weight: 600;
    color: var(--text);
    margin-bottom: 8px;
  }

  .card-desc {
    font-size: 12px;
    line-height: 1.7;
    color: var(--text-soft);
  }

  /* ── AUDIENCE ── */
  .audience-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 40px;
    align-items: start;
  }

  .audience-visual {
    background: linear-gradient(135deg, var(--rose-light), var(--gold-pale));
    border-radius: 24px;
    padding: 36px;
    text-align: center;
  }

  .big-percent {
    font-family: 'Cormorant Garamond', serif;
    font-size: 80px;
    font-weight: 300;
    color: var(--rose-deep);
    line-height: 1;
  }

  .big-percent-label {
    font-size: 11px;
    letter-spacing: 3px;
    text-transform: uppercase;
    color: var(--text-soft);
    margin-top: 4px;
  }

  .gender-bar {
    margin-top: 24px;
    display: flex;
    border-radius: 30px;
    overflow: hidden;
    height: 8px;
  }

  .bar-women {
    width: 85%;
    background: linear-gradient(90deg, var(--rose-deep), var(--rose));
  }

  .bar-men {
    width: 15%;
    background: var(--gold-light);
  }

  .bar-labels {
    display: flex;
    justify-content: space-between;
    margin-top: 8px;
    font-size: 10px;
    color: var(--text-soft);
    letter-spacing: 1px;
  }

  .audience-info {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  .info-row {
    display: flex;
    gap: 16px;
    align-items: flex-start;
  }

  .info-dot {
    width: 8px; height: 8px;
    border-radius: 50%;
    background: linear-gradient(135deg, var(--rose-deep), var(--gold));
    margin-top: 5px;
    flex-shrink: 0;
  }

  .info-label {
    font-size: 10px;
    letter-spacing: 2px;
    text-transform: uppercase;
    color: var(--gold);
    margin-bottom: 4px;
  }

  .info-text {
    font-size: 13px;
    color: var(--text-soft);
    line-height: 1.6;
  }

  /* ── VIEWS ── */
  .views-grid {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 14px;
  }

  .view-pill {
    background: var(--white);
    border: 1px solid var(--rose-light);
    border-radius: 16px;
    padding: 18px 14px;
    text-align: center;
  }

  .view-num {
    font-family: 'Cormorant Garamond', serif;
    font-size: 22px;
    font-weight: 600;
    color: var(--rose-deep);
  }

  .view-text {
    font-size: 9px;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    color: var(--text-faint);
    margin-top: 4px;
  }

  /* ── COLLAB ── */
  .collab-box {
    background: linear-gradient(135deg, var(--text) 0%, #5a3a42 100%);
    border-radius: 24px;
    padding: 44px 48px;
    color: var(--white);
    display: grid;
    grid-template-columns: 1fr auto;
    gap: 40px;
    align-items: center;
  }

  .collab-title {
    font-family: 'Cormorant Garamond', serif;
    font-size: 32px;
    font-weight: 300;
    margin-bottom: 12px;
    line-height: 1.2;
  }

  .collab-title em {
    font-style: italic;
    color: var(--rose);
  }

  .collab-desc {
    font-size: 13px;
    color: rgba(255,255,255,0.6);
    line-height: 1.7;
    max-width: 360px;
  }

  .collab-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    margin-top: 20px;
  }

  .tag {
    border: 1px solid rgba(242,196,206,0.4);
    border-radius: 20px;
    padding: 5px 14px;
    font-size: 10px;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    color: var(--rose);
  }

  /* ── CONTACT ── */
  .contact-section {
    background: linear-gradient(150deg, var(--rose-light) 0%, var(--gold-pale) 100%);
    padding: 60px;
    text-align: center;
    position: relative;
    overflow: hidden;
  }

  .contact-section::before {
    content: '✦';
    position: absolute;
    font-size: 200px;
    color: rgba(242,196,206,0.25);
    top: -40px; left: -20px;
    line-height: 1;
  }

  .contact-section::after {
    content: '✦';
    position: absolute;
    font-size: 120px;
    color: rgba(201,169,110,0.2);
    bottom: -10px; right: 30px;
    line-height: 1;
  }

  .contact-heading {
    font-family: 'Cormorant Garamond', serif;
    font-size: 42px;
    font-weight: 300;
    color: var(--text);
    margin-bottom: 8px;
  }

  .contact-sub {
    font-size: 11px;
    letter-spacing: 3px;
    text-transform: uppercase;
    color: var(--gold);
    margin-bottom: 36px;
  }

  .contact-items {
    display: flex;
    justify-content: center;
    gap: 48px;
    flex-wrap: wrap;
    position: relative;
    z-index: 1;
  }

  .contact-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 6px;
  }

  .contact-icon {
    width: 44px; height: 44px;
    border-radius: 50%;
    background: var(--white);
    display: flex; align-items: center; justify-content: center;
    font-size: 18px;
    box-shadow: 0 4px 16px rgba(232,160,176,0.25);
    margin-bottom: 4px;
  }

  .contact-label {
    font-size: 9px;
    letter-spacing: 2px;
    text-transform: uppercase;
    color: var(--gold);
  }

  .contact-value {
    font-size: 13px;
    color: var(--text-soft);
  }

  /* ── FOOTER ── */
  .footer {
    background: var(--text);
    padding: 24px 60px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .footer-name {
    font-family: 'Cormorant Garamond', serif;
    font-size: 22px;
    font-weight: 300;
    color: var(--rose-light);
    letter-spacing: 2px;
  }

  .footer-copy {
    font-size: 10px;
    letter-spacing: 2px;
    color: rgba(255,255,255,0.3);
    text-transform: uppercase;
  }

  .footer-dot {
    width: 6px; height: 6px;
    border-radius: 50%;
    background: var(--gold);
  }

  /* ── DECORATIVE ORNAMENTS ── */
  .ornament {
    text-align: center;
    color: var(--gold);
    font-size: 14px;
    letter-spacing: 8px;
    margin: -10px 0;
    opacity: 0.6;
  }
</style>
</head>
<body>

<!-- HERO -->
<section class="hero">
  <div class="hero-left">
    <p class="hero-tag">✦ Creadora de Contenido ✦</p>
    <h1 class="hero-name">Danny<span>vel</span></h1>
    <p class="hero-tagline">Moda · Lifestyle · Crecimiento Personal</p>
    <div class="hero-divider"></div>
    <p class="hero-desc">Creadora de contenido colombiana basada en España, con comunidad activa en toda Latinoamérica y Europa. Contenido auténtico que conecta, inspira y convierte.</p>
  </div>
  <div class="hero-right">
    <div class="frame-deco2"></div>
    <div class="frame-deco"></div>
    <div class="photo-frame">
     
  </div>
</section>

<!-- STATS BAR -->
<div class="stats-bar">
  <div class="stat">
    <div class="stat-num">+480K</div>
    <div class="stat-label">Seguidores TikTok</div>
  </div>
  <div class="stat">
    <div class="stat-num">+3K</div>
    <div class="stat-label">Seguidores Instagram</div>
  </div>
  <div class="stat">
    <div class="stat-num">85%</div>
    <div class="stat-label">Audiencia Femenina</div>
  </div>
  <div class="stat">
    <div class="stat-num">2 🌍</div>
    <div class="stat-label">Continentes</div>
  </div>
</div>

<!-- CONTENIDO -->
<section class="section">
  <p class="section-title">✦ Lo que creo</p>
  <h2 class="section-heading">Tipo de <em>contenido</em></h2>
  <div class="content-grid">
    <div class="content-card">
      <span class="card-emoji">💄</span>
      <div class="card-title">Maquillaje & Beauty</div>
      <p class="card-desc">Tutoriales, unboxings y reseñas de productos en formato orgánico. El tipo de contenido que no parece publicidad, pero que vende.</p>
    </div>
    <div class="content-card">
      <span class="card-emoji">🎀</span>
      <div class="card-title">Moda & Lifestyle</div>
      <p class="card-desc">Outfits, tendencias y estilo de vida auténtico. Contenido que conecta emocionalmente con mujeres latinoamericanas y europeas.</p>
    </div>
    <div class="content-card">
      <span class="card-emoji">🌱</span>
      <div class="card-title">Crecimiento Personal</div>
      <p class="card-desc">Contenido viral de mentalidad, motivación y desarrollo personal con alto engagement y shares orgánicos.</p>
    </div>
  </div>
</section>

<!-- AUDIENCIA -->
<section class="section section-alt">
  <p class="section-title">✦ Mi comunidad</p>
  <h2 class="section-heading">Audiencia <em>real</em> y comprometida</h2>
  <div class="audience-grid">
    <div class="audience-visual">
      <div class="big-percent">85%</div>
      <div class="big-percent-label">Mujeres</div>
      <div class="gender-bar" style="margin-top:20px;">
        <div class="bar-women"></div>
        <div class="bar-men"></div>
      </div>
      <div class="bar-labels">
        <span>Mujeres 85%</span>
        <span>Hombres 15%</span>
      </div>
    </div>
    <div class="audience-info">
      <div class="info-row">
        <div class="info-dot"></div>
        <div>
          <div class="info-label">Origen</div>
          <div class="info-text">Colombiana viviendo en España — comunidad extendida por toda Latinoamérica y Europa</div>
        </div>
      </div>
      <div class="info-row">
        <div class="info-dot"></div>
        <div>
          <div class="info-label">Alcance geográfico</div>
          <div class="info-text">México, Colombia, Argentina, Chile, Perú, Venezuela + España y comunidades latinas en Europa</div>
        </div>
      </div>
      <div class="info-row">
        <div class="info-dot"></div>
        <div>
          <div class="info-label">Perfil de seguidora</div>
          <div class="info-text">Mujeres jóvenes interesadas en moda, belleza, lifestyle y contenido inspiracional</div>
        </div>
      </div>
      <div class="info-row">
        <div class="info-dot"></div>
        <div>
          <div class="info-label">Plataformas</div>
          <div class="info-text">TikTok (principal) · Instagram Reels · Contenido vertical corto</div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- VISUALIZACIONES -->
<section class="section">
  <p class="section-title">✦ Alcance real</p>
  <h2 class="section-heading">Videos con más <em>vistas</em></h2>
  <div class="views-grid">
    <div class="view-pill">
      <div class="view-num">579K</div>
      <div class="view-text">vistas</div>
    </div>
    <div class="view-pill">
      <div class="view-num">345K</div>
      <div class="view-text">vistas</div>
    </div>
    <div class="view-pill">
      <div class="view-num">300K</div>
      <div class="view-text">vistas</div>
    </div>
    <div class="view-pill">
      <div class="view-num">274K</div>
      <div class="view-text">vistas</div>
    </div>
    <div class="view-pill">
      <div class="view-num">169K</div>
      <div class="view-text">vistas</div>
    </div>
    <div class="view-pill">
      <div class="view-num">148K</div>
      <div class="view-text">vistas</div>
    </div>
    <div class="view-pill">
      <div class="view-num">56K</div>
      <div class="view-text">vistas</div>
    </div>
    <div class="view-pill">
      <div class="view-num">54K</div>
      <div class="view-text">vistas</div>
    </div>
    <div class="view-pill">
      <div class="view-num">44K</div>
      <div class="view-text">vistas</div>
    </div>
    <div class="view-pill">
      <div class="view-num">+1.9M</div>
      <div class="view-text">🏆 viral</div>
    </div>
  </div>
</section>

<!-- COLABORACIONES -->
<section class="section section-alt">
  <p class="section-title">✦ Trabajemos juntas</p>
  <h2 class="section-heading">¿Cómo <em>colaboramos</em>?</h2>
  <div class="collab-box">
    <div>
      <div class="collab-title">Contenido orgánico que <em>convierte</em></div>
      <p class="collab-desc">Creo contenido auténtico para TikTok e Instagram Reels. Unboxings, reseñas naturales y videos de producto que no parecen publicidad — porque la audiencia no compra anuncios, compra recomendaciones reales.</p>
      <div class="collab-tags">
        <span class="tag">UGC</span>
        <span class="tag">TikTok Orgánico</span>
        <span class="tag">Instagram Reels</span>
        <span class="tag">Unboxing</span>
        <span class="tag">Beauty</span>
        <span class="tag">Lifestyle</span>
        <span class="tag">Moda</span>
      </div>
    </div>
  </div>
</section>

<!-- CONTACTO -->
<section class="contact-section">
  <h2 class="contact-heading">Hablemos</h2>
  <p class="contact-sub">✦ Contacto & Redes ✦</p>
  <div class="contact-items">
    <div class="contact-item">
      <div class="contact-icon">📧</div>
      <div class="contact-label">Email</div>
      <div class="contact-value">dannyveloficial@gmail.com</div>
    </div>
    <div class="contact-item">
      <div class="contact-icon">🎵</div>
      <div class="contact-label">TikTok</div>
      <div class="contact-value">@Dannyvel_</div>
    </div>
    <div class="contact-item">
      <div class="contact-icon">📸</div>
      <div class="contact-label">Instagram</div>
      <div class="contact-value">@Dannyvel._</div>
    </div>
  </div>
</section>

<!-- FOOTER -->
<footer class="footer">
  <div class="footer-name">Dannyvel</div>
  <div class="footer-dot"></div>
  <div class="footer-copy">Media Kit 2025 · Confidencial</div>
</footer>

</body>
</html>

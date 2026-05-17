// Datos globales del Media Kit
const mediaKitData = {
  creator: {
    name: "Dannyvel",
    tagline: "Creadora de Contenido",
    description: "Creadora de contenido colombiana basada en España, con comunidad activa en toda Latinoamérica y Europa. Contenido auténtico que conecta, inspira y convierte.",
    specialties: ["Moda", "Lifestyle", "Crecimiento Personal"]
  },
  stats: [
    {
      number: "+480K",
      label: "Seguidores TikTok",
      icon: "🎵"
    },
    {
      number: "+3K",
      label: "Seguidores Instagram",
      icon: "📸"
    },
    {
      number: "85%",
      label: "Audiencia Femenina",
      icon: "👩"
    },
    {
      number: "2 🌍",
      label: "Continentes",
      icon: "🌍"
    }
  ],
  contentTypes: [
    {
      emoji: "💄",
      title: "Maquillaje & Beauty",
      description: "Tutoriales, unboxings y reseñas de productos en formato orgánico. El tipo de contenido que no parece publicidad, pero que vende."
    },
    {
      emoji: "🎀",
      title: "Moda & Lifestyle",
      description: "Outfits, tendencias y estilo de vida auténtico. Contenido que conecta emocionalmente con mujeres latinoamericanas y europeas."
    },
    {
      emoji: "🌱",
      title: "Crecimiento Personal",
      description: "Contenido viral de mentalidad, motivación y desarrollo personal con alto engagement y shares orgánicos."
    }
  ],
  audience: {
    women_percentage: 85,
    men_percentage: 15,
    origin: "Colombiana viviendo en España",
    reach: ["México", "Colombia", "Argentina", "Chile", "Perú", "Venezuela", "España"],
    profile: "Mujeres jóvenes interesadas en moda, belleza, lifestyle y contenido inspiracional",
    platforms: ["TikTok (principal)", "Instagram Reels", "Contenido vertical corto"]
  },
  topVideos: [
    { views: "579K" },
    { views: "345K" },
    { views: "300K" },
    { views: "274K" },
    { views: "169K" },
    { views: "148K" },
    { views: "56K" },
    { views: "54K" },
    { views: "44K" },
    { views: "+1.9M", label: "🏆 viral" }
  ],
  collaboration: {
    title: "Contenido orgánico que convierte",
    description: "Creo contenido auténtico para TikTok e Instagram Reels. Unboxings, reseñas naturales y videos de producto que no parecen publicidad — porque la audiencia no compra anuncios, compra recomendaciones reales.",
    services: ["UGC", "TikTok Orgánico", "Instagram Reels", "Unboxing", "Beauty", "Lifestyle", "Moda"]
  },
  contact: {
    email: "dannyveloficial@gmail.com",
    tiktok: "@Dannyvel_",
    instagram: "@Dannyvel._"
  }
};

// Función para cargar datos desde JSON externo (opcional)
async function loadDataFromJSON() {
  try {
    const response = await fetch('data.json');
    if (response.ok) {
      const externalData = await response.json();
      // Fusionar datos externos con los predeterminados
      Object.assign(mediaKitData, externalData);
    }
  } catch (error) {
    console.log('Usando datos predeterminados');
  }
}

// Cargar datos cuando se abra la página
loadDataFromJSON();

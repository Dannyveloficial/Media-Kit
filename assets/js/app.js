// Aplicación principal - renderiza todo dinámicamente

document.addEventListener('DOMContentLoaded', function() {
  const app = document.getElementById('app');

  if (!app) {
    console.error('No se encontró el elemento #app');
    return;
  }

  // Renderizar componentes en orden
  app.innerHTML = `
    ${Components.hero(mediaKitData.creator)}
    ${Components.statsBar(mediaKitData.stats)}
    ${Components.contentSection(mediaKitData.contentTypes)}
    ${Components.audienceSection(mediaKitData.audience)}
    ${Components.viewsSection(mediaKitData.topVideos)}
    ${Components.collaborationSection(mediaKitData.collaboration)}
    ${Components.contactSection(mediaKitData.contact)}
    ${Components.footer(mediaKitData.creator.name)}
  `;

  console.log('✨ Media Kit cargado dinámicamente');
});

// Función para actualizar datos dinámicamente (opcional)
function updateMediaKit(newData) {
  Object.assign(mediaKitData, newData);
  const app = document.getElementById('app');
  app.innerHTML = `
    ${Components.hero(mediaKitData.creator)}
    ${Components.statsBar(mediaKitData.stats)}
    ${Components.contentSection(mediaKitData.contentTypes)}
    ${Components.audienceSection(mediaKitData.audience)}
    ${Components.viewsSection(mediaKitData.topVideos)}
    ${Components.collaborationSection(mediaKitData.collaboration)}
    ${Components.contactSection(mediaKitData.contact)}
    ${Components.footer(mediaKitData.creator.name)}
  `;
}

// Ejemplo de cómo usar updateMediaKit:
// updateMediaKit({ stats: [{ number: '+500K', label: 'Nuevo stat' }] });

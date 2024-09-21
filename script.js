// script.js
document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById("flowers-container");
    let page = 1;

    // Función para cargar flores
    const loadFlowers = async () => {
        const response = await fetch(`https://api.unsplash.com/search/photos?page=${page}&query=yellow+flowers&client_id=zl3I6x_Ogk822ioeSPGWqF0YN8o3jAAoIJbom_dqMJo`);
        const data = await response.json();

        data.results.forEach(flower => {
            const img = document.createElement('img');
            img.src = flower.urls.small;
            img.alt = flower.alt_description;
            img.loading = 'lazy';  // Activar carga perezosa
            container.appendChild(img);
        });
        page++;
    };

    // Detectar cuando el usuario está cerca del final de la página
    window.addEventListener('scroll', () => {
        if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 500) {
            loadFlowers();
        }
    });

    // Cargar las primeras flores
    loadFlowers();
});

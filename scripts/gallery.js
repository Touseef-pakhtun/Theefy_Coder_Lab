// Gallery functionality - works as both regular script and ES module

(function() {
    let container;
    
    function initGallery() {
        container = document.querySelector('.imagesGallery');
        if (!container) return false;
        
        container.innerHTML = `<section class="content">
                    <h2>Photo Gallery</h2>
                    <p>View our photo gallery.</p>
                </section>`;
        return true;
    }

    async function fetchGalleryInternal() {
        if (!initGallery()) {
            console.log('Gallery container not found on this page');
            return;
        }
        
        let fetchData = await fetch('./backend/gallery.json');
        
        let data = await fetchData.json();

        Object.keys(data).forEach(key => {
            GalleryHtmlGenerator(data[key],key);
        });
    }

    let x = 1;

    function GalleryHtmlGenerator(data,key){
        x++;
        container.innerHTML += `<section class="gallery-section gallery-section${key}"><h3>${key} Gallery</h3><div class="gallery-grid gallery-grid${key}"></div></section>`;
        let gridImages = document.querySelector(`.gallery-grid${key}`);

        data.forEach(Element => {
            gridImages.innerHTML += `<img src="${Element.img}" alt="${Element.alt || key}"></img>`;
        });
    }

    // Export for ES modules
    if (typeof window !== 'undefined') {
        window.fetchGallery = fetchGalleryInternal;
    }
    
    // Auto-initialize when loaded as regular script (for gallery.html)
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', fetchGalleryInternal);
    } else {
        fetchGalleryInternal();
    }
})();

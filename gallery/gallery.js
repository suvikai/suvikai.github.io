if (window.location.protocol !== 'file:') {
    document.body.classList.add('loading');
}

fetch('gallery.json')
    .then(response => response.json())
    .then(data => {
        document.title = data.title;
        document.getElementById('header').textContent = data.header;
        document.getElementById('intro').textContent = data.intro;
        const grid = document.getElementById('gallery-grid');
        data.images.forEach(img => {
            const figure = document.createElement('figure');
            const image = document.createElement('img');
            image.src = img.src;
            image.alt = img.alt || '';
            const caption = document.createElement('figcaption');
            caption.textContent = img.caption || '';
            figure.appendChild(image);
            figure.appendChild(caption);
            grid.appendChild(figure);
        });
        document.body.classList.add('loaded');
    })
    .catch(error => {
        console.error('Error loading content:', error);
    });

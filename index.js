if (window.location.protocol !== 'file:') {
    document.body.classList.add('loading');
}

fetch('index.json')
  .then(response => response.json())
  .then(data => {
    document.title = data.title;
    document.getElementById('header').textContent = data.header;
    document.getElementById('intro').textContent = data.intro;
    document.getElementById('text').textContent = data.text;
    document.body.classList.add('loaded');
  })
  .catch(error => {
    console.error('Error loading content:', error);
  });

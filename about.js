fetch('about.json')
  .then(response => response.json())
  .then(data => {
    document.title = data.title;
    document.getElementById('header').textContent = data.header;
    document.getElementById('intro').textContent = data.intro;
    document.getElementById('text').textContent = data.text;
  })
  .catch(error => {
    console.error('Error loading content:', error);
  });

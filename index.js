fetch('index.json')
  .then(response => response.json())
  .then(data => {
    document.title = data.title;
    document.getElementById('header').textContent = data.header;
    document.getElementById('intro').textContent = data.intro;
    document.getElementById('text').textContent = data.text;
    document.getElementById('oboy1').textContent = data.imageCaptions.oboy1;
    document.getElementById('oboy2').textContent = data.imageCaptions.oboy2;
    document.getElementById('oboy3').textContent = data.imageCaptions.oboy3;
  })
  .catch(error => {
    console.error('Error loading content:', error);
  });

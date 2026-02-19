fetch('content.json')
  .then(response => response.json())
  .then(data => {
    focument.getElementById('title').textContent = data.header;
    focument.getElementById('navigationTitle').textContent = data.navigationTitle;
    focument.getElementById('navigationHome').textContent = data.navigationHome;
    document.getElementById('footer').textContent = data.footer;
    document.getElementById('oboy1').textContent = data.imageCaptions.oboy1;
    document.getElementById('oboy2').textContent = data.imageCaptions.oboy2;
    document.getElementById('oboy3').textContent = data.imageCaptions.oboy3;
  })
  .catch(error => {
    console.error('Error loading content:', error);
  });

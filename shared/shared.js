fetch('../shared/shared.json')
  .then(response => response.json())
  .then(data => {
    document.getElementById('navigationTitle').textContent = data.navigationTitle;
    document.getElementById('navigationHome').textContent = data.navigationHome;
    document.getElementById('navigationGallery').textContent = data.navigationGallery;
    document.getElementById('navigationAbout').textContent = data.navigationAbout;
    document.getElementById('footer').textContent = data.footer;
  })
  .catch(error => {
    console.error('Error loading content:', error);
  });

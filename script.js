fetch('content.json')
  .then(response => response.json())
  .then(data => {
    document.title = data.title;
    document.getElementById('navigationTitle').textContent = data.navigationTitle;
    document.getElementById('navigationHome').textContent = data.navigationHome;
    document.getElementById('hometitle').textContent = data.homeTitle;
    document.getElementById('homeIntro').textContent = data.homeIntro;
    document.getElementById('homeText').textContent = data.homeText;
    document.getElementById('footer').textContent = data.footer;
    document.getElementById('oboy1').textContent = data.imageCaptions.oboy1;
    document.getElementById('oboy2').textContent = data.imageCaptions.oboy2;
    document.getElementById('oboy3').textContent = data.imageCaptions.oboy3;
  })
  .catch(error => {
    console.error('Error loading content:', error);
  });

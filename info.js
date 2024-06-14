document.querySelectorAll('.tab-button').forEach(button => {
  button.addEventListener('click', () => {
    document.querySelector('.tab-button.active').classList.remove('active');
    button.classList.add('active');

    document.querySelectorAll('.content-tab').forEach(tab => {
      tab.style.display = 'none';
    });

    const contentId = button.id.replace('-tab', '');
    document.getElementById(contentId).style.display = 'block';
  });
});

// Initial display setting
document.getElementById('therapy').style.display = 'block';
document.getElementById('therapy-tab').classList.add('active');

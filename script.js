document.getElementById('nombreBtn').onclick = () => {
    document.getElementById('menu').classList.remove('hidden');
  };
  
  document.querySelectorAll('.menu-btn').forEach(btn => {
    btn.onclick = () => {
      const section = btn.dataset.section;
      document.getElementById(section).classList.remove('hidden');
    };
  });
  
  document.querySelectorAll('.close').forEach(btn => {
    btn.onclick = () => {
      btn.closest('.modal, .scroll-section').classList.add('hidden');
    };
  });
  
  document.querySelectorAll('.slide').forEach(slide => {
    slide.onclick = () => {
      const modalId = slide.dataset.modal;
      document.getElementById(modalId).classList.remove('hidden');
    };
  });
  
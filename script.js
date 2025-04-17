window.onload = function () {

    let tentativas = 0; 
    let mensagemExibida = false; 
  

    document.addEventListener('click', function(e) {
      const heart = document.createElement('div');
      heart.className = 'heart';
      heart.style.left = `${e.clientX - 10}px`;
      heart.style.top = `${e.clientY - 10}px`;
      document.body.appendChild(heart);
      setTimeout(() => heart.remove(), 1000);
    });
  

    function responderSim() {
      const popup = document.getElementById('popup');
      popup.innerHTML = "<h1>Ja pode beijar o namorado! 💘😍</h1>";
    }
    window.responderSim = responderSim;
  
    const noBtn = document.querySelector('.no-btn');
    const wrapper = document.querySelector('.button-wrapper');
  
    
    function moveNoButton() {
      const maxX = wrapper.offsetWidth - noBtn.offsetWidth;
      const maxY = wrapper.offsetHeight - noBtn.offsetHeight;
  
      const randomX = Math.floor(Math.random() * maxX);
      const randomY = Math.floor(Math.random() * maxY);
  
      noBtn.style.left = `${randomX}px`;
      noBtn.style.top = `${randomY}px`;
    }
  
    
    noBtn.addEventListener('mouseenter', moveNoButton);
    noBtn.addEventListener('mousemove', moveNoButton);
    noBtn.addEventListener('touchstart', moveNoButton);
  

    noBtn.addEventListener('click', function() {
      tentativas++; 
  

      if (tentativas >= 3 && !mensagemExibida) {
        const popup = document.getElementById('popup');
        const mensagem = document.createElement('p');
        mensagem.innerText = "Acho que não vai conseguir!";
        mensagem.style.color = 'yellow';
        popup.appendChild(mensagem);
  
        mensagemExibida = true;
      }
  
      setTimeout(() => {
        moveNoButton();
      }, 100);
    });
  };
  
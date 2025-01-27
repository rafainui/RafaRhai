// assets/js/script.js
function entrar() {
    window.location.href = "pagina-principal.html"; // Redireciona para a página principal
}

// Evento para inicializar após o carregamento da página
document.addEventListener('DOMContentLoaded', () => {
    const startDate = new Date('2024-07-20T22:50:00');
    const dateSection = document.getElementById('time-date');
    const timeSection = document.getElementById('time-time');
  
    function updateCounter() {
        const now = new Date();
        let totalMonths = (now.getFullYear() - startDate.getFullYear()) * 12 + (now.getMonth() - startDate.getMonth());
  
        if (now.getDate() < 20 || (now.getDate() === 20 && now.getHours() < 22) || 
            (now.getDate() === 20 && now.getHours() === 22 && now.getMinutes() < 50)) {
            totalMonths -= 1; // Ajuste para meses completos
        }
  
        const years = Math.floor(totalMonths / 12);
        const months = totalMonths % 12;
  
        let last20th = new Date(now.getFullYear(), now.getMonth(), 20, 22, 50);
        if (now < last20th) {
            last20th.setMonth(last20th.getMonth() - 1);
        }
  
        const timeDifference = now - last20th;
        const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);
  
        // Atualiza a parte de data (ano, mês, dia)
        dateSection.textContent = `${years} anos, ${months} meses, ${days} dias`;
        
        // Atualiza a parte de hora (hora, minuto, segundo)
        timeSection.textContent = `${hours} horas, ${minutes} minutos e ${seconds} segundos`;
    }
  
    setInterval(updateCounter, 1000);
  
    // Carrossel de fotos
    const carouselImages = document.querySelector('.carousel-images');
    let index = 0;
  
    function moveCarousel() {
        index++;
        if (index >= 5) index = 0; // Recomeça o carrossel após a última imagemm
        carouselImages.style.transform = `translateX(-${index * 100}%)`;
    }
  
    setInterval(moveCarousel, 3000); // Passa as imagens a cada 3 segundos
  
    // Função para criar corações
    function createHeart() {
        const heart = document.createElement('div');
        heart.classList.add('heart');
        
        // Posição aleatória do coração
        const leftPosition = Math.random() * 100; // Valor entre 0 e 100%
        heart.style.left = `${leftPosition}vw`;
        
        // Adiciona o coração à tela
        document.querySelector('.hearts').appendChild(heart);
        
        // Remove o coração após ele desaparecer da tela
        setTimeout(() => {
            heart.remove();
        }, 5000); // O tempo que o coração leva para cair
    }
  
    // Gera corações a cada 1 segundo
    setInterval(createHeart, 500); // Intervalo entre cada coração
});

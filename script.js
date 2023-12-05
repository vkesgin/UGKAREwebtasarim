// script.js
const duyarliGorsel = document.getElementById('duyarliGorsel');

duyarliGorsel.addEventListener('mousemove', (e) => {
    const { offsetX, offsetY } = e;
    const { clientWidth, clientHeight } = duyarliGorsel;

    const xPercent = (offsetX / clientWidth - 0.7) * 35; // Görseli döndürmek için x ekseni
    const yPercent = (offsetY / clientHeight - 0.7) * 35; // Görseli döndürmek için y ekseni

    duyarliGorsel.querySelector('img').style.transform = `rotateX(${yPercent}deg) rotateY(${xPercent}deg)`;
});

duyarliGorsel.addEventListener('mouseleave', () => {
    // Mouse ayrıldığında görseli sıfırla
    duyarliGorsel.querySelector('img').style.transform = 'rotateX(0) rotateY(0)';
});

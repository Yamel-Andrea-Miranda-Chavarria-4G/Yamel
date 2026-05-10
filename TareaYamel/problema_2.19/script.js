function calcular() {
    const minutos = parseFloat(document.getElementById('minutos').value);
    const costoMinuto = parseFloat(document.getElementById('costoMinuto').value);
    const resultado = document.getElementById('resultado');
    
    if (isNaN(minutos) || isNaN(costoMinuto) || minutos <= 0 || costoMinuto <= 0) {
        resultado.innerHTML = '⚠️ Por favor ingresa valores válidos mayores a 0';
        resultado.classList.add('show');
        return;
    }
    
    const costoTotal = minutos * costoMinuto;
    
    resultado.innerHTML = `
        <strong>Resultado:</strong><br>
        Duración: ${minutos} minutos<br>
        Tarifa: $${costoMinuto.toFixed(2)} por minuto<br>
        <span style="font-size: 1.5rem; color: #8e2de2;">Costo Total: $${costoTotal.toFixed(2)}</span>
    `;
    resultado.classList.add('show');
}
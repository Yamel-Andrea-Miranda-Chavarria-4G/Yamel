function calcular() {
    const dias = parseInt(document.getElementById('dias').value);
    const costoHotel = parseFloat(document.getElementById('costoHotel').value);
    const costoComida = parseFloat(document.getElementById('costoComida').value);
    const resultado = document.getElementById('resultado');
    
    if (isNaN(dias) || isNaN(costoHotel) || isNaN(costoComida) || 
        dias <= 0 || costoHotel < 0 || costoComida < 0) {
        resultado.innerHTML = '⚠️ Por favor ingresa valores válidos';
        resultado.classList.add('show');
        return;
    }
    
    const gastosOtros = 100; // $100 diarios para otros gastos
    
    const totalHotel = costoHotel * dias;
    const totalComida = costoComida * dias;
    const totalOtros = gastosOtros * dias;
    const montoCheque = totalHotel + totalComida + totalOtros;
    
    resultado.innerHTML = `
        <strong>🧾 DESGLOSE DEL CHEQUE</strong><br><br>
        <div style="text-align: left; display: inline-block;">
            <strong>Días de viaje:</strong> ${dias}<br><br>
            Hotel ($${costoHotel.toFixed(2)} x ${dias}): <strong>$${totalHotel.toFixed(2)}</strong><br>
            Comida ($${costoComida.toFixed(2)} x ${dias}): <strong>$${totalComida.toFixed(2)}</strong><br>
            Otros gastos ($${gastosOtros.toFixed(2)} x ${dias}): <strong>$${totalOtros.toFixed(2)}</strong><br>
        </div>
        <hr style="margin: 15px 0; border: 1px solid #ddd;">
        <span style="font-size: 1.5rem; color: #6d21b0;">Monto del Cheque: $${montoCheque.toFixed(2)}</span>
    `;
    resultado.classList.add('show');
}
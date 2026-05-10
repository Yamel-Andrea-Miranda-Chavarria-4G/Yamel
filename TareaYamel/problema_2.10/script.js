function calcular() {
    const metrosCubicos = parseFloat(document.getElementById('metrosCubicos').value);
    const resultado = document.getElementById('resultado');
    
    if (isNaN(metrosCubicos) || metrosCubicos < 0) {
        resultado.innerHTML = '⚠️ Por favor ingresa un valor válido';
        resultado.classList.add('show');
        return;
    }
    
    let pago = 0;
    let tarifa = '';
    
    // Tarifas escalonadas de CONAGUA
    if (metrosCubicos <= 10) {
        pago = metrosCubicos * 10;
        tarifa = '$10.00/m³';
    } else if (metrosCubicos <= 20) {
        pago = (10 * 10) + ((metrosCubicos - 10) * 15);
        tarifa = '$15.00/m³ (excedente de 10)';
    } else if (metrosCubicos <= 40) {
        pago = (10 * 10) + (10 * 15) + ((metrosCubicos - 20) * 20);
        tarifa = '$20.00/m³ (excedente de 20)';
    } else {
        pago = (10 * 10) + (10 * 15) + (20 * 20) + ((metrosCubicos - 40) * 30);
        tarifa = '$30.00/m³ (excedente de 40)';
    }
    
    resultado.innerHTML = `
        <strong>💧 RECIBO DE AGUA</strong><br><br>
        Consumo: ${metrosCubicos.toFixed(2)} m³<br>
        Tarifa aplicada: ${tarifa}<br>
        <hr style="margin: 15px 0; border: 1px solid #ddd;">
        <span style="font-size: 1.5rem; color: #2c144f;">Total a pagar: $${pago.toFixed(2)}</span>
    `;
    resultado.classList.add('show');
}
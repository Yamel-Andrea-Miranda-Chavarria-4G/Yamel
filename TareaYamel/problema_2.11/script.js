function calcular() {
    const kilowatts = parseFloat(document.getElementById('kilowatts').value);
    const resultado = document.getElementById('resultado');
    
    if (isNaN(kilowatts) || kilowatts < 0) {
        resultado.innerHTML = '⚠️ Por favor ingresa un valor válido';
        resultado.classList.add('show');
        return;
    }
    
    let pago = 0;
    let tarifa = '';
    
    // Tarifas escalonadas
    if (kilowatts <= 100) {
        pago = kilowatts * 0.80;
        tarifa = '$0.80/KW';
    } else if (kilowatts <= 200) {
        pago = (100 * 0.80) + ((kilowatts - 100) * 1.20);
        tarifa = '$1.20/KW (excedente de 100)';
    } else if (kilowatts <= 500) {
        pago = (100 * 0.80) + (100 * 1.20) + ((kilowatts - 200) * 1.80);
        tarifa = '$1.80/KW (excedente de 200)';
    } else {
        pago = (100 * 0.80) + (100 * 1.20) + (300 * 1.80) + ((kilowatts - 500) * 2.50);
        tarifa = '$2.50/KW (excedente de 500)';
    }
    
    resultado.innerHTML = `
        <strong>💡 RECIBO DE LUZ</strong><br><br>
        Consumo: ${kilowatts.toFixed(2)} KW<br>
        Tarifa aplicada: ${tarifa}<br>
        <hr style="margin: 15px 0; border: 1px solid #ddd;">
        <span style="font-size: 1.5rem; color: #a41ef7;">Total a pagar: $${pago.toFixed(2)}</span>
    `;
    resultado.classList.add('show');
}
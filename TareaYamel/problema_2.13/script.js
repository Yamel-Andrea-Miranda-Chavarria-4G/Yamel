function calcular() {
    const sueldoSemanal = parseFloat(document.getElementById('sueldoSemanal').value);
    const resultado = document.getElementById('resultado');
    
    if (isNaN(sueldoSemanal) || sueldoSemanal <= 0) {
        resultado.innerHTML = '⚠️ Por favor ingresa un sueldo válido mayor a 0';
        resultado.classList.add('show');
        return;
    }
    
    // 15% de ahorro semanal
    const ahorroSemanal = sueldoSemanal * 0.15;
    
    // 4 semanas por mes
    const ahorroMensual = ahorroSemanal * 4;
    
    // 12 meses por año (48 semanas)
    const ahorroAnual = ahorroMensual * 12;
    
    resultado.innerHTML = `
        <strong>💰 PLAN DE AHORRO</strong><br><br>
        Sueldo semanal: $${sueldoSemanal.toFixed(2)}<br>
        Ahorro semanal (15%): $${ahorroSemanal.toFixed(2)}<br>
        Ahorro mensual (4 sem): $${ahorroMensual.toFixed(2)}<br>
        <hr style="margin: 15px 0; border: 1px solid #ddd;">
        <span style="font-size: 1.5rem; color: #6611a7;">Ahorro Anual: $${ahorroAnual.toFixed(2)}</span>
    `;
    resultado.classList.add('show');
}
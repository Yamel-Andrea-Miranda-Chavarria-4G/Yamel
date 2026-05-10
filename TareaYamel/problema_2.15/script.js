function calcular() {
    const resistencia = parseFloat(document.getElementById('resistencia').value);
    const corriente = parseFloat(document.getElementById('corriente').value);
    const resultado = document.getElementById('resultado');
    
    if (isNaN(resistencia) || isNaN(corriente) || resistencia <= 0 || corriente <= 0) {
        resultado.innerHTML = '⚠️ Por favor ingresa valores válidos mayores a 0';
        resultado.classList.add('show');
        return;
    }
    
    // V = R × I (Ley de Ohm)
    const voltaje = resistencia * corriente;
    
    // P = V × I
    const potencia = voltaje * corriente;
    
    resultado.innerHTML = `
        <strong>⚡ CÁLCULO DE POTENCIA</strong><br><br>
        <strong>Paso 1:</strong> Calcular Voltaje<br>
        V = R × I = ${resistencia} × ${corriente} = <strong>${voltaje.toFixed(2)} V</strong><br><br>
        <strong>Paso 2:</strong> Calcular Potencia<br>
        P = V × I = ${voltaje.toFixed(2)} × ${corriente} = <strong>${potencia.toFixed(2)} W</strong><br>
        <hr style="margin: 15px 0; border: 1px solid #ddd;">
        <span style="font-size: 1.5rem; color: #9711f1;">Potencia = ${potencia.toFixed(2)} Watts</span>
    `;
    resultado.classList.add('show');
}
function calcular() {
    const lado = parseFloat(document.getElementById('lado').value);
    const resultado = document.getElementById('resultado');
    
    if (isNaN(lado) || lado <= 0) {
        resultado.innerHTML = '⚠️ Por favor ingresa un valor válido mayor a 0';
        resultado.classList.add('show');
        return;
    }
    
    const area = lado * lado;
    
    resultado.innerHTML = `
        <strong>Resultado:</strong><br>
        Área = ${lado} × ${lado}<br>
        Área = ${lado}²<br>
        <span style="font-size: 1.5rem; color: #3a1c71;">Área = ${area.toFixed(2)} unidades²</span>
    `;
    resultado.classList.add('show');
}
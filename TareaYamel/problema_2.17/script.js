function calcular() {
    const examen1 = parseFloat(document.getElementById('examen1').value);
    const examen2 = parseFloat(document.getElementById('examen2').value);
    const examen3 = parseFloat(document.getElementById('examen3').value);
    const resultado = document.getElementById('resultado');
    
    if (isNaN(examen1) || isNaN(examen2) || isNaN(examen3) ||
        examen1 < 0 || examen1 > 100 ||
        examen2 < 0 || examen2 > 100 ||
        examen3 < 0 || examen3 > 100) {
        resultado.innerHTML = '⚠️ Por favor ingresa calificaciones válidas (0-100)';
        resultado.classList.add('show');
        return;
    }
    
    // Promedio ponderado
    const promedio = (examen1 * 0.25) + (examen2 * 0.25) + (examen3 * 0.50);
    const estado = promedio >= 60 ? 'APROBADO ✅' : 'REPROBADO ❌';
    const claseEstado = promedio >= 60 ? 'aprobado' : 'reprobado';
    
    resultado.innerHTML = `
        <strong>📋 BOLETA DE CALIFICACIONES</strong><br><br>
        Examen 1: ${examen1} × 0.25 = ${(examen1 * 0.25).toFixed(2)}<br>
        Examen 2: ${examen2} × 0.25 = ${(examen2 * 0.25).toFixed(2)}<br>
        Examen 3: ${examen3} × 0.50 = ${(examen3 * 0.50).toFixed(2)}<br>
        <hr style="margin: 15px 0; border: 1px solid #ddd;">
        <span style="font-size: 1.5rem; color: #1e3c72;">Promedio: ${promedio.toFixed(2)}</span><br>
        <span class="${claseEstado}" style="font-size: 1.2rem;">${estado}</span>
    `;
    resultado.classList.add('show');
}
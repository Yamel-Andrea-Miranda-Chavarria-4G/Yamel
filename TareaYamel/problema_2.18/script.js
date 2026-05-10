function calcular() {
    const edad = parseInt(document.getElementById('edad').value);
    const resultado = document.getElementById('resultado');
    
    if (isNaN(edad) || edad < 0 || edad > 150) {
        resultado.innerHTML = '⚠️ Por favor ingresa una edad válida (0-150)';
        resultado.classList.add('show');
        return;
    }
    
    // Cálculos aproximados
    const meses = edad * 12;
    const semanas = edad * 52;
    const dias = edad * 365;
    const horas = dias * 24;
    
    resultado.innerHTML = `
        <strong>⏰ HAS VIVIDO APROXIMADAMENTE</strong><br><br>
        <div class="tiempo-item">
            📅 <strong>${meses.toLocaleString()}</strong> meses
        </div>
        <div class="tiempo-item">
            📆 <strong>${semanas.toLocaleString()}</strong> semanas
        </div>
        <div class="tiempo-item">
            🌅 <strong>${dias.toLocaleString()}</strong> días
        </div>
        <div class="tiempo-item">
            ⏱️ <strong>${horas.toLocaleString()}</strong> horas
        </div>
    `;
    resultado.classList.add('show');
}
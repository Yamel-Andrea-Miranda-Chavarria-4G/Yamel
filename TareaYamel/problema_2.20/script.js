function calcular() {
    const noches = parseInt(document.getElementById('noches').value);
    const tipoHabitacion = document.getElementById('tipoHabitacion').value;
    const serviciosAdicionales = parseFloat(document.getElementById('serviciosAdicionales').value) || 0;
    const resultado = document.getElementById('resultado');
    
    if (isNaN(noches) || noches <= 0) {
        resultado.innerHTML = '⚠️ Por favor ingresa un número válido de noches';
        resultado.classList.add('show');
        return;
    }
    
    // Tarifas por tipo de habitación
    const tarifas = {
        sencilla: 500,
        doble: 800,
        suite: 1500
    };
    
    const nombreHabitacion = {
        sencilla: 'Sencilla',
        doble: 'Doble',
        suite: 'Suite'
    };
    
    const tarifaNoche = tarifas[tipoHabitacion];
    const totalHabitacion = tarifaNoche * noches;
    const totalServicios = serviciosAdicionales * noches;
    const totalCobro = totalHabitacion + totalServicios;
    
    resultado.innerHTML = `
        <strong>🏨 FACTURA - Hotel Cama Arena</strong><br><br>
        <div style="text-align: left; display: inline-block;">
            Habitación: ${nombreHabitacion[tipoHabitacion]}<br>
            Noches: ${noches}<br>
            Tarifa/noche: $${tarifaNoche.toFixed(2)}<br>
            <strong>Subtotal habitación: $${totalHabitacion.toFixed(2)}</strong><br><br>
            Servicios adicionales/noche: $${serviciosAdicionales.toFixed(2)}<br>
            <strong>Subtotal servicios: $${totalServicios.toFixed(2)}</strong><br>
        </div>
        <hr style="margin: 15px 0; border: 1px solid #ddd;">
        <span style="font-size: 1.5rem; color: #6c5ce7;">Total a Pagar: $${totalCobro.toFixed(2)}</span>
    `;
    resultado.classList.add('show');
}
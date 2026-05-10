function calcular() {
    const precioOriginal = parseFloat(document.getElementById('precioOriginal').value);
    const resultado = document.getElementById('resultado');
    
    if (isNaN(precioOriginal) || precioOriginal <= 0) {
        resultado.innerHTML = '⚠️ Por favor ingresa un precio válido mayor a 0';
        resultado.classList.add('show');
        return;
    }
    
    // Calcular descuento del 20%
    const descuento = precioOriginal * 0.20;
    const precioConDescuento = precioOriginal - descuento;
    
    // Calcular IVA del 15% sobre el precio con descuento
    const iva = precioConDescuento * 0.15;
    const precioFinal = precioConDescuento + iva;
    
    resultado.innerHTML = `
        <strong>🧾 DESGLOSE</strong><br><br>
        <div style="text-align: left; display: inline-block;">
            Precio original: <span style="float: right; margin-left: 20px;">$${precioOriginal.toFixed(2)}</span><br>
            Descuento (20%): <span style="float: right; margin-left: 20px; color: green;">-$${descuento.toFixed(2)}</span><br>
            <strong>Precio con descuento: <span style="float: right; margin-left: 20px;">$${precioConDescuento.toFixed(2)}</span></strong><br>
            IVA (15%): <span style="float: right; margin-left: 20px;">+$${iva.toFixed(2)}</span><br>
        </div>
        <hr style="margin: 15px 0; border: 1px solid #ddd;">
        <span style="font-size: 1.5rem; color: #9239e6;">Precio Final: $${precioFinal.toFixed(2)}</span>
    `;
    resultado.classList.add('show');
}
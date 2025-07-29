document.addEventListener('DOMContentLoaded', () => {
    drawProblema5();
    drawProblema6(); // <-- NUEVA LLAMADA
    drawProblema7();
});

function drawArrow(ctx, fromx, fromy, tox, toy, color, text = '') {
    const headlen = 10;
    const dx = tox - fromx;
    const dy = toy - fromy;
    const angle = Math.atan2(dy, dx);
    
    ctx.save();
    ctx.strokeStyle = color;
    ctx.fillStyle = color;
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(fromx, fromy);
    ctx.lineTo(tox, toy);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(tox, toy);
    ctx.lineTo(tox - headlen * Math.cos(angle - Math.PI / 6), toy - headlen * Math.sin(angle - Math.PI / 6));
    ctx.lineTo(tox - headlen * Math.cos(angle + Math.PI / 6), toy - headlen * Math.sin(angle + Math.PI / 6));
    ctx.closePath();
    ctx.fill();
    if (text) {
        ctx.font = 'bold 16px Oswald';
        ctx.fillStyle = '#000';
        ctx.fillText(text, tox + 10, toy);
    }
    ctx.restore();
}

function drawProblema5() {
    const canvas = document.getElementById('canvas-problema5');
    if (!canvas || !canvas.getContext) return;
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    const p1 = { x: 50, y: 300 }, p2 = { x: 450, y: 300 }, p3 = { x: 450, y: 100 };
    const angle = Math.atan2(p1.y - p3.y, p2.x - p3.x);
    const blockPos = { x: 250, y: 200 };
    ctx.beginPath();
    ctx.moveTo(p1.x, p1.y);
    ctx.lineTo(p2.x, p2.y);
    ctx.lineTo(p3.x, p3.y);
    ctx.closePath();
    ctx.fillStyle = '#bdc3c7';
    ctx.fill();
    ctx.save();
    ctx.translate(blockPos.x, blockPos.y);
    ctx.rotate(-angle);
    ctx.fillStyle = '#3498db';
    ctx.fillRect(-30, -20, 60, 40);
    drawArrow(ctx, 30, 0, 100, 0, '#e74c3c', 'F');
    drawArrow(ctx, -30, 0, -80, 0, '#e67e22', 'fₖ');
    drawArrow(ctx, 0, -20, 0, -70, '#f1c40f', 'N');
    ctx.restore();
    drawArrow(ctx, blockPos.x, blockPos.y, blockPos.x, blockPos.y + 80, '#2ecc71', 'mg');
    ctx.beginPath();
    ctx.arc(p1.x, p1.y, 50, 0, -angle, true);
    ctx.stroke();
    ctx.fillStyle = '#000';
    ctx.font = 'bold 16px Oswald';
    ctx.fillText('37°', p1.x + 60, p1.y - 20);
}

/**
 * NUEVA FUNCIÓN: Dibuja el diagrama para el Problema 6: Resorte y Rizo.
 */
function drawProblema6() {
    const canvas = document.getElementById('canvas-problema6');
    if (!canvas || !canvas.getContext) return;
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Configuración
    const R = 80; // Radio del rizo en píxeles
    const startY = 300;
    const centerX = 250;
    
    // Dibujar el camino
    ctx.strokeStyle = '#34495e';
    ctx.lineWidth = 4;
    ctx.beginPath();
    // Plano inicial
    ctx.moveTo(0, startY);
    ctx.lineTo(centerX - R, startY);
    // Rizo
    ctx.arc(centerX, startY - R, R, Math.PI / 2, (5 * Math.PI) / 2, false);
    // Plano inclinado final
    ctx.lineTo(canvas.width, startY - R * 2 - 50);
    ctx.stroke();

    // Dibujar el resorte
    ctx.strokeStyle = '#e74c3c';
    ctx.lineWidth = 3;
    ctx.beginPath();
    let springX = 50, springY = startY;
    ctx.moveTo(springX, springY);
    for(let i=0; i<6; i++) {
        ctx.lineTo(springX + 10, springY - 10);
        ctx.lineTo(springX + 20, springY + 10);
        springX += 20;
    }
    ctx.lineTo(springX + 10, springY);
    ctx.stroke();

    // Etiquetar puntos clave
    ctx.font = 'bold 20px Anton';
    ctx.fillStyle = '#2c3e50';
    
    // Punto B (Cima)
    ctx.fillText('B', centerX - 10, startY - 2 * R - 10);
    ctx.beginPath();
    ctx.arc(centerX, startY - 2 * R, 5, 0, 2 * Math.PI);
    ctx.fill();

    // Punto C (Lateral)
    ctx.fillText('C', centerX + R + 10, startY - R);
    ctx.beginPath();
    ctx.arc(centerX + R, startY - R, 5, 0, 2 * Math.PI);
    ctx.fill();

    // Altura final h_f
    ctx.strokeStyle = '#2ecc71';
    ctx.setLineDash([5, 5]);
    ctx.beginPath();
    ctx.moveTo(canvas.width - 20, startY - R * 2 - 50);
    ctx.lineTo(canvas.width - 20, startY);
    ctx.stroke();
    drawArrow(ctx, canvas.width - 10, startY, canvas.width - 10, startY - R * 2 - 50, '#2ecc71', 'h_f');
    ctx.setLineDash([]);
}

function drawProblema7() {
    const canvas = document.getElementById('canvas-problema7');
    if (!canvas || !canvas.getContext) return;
    const ctx = canvas.getContext('2d');
    const origin = { x: 60, y: 260 };
    const scale = { x: 70, y: 20 };
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = 'rgba(52, 152, 219, 0.6)';
    ctx.fillRect(origin.x, origin.y - 10 * scale.y, 4 * scale.x, 10 * scale.y);
    ctx.beginPath();
    ctx.moveTo(origin.x + 4 * scale.x, origin.y);
    ctx.lineTo(origin.x + 4 * scale.x, origin.y - 10 * scale.y);
    ctx.lineTo(origin.x + 5 * scale.x, origin.y);
    ctx.closePath();
    ctx.fillStyle = 'rgba(231, 76, 60, 0.6)';
    ctx.fill();
    drawArrow(ctx, origin.x, origin.y, canvas.width - 20, origin.y, '#2c3e50');
    drawArrow(ctx, origin.x, origin.y, origin.x, 20, '#2c3e50');
    ctx.fillStyle = '#000';
    ctx.font = 'bold 16px Oswald';
    ctx.fillText('Posición x (m)', canvas.width / 2, origin.y + 30);
    ctx.save();
    ctx.translate(origin.x - 40, 150);
    ctx.rotate(-Math.PI / 2);
    ctx.fillText('Fuerza F (N)', 0, 0);
    ctx.restore();
    ctx.strokeStyle = '#2c3e50';
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(origin.x, origin.y - 10 * scale.y);
    ctx.lineTo(origin.x + 4 * scale.x, origin.y - 10 * scale.y);
    ctx.lineTo(origin.x + 5 * scale.x, origin.y);
    ctx.stroke();
    ctx.font = '14px Oswald';
    for (let i = 1; i <= 5; i++) {
        ctx.fillText(i, origin.x + i * scale.x - 5, origin.y + 20);
    }
    ctx.fillText('10', origin.x - 25, origin.y - 10 * scale.y + 5);
    ctx.fillText('0', origin.x - 15, origin.y + 20);
}

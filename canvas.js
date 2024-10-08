// Exemple de script pour dessiner sur le canvas
window.onload = function() {
    var canvas = document.getElementById('monCanvas');
    if (canvas.getContext) {
        var ctx = canvas.getContext('2d');

        // Dessiner un rectangle
        ctx.fillStyle = 'rgb(200, 0, 0)';
        ctx.fillRect(10, 10, 50, 50);

        // Dessiner un cercle
        ctx.fillStyle = 'rgba(0, 0, 200, 0.5)';
        ctx.beginPath();
        ctx.arc(75, 75, 50, 0, Math.PI * 2, true); // Cercle extérieur
        ctx.fill();
    }
};

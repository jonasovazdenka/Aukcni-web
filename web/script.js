// Omlouvám ale asi nedokážu nic v js napsat
var canvas = document.createElement('canvas');
canvas.width = 800;
canvas.height = 600;
document.body.appendChild(canvas);
var c = canvas.getContext('2d');
c.fillStyle = 'Wheat';
c.fillRect(0, 0, 400, 600);
document.body.appendChild(canvas);
// I did it
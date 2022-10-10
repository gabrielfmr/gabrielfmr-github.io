const canvas = document.getElementById('exemplo');      //referência canvas HTML
const ctx = canvas.getContext('2d');        //cria contexto 2D para acesso ao canva;

// const ctx = document.getElementById('exemplo').getContext('2d');         //pode ser feito dessa forma

ctx.fillStyle = 'rgb(200, 0, 0)';       //estilo da "caneta";
ctx.fillRect(10,10,90,50);              //cria retângulo preenchido: x, y, largura, altura;

ctx.fillStyle = 'rgba(0,0,200,0.5)';
ctx.fillRect(30,30,90,60);

ctx.fillStyle = 'rgba(0,200,0,1)';
ctx.strokeRect(50,50,40,70);

ctx.clearRect(40,40,20,30);

function drawTrng(){
    ctx.fillStyle = '#228';
    ctx.beginPath();        //inicia definição do trajeto
    ctx.moveTo(250,50);     //x, y, move cursor sem "riscar" canvas;
    ctx.lineTo(300,75);     //x, y, linha coordenada atual à indicada;
    ctx.lineTo(300,25);
    ctx.fill();             //fecha trajeto e preenche com fillStyle atual;
}
drawTrng();

function drawEmoji(){

    const emoji = new Path2D();

    ctx.beginPath();
    emoji.arc(75, 175, 50, 0, 2*Math.PI, true);              //centro x, central y, raio, startAngle, endAngle, ccw
    emoji.moveTo(110,175);
    emoji.arc(75,175,35,0,Math.PI,false);
    emoji.moveTo(65,165);
    emoji.arc(60,165,5,0,Math.PI*2,true);
    emoji.moveTo(95,165);
    emoji.arc(90,165,5,0,Math.PI*2,true);
    ctx.strokeStyle = 'darkOrange';

    ctx.stroke(emoji);

    ctx.translate(200,-20);
    ctx.strokeStyle = '#228';
    ctx.stroke(emoji);
}
drawEmoji();

function drawBalloon(){

    const balloon = new Path2D();

    ctx.beginPath();
    balloon.moveTo(75,25);
    balloon.quadraticCurveTo(25, 25, 25, 62.5);
    balloon.quadraticCurveTo(25, 100, 50, 100);
    balloon.quadraticCurveTo(50, 120, 30, 125);
    balloon.quadraticCurveTo(60, 120, 65, 100);
    balloon.quadraticCurveTo(125, 100, 125, 62.5);
    balloon.quadraticCurveTo(125, 25, 75, 25);

    ctx.translate(-100,60);         //x, y, relativo à posição atual
    ctx.strokeStyle = 'darkOrange';
    ctx.stroke(balloon);

    ctx.translate(200,-20);
    ctx.fill(balloon);
}
drawBalloon();

function drawArcs(){
    for(let i = 0; i < 4; i++){
    for(let j = 0; j < 3; j++){
    ctx.beginPath();
    const x = 400 + j*50;
    const y = 25 + i*50;
    const radius = 20;
    const startAngle = 0;
    const endAngle = Math.PI + (Math.PI * j) / 2;
    const ccw = i%2 !== 0;
    }
    }
}
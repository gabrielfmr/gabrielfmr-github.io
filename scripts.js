const ctx = document.getElementById('exemplo').getContext('2d');    //contexto, será acessado para manipular conteúdo do canvas;

/** ctx.save() salva e ctx.restore() restaura estado atual, a partir de numa pilha: 
 * São salvos:
 *      Transformações: translate, rotate and scale;
 *      Valores dos atributos: 
 *         strokeStyle, fillStyle, globalAlpha, 
 *         lineWidth, lineCap, lineJoin, miterLimit, 
 *         lineDashOffset, shadowOffsetX, shadowOffsetY, 
 *         shadowBlur, shadowColor, globalCompositeOperation, 
 *         font, textAlign, textBaseline, direction, 
 *         imageSmoothingEnabled.
 *      Clipping path;
 */

/** globalCompositeOperation = type define o tipo de composição entre objetos.
 * 
 */

const centroX = 600;
const centroY = 300;
const orbt_sz = 200;        //tamanho da órbita da Terra
const orbl_sz = 30;         //tamanho da órbita da lua
const sol_sz = 50;          //tamanho do sol
const lua_sz = 10;           //tamanho da lua
const terra_sz = 15;        //tamanho da Terra
const tau = 2 * Math.PI;    //útil para cálculos de circunferência
const t_terra = 30;         //segundos por volta da terra (máx 60!)
const t_lua = 1;            //segundos por volta da lua (máx 60!)

const orbt2_sz = 208;        //tamanho da órbita da Terra
const orbt3_sz = 233;        //tamanho da órbita da Terra
const orbt4_sz = 267;        //tamanho da órbita da Terra


const sol = new Path2D();
const lua = new Path2D();
const terra = new Path2D();
const terra2 = new Path2D();
const terra3 = new Path2D();
const terra4 = new Path2D();

function init() {
    sol.arc(0,0,sol_sz,0,6.29,false);
    lua.arc(0,1200,lua_sz,0,6.29,false);
    terra.arc(0,0,terra_sz,0,6.29,false);
    terra.arc(0,60,terra_sz,0,6.29,false);
    terra.arc(0,120,terra_sz,0,6.29,false);
    terra.arc(0,180,terra_sz,0,6.29,false);
    window.requestAnimationFrame(draw);
}

function draw() {
    //ctx.globalCompositeOperation = 'destination-over';
    ctx.fillRect(0, 0, 1200, 600); // clear canvas

    ctx.fillStyle = 'rgba(0, 0, 0, 0.4)';
    ctx.save();

        // terra
        ctx.translate(centroX, centroY);    //centro do sol
        
        const time = new Date();
        ctx.rotate((tau/t_terra) * time.getSeconds() + (tau/(t_terra*1000)) * time.getMilliseconds());
        ctx.translate(200, 0);      //distância da órbita ao sol

        ctx.fillStyle = '#7cf';
        ctx.fill(terra); 

        // terra 2
        ctx.translate(centroX, centroY);    //centro do sol
        
        const time2 = new Date();
        ctx.rotate((tau/t_terra) * time.getSeconds() + (tau/(t_terra*1000)) * time.getMilliseconds());
        ctx.translate(200, 0);      //distância da órbita ao sol

        ctx.fillStyle = '#7cf';
        ctx.fill(terra2); 

         // terra 3
         ctx.translate(centroX, centroY);    //centro do sol
        
         const time3 = new Date();
         ctx.rotate((tau/t_terra) * time.getSeconds() + (tau/(t_terra*1000)) * time.getMilliseconds());
         ctx.translate(200, 0);      //distância da órbita ao sol
 
         ctx.fillStyle = '#7cf';
         ctx.fill(terra3); 

        // terra 4
        ctx.translate(centroX, centroY);    //centro do sol
        
        const time4 = new Date();
        ctx.rotate((tau/t_terra) * time.getSeconds() + (tau/(t_terra*1000)) * time.getMilliseconds());
        ctx.translate(200, 0);      //distância da órbita ao sol

        ctx.fillStyle = '#7cf';
        ctx.fill(terra4); 

        // lua
        ctx.save();
            ctx.rotate((tau/t_lua) * time.getSeconds() + (tau/(t_lua*1000)) * time.getMilliseconds());
            ctx.translate(0, orbl_sz);
            ctx.fillStyle = 'white';
            ctx.fill(lua);
        ctx.restore();  //restaura pré-lua

        
        // Desenho da Órbita da lua - pedir para alunos
        ctx.beginPath();
        ctx.arc(0,0, orbl_sz, 0, tau, false);
        ctx.strokeStyle = '#fff4';
        ctx.stroke();

    ctx.restore();  //restaura pré-terra

    // Desenho da Órbita da terra
    ctx.beginPath();
    ctx.arc(centroX, centroY, orbt_sz, 0, tau, false);
    ctx.strokeStyle = '#7cf6';
    ctx.stroke();

    // Desenho da Órbita da terra 2
    ctx.beginPath();
    ctx.arc(centroX, centroY, orbt2_sz, 0, tau, false);
    ctx.strokeStyle = '#7cf6';
    ctx.stroke();

    // Desenho da Órbita da terra 3
    ctx.beginPath();
    ctx.arc(centroX, centroY, orbt3_sz, 0, tau, false);
    ctx.strokeStyle = '#7cf6';
    ctx.stroke();

    // Desenho da Órbita da terra 4
    ctx.beginPath();
    ctx.arc(centroX, centroY, orbt4_sz, 0, tau, false);
    ctx.strokeStyle = '#7cf6';
    ctx.stroke();

    // sol
    ctx.save();
        ctx.translate(centroX, centroY);
        ctx.fillStyle = 'yellow';
        ctx.fill(sol);
        ctx.lineWidth = 4;
        ctx.strokeStyle = '#fd2';
        ctx.stroke(sol);
    ctx.restore();

    window.requestAnimationFrame(draw);
}

init();

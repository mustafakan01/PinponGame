const cvs= document.getElementById('game')
const ctx= cvs.getContext('2d')

const drawRect=(x,y,w,h,color)=> {
ctx.fillStyle= color
ctx.fillRect(x,y,w,h)
}

const drawCircleF=(x,y,r,color)=>{
    
    ctx.fillStyle= color
    ctx.beginPath()
    ctx.arc(x,y,r,0,2*Math.PI,false)
    ctx.closePath()
    ctx.fill()
}


const drawCircleS=(x,y,r,w,color)=>{
    
    ctx.strokeStyle= color
    ctx.lineWidth=w
    ctx.beginPath()
    ctx.arc(x,y,r,0,2*Math.PI)
    ctx.closePath()
    ctx.stroke()
}

const drawText=(text,x,y,color)=>{
    ctx.fillStyle=color
    ctx.font='50px sans-serif'
    ctx.fillText(text,x,y)
}

drawRect(0,0,600,400,'#000')
drawCircleF(50,50,10,'#fff')
drawCircleS(250,250,50,10,'#fff')
drawText('Deneme',400,200,'#fff')
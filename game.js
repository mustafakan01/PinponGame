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

const render=()=>{
    drawRect(0,0,cvs.width,cvs.height,'#008374')
    drawRect(cvs.width/2-2,0,4,cvs.height,'#fff')
    drawCircleF(cvs.width/2,cvs.height/2,8,'#fff')
    drawCircleS(cvs.width/2,cvs.height/2,50,4,'#fff')
    
}

render()
import React, { useEffect, useRef } from 'react'


export default function Coloring() {
  const canvasRef = useRef()

  const updateCanvas = () => {
    const ctx = canvasRef.current.getContext('2d');
    ctx.fillRect(16,16, 100, 100);
}

  useEffect(() => {
    updateCanvas()
  }, [])

  return (
    <>
    <div>Тут будет выбор раскрасок или задания</div>
    <canvas ref={canvasRef} width={300} height={300}/>
    </>
  )
}

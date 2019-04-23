import React, {useEffect, useRef, useState} from 'react';
import anime from 'animejs';

const canvasWidth = 400;
const canvasHeight = 300;

const initCanvas = (canvas) => {
  const {devicePixelRatio} = window;
  const ctx = canvas.getContext('2d');

  canvas.width = canvasWidth * devicePixelRatio;
  canvas.height = canvasHeight * devicePixelRatio;
  canvas.style.width = canvasWidth + 'px';
  canvas.style.height = canvasHeight + 'px';
  ctx.scale(devicePixelRatio, devicePixelRatio);

  anime({
    duration: Infinity,
    update: () => ctx.clearRect(0, 0, canvasWidth, canvasHeight),
  });
};

const animate = ({animate}, props) => animate({...props});

export const Demo = ({animation, args}) => {
  const canvasRef = useRef(null);
  const [interval, updateInterval] = useState(null);
  useEffect(() => {
    initCanvas(canvasRef.current);
    clearInterval(interval);
  }, []);

  useEffect(() => {
    clearInterval(interval);
    const canvas = canvasRef.current;
    const a = new animation(canvas.getContext('2d'));
    updateInterval(setInterval(() => animate(a, args), args.duration || 1200));
  }, [args]);

  return (
    <canvas ref={canvasRef} style={{border: '1px dotted #ccc'}} />
  )
};

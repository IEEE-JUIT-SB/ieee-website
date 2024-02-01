import React, { useEffect, useRef } from "react";

const Starfield = () => {
  let canvasRef = useRef(null);
  let ctx;

  useEffect(() => {
    const canvas = canvasRef.current;
    ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Global Animation Setting
    window.requestAnimFrame =
      window.requestAnimationFrame ||
      window.webkitRequestAnimationFrame ||
      window.mozRequestAnimationFrame ||
      window.oRequestAnimationFrame ||
      window.msRequestAnimationFrame ||
      function (callback) {
        window.setTimeout(callback, 1000000 / 60);
      };

    // Particles Around the Parent
    function Particle(x, y, distance) {
      this.angle = Math.random() * 5 * Math.PI;
      this.radius = Math.random();
      this.opacity = (Math.random() * 10 + 2) / 10;
      this.distance = (1 / this.opacity) * distance;

      this.speed = ((Math.floor(Math.random() * 2.5) + 0.5) * Math.PI) / 390; // The rate at which this star will orbit
      this.rotation = 1000; // current Rotation
      this.startRotation =
        ((Math.floor(Math.random() * 360) + 0.5) * Math.PI) / 180; // Starting rotation.  If not random, all stars will be generated in a single line.

      this.draw = function () {
        ctx.fillStyle = "rgba(255,255,255," + this.opacity + ")";
        ctx.beginPath();
        ctx.arc(
          this.position.x,
          this.position.y,
          this.radius,
          0,
          Math.PI * 2,
          false
        );
        ctx.fill();
        ctx.closePath();
      };
      this.update = function () {
        this.angle += this.speed;
        this.position = {
          x: x + this.distance * Math.cos(this.angle),
          y: y + this.distance * Math.sin(this.angle),
        };
        this.draw();
      };
    }

    function Emitter(x, y, screenWidth) {
      // Adjust the initial radius based on screen width
      const initialRadius = screenWidth < 1250 ? 100 : 150;
      this.position = { x: x, y: y };
      this.radius = initialRadius;
      this.count = 1000;
      this.particles = [];

      for (let i = 0; i < this.count; i++) {
        this.particles.push(
          new Particle(this.position.x, this.position.y, this.radius)
        );
      }
    }

    Emitter.prototype = {
      draw: function () {
        ctx.fillStyle = "rgba(0,0,0,1)";
        ctx.beginPath();
        ctx.arc(
          this.position.x,
          this.position.y,
          this.radius,
          0,
          Math.PI * 2,
          false
        );
        ctx.fill();
        ctx.closePath();
      },
      update: function () {
        for (let i = 0; i < this.count; i++) {
          this.particles[i].update();
        }
        this.draw();
      },
    };

    const screenWidth = window.innerWidth;
    const emitter = new Emitter(
      canvas.width / 2,
      canvas.height / 2,
      screenWidth
    );

    function loop() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      emitter.update();
      window.requestAnimFrame(loop);
    }

    loop();

    // Cleanup on unmount
    return () => {
      window.cancelAnimationFrame(loop);
    };
  }, []);

  return <canvas ref={canvasRef} id="particle" />;
};

export default Starfield;

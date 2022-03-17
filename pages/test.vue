<template>
  <div>
    <canvas id="canvas"></canvas>
  </div>
</template>

<script>
/*
  https://jumpoff.io/blog/implementing-boids-in-javascript-canvas

    - https://github.com/jqlee85/boids/blob/master/js/script.js
    - https://github.com/jqlee85/boids/blob/master/js/boid.js
*/
export default {
  mounted() {
    const emojis = ['🐟', '🐬', '🦭', '🦈', '🦑', '🐋', '🐢', '🐙', '🦀', '🐡']
    const particles = []

    const width = window.innerWidth || document.body.clientWidth;
    const height = window.innerHeight || document.body.clientHeight;

    class Particle {
      constructor() {
        this.size = Math.max(48, Math.floor(Math.random() * 96))
        this.emoji = emojis[Math.floor(Math.random() * emojis.length)]
        this.position = { x: Math.random() * width, y: Math.random() * height }
      }

      update() {
        // if (Math.random() < 0.5) {
          this.position.x -= Math.random() * 4
          this.position.y -= Math.random() * 4
        // }
        // else {
        //   this.position.x -= Math.random() * 10
        //   this.position.y -= Math.random() * 10
        // }

        if (this.position.x > width) {
          this.position.x = 0;
        }
        else if (this.position.x < 0) {
          this.position.x = width;
        }

        if (this.position.y > height) {
          this.position.y = 0;
        }
        else if (this.position.y < 0) {
          this.position.y = height
        }
      }

      render() {
        ctx.font = `${this.size}px serif`
        ctx.fillText(this.emoji, this.position.x, this.position.y)

        // ctx.beginPath();
        // ctx.fillStyle = 'red'
        // ctx.arc(this.position.x, this.position.y, 8, 0, 2 * Math.PI);
        // ctx.fill();
        // ctx.closePath();
      }
    }

    for (let i = 0; i < 42; i++) {
      particles.push(new Particle());
    }

    var cvs = document.getElementById("canvas");
    var ctx = cvs.getContext("2d");

    cvs.width = width;
    cvs.height = height;

    ctx.font = '100px serif'
    ctx.textAlign = "center"; 
    ctx.textBaseline = "middle"; 
    
    function render() {
      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < particles.length; i++) {
        particles[i].update()
        particles[i].render()
      }

      requestAnimationFrame(render)
    }

    render()
  }
}
</script>

<style>
canvas {
  /* background-color: grey; */
  position: fixed;
  z-index: -1;
  top: 0px;
  left: 0px;
  /* width: 100vw;
  height: 100vh; */
  /* border: 1px solid red; */
  box-sizing: border-box;
}
</style>

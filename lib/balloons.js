export const bdayBallons = function () {
	const density = count; // concurrent balloon count
	const balloons = [];
	const colors = ['yellow', 'green', 'blue', 'red', 'orange', 'purple'];
	const msgText = 'Happy Birthday.'
	let audio = new Audio('https://soundbible.com/mp3/Balloon%20Popping-SoundBible.com-1247261379.mp3');
	audio.volume = popVolumeLevel;

  const stringElement = document.createElement('div');
	stringElement.classList.add('string');
	const msgElement = document.createElement('span');
	msgElement.innerText = msgText;
	msgElement.classList.add('msg');

  const popBalloon = (e) => {
		let t = e.currentTarget;
		const burst = new mojs.Burst({
			radius: { 30: 100 },
			parent: t,
			count: 10,
			className: 'show',
			children: {
				fill: [t.classList[2]],
				angle: { 0: 180 },
				delay: 'stagger(0, 25)',
				shape: [ 'circle', 'polygon' ],
			}
		});
		if(t.classList.contains('balloon')) {
			audio.play();
			t.style.visibility = 'hidden';
			setTimeout(() => {
				t.classList.toggle('show');
			}, 2000)
			// burst.style.visibility = 'visible'
			// t.append(burst.cloneNode())
			// console.log(t.classList)
		} else {
			audio.play();
			t.parentElement.classList.toggle('show');
			console.log(t.parentElement.classList, '------')
		}
		burst.replay();
	};

  for (let i = 0; i < density; i++) {
		const element = document.createElement('div');
		element.classList.add('balloon', 'show');
		element.classList.add(randomColor(colors))
		let supportsTouch = 'ontouchstart' in window || navigator.msMaxTouchPoints;
		if(supportsTouch) {
			element.addEventListener('click', popBalloon);
		} else {
			element.addEventListener('dblclick', popBalloon);
		}

		element.append(stringElement.cloneNode());
		element.append(msgElement.cloneNode(random(0,2)===0));
		document.body.append(element);
      
    setTimeout(() => {
        releaseBalloon(element);
    }, (i * 2000) + random(500, 1000));
  }


  function randomColor() {
      return colors[ random(0, colors.length) ];
  }

  function random (min, max){
      return Math.floor(Math.random() * (max-min)) + min;
  }

  function releaseBalloon(balloon) {
      const delay = random(100, 1000);
      const x = random(-99, -30); // random x value to fly
      const y = random(-99, -30); // random y value to fly

      const sequence = [{
          offset: 0,
          transform: `rotateZ(45deg) translate(0, 0)`
      }];


      // random fly direction
      if(random(0,2) === 0) {
          // first fly up to top left

          // left distance to keep balloon in view
          balloon.style.left = `${-1*x}vw`;

          sequence.push({
              offset: x/-200,
              transform: `rotateZ(45deg) translate(${x}vw, 0)`
          });
          sequence.push({
              offset: (x+y)/-200,
              transform: `rotateZ(45deg) translate(${x}vw, ${y}vh)`
          });
          sequence.push({
              offset: (-100+y)/-200,
              transform: `rotateZ(45deg) translate(-100vw, ${y}vh)`
          });
      } else {
          // fist fly up to right top

          sequence.push({
              offset: y/-200,
              transform: `rotateZ(45deg) translate(0, ${y}vh)`
          });
          sequence.push({
              offset: (x+y)/-200,
              transform: `rotateZ(45deg) translate(${x}vw, ${y}vh)`
          });
          sequence.push({
              offset: (-100+x)/-200,
              transform: `rotateZ(45deg) translate(${x}vw, -100vh)`
          });
      }

      // last move is common
      sequence.push({
          offset: 1,
          transform: `rotateZ(45deg) translate(-100vw, -100vh)`
      });

      const balloonAnimation = balloon.animate(sequence, {
          duration: 15000,
          delay: delay
      });


      balloonAnimation.onfinish = () => { releaseBalloon(balloon) }
  }
};
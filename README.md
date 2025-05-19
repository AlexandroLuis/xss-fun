# XSS Fun Effects 🎉

Welcome to **XSS Fun Effects**, a collection of fun and interactive JavaScript effects that you can inject into your web pages with a single line of code! Whether you're looking to add some sparkle with confetti, make text bounce around, or have a rainbow-colored message, this repository has it all!

---

## 🎨 Effects Included

- **Rainbow Text Effect** 🌈
- **Confetti Explosion** 🎊
- **Bouncing Ball** 🏀
- **Dancing Text** 💃
- **Spinning Wheel** 🌀
- **Fireworks Display** 🎆
- **Mouse-Following Text** 🖱️
- **Click Sound Effect** 🔊
- **Rainbow Roach Image** 🦗

---

## 🚀 Quick Start

To use the effects on your website, simply include the script hosted on **GitHub** using **jsDelivr** CDN, and then call the effects you want to trigger.

### 1. Add the Script

You can add the script to your page using the following JavaScript code. It will load all the fun effects and allow you to activate them.

```javascript
var script = document.createElement('script');
script.src = 'https://cdn.jsdelivr.net/gh/AlexandroLuis/xss-fun@main/script.js';
script.onload = () => {
  rainbowTextEffect();
  confettiEffect();
  bouncingBallEffect();
  dancingTextEffect();
  spinningWheelEffect();
  fireworksEffect();
  mouseFollowerTextEffect();
  clickSoundEffect();
  rainbowRoachEffect();
};
document.body.appendChild(script);
```
### 2. Use Individual Effects

If you prefer to call a specific effect, you can use these functions individually:

    Rainbow Text: rainbowTextEffect()

    Confetti: confettiEffect()

    Bouncing Ball: bouncingBallEffect()

    Dancing Text: dancingTextEffect()

    Spinning Wheel: spinningWheelEffect()

    Fireworks: fireworksEffect()

    Mouse-Following Text: mouseFollowerTextEffect()

    Click Sound: clickSoundEffect()

    Rainbow Roach Image: rainbowRoachEffect()

Simply call the desired function after loading the script!

# Quantum Boolean

Is cat in this box alive? Perhaps...

## Instalation

```html
<script src="https://kawyn.github.io/quantum-boolean/lib/main.min.js"></script>
```

## Setup

To create instance of <span style="font-weight: 900; white-space: pre"><span style="color: #9400D3">Q</span><span style="color: #4B0082">U</span><span style="color: #0000FF">A</span><span style="color: #00FF00">N</span><span style="color: #FFFF00">T</span><span style="color: #FF7F00">U</span><span style="color: #FF0000">M</span> <span style="color: #9400D3">B</span><span style="color: #4B0082">O</span><span style="color: #0000FF">O</span><span style="color: #00FF00">L</span><span style="color: #FFFF00">E</span><span style="color: #FF7F00">A</span><span style="color: #FF0000">N</span></span>:

```js
const perhaps = new QuantumBoolean();
```

Then to observe it... just compare it using `==`:

```js
prehaps == true; // Quantum boolean now has to choose what it wants to be.
```

## Examples

As an example we will recreate Schrödinger's experiment with a cat.

Firstly we will create cat:

```js
/**
 * We don't care about color, sex, etc.
 */
class Cat {
    name;
    alive = true;

    constructor(name) {
        this.name = name;
    }
}
```

Now we have to get a box with a trap which will poison our cat when a radioactive atom radiates.

```js
/**
 * You have to imagine that we put Polonium in the trap.
 * Trigger triggers when Polonium radates.
 */
class Trap {
    trigger = new QuantumBoolean();
}

/**
 * This is some fancy cartoon box.
 */
class Box {
    cat;
    trap;

    constructor(cat, trap) {
        this.cat = cat;
        this.trap = trap;
    }

    /**
     * Cat is now in superposition as the Polonium is.
     */
    close() {
        this.cat.alive = this.trap.trigger;
    }

    /**
     * Is our lovely cat alive?
     * I hope so.
     */
    open() {
        console.log(`Is ${this.cat.name} alive?`);
        console.log(this.cat.alive == true ? `Yes` : `No`);
    }
}
```

NOW WE ARE GOING TO ASSEMBLE EVERYTHING!

```js
const cat = new Cat(`Luna`);
const trap = new Trap();

const box = new Box(cat, trap);

box.close();

// SUPERPOSITION!!!

box.open();
```

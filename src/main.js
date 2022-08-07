/**
 * Is cat in this box alive? Perhaps...
 * 
 * The Quantum Boolean state is undefined until first observation.
 * During this observation, it must decide whether it wants to be "true" or "false".
 */
class QuantumBoolean {

    /**
     * Current state of boolean (true, false, undefinied).
     */
    #state = undefined;

    /**
     * Observe Quantum Boolean.
     * 
     * Note that this fuction is called everytime Quantum Boolean is compared using "==".
     * 
     * @returns State of Quantum Boolean.
     */
    valueOf() {

        if (this.#state === undefined)
            this.#state = Math.round(Math.random()) == 1;

        return this.#state;
    }
}
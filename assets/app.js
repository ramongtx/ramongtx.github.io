// First solve the problem. Then, write the code."
window.onload = function () {
    const tw = new Typewriter('#typewriter', { loop: true });
    tw.changeDelay(40).
        changeDeleteSpeed(5).
        typeString('First, solve the problem,').
        pauseFor(3_000).
        deleteAll().
        typeString('then write the code!').
        pauseFor(10_000).
        start();
}

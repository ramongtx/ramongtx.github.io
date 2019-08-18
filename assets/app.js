// First solve the problem. Then, write the code."
window.onload = function () {
    const tw = new Typewriter('#typewriter');
    tw.changeDelay(50).
        changeDeleteSpeed(50).
        typeString('First, solve the problem,').
        pauseFor(3000).
        deleteAll().
        typeString('then write the code').
        start();
}

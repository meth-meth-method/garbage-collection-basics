export function rotate(element, speed = 5) {

    function update(time) {
        element.style.transform = `rotateZ(${time / 10}deg)`;
        requestAnimationFrame(update);
    }

    update(0);
}

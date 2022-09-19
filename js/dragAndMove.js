// drag and move
const dragableWrapper = document.querySelector(".similar-word__right");
new Sortable(dragableWrapper, {
    handle: '.similar-word__right', // handle's class
    animation: 150
});
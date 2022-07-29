// search alphabet შექმნა დინამიურად
let alphabetWrapper = document.querySelector(".search__alphabet");
let dataLetters = ["a","b","g","d","e","v","z","t","i","k","l","m","n","o","p","J","r","s","t","u","f","q","G","y","sh","ch","c","dz","w","W","x ","j","h"];
let textContentLetters = ["ა","ბ","გ","დ","ე","ვ","ზ","თ","ი","კ","ლ","მ","ნ","ო","პ","ჟ","რ","ს","ტ","უ","ფ","ქ","ღ","ყ","შ","ჩ","ც","ძ","წ","ჭ","ხ","ჯ","ჰ"];

let createSpan = (spanData,spanTextContent)=>{
    let span = document.createElement("span");
    span.classList.add("search__alphabet__letter");
    span.setAttribute("data-letter",spanData);
    span.textContent = spanTextContent;
    alphabetWrapper.appendChild(span);
};
for (i in dataLetters){
    createSpan(dataLetters[i],textContentLetters[i]);
}

// drag and move thing in similar-word Selection
const draggables = document.querySelectorAll('.draggable')
const containers = document.querySelectorAll('.similar-word__right')

draggables.forEach(draggable => {
  draggable.addEventListener('dragstart', () => {
    draggable.classList.add('dragging')
  })

  draggable.addEventListener('dragend', () => {
    draggable.classList.remove('dragging')
  })
})

containers.forEach(container => {
  container.addEventListener('dragover', e => {
    e.preventDefault()
    const afterElement = getDragAfterElement(container, e.clientY)
    const draggable = document.querySelector('.dragging')
    if (afterElement == null) {
      container.appendChild(draggable)
    } else {
      container.insertBefore(draggable, afterElement)
    }
  })
})

function getDragAfterElement(container, y) {
  const draggableElements = [...container.querySelectorAll('.draggable:not(.dragging)')]

  return draggableElements.reduce((closest, child) => {
    const box = child.getBoundingClientRect()
    const offset = y - box.top - box.height / 2
    if (offset < 0 && offset > closest.offset) {
      return { offset: offset, element: child }
    } else {
      return closest
    }
  }, { offset: Number.NEGATIVE_INFINITY }).element
}

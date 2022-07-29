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


const textarea = document.getElementById("text")
const totalWords = document.getElementById("total-words")
const totalChar = document.getElementById("total-char")
const totalCharSpaces = document.getElementById("total-with-spaces")
const listWords = document.getElementById("words")


textarea.addEventListener("input", ()=>{
    counterWithoutSpaces(textarea.value)
    counterChar(textarea.value)
    counterAll(textarea.value)
    let allWords = saveWords(textarea.value)
    
    setTimeout(updateList(allWords),100)
});

function counterWithoutSpaces(str){
    
    let total = str.split(" ").filter(e=>
        e.length > 0
    ).length;
    totalWords.innerHTML = total;

}

function counterChar(str){
    let total = str.split("").filter(e=>
        !e.includes(" ")
    ).length;
    totalChar.innerHTML = total
}

function counterAll(str){
    let total = str.split("").length;
    totalCharSpaces.innerHTML = total
}

function saveWords(str){
    let words = str.split(" ").filter(e=>
        e.length > 0
    )
    words = words.map(e=>e.toLowerCase())
    let allWords = {}
    words.forEach(e => {
        allWords[e] !== undefined ? allWords[e] += 1 : allWords[e] = 1;
    });
    let dicArray = Object.entries(allWords);
    dicArray.sort((a, b) => b[1] - a[1]);
    let dicOrdenado = Object.fromEntries(dicArray);    
    return dicOrdenado;
}

function updateList(allWords){
    listWords.innerHTML = ''
    for (let c in allWords){
        let li = document.createElement("li")
        let p = document.createElement("p")
        let clave = document.createElement("span").appendChild(document.createTextNode(c))
        let valor =  document.createElement("span").appendChild(document.createTextNode(allWords[c]))
        p.appendChild(clave)
        p.appendChild(valor)
        li.appendChild(p)
        listWords.appendChild(li)
    }
    
    
}
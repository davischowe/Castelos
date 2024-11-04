let gerar = document.getElementById('gerar')
let ordenarInsertion = document.getElementById('ordenarInsertion')
let ordenarBubble = document.getElementById('ordenarBubble')
let ordenarSelection = document.getElementById('ordenarSelection')
let mostrarCodigoInsertion = document.getElementById('mostrarCodigoInsertion')
let mostrarCodigoBubble = document.getElementById('mostrarCodigoBubble')
let mostrarCodigoSelection = document.getElementById('mostrarCodigoSelection')
let res = document.getElementById('res')
let resInsertion = document.getElementById('resInsertion')
let resBubble = document.getElementById('resBubble')
let resSelection = document.getElementById('resSelection')
let codigo = document.getElementById('codigo') 
let numArray = []


function gerarAleatorio(max, min) {
    return Math.floor(Math.random() * (max - min + 1)) + min
}


gerar.addEventListener('click', () => {
    numArray = []
    let num = Number(document.getElementById('num').value)

    for (let i = 0; i < num; i++) {
        numArray[i] = gerarAleatorio(num, 1)
    }
    res.innerHTML = `Números Aleatórios = [ ${numArray.join(', ')} ]`
})


ordenarInsertion.addEventListener('click', () => {
    let sortedArray = [...numArray]
    for (let i = 1; i < sortedArray.length; i++) {
        let Arrayvalor = sortedArray[i]
        let j = i - 1

        while (j >= 0 && Arrayvalor < sortedArray[j]) {
            sortedArray[j + 1] = sortedArray[j]
            j--
        }
        sortedArray[j + 1] = Arrayvalor
    }
    resInsertion.innerHTML = `Números Ordenados (Insertion Sort) = [ ${sortedArray.join(', ')} ]`
})

ordenarBubble.addEventListener('click', () => {
    let sortedArray = [...numArray]
    for (let i = 0; i < sortedArray.length - 1; i++) {
        for (let j = 0; j < sortedArray.length - i - 1; j++) {
            if (sortedArray[j] > sortedArray[j + 1]) {
                let temp = sortedArray[j]
                sortedArray[j] = sortedArray[j + 1]
                sortedArray[j + 1] = temp
            }
        }
    }
    resBubble.innerHTML = `Números Ordenados (Bubble Sort) = [ ${sortedArray.join(', ')} ]`
})


ordenarSelection.addEventListener('click', () => {
    let sortedArray = [...numArray]
    for (let i = 0; i < sortedArray.length - 1; i++) {
        let minIndex = i
        for (let j = i + 1; j < sortedArray.length; j++) {
            if (sortedArray[j] < sortedArray[minIndex]) {
                minIndex = j
            }
        }
        let temp = sortedArray[i]
        sortedArray[i] = sortedArray[minIndex]
        sortedArray[minIndex] = temp
    }
    resSelection.innerHTML = `Números Ordenados (Selection Sort) = [ ${sortedArray.join(', ')} ]`
})

mostrarCodigoInsertion.addEventListener('click', () => {
    codigo.innerHTML = `
    <pre><code>
// Insertion Sort
for (let i = 1; i < array.length; i++) {
    let valorAtual = array[i];
    let j = i - 1;

    while (j >= 0 && array[j] > valorAtual) {
        array[j + 1] = array[j];
        j--;
    }
    array[j + 1] = valorAtual;
}
    </code></pre>`
})

mostrarCodigoBubble.addEventListener('click', () => {
    codigo.innerHTML = `
    <pre><code>
// Bubble Sort
for (let i = 0; i < array.length - 1; i++) {
    for (let j = 0; j < array.length - i - 1; j++) {
        if (array[j] > array[j + 1]) {
            let temp = array[j];
            array[j] = array[j + 1];
            array[j + 1] = temp;
        }
    }
}
    </code></pre>`
})

mostrarCodigoSelection.addEventListener('click', () => {
    codigo.innerHTML = `
    <pre><code>
// Selection Sort
for (let i = 0; i < array.length - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < array.length; j++) {
        if (array[j] < array[minIndex]) {
            minIndex = j;
        }
    }
    let temp = array[i];
    array[i] = array[minIndex];
    array[minIndex] = temp;
}
    </code></pre>`
})

function generateNumber() {

    const min = Math.ceil(document.querySelector(".min").value)
    const max = Math.floor(document.querySelector(".max").value)

    const result = Math.floor(Math.random() * (max - min + 1) + min)

    
    if (max > min) {
        alert(result) 
    } else{
        alert("O primeiro número tem que ser menor.")
    }
}



document.getElementById("button").addEventListener("click",loadData);

//Load data

function loadData(){
    let xhr = new XMLHttpRequest();

    //open

    xhr.open("GET","data.txt",true);

    //onload
    xhr.onload = function(){
        if(this.status === 200){
            // console.log(this.responseText);
            document.getElementById("output").innerHTML = `<h1>${this.responseText}</h1>`
        }
    }

    xhr.send();
}
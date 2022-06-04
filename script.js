 

 let counterVal=0;

document.getElementById("decrease").onclick = ()=>{
    counterVal -= 1;
    changeValue();
}

document.getElementById("reset").onclick = ()=>{
    counterVal =0;
    changeValue();
}

document.getElementById("increase").onclick = ()=>{
    counterVal += 1;
    changeValue();
}


function changeValue(){
    document.getElementById("counter").innerHTML = counterVal;
    }

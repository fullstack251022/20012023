console.log('start')


// document.getElementById('myInput').addEventListener('input',(e)=>{
//     // console.log(e.target.value)
//     document.getElementById('myParagraph').innerText = e.target.value
// })


document.getElementById('myButton').addEventListener('click', (e) => {
    
    const value = document.getElementById('myInput').value;
    const h3 = document.createElement("h3");
    h3.innerText = value;
    document.getElementById('myDiv').append(h3)

    // console.log(e)

    
    // h3.innerText = document.getElementById('myInput').value;

    // document.getElementById('myDiv').innerHTML =`<h3>`+document.getElementById('myInput').value+`</h3>`; 
    // console.log(document.getElementById('myInput').value)
})


// document.getElementById('btn').addEventListener("click", () => {   
//     if(document.getElementById('myP').style.color != 'red'){
//         document.getElementById('myP').style.color = 'red';
//     }else{
//         document.getElementById('myP').style.color = 'black';
//     }

// })


console.log('end')
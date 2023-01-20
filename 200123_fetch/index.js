console.log('start')

document.getElementById('myBtn').addEventListener('click', () => {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(json => {
            console.log(json)
        })
        .catch(err => {
            console.log(err)
        })
})



console.log('end')
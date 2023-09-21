const init = () => {
  const inputForm = document.querySelector('form');
  inputForm.addEventListener('submit', (event) => {
    event.preventDefault()
     const input = document.querySelector("input#searchByID")
     
    console.log(input)
     fetch(`http://localhost:3000/movies/${input.value}`)
     .then(res => res.json())
     .then((movie) => {
            const title = document.querySelector("section#movieDetails h4")
            const summary = document.querySelector("section#movieDetails p")
   
            title.innerText = movie.title;
            summary.innerText = movie.summary;
})
  })
}

document.addEventListener('DOMContentLoaded', init);


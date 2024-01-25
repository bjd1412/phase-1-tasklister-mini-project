document.addEventListener("DOMContentLoaded", () => {
  form = document.querySelector('form')
  form.addEventListener("submit", (e) => { 
  e.preventDefault()
  handleSubmit(e.target.newdescription.value)
  
  })
})

function handleSubmit (ntd) {
let p = document.createElement('p')
let btn = document.createElement('button')
btn.textContent = 'complete'
btn.addEventListener('click', handleDeleter)
p.textContent = `${ntd} `
p.appendChild(btn)
document.querySelector('#tasks').appendChild(p)
}

function handleDeleter (e) {
e.target.parentNode.remove()
}
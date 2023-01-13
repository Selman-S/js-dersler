// The getElementById Method

// The getElementsByTagName Method

Array.from(document.getElementsByTagName('p')).forEach((p, i) => {
  p.innerHTML = `${i + 1} - lorem `
})

// The getElementsByClassName Method
// The querySelector Method
// The querySelectorAll Method

const input = document.querySelector('[name="rating"]')
console.log(input)

// The innerHTML Property
// The innerText Property
// The textContent Property

// The remove Method
// The add Method
// The toggle Method

console.log(input.classList.toggle('still'))

// The createElement Method

const div = document.createElement('div')
div.style.width = '300px'
div.style.height = '300px'
div.style.backgroundColor = 'red'
div.textContent = 'ali'

document.body.appendChild(div)
console.log(div)

// The appendChild Method

// Changing HTML Elements

// The setAttribute Method

div.setAttribute('ali', 'red')
// The getAttribute Method

console.log(div.getAttribute('ali'))

// The removeAttribute Method
// The hasAttribute Method
// The hasAttributes Method

// Adding and Deleting Elements

// The createTextNode Method
// The createComment Method
// The createDocumentFragment Method

// document.removeChild(element)
// document.replaceChild(new, old)
// document.appendChild(element)
// document.insertBefore(new, old)

// document.body
// document.head

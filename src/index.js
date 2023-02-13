import createButton from "./utils"

const section1 = document.querySelector('#section1')
const section2 = document.querySelector('#section2')
const section3 = document.querySelector('#section3')

section1.append(createButton('click me once', 'red'))
section2.append(createButton('click me twice'))
section3.append(createButton('click me forever more', 'peru', 'forestgreen'))
section4.append(createButton());
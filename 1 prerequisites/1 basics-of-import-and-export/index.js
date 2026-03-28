// Create element with js
let h1 = document.createElement('h1')
h1.innerHTML = "Hello from JS"

console.log(h1)
document.body.appendChild(h1)

// Import --> import in {} necessary
import {age, name} from "./script.js"
console.log(`name: ${name} and age is: ${age} yrs`)

import stu from "./script.js"
console.log(stu)
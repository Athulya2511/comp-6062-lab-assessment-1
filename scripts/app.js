const studentName = "Athulya Radhakrishnan";
const studentNumber = 1226053;
const result = `${studentName} - ${studentNumber}`;
console.log(result);

let headingPrimaryContent = document.querySelector('h1');
console.log(headingPrimaryContent);
headingPrimaryContent.innerHTML = result;
headingPrimaryContent.classList.add('headingPrimary');

console.log(headingPrimaryContent.innerHTML);

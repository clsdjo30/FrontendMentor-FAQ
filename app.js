const accordeon = document.getElementsByClassName('container');
const askTitle = document.getElementsByClassName('label')
for(i=0; i<accordeon.length; i++) {
    accordeon[i].addEventListener('click', function() {
        console.log(accordeon);
        this.classList.toggle('active')
    })
}
console.log("hello World");
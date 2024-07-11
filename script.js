document.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');
    

});

const btn1 = document.getElementById('show-my-name');

showName = ()=>{

btn1.innerText = 'Hashim Zaffar';
btn1.style.color = '#ffff';

}

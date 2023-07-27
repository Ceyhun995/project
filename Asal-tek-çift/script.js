let input =document.getElementById('inpt');
let button = document.getElementById('btn');
let wrapper = document.querySelector('.wrapper');
let ul = document.createElement('ul')


button.addEventListener('click', (e)=>{

    e.preventDefault();

    ul.innerHTML =''

    let value = Number(input.value)

/*     console.log( typeof yazi); */

    Withfor(value)

})

let Withfor = (n) =>{

    for (let i = 0; i < n; i++) {

        let li = document.createElement('li');
        li.textContent =i;
        li.style.border ='1px solid black'
        li.style.height ='50px'
        li.style.textAlign ='center'
        li.style.listStyleType ='none'
        li.style.marginTop ='50px'
        li.style.alignItems ='center'
        /* console.log(i); */
        
        if (i%2 ==0) {
            li.style.backgroundColor ='red'
        }else{
            li.style.backgroundColor ='yellow'
        }

        ul.appendChild(li)

    }
}

wrapper.appendChild(ul)
ul.style.display ='grid'
ul.style.gridTemplateColumns ='repeat(8,1fr)'
ul.style.gap ='10px'
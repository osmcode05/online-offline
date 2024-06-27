let h1 = document.querySelector('h1'),
    ul = document.querySelector('ul'),
    button = document.querySelector('button');
onload=()=>{
        if(navigator.onLine){
            online()
        }else{
            offline()
        }
    }
ononline = ()=> online()
onoffline = ()=> offline()
function online(){                                       
    h1.innerHTML = 'Online Now';
    h1.style.color = 'green';
    ul.style.display = 'none';
    button.style.display = 'none';
}
function offline(){
    h1.innerHTML = 'Offline Now';
    h1.style.color = 'black';
    ul.style.display = 'block';
    button.style.display = 'block';
}



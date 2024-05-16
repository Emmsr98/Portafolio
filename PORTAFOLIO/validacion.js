const inputs = document.querySelectorAll('.input');
const inputsMsj = document.querySelectorAll('.input-padron-message');

inputs.forEach(input => {

    input.onfocus = () => {
        input.previousElementSibling.classList.add('top');
        input.previousElementSibling.classList.add('focus');
        input.parentNode.classList.add('focus');
    };

    input.onblur = function(){
        if(input.value.trim().length == 0){
            input.previousElementSibling.classList.remove('top');
        }
        input.previousElementSibling.classList.remove('focus');
        input.parentNode.classList.remove('focus');
    }
});

inputsMsj.forEach(input => {
    
    input.onfocus = () => {
        input.previousElementSibling.classList.add('top');
        input.previousElementSibling.classList.add('focus');
        input.parentNode.classList.add('focus');
    };

    input.onblur = function(){
        if(input.value.trim().length == 0){
            input.previousElementSibling.classList.remove('top');
        }
        input.previousElementSibling.classList.remove('focus');
        input.parentNode.classList.remove('focus');
    }
});

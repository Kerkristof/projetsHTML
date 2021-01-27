(function(){
    var name = document.querySelector('#name');
    var regexp = document.querySelector('#regexp');

    // fct check de la regle
    function checkReg() {
        var re = new RegExp(regexp.value);
        if ( re.test(name.value)) {
            name.style.backgroundColor = "cyan";
        } else {
            name.style.backgroundColor = "red";
        }
    }

    // event listener activated on change 
    name.addEventListener('input',checkReg);

}());
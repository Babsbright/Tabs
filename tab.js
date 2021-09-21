(function(){


//SELECTORS
    var headings = document.querySelectorAll('.heading');
    var content = document.querySelectorAll('.content');
    
    //Loop through the classes and add event listeners
    headings.forEach((heading) => {
    
        heading.addEventListener('click', function(e){
            var target = e.target;
            removeActiveClass();
             target.nextElementSibling.style.display = 'block';
             
            })
        
    });
    
    function removeActiveClass() {
        content.forEach((contents) => {
            if (contents.classList === 'active') {
                contents.style.display = 'block';
            } else {
                contents.style.display = 'none' 
            }
           });
    }








})();


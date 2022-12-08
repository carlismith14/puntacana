const navToggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.navvb');
const navLink = document.querySelectorAll('.nav_li')

navToggle.addEventListener('click', function(){
    nav.classList.toggle('active');
});


// nav.addEventListener('click', function (e) {
//     e.preventDefault();
//     const target = e.target;
//     if (target.classList.contains('link--a')) {
//         const id = target.getAttribute('href').slice(1);
//         document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
//     }
// });

const removeActive = function(){
    nav.classList.remove('active');
}

navLink.forEach(link => link.addEventListener('click', function(){
    
    setTimeout(removeActive, 500);
    
}));



// set up text to print, each item in array is new line
var aText = new Array(
    "PuntaCana", 
    );
    var iSpeed = 100; // time delay of print out
    var iIndex = 0; // start printing array at this posision
    var iArrLength = aText[0].length; // the length of the text array
    var iScrollAt = 20; // start scrolling up at this many lines
     
    var iTextPos = 0; // initialise text position
    var sContents = ''; // initialise contents variable
    var iRow; // initialise current row
     
    function typewriter()
    {
     sContents =  '';
     iRow = Math.max(0, iIndex-iScrollAt);
     var destination = document.getElementById("typedtext");
     
     while ( iRow < iIndex ) {
      sContents += aText[iRow++] + '<br />';
     }
     destination.innerHTML = sContents + aText[iIndex].substring(0, iTextPos);
     if ( iTextPos++ == iArrLength ) {
      iTextPos = 0;
      iIndex++;
      if ( iIndex != aText.length ) {
       iArrLength = aText[iIndex].length;
       setTimeout("typewriter()", 500);
      }
     } else {
      setTimeout("typewriter()", iSpeed);
     }
    }
    
    
    typewriter();



    var aText = new Array(
        "Punta Cana", 
        );
        var iSpeed = 100; // time delay of print out
        var iIndex = 0; // start printing array at this posision
        var iArrLength = aText[0].length; // the length of the text array
        var iScrollAt = 20; // start scrolling up at this many lines
         
        var iTextPos = 0; // initialise text position
        var sContents = ''; // initialise contents variable
        var iRow; // initialise current row
         
        function typewriter()
        {
         sContents =  '';
         iRow = Math.max(0, iIndex-iScrollAt);
         var destination = document.getElementById("typedtext");
         
         while ( iRow < iIndex ) {
          sContents += aText[iRow++] + '<br />';
         }
         destination.innerHTML = sContents + aText[iIndex].substring(0, iTextPos);
         if ( iTextPos++ == iArrLength ) {
          iTextPos = 0;
          iIndex++;
          if ( iIndex != aText.length ) {
           iArrLength = aText[iIndex].length;
           setTimeout("typewriter()", 500);
          }
         } else {
          setTimeout("typewriter()", iSpeed);
         }
        }
        
        
        typewriter();
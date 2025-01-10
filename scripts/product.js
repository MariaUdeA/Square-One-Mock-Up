    var a = '.main-img';
    var b = '.preview-images';
    var open=false;
    //this is the case for big screens
    //small screens use a different model
    if(window.innerWidth > 760)
      matchHeight(a, b); // Set at the beginning
    
      window.addEventListener('resize', function() {
        if(window.innerWidth > 760){
          matchHeight(a, b); // Reset on window resize
          if(open){
            document.getElementsByClassName("mini-cart")[0].style.width = "40%";
          }
        }else{
          resetDesktopStyles(b);
          if(open){
            document.getElementsByClassName("mini-cart")[0].style.width = "300px";
          }
        }
      });
  
  // Set height of one element to another
  // target: height to match
  // el: element to match to target height
  function matchHeight(target, el) {
    var targetElement = document.querySelector(target);
    var elElement = document.querySelector(el);
  
    if (targetElement && elElement) {
      var targetHeight = targetElement.offsetHeight;
      elElement.style.height = targetHeight + 'px';
    }
  }

  function resetDesktopStyles(el) {
    var previewImages = document.querySelector(el);

    // Reset the height of preview images for mobile view
    previewImages.style = ''; // Remove the height matching for mobile
}

document.getElementsByClassName("add-to-cart-button")[0].addEventListener('click', openNav);

function openNav() {
  open=true;
  if(window.innerWidth < 760){
    document.getElementsByClassName("mini-cart")[0].style.width = "300px";
  }else{
    document.getElementsByClassName("mini-cart")[0].style.width = "40%";
  }
  document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
  document.getElementsByTagName("header")[0].style.filter = "brightness(0.6)";
  document.getElementsByTagName("section")[0].style.filter = "brightness(0.6)";
  document.getElementsByTagName("section")[1].style.filter = "brightness(0.6)";
  document.getElementsByTagName("footer")[0].style.filter = "brightness(0.6)";

}

function closeNav() {
  open=false;
  document.getElementsByClassName("mini-cart")[0].style.width = "0";
  document.body.style.backgroundColor = "var(--color-white)";
  document.getElementsByTagName("header")[0].style.filter = "";
  document.getElementsByTagName("section")[0].style.filter = "";
  document.getElementsByTagName("section")[1].style.filter = "";
  document.getElementsByTagName("footer")[0].style.filter = "";
}
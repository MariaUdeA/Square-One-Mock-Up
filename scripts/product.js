    var a = '.main-img';
    var b = '.preview-images';
    //this is the case for big screens
    //small screens use a different model
    if(window.innerWidth > 760)
      matchHeight(a, b); // Set at the beginning
    
      window.addEventListener('resize', function() {
        if(window.innerWidth > 760){
          matchHeight(a, b); // Reset on window resize
        }else{
          resetDesktopStyles(b);
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
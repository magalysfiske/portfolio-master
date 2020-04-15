(function(){
    var words = [
        'a Designer',
        'a Book Artist',
        'an Illustrator',
        
        ], i = 0;
    setInterval(function(){
        $('#changingword').fadeOut(function(){
            $(this).html(words[i=(i+1)%words.length]).fadeIn();
        });
    }, 3000);
      
})();


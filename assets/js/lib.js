var pick=true;
var hzConsole, c = $('#console-body input');
(function($){
    var c = $('#console-body input');
    var mouseIn=false, c_x, c_y;
    
    c.on('keyup', function(e){
        if(e.keyCode==13){
            Ev(c.val());


            $('#console-history').append(c.val());
            c.val('$(')
        }
    });
    

    
    

})(jQuery)

jQuery(document).ready(function($){
    $('#console').draggable({handle: '#console-head'})
                    .resizable()
                    .click(function(){
                        $('#console-body input').focus();
                    });

    
    $(document).mousemove(function(e){
        if(pick) selectElemnt($(e.target));
    }).mouseleave(function(e){
        //$(e.target).removeClass('hzc-selected');
    }); 
    $('*').mouseenter(function(){
        if(pick){
            $(this).css('margin', parseInt($(this).css('margin')-1))
        }
    }).mouseleave(function(){
        if(pick){
            $(this).css('margin', parseInt($(this).css('margin')+1))
        }
    });

    
});


var Ev = function(s){
    try {
        eval(s);
    }
    catch(err) {
        $('#console-history').append(err);
    }
}
function selectElemnt(dis){
     $('.hzc-selected').removeClass('hzc-selected');
     

     c.val($(dis).getPath());

     
         dis.addClass('hzc-selected')
         
         .mouseleave(function(){
            $(this).removeClass('hzc-selected').css('margin',dis.css('margin')+ 1);
            $('#overlay').hide();
       });
       $('.hzc-selected').click(handleEclick);
}

function handleEclick( event ) {
        event.preventDefault();
        var selector = (typeof($(this).attr('id')) !== 'undefined' || $(this).attr('id') !== null) ? '#' + $(this).attr('id') :  '.' + $(this).attr('class');
        console.log($(this).myPlugin)
            
}


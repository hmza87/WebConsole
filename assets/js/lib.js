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
                    })
                    .attr('data-nopicker', '')
                    .find('*').each(function(){
                        $(this).attr('data-nopicker', '');
                    });
    $('.cph').attr('data-nopicker', '');

    
    $(document).mousemove(function(e){
        if(pick && !$(e.target).is('[data-nopicker]')){
            if(e.target.id=='overlay'){
                $(e.target).hide()
            }else{
                selectElemnt($(e.target));
            }
            

        }
    $('#overlay').on('mousemove', function(){
        console.log('ok');
        $(this).hide();
    });
    }).mouseleave(function(e){
        //$(e.target).removeClass('hzc-selected');
    }); 
    $('*').mouseenter(function(){
        if(pick){
            //$(this).css('margin', parseInt($(this).css('margin')-1))
        }
    }).mouseleave(function(){
        if(pick){
            //$(this).css('margin', parseInt($(this).css('margin')+1))
        }
    });
    $('[data-checked]').click(function(){
        if($(this).attr('data-checked')=='true'){
            $(this).attr('data-checked', false);
            pick=false;
        }else{
            $(this).attr('data-checked', true);
            pick=true;
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
    //if(dis[0].id='overlay') return;
     //$('.hzc-selected').removeClass('hzc-selected');
     c.val($(dis).getPath());
     $('.cph-t').css({
         top        :dis.position().top-1,
         left       :dis.position().left+parseInt(dis.css('margin-left')),
         width      :dis.outerWidth()+parseInt(dis.css('margin-left'))+parseInt(dis.css('margin-right')),
         height     :2
        });
     $('.cph-r').css({
         top        :dis.position().top-1,
         left       :dis.position().left+dis.outerWidth(),
         height     :dis.outerHeight()+parseInt(dis.css('margin-top'))+parseInt(dis.css('margin-bottom')),
         width      :2
        });
     $('.cph-b').css({
         top        :dis.position().top+dis.outerHeight()+parseInt(dis.css('margin-top'))+parseInt(dis.css('margin-bottom')),
         left       :dis.position().left,
         width      :dis.outerWidth()+parseInt(dis.css('margin-left'))+parseInt(dis.css('margin-right')),
         height     :2
        });
    $('.cph-l').css({
         top        :dis.position().top-1,
         left       :dis.position().left-1,
         height     :dis.outerHeight()+parseInt(dis.css('margin-top'))+parseInt(dis.css('margin-bottom')),
         width      :2
        });
    



     dis.mouseleave(function(){
            //$(this).off('click', handleEclick);
            $('#overlay').hide();

        });
    $('.hzc-selected').on('click', handleEclick);
}

function handleEclick( event ) {
        event.preventDefault();
        c.val($(this).getPath());
        console.log('handled');
            
}


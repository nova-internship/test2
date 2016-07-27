// This is a JavaScript file
function translator( p_text ) {
    alert(2);
    
    jQuery().ajaxSend(function(event, XMLHttpRequest, options){
        XMLHttpRequest.overrideMimeType("text/plain; charset=shift_jis");
    });
    
    $.ajax({
        url: 'http://www.excite.co.jp/world/english/?before=I+likea+pple&wb_lp=ENJA',
        type: 'GET',
        dataType: 'html',
        success: function(data) {
            alert(5);
            var text = $(data).find('after').val();
            $("#Memo").val( text );
        },
        error:function() {
            alert(6);
            alert('問題がありました。');
        }
    })
    .done(function(data) {
        // alert($(data).find('result_box').val());
        alert(3);
        var text = $(data).find('result_box').val();
        $("#Memo").val( text );
    })
    .fail(function( data ) {
        alert(4);
        console.log( data );
    });
    
}

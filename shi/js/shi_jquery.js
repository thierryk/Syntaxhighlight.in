/*!
 *  Syntax Highlighting based on 'Snippet' by SteamDev (http://steamdev.com/snippet)
 *  http://syntaxhighlight.in v1.0.0
 *  Date: Sunday Jan 1, 2012
 *  version for JQuery
 */

$(document).ready(function(){
    // new window popup function
    function snippetPopup(content) {
         top.consoleRef=window.open('','myconsole',
          'width=600,height=300'
           +',left=50,top=50'
           +',menubar=0'
           +',toolbar=0'
           +',location=0'
           +',status=0'
           +',scrollbars=1'
           +',resizable=1');
         top.consoleRef.document.writeln(
          '<html><head><title>Snippet :: Code View :: '+location.href+'</title></head>'
           +'<body bgcolor=white onLoad="self.focus()">'
           +'<pre>'+content+'</pre>'
           +'</body></html>'
         );
         top.consoleRef.document.close();
    }
    $('.snippet-container').each(function(index) {
        // text-only view
        $(this).find("a.snippet-text").click(function(){
            var org = $(this).parents('.snippet-wrap').find('.snippet-formatted');
            var txt = $(this).parents('.snippet-wrap').find('.snippet-textonly');
            org.toggle();
            txt.toggle();
            if(txt.is(':visible')){
                $(this).html("html");
            } else {
                $(this).html("text");
            }
            return false;
        });
        // popup view
        $(this).find("a.snippet-window").click(function(){
            var txt = $(this).parents('.snippet-wrap').find('.snippet-textonly').html();
            snippetPopup(txt);
            $(this).blur();
            return false;
        });
    });
    // collapse/expand
    $('.snippet-toggle').each(function(index) {
        $(this).click(function(){$(this).parents('.snippet-container').find('.snippet-wrap').toggle();});
    });
});
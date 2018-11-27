$(document).ready(function(){
    $("#add").click(function(){
       //var title = "";
        var url = $("#searchText").val();
        $.ajax({
            url:url,
            async: true,
            success: function(responseHtml){
                //var newtitle = $(responseHtml).filter('title').text();
                var spUrlTitle = $(responseHtml).find('title').eq(0).text();
                var newRowContent = "<tr><td>" + spUrlTitle + "</td><td>" + url + "</td></tr>";
                jQuery("#url_list tbody").append(newRowContent);
                
            },
            error: function(){
                alert("Sorry the page you have selected doesn't exist");
            }
        })
        
    });
     $("#remove").click(function(){
        
    });
   
});
    
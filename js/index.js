$( document ).ready(function() {
  console.log( "ready!" );
  
  var limit = 5;
  var search = "";
var url = "";
    var JSONdata;
    
    
    console.log(url);
    // on brackets
    // http://en.wikipedia.org/w/api.php? action=opensearch&datatype=json&limit=5&search=cat&callback=?
    // on codepen
    // https://en.wikipedia.org/w/api.php? action=opensearch&datatype=json&limit=5&search=cat&callback=?

    
    $("#inputClick").click(function(){
        search = $("#input").val();
        
        url = "http://en.wikipedia.org/w/api.php? action=opensearch&datatype=json&limit=5&search=" + search + "&callback=?";
       
          $.getJSON(url, function(data) {
            
            JSONdata = data;
            console.log(JSONdata);
              
            for(var i = 0; i < limit ; i++){
                var target = "#ans" + i;
                console.log(target);

                var name = JSONdata[1][i];
                var descrip = JSONdata[2][i];
                var link = JSONdata[3][i];
                
                name = "<div><h3>" + name + "</h3></div>";
                descrip = "<div><p>" + descrip + "</p></div>";

                
                var htmlInput = "<a href=\"" + link +"\" >"+ name + descrip + "<\a> ";


                $(target).addClass("answer");
                $(target).html(htmlInput);

            }
            });
        
     
        
        
    })
  
    
    

  
});
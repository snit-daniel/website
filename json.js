function show_cards(){
    
    var table_html="";
    for(var index in cards){
        var cardd=cards[index];
        var Image=cardd["Image"];
        var Country=cardd["Country"];
        var Smart_ticket=cardd["Smart ticket"];
        var Provider=cardd["Provider"];
        var Introduction=cardd["Introduction"];
        var cardd_index=Number(index)+1;
        table_html+="<tr><th scope='row'>"+cardd_index+"</th><td>"+Country+"</td><td><img  src='"+Image+"' class='flags' '></td><td>"+Smart_ticket+"</td><td>"+Provider+"</td><td>"+Introduction+"</td></tr>";
    }
    
    $("#card-table-data").html(table_html);
    
}

function search_Smart_ticket(){
    var search_text=$("#search-text").val();
    var table_html="";
        for(var index in cards){
        var cardd=cards[index];
        var Image=cardd["Image"];
        var Country=cardd["Country"];
        var Smart_ticket=cardd["Smart ticket"];
        var Provider=cardd["Provider"];
        var Introduction=cardd["Introduction"];
        var cardd_index=Number(index)+1;
        
            if(Smart_ticket.toLowerCase().search(search_text.toLowerCase())!=-1){

      table_html+="<tr><th scope='row'>"+cardd_index+"</th><td>"+Country+"</td><td><img  src='"+Image+"' class='flags' '></td><td>"+Smart_ticket+"</td><td>"+Provider+"</td><td>"+Introduction+"</td></tr>";
    }
    
    $("#card-table-data").html(table_html);  
}}
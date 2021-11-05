//
var form = document.getElementById("watch");
//
form.addEventListener('submit', function(e) {
    e.preventDefault();
    var url1 = document.getElementById("url").value;
    if (url1.includes("watch?v=")) {
      var url = url1.replace("watch?v=","embed/");
      var embed1 = document.getElementById("embed1");
      embed1.innerHTML = "<iframe style='border:none;width:100%;height:100%;' src='"+url+"'></iframe>";
      form.style.display = "none";
      
      
    }
    else {
      document.write("Invalid Url or Error");
    }
    
    
});

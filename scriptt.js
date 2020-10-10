<!DOCTYPE html>
<html>
    <head>
        <title>My File</title>
    </head>
    <body>
      <p id="Yo">Hello My name is</p>
      <button id="oyee">Click here</button>
      <p id="Empty"></p>
      <button id="yup">Click Me</button>  
      <p id="Kj">Bello</p>
      <button id="tr">Click</button>
      <p id="Gc">Hi I am AMit</p>
      <button id="fx">Click By</button>
      <script>
          document.getElementById("oyee").onclick=function()
          {
              document.getElementById("Yo").innerHTML="I think"+document.getElementById("Yo").innerHTML+"Amit";
          }
          document.getElementById("yup").onclick=function()
          {
              document.getElementById("Empty").innerHTML="New content added";
          }
          document.getElementById("tr").onclick=function()
          {
              document.getElementById("Kj").innerHTML="Yo boys";
          }
          document.getElementById("fx").onclick=function()
          {
              document.getElementById("Gc").style.fontSize = "20px";
          }
      </script>  
        
    </body>
</html>

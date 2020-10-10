<!DOCTYPE html>
<head>
    <title>My file</title>
</head>
<body>
    <h1>Login Credentials</h1>
    <p>Username:<input type="text" id="ab"></p>
    <p>password:<input type="text" id="bc"></p>
    <button id="zx">Enter</button>
    <script>
        document.getElementById("zx").onclick=function()
        {
          var a=document.getElementById("ab").value;
          var b="amitpandharikar";
          var c=document.getElementById("bc").value;
          var d=7001;
          if (a==b&&c==d)
          {
              alert("you got it");
          }else{
              alert("re-enter");
          }
        }
    </script>
</body>

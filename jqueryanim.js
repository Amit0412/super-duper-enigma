<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Jquery slide animation</title>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <style>
        h2
        {
            background-color: gray;
            color: white;
            border: 2px solid blueviolet;
            width: 30%;
            padding: 10px;
        }
        h3{
            display: none;
            background-color: gray;
            color: white;
            border: 2px solid blueviolet;
            width: 30%;
            padding: 50px;
        }
    </style>
</head>
<body>
    <h1>To display the concepe of Jquery animation</h1>
    <h2>Click here</h2>
    <h3>Toggle down</h3>
    <button id="e">Stop</button>
    <script>
        $("h2").click(function()
        {
            $("h3").slideToggle(3000)
        })
        $("#e").click(function()
        {
            $("h3").stop(2000)
        })
    </script>
</body>
</html>

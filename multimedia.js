/*
        -> 
    <!DOCTYPE html>
<html lang="hu">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Multimédia elemek beillesztése</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            text-align: center;
            margin-top: 20px;
        }
        img, video, audio {
            margin: 20px;
        }
    </style>
</head>
<body>

    <h1>Multimédia elemek beillesztése</h1>

    <!-- Kép beillesztése -->
    <h2>Kép</h2>
    <img id="image" src="" alt="Kép" width="300">

    <!-- Videó beillesztése -->
    <h2>Videó</h2>
    <video id="video" width="320" height="240" controls>
        <source src="" type="video/mp4">
        A böngésző nem támogatja a videó lejátszását.
    </video>

    <!-- Hangfájl beillesztése -->
    <h2>Hangfájl</h2>
    <audio id="audio" controls>
        <source src="" type="audio/mp3">
        A böngésző nem támogatja a hang lejátszását.
    </audio>

    <script>
        // Kép beillesztése JavaScript-tel
        const imageElement = document.getElementById("image");
        imageElement.src = "https://via.placeholder.com/300"; // URL egy képhez

        // Videó beillesztése JavaScript-tel
        const videoElement = document.getElementById("video").children[0];
        videoElement.src = "https://www.w3schools.com/html/mov_bbb.mp4"; // URL egy videóhoz

        // Hangfájl beillesztése JavaScript-tel
        const audioElement = document.getElementById("audio").children[0];
        audioElement.src = "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"; // URL egy hangfájlhoz
    </script>

</body>
</html>
*/ 
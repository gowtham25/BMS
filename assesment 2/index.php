<?php 
    $ch = curl_init();
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, TRUE);
    curl_setopt($ch, CURLOPT_URL, "https://in.bookmyshow.com/serv/getData?cmd=GETTRAILERS&mtype=cs");
    $output = curl_exec($ch);

    curl_close($ch);
?>
<head>
    <title>Movie's Trailer</title>
</head>
<style>
    body{
        background-color: #000;
    }
    .movie-container{
        margin: auto;
        height: 300px;
        width: 200px;
        display: inline-flex;
        margin:42px;
    }
    .movie-poster{
        width: 190px;
        height: 280px;
        border: 6px solid #FFF;
        border-radius: 4px;
    }   
    .hidden-div{
        width: 199px;
        height: 289px;
        position: absolute;
        opacity: 0;
        text-align: center;
        font-size: 18px;
        font-weight: bold;
        color: #FFF;
        text-transform: uppercase;
    } 
    .hidden-div span{
        position: relative;
        top: 20%;
    }
    
    .hidden-div:hover{
        opacity: 1;
        z-index: 2;
        cursor: pointer;
    }
    .hidden-div:hover + .movie-poster{
        opacity: 0.5;
    }

    .viewTrailer{
        background: #0078ff;
        padding: 5px 10px;
        border-radius: 3px;
        font-size: 17px;
        color: #fff;
        vertical-align: top;
        outline: none;
        cursor: pointer;
        top: 76%;
        margin: auto;
        width: 114px;
        position: absolute;
        border: none;
        transform: translateX(-50%);
    }
    #video-placeholder{
        width:60%;
    }
    #videoContainer{
        width: 94%;
        border: 6px solid #FFF;
        margin: auto;
        padding: 22px;
        border-radius: 4px;
        margin-top: 25px;
        margin-bottom: 25px;
    }
    #cancel{
        position: relative;
        top: -489px;
        right: -520px;
        color: #FFF;
        font-size: 50px;
        font-family: fantasy;
        cursor: pointer;
    }
    .header-title{
        color: #FFF;
        text-align: center;
        font-family: cursive;

    }
    .card-footer{
        width: 410px;
        position: relative;
        color: #FFF;
        top: 290px;
        left: -200px;
    }
    .card-footer h5{
        margin: 0;
        padding: 10px 0;
        width: 200px;
        font-family: sans-serif;
    }
</style>
<h2 class="header-title">Movie's Trailer</h2>
<div class="trailer-container">
</div>
<script>
    var cityList = <?php echo $output ?>;
    cityList = cityList[1];
</script> 
<script type="text/javascript" src="https://www.youtube.com/iframe_api"></script>
<script type="text/javascript" src="file.js"></script>

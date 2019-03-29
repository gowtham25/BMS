<?php 
    $ch = curl_init();
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, TRUE);
    curl_setopt($ch, CURLOPT_URL, "https://in.bookmyshow.com/serv/getData?cmd=GETTRAILERS&mtype=cs");
    $output = curl_exec($ch);

    curl_close($ch);
?>
<style>
    body{
        background-color: #000;
    }
    .movie-container{
        /* grid-area: movie; */
        margin: auto;
        height: 300px;
    }
    .trailer-container{
        display: grid;
        grid-column-gap: 30px;
        grid-row-gap: 30px;
        grid-template-rows: 1fr 1fr 1fr 1fr;
        grid-template-areas: "movie movie movie movie";
        padding: 10px;
        padding: 38px 60px;
    }
    @media (max-width: 1000px) and (min-width:670px){
        .trailer-container{
            display: grid;
            grid-column-gap: 30px;
            grid-row-gap: 30px;
            grid-template-columns: 1fr 1fr 1fr;
            grid-template-areas: "movie movie movie";
            padding: 10px;
        }
    }
    @media (max-width: 670px){
        .trailer-container{
            display: grid;
            grid-column-gap: 30px;
            grid-row-gap: 30px;
            grid-template-columns: 1fr 1fr;
            grid-template-areas: "movie movie";
            padding: 10px;
        }
    }
    .movie-poster{
        width: 190px;
        height: 280px;
        border: 6px solid #FFF;
        border-radius: 4px;
    }   
    .hidden-div{
        width: 202px;
        height: 292px;
        position: relative;
        top: -292px;
        left: 0px;
        opacity: 0;
        text-align: center;
        font-size: 26px;
        font-weight: bold;
        color: #FFF;
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
</style>
<div class="trailer-container">
</div>
<script>
    var cityList = <?php echo $output ?>;
    cityList = cityList[1];
</script> 
<script type="text/javascript" src="file.js"></script>

<template>
<div id="donate">
<sui-message info>🙏Donate -寄付-🙏</sui-message> 
  <table>
    <tr> <td></td> <td>Address</td> <td>Copy</td> <td>QR</td> </tr>
    <tr><td><img src="./assets/btc.png"></td>
            <td><input id="btc" value="1PcciMQgdWopFaamv9Z6zb6fXvrCenrqKL"></td>
            <td><button class="btn" data-clipboard-target="#btc" type="button"><img src="./assets/copy.svg" alt=""></button></td>
            <td><a href="./assets/btc_qr.jpg" data-lighter><button type="button"><img src="./assets/qrcode-solid.svg"></button></a></td>
        </tr>
    <tr><td><img src="./assets/eth.png"></td>
        <td><input id="eth" value="0x0B3f06D82c45Aec939Cd16f79214799C9be81B5f"></td>
        <td><button class="btn" data-clipboard-target="#eth" type="button"><img src="./assets/copy.svg" alt=""></button></td>
        <td><a href="./assets/eth_qr.jpg" data-lighter><button type="button"><img src="./assets/qrcode-solid.svg"></button></a></td>
    </tr>
    <tr><td><img src="./assets/bch.png"></td>
        <td><input id="bch" value="qpf5adhqtaemm87sn3s6l72c4dy0pv9yjsgayzgj3u"></td>
        <td><button class="btn" data-clipboard-target="#bch" type="button"><img src="./assets/copy.svg" alt=""></button></td>
        <td><a href="./assets/bch_qr.jpg" data-lighter><button type="button"><img src="./assets/qrcode-solid.svg"></button></a></td>
    </tr>
    <tr><td><img src="./assets/ltc.png"></td>
        <td><input id="ltc" value="LL7nTqrVuZShUvsfCXWTR2aXFLXByL75ss"></td>
        <td><button class="btn" data-clipboard-target="#ltc" type="button"><img src="./assets/copy.svg" alt=""></button></td>
        <td><a href="./assets/ltc_qr.png" data-lighter><button type="button"><img src="./assets/qrcode-solid.svg"></button></a></td>
    </tr>
    <tr><td><img src="./assets/mona.png"></td>
            <td><input id="mona" value="MK63w5Kq8Dsi97SbzzaWMK2WBQ2yPuMhrX"></td>
            <td><button class="btn" data-clipboard-target="#mona" type="button"><img src="./assets/copy.svg" alt=""></button></td>
            <td><a href="./assets/mona_qr.png" data-lighter><button type="button"><img src="./assets/qrcode-solid.svg"></button></a></td>
    </tr>
    <tr><td><img src="./assets/zny.png"></td>
        <td><input id="zny" value="ZgBXjdn2WeCMW6WMEc6v7bzcdYxji6zb22"></td>
        <td><button class="btn" data-clipboard-target="#zny" type="button" data-hover="copy"><img src="./assets/copy.svg" alt=""></button></td>
        <td><a href="./assets/zny_qr.png" data-lighter><button type="button"><img src="./assets/qrcode-solid.svg"></button></a></td>
    </tr>
</table>
<sns/><contact/>
</div>
</template>

<script>
import sns from './components/sns'
import contact from './components/contact'
export default {
    components: {
        sns,
        contact
    }
}
</script>

<style scoped>
#donate{
    text-align: center;
}
html{
    display: block;
    width: 100%;
    height: 100%;
    background-image: radial-gradient( circle 963px at 1.9% 5%,  rgba(0,193,80,1) 0%, rgba(0,112,198,1) 100.2% );
    

}
body{
    text-align: center;
    color: white;
}

h3 h5 p{
    color: white;
}

table{
    font-size: 20px;
    margin-left: auto;
    margin-right: auto;
    width: 75%;

}
td{
    max-width: 70%;
    color: #fff;
    text-align:center;
    
}
img{
    width: 36px;
    height: 36px;
}
input{
    width: 100%;
    height: 24px;
    padding: 15px;
    border-radius: 5px;
    
}
button{
    margin: 5px;
    padding: 1px;
    border-radius: 5px;
}
footer{
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 100px;

}
footer ul{
    list-style: none;
}

footer ul li{
    display: inline;
    margin-right: 1em;
}
@media screen and ( max-width:479px )
{
    td{
    padding-left:5px;
    padding-right: 5px;
}}

.arrow_box {
    display: none;
    left: 40%;
    position: absolute;
    padding: 16px;
    -webkit-border-radius: 8px;
    -moz-border-radius: 8px;  
    border-radius: 8px;
    background: #333;
    color: #fff;
  }
  
  .arrow_box:after {
    position: absolute;
    bottom: 100%;
    left: 50%;
    width: 0;
    height: 0;
    margin-left: -10px;
    border: solid transparent;
    pointer-events: none;
    content: " ";
  }
ui message{
    margin: 10px auto;
    width: 80%;
}

</style>
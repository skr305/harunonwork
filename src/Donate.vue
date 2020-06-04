<template>
<div id="donate">
<sui-message info>🙏Donate -寄付-🙏</sui-message> 
  <table>
    <tr> <td></td> <td>Address</td> <td>Copy</td> <td>QR</td> </tr>
    <tr><td><img src="./assets/btc.png"></td>
            <td><input id="btc" value="1PcciMQgdWopFaamv9Z6zb6fXvrCenrqKL" v-model="btc"></td>
            <td><button class="btn" type="button" v-clipboard:copy="btc" v-clipboard:success="onCopy" v-clipboard:error="onError"><img src="./assets/copy.svg" alt=""></button></td>
            <td><button @click="toggle"><img src="./assets/qrcode-solid.svg"></button>
            <sui-modal v-model="open">
                <sui-modal-header>Bitcoin</sui-modal-header>
                <sui-modal-content image>
                    <img src="./assets/btc_qr.jpg" class="modal-image"/>
                </sui-modal-content>
                </sui-modal></td>
        </tr>
    <tr><td><img src="./assets/eth.png"></td>
        <td><input id="eth" value="0x0B3f06D82c45Aec939Cd16f79214799C9be81B5f" v-model='eth'></td>
        <td><button class="btn" type="button" v-clipboard:copy="eth" v-clipboard:success="onCopy" v-clipboard:error="onError"><img src="./assets/copy.svg" alt=""></button></td>
            <td><button @click="toggle1"><img src="./assets/qrcode-solid.svg"></button>
            <sui-modal v-model="open1">
                <sui-modal-header>Ethereum</sui-modal-header>
                <sui-modal-content image>
                    <img src="./assets/eth_qr.jpg" class="modal-image"/>
                </sui-modal-content>
                </sui-modal></td>
        </tr>
    <tr><td><img src="./assets/bch.png"></td>
        <td><input id="bch" value="qpf5adhqtaemm87sn3s6l72c4dy0pv9yjsgayzgj3u" v-model="bch"></td>
        <td><button class="btn" type="button" v-clipboard:copy="bch" v-clipboard:success="onCopy" v-clipboard:error="onError"><img src="./assets/copy.svg" alt=""></button></td>
            <td><button @click="toggle2"><img src="./assets/qrcode-solid.svg"></button>
            <sui-modal v-model="open2">
                <sui-modal-header>Bitcoin Cash</sui-modal-header>
                <sui-modal-content image>
                    <img src="./assets/bch_qr.jpg" class="modal-image"/>
                </sui-modal-content>
                </sui-modal></td>
        </tr>
    <tr><td><img src="./assets/ltc.png"></td>
        <td><input id="ltc" value="LL7nTqrVuZShUvsfCXWTR2aXFLXByL75ss" v-model="ltc"></td>
        <td><button class="btn" type="button" v-clipboard:copy="ltc" v-clipboard:success="onCopy" v-clipboard:error="onError"><img src="./assets/copy.svg" alt=""></button></td>
            <td><button @click="toggle3"><img src="./assets/qrcode-solid.svg"></button>
            <sui-modal v-model="open3">
                <sui-modal-header>LiteCoin</sui-modal-header>
                <sui-modal-content image>
                    <img src="./assets/ltc_qr.png" class="modal-image"/>
                </sui-modal-content>
                </sui-modal></td>
        </tr>
    <tr><td><img src="./assets/mona.png"></td>
            <td><input id="mona" value="MK63w5Kq8Dsi97SbzzaWMK2WBQ2yPuMhrX" v-model="mona"></td>
            <td><button class="btn" type="button" v-clipboard:copy="mona" v-clipboard:success="onCopy" v-clipboard:error="onError"><img src="./assets/copy.svg" alt=""></button></td>
            <td><button @click="toggle4"><img src="./assets/qrcode-solid.svg"></button>
            <sui-modal v-model="open4">
                <sui-modal-header>Monacoin</sui-modal-header>
               <sui-modal-content image>
                    <img src="./assets/mona_qr.png" class="modal-image"/>
                </sui-modal-content>
                </sui-modal></td>
        </tr>
    <tr><td><img src="./assets/zny.png"></td>
        <td><input id="zny" value="ZgBXjdn2WeCMW6WMEc6v7bzcdYxji6zb22" v-model="zny"></td>
        <td><button class="btn" type="button" v-clipboard:copy="zny" v-clipboard:success="onCopy" v-clipboard:error="onError"><img src="./assets/copy.svg" alt=""></button></td>
            <td><button @click="toggle5"><img src="./assets/qrcode-solid.svg"></button>
            <sui-modal v-model="open5">
                <sui-modal-header>Bizeny</sui-modal-header>
                <sui-modal-content image>
                    <img src="./assets/zny_qr.png" class="modal-image"/>
                </sui-modal-content>
                </sui-modal></td>
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
    }, 
    data(){
        return {
            //qr modal
            open: false,
            open1: false,
            open2: false,
            open3: false,
            open4: false,
            open5: false,
            
            btc: '1PcciMQgdWopFaamv9Z6zb6fXvrCenrqKL',
            eth: '0x0B3f06D82c45Aec939Cd16f79214799C9be81B5f',
            bch: 'qpf5adhqtaemm87sn3s6l72c4dy0pv9yjsgayzgj3u',
            ltc: 'LL7nTqrVuZShUvsfCXWTR2aXFLXByL75ss',
            mona: 'MK63w5Kq8Dsi97SbzzaWMK2WBQ2yPuMhrX',
            zny: 'ZgBXjdn2WeCMW6WMEc6v7bzcdYxji6zb22',
        }
    },
    methods: {
        toggle() {
            this.open = !this.open
        },
        toggle1() {
            this.open1 = !this.open1
        },
        toggle2() {
            this.open2 = !this.open2
        },
        toggle3() {
            this.open3 = !this.open3
        },
        toggle4() {
            this.open4 = !this.open4
        },
        toggle5() {
            this.open5 = !this.open5
        },
        onCopy: function(e) {
            alert('Copied: '+ e.text )
        },
        onError: function(e){
            alert('Error' +e.text)
            
        }
    }
}
</script>

<style scoped>
#donate{
    text-align: center;
    margin-top: 30px;
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
.modal-image{
    margin: 10px auto;
    width: 50%;
    height: auto;
}
</style>
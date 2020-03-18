<template>
  <div class="hello">
    <h1>Portfolio</h1>
    <sui-message info>Products</sui-message> 
    <ul>
    <li>
      <sui-card>
      <a href="https://harunonsystem.github.io/illustmap/monacoin" target="_blank"><sui-image src="https://harunonsystem.github.io/illustmap/monacoin/images/map.png"/></a>
      <sui-card-content>
        <sui-card-header><a>Illustmap-MONA</a></sui-card-header>
        <sui-card-meta>
          <a>illustmap for MONACOIN</a>
        </sui-card-meta>
      </sui-card-content>
    </sui-card>
    </li>
    <li>
      <sui-card>
      <a href="https://harunonsystem.github.io/illustmap/bitzeny" target="_blank"><sui-image src="https://harunonsystem.github.io/illustmap/bitzeny/images/illustmap.png"/></a>
      <sui-card-content>
        <sui-card-header><a>Illustmap-ZNY</a></sui-card-header>
        <sui-card-meta>
          <a>illustmap for BITZENY</a>
        </sui-card-meta>
      </sui-card-content>
    </sui-card>
    </li>
    <li>
    <sui-card>
      <a href="https://harunonsystem.github.io/illustmap/kizuna" target="_blank"><sui-image src="https://harunonsystem.github.io/illustmap/kizuna/images/kizuna.png"/></a>
      <sui-card-content>
        <sui-card-header><a>Illustmap-KIZUNA</a></sui-card-header>
        <sui-card-meta>
          <a>illustmap for KIZUNA</a>
        </sui-card-meta>
      </sui-card-content>
    </sui-card>
    </li>
    <li>
    <sui-card>
     <router-link to="../Donate"><sui-image src="https://harunonsystem.github.io/image/harunon.png"/></router-link>
      <sui-card-content>
        <sui-card-header><a>Donate</a></sui-card-header>
        <sui-card-meta>
          <a>Donate for CryptoCurrency</a>
        </sui-card-meta>
      </sui-card-content>
    </sui-card>
    </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'card',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
html {
    background: linear-gradient(-135deg, #E4A972, #9941D8) fixed;
}
h3{
  color: #fff;
}
ul {
  display: flex;
  flex-wrap: wrap;
  list-style-type: none;
  padding: 0;
}
li {
  margin: 10px;
}
a {
  color: #42b983;
}
sui-card{
  display: flex;
  flex-wrap: wrap;
  margin: 0 10px;
}
sui-card-meta a{
  color: #E4A972;
}
figure img {
  -webkit-filter: grayscale(100%);
  filter: grayscale(100%);
  -webkit-transition: .3s ease-in-out;
  transition: .3s ease-in-out;
}
figure:hover img {
  -webkit-filter: grayscale(0);
  filter: grayscale(0);
}
</style>

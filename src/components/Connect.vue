<template>


<div class="container">
  <div class="hello">
    <h1>Chat</h1>
    <p>
      Her kan du chatte med dine venner og bekendte. Klik på knappen, som vil føre dig til
      et sikkert sted, hvor du kan snakke med rigtige mennesker
    </p>
    <div class="container1">
     
  <button onclick="window.location.href='https://nifty-montalcini-3382e1.netlify.app/'">Continue</button>

   

    </div>
    <p>Fandt du ikke dit spil? Fortvivl ej! Der er hele tiden nye events!</p>
    </div>
    </div>
</template>

<script>
export default {
  name: 'Chat',
  props: {
    msg: String
  }
}


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
  font-size: 10px;
}
ul {
  list-style-type: none;
  padding: 0;
    font-size: 10px;

}

h1 {
  font-size: 25px;
}

li {
  display: inline-block;
  margin: 0 10px;
    font-size: 10px;

}
a {
  color: #42b983;
    font-size: 10px;

}

body {
  background-color: rgb(0, 0, 0);
    font-size: 10px;

}


.container {
    width: 100%;
    max-width: 600px;
    margin: 50px auto;
    height: auto;
    border-radius: 25px;
    box-shadow: 2px 4px 6px rgba(28, 6, 49, 0.1);
    background: #b88cfc;
    margin-bottom: 10px;
  }

  .container1 {
    width: 100%;
    max-width: 500px;
    margin: 30px auto;
    border-radius: 20px;
    box-shadow: 2px 4px 6px #1c06311a;
    background: rgb(255, 255, 255);
    color: black;

  }

  .post-container {
    margin: 10px 20px 0 0;  
    border: 5px solid #333;
    overflow: auto
}
.post-thumb {
    float: left
}
.post-thumb img {
    display: block
}
.post-content {
    margin-left: 210px
}
.post-title {
    font-weight: bold;
    font-size: 100%
}

button {
  border-radius: 25px;
} 


</style>


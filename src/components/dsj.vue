<template>
  <div class="dsj">
     <img src="../../static/dsj/dsj_01.png"/>
     <img src="../../static/dsj/dsj_02.png"/>
     <div class="back" @click="backpage()">
     	  <img src="../../static/dsj/return.png"/>
     </div>
    <audio id="clickMusic" src="./static/clickaudio.mp3" >
    </audio>
    <!--导航-->
    <div class="nav" @click="back">
      <img src="../../static/jwl/top.png"/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      audiodom : ''
    }
  },
  mounted(){
    var self = this;
    self.audiodom = document.getElementById('clickMusic')
    window.addEventListener('scroll', this.handleScroll);
  },
  methods: {
  	backpage(){
  		  var self = this
				 self.audiodom.play();
				setTimeout(function(){
					self.$emit('listenToChildEvent',0)
				},300)

  	},
    handleScroll :function(){
      this.scrolled = window.scrollY > 0;
      if(window.scrollY>680){
        $('.nav').show();
      }else{
        $('.nav').hide();
      }
    },
    back:function(){
      $('body,html').animate({ scrollTop: 0 }, 200);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.dsj{
	position: relative;
}
/*.back{
	position: absolute;
	left: 10px;
	top: 10px;
	width: 44px;
}*/
.nav{
  position: fixed;
  top: 50%;
  right: 10px;
  width:44px;
  display: none;
  z-index: 9999;
}
</style>

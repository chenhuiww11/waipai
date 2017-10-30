<template>
  <div class="jwl">
     <img src="../../static/jwl/jwlbg.jpg"/>
     <img src="../../static/jwl/1_01.png" class="jwlpic"/>
		 <img src="../../static/jwl/1_03.png" class="jwlpic"/>
		 <img src="../../static/jwl/1_05.png" class="jwlpic"/>
		 <img src="../../static/jwl/1_07.png" class="jwlpic"/>
		 <img src="../../static/jwl/1_09.png" class="jwlpic nobottom"/>
		 <img src="../../static/jwl/jwlbottom.jpg"/>
     <div class="back" @click="back()">
     	  <img src="../../static/dsj/return.png"/>
     </div>
     <!--导航-->
	    <div class="nav" @click="jwlback()">
	    	<img src="../../static/jwl/top.png"/>

	    </div>
	    <div class="backnav" @click="back()">
	    	<img src="../../static/loading/return.png"/>
	    </div>
    <audio id="clickMusic" src="./static/clickaudio.mp3" >
    </audio>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      scrolled: false,
      audiodom : ''
    }
  },
  mounted(){
    var self = this;
    self.audiodom = document.getElementById('clickMusic')
  },
  methods: {
  	back(){
  		   var self = this
				 self.audiodom.play();
				setTimeout(function(){
					self.$emit('listenToChildEvent',0)
				},300)
  	},
  	jwlback(){
  		$('body,html').animate({ scrollTop: 0 }, 200);
  	},
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.jwl{
	position: relative;
	background: url("../../static/detail/bgbg.jpg") repeat;
  background-size: 100px 100px;
	width: 100%;
	min-height: 100%;
	text-align: center;
}
.jwlpic{
	width: 84%;
	margin-bottom: 80px;
}
.nobottom{
	margin-bottom: 0;
}
</style>

<template>
  <div class="cqbang">
    <img src="../../static/dsj/txt.png" class="text"/>
    <div class="back" @click="back()">
     	  <img src="../../static/dsj/return.png"/>
     </div>
     <div class="banquana">
    		<img src="../../static/banner/banquan.png" class="banquan"/>
    	</div>
    	<audio id="clickMusic" src="../../static/clickaudio.mp3" >
    	</audio>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      audiodom : ''
    }
  },
  mounted(){
  	this.audiodom = document.getElementById('clickMusic')
  },
   methods: {
  	back(){
			var self = this
				self.audiodom.play();
				setTimeout(function(){
					self.$emit('listenToChildEvent',0)
				},300)
        
  	}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.cqbang{
	position: relative;
	background: url("../../static/detail/bgbg.jpg") repeat;
  background-size: 100px 100px;
	width: 100%;
	min-height: 100%;
	padding:70px 0 0px 0;
	text-align: center;
}
.back{
	position: absolute;
	left: 10px;
	top: 10px;
	width: 44px;
}
.text{
	width: 80%;
}
.banquana{
	/*text-align: center;*/
	width: 100%;
	/*padding: 60px 0 10px 0px;*/
  position: absolute;
  bottom: 20px;
  margin: 0 auto;
}
.banquan{
	width: 80%;
}
</style>

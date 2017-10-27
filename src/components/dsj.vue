<template>
  <div class="dsj">
     <img src="../../static/dsj/dsj_01.png"/>
     <img src="../../static/dsj/dsj_02.png"/>
     <div class="back" @click="back()">
     	  <img src="../../static/dsj/return.png"/>
     </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
  	back(){
  		  var self = this
				// self.audiodom.play();
				setTimeout(function(){
					self.$emit('listenToChildEvent',0)
				},300)
        
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
</style>

<template>
  <div class="cqbang">
    <img src="../../static/gsj/gushiji.jpg" class="gsjheader">
    <img src="../../static/gsj/gsjline.png" class="gsjline">
    <img src="../../static/gsj/gsjbuy.png" class="gsjbuy">
    <ul class="gsjbuyinfo">
        <li @click="outjump('https://item.jd.com/12199337.html#product-detail')">
            <img src="../../static/gsj/gsjjd.png" alt="">
        </li>
        <li @click="outjump('http://product.dangdang.com/25173407.html')">
            <img src="../../static/gsj/gsjdd.png" alt="">
        </li>
        <li @click="outjump('https://detail.tmall.com/item.htm?spm=a1z10.1-b-s.w12088739-16874648415.1.6f085b3eZvoSK&id=558953646804&rn=6ea0f05f10e1a57e79f6b5cb10649ed6&abbucket=15')">
            <img src="../../static/gsj/gsjtm.png" alt="">
        </li>
    </ul>
    <div class="back" @click="back()">
     	  <img src="../../static/dsj/return.png"/>
     </div>
     <div class="banquana">
    		<img src="../../static/banner/banquan.png" class="banquan"/>
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
      audiodom : ''
    }
  },
  mounted(){
  	this.audiodom = document.getElementById('clickMusic')
  },
   methods: {
    outjump(val){
            console.log(window.sessionStorage.getItem('headerheight'))
            if(window.sessionStorage.getItem('headerheight')!=0){
                window.sessionStorage.setItem('headerheighttwo',window.sessionStorage.getItem('headerheight'))
    
            }
        window.sessionStorage.setItem('isnewpage',true)
        window.location.href = val;
    },
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
	padding:70px 0 70px 0;
	text-align: center;
}
/*.back{
	position: absolute;
	left: 10px;
	top: 10px;
	width: 44px;
}*/
.gsjheader{
    display: block;
	width: 50%;
    margin: 0 auto;
}
.gsjline{
    display: block;
    width: 30%;
     margin: 0 auto;
     margin-top: 50px
}
.gsjbuy{
     display: block;
    width: 20%;
     margin: 0 auto;
     margin-top: 50px
}
.gsjbuyinfo{
    padding: 0 10%;
    margin-top: 20px;
    display: -webkit-box;
}
.gsjbuyinfo li{
    padding: 0 20px;
    -webkit-box-flex: 1
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

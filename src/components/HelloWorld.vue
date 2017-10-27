<template>
  <div class="hello">
  	<div class="bigbanner">
    	<img src="../../static/loading/banner.png"/>
    	<img src="../../static/banner/arrow.png" class="arrow"/>
    	<div class="voice" @click="bgaudio" id="bgaudioclick">
    		<img src="../../static/banner/voice.png" v-show="isbgaudio"/>
        <img src="../../static/banner/voice-close.png" v-show="!isbgaudio"/>
    	</div>
    </div>
    <div class="content">
    	  <ul class="contentlist">
    	  	<li @click="jump(1)">
    	  			<img src="../../static/banner/banner_03.jpg" class="pic"/>
    	  	</li>
    	  	<li @click="jump(2)">
    	  			<img src="../../static/banner/banner_05.jpg" class="pic"/>
    	  	</li>
    	  	<li @click="jump(3)">
    	  			<img src="../../static/banner/banner_07.jpg" class="pic"/>
    	  	</li>
    	  	<li @click="jump(4)">
    	  			<img src="../../static/banner/banner_09.jpg" class="pic"/>
    	  	</li>
    	  	<li class="nopadding" @click="jump(5)">
    	  			<img src="../../static/banner/banner.jpg" class="pic"/>
    	  	</li>

    	  </ul>
    </div>
    <div class="xsnr">
    	<div class="xsnrtitle">
    		<div class="adress">
    			<img src="../../static/loading/cc.jpg"/>
    			<img src="../../static/banner/tianluo_02.jpg" class="pic4" @click="show(2)"/>
    		</div>
    	</div>
    	<div class="xsnrtitle nobg">
    		<div class="adresstwo">
    			<img src="../../static/banner/banner_16.jpg"/>
    			<img src="../../static/banner/banner_17.jpg" class="pic4" @click="show(2)"/>
    		</div>
    	</div>
    	<div class="xsnrtitle nobg">
    		<div class="adresstwo">
    			<img src="../../static/banner/banner_18.jpg"/>
    			<img src="../../static/banner/banner_19.jpg" class="pic4" @click="show(3)"/>
    		</div>
    	</div>
    	<div class="xsnrtitle nobg">
    		<div class="adresstwo">
    			<img src="../../static/banner/banner_20.jpg"/>
    			<img src="../../static/banner/banner_21.jpg" class="pic4" @click="show(4)"/>
    		</div>
    	</div>
    	<div class="xsnrtitle nobg">
    		<div class="adresstwo">
    			<img src="../../static/banner/banner_22.jpg"/>
    			<img src="../../static/banner/banner_23.jpg" class="pic4" @click="show(5)"/>
    		</div>
    	</div>
    	<div class="more">
    		<img src="../../static/banner/xianshi.png" class="moreimg" @click="show(6)"/>
    	</div>
    	<div class="banquana">
    		<img src="../../static/banner/banquan.png" class="banquan"/>
    	</div>
    </div>


    <!--导航-->
    <div class="nav" @click="back()">
    	<img src="../../static/jwl/top.png"/>
    </div>
    <!--小图放大图-->
    <div class="page">
        <div class="pinch-zoom">
            <img src="../../static/banner/1.jpg" class="pagebg"/>
        </div>
    </div>
    <div class="returnclick">
      <audio id="Music" src="./static/bg.mp3" loop="loop" preload>
    	</audio>
     </div>
    <audio id="clickMusic" src="./static/clickaudio.mp3" >
    </audio>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props : ['isShowAudio'],
  data () {
    return {
    	picwidth:document.body.clientWidth-40,//屏幕宽度
    	imgwidth:'',
    	audiow:'',
      isbgaudio : true,
    	scrolled: false,
			isAndroid:'',
			isiOS:'',
			headerheight:0,
      clickMusic : ''
    }
  },
  created(){
		var u = navigator.userAgent;
		this.isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; //android终端
		this.isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
  	var self=this;
  	self.$nextTick(function(){
      self.imgwidth=self.picwidth/5*0.7
  		$('.pic').css('width',self.imgwidth)
				$('.page').click(function(){
					$('.page').hide();
					event.preventDefault();
				})
      document.addEventListener("WeixinJSBridgeReady", function () {
				if(self.isiOS){

					self.audiow.play();
        	self.audiow.pause();
				}
      }, false);
    })

  },
  methods: {
  	jump(num){
      var self = this
      self.audiodom.play();
      if(num == 3){
        window.sessionStorage.setItem('isnewpage',true)
        window.location.href = 'https://item.jd.com/12199337.html#product-detail'
      }else{
        setTimeout(function(){
          self.$emit('listenToChildEvent',num)
        },100)
      }
  	},
  	show(num){
  		if(num==1){
  			$('.pagebg').attr('src','./static/banner/1.jpg')
  		}else if(num==2){
  			$('.pagebg').attr('src','./static/banner/2.jpg')
  		}else if(num==3){
  			$('.pagebg').attr('src','./static/banner/3.jpg')
  		}else if(num==4){
  			$('.pagebg').attr('src','./static/banner/4.jpg')
  		}else if(num==5){
  			$('.pagebg').attr('src','./static/banner/5.jpg')
  		}else if(num==6){
  			$('.pagebg').attr('src','./static/banner/moreadress.png')
  		}
  		$('.pinch-zoom').each(function () {
		                new RTP.PinchZoom($(this), {});
		            });
					$('.page').show();
  	},
  	handleScroll () {
    	this.scrolled = window.scrollY > 0;
    	if(window.scrollY>680){
    		$('.nav').show();
    	}else{
    		$('.nav').hide();
    	}
  	},
  	back(){
  		$('body,html').animate({ scrollTop: 0 }, 200);
  	},
  	returnclick : function(){
  		var self=this;
  		if (self.audiow.paused) {
            self.audiow.play();
        } else {
        	self.audiow.paused();
            // 播放中
        }
    },
    bgaudio : function(){
      var self=this;
      console.log(self.audiow.paused)
      if (self.audiow.paused) {
        self.audiow.play();
        self.isbgaudio = true
      } else {
        self.audiow.pause();
        self.isbgaudio = false
        // 播放中
      }
    }
  },
  mounted(){
    var self = this;
		self.audiow = document.getElementById('Music')
    self.audiodom = document.getElementById('clickMusic')
		setTimeout(function(){
			window.sessionStorage.setItem('headerheight',$('.bigbanner').height())
			self.headerheight=$('.bigbanner').height();
		},2000)
  	window.addEventListener('scroll', this.handleScroll);
	},
	updated(){

	},
  watch : {
    isShowAudio : function(){
      var self = this
      if(self.isShowAudio){
        self.audiow.play();
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello{
	background: url("../../static/detail/bgbg.jpg") repeat;
  background-size: 100px 100px;
	width: 100%;
	min-height: 100%;
}
.bigbanner{
	position: relative;
}
.arrow{
	position: absolute;
	bottom:13.5%;
	left: 50%;
	margin-left: -12px;
	width: 24px;
	-webkit-animation:gogogobottom 2s infinite linear ;
}
.content{
	padding-top: 100px;
}
.contentlist{
	box-sizing: border-box;
	padding: 0 20px;
	overflow: hidden;
}
.contentlist li{
	width: 20%;
	float: left;
	min-height: 100px;
}
.contentlist li{
	box-sizing: border-box;
	text-align: center;
}
.contentlist .nopadding{
	padding-right: 0;
}
.xsnr{
	margin-top: 100px;
}
.xsnrtitle{
	background: url(../../static/loading/shan1.png) no-repeat;
	background-size:contain;
}
.adress{
	position: relative;
	top: 60px;
	text-align: center;
}
.adresstwo{
	position: relative;
	text-align: center;
}
.nobg{
	background: none;
}
.pic2{
	width: 70%;
}
.pic3{
	width:60%;
	margin-top: 40px;
}
.pic4{
	width:100%;
}
.more{
	text-align: center;
	width: 100%;
	padding: 100px 0 50px 0;
}
.banquana{
	text-align: center;
	width: 100%;
	padding: 30px 0;
}
.moreimg{
	width: 100px;
}
.banquan{
	width: 80%;
}
.nav{
	position: fixed;
	top: 50%;
	right: 10px;
	width:44px;
	display: none;
}
.voice{
	position: absolute;
	top: 10px;
	right: 10px;
	width:44px;
}
@-webkit-keyframes gogogobottom {
  0%{
    -webkit-transform:translateY(0);
    opacity: 1;
  }
  25%{
    opacity: 0.5;
  }
  50%{
    -webkit-transform:translateY(10px);
    opacity: 0.8;
  }
  75%{
    opacity: 0.5;
  }
  100%{
    -webkit-transform:translateY(0);
    opacity: 1;
  }
}
</style>

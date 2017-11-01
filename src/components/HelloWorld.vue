<template>
  <div class="hello">
  	<div class="bigbanner">
    	<img src="../../static/loading/banner.png"/>
    	<img src="../../static/banner/arrow.png" class="arrow"/>
    	<!--<div class="voice" @click="bgaudio" id="bgaudioclick">
    		<img src="../../static/banner/voice.png" v-show="isbgaudio"/>
        <img src="../../static/banner/voice-close.png" v-show="!isbgaudio"/>
    	</div>-->
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
    		<div class="adress allshicha">
    			<img src="../../static/newpic/1.png" class="shicha"/>
    			<div class="shanshuo allshicha">
    				<img src="../../static/newpic/shan2.png" class="pic5 sc"/>
    				<img src="../../static/newpic/tianluo.png" class="pic4 sc1" @click="show(1)"/>
    				<img src="../../static/loading/dian.png" class="dian"/>
    			</div>
    		</div>
    	</div>
    	<div class="xsnrtitle">
    		<div class="adress  nobg">
    			<img src="../../static/newpic/wujing.png" class="shicha"/>
    			<div class="shanshuo allshicha">
    				<img src="../../static/newpic/04.png" class="pic5 sc"/>
    				<img src="../../static/newpic/wujingditu.png" class="pic4 sc1" @click="show(2)"/>
    			</div>
    		</div>
    	</div>
    	<div class="xsnrtitle nobg">
    		<div class="adress  nobg">
    			<img src="../../static/newpic/wujinghuoyutext.png" class="shicha"/>
    			<div class="shanshuo allshicha">
    				<img src="../../static/newpic/06.png" class="pic5 sc"/>
    				<img src="../../static/newpic/wujinghuoyu.png" class="pic4" @click="show(3)"/>
    			</div>
    		</div>
    	</div>
    	<div class="xsnrtitle nobg">
    		<div class="adress  nobg">
    			<img src="../../static/newpic/beicangdalutext.png" class="shicha"/>
    			<div class="shanshuo allshicha">
    				<img src="../../static/newpic/08.png" class="pic5 sc2"/>
    				<img src="../../static/newpic/beicangdalu.png" class="pic4 sc3" @click="show(4)"/>
    			</div>
    		</div>
    	</div>
    	<div class="xsnrtitle nobg">
    		<div class="adress  nobg">
    			<img src="../../static/newpic/nanmingdalutext.png" class="shicha"/>
    			<div class="shanshuo allshicha">
    				<img src="../../static/newpic/10.png" class="pic5 sc2"/>
    				<img src="../../static/newpic/nanmingdalu.png" class="pic4 sc3" @click="show(4)"/>
    			</div>
    		</div>
    	</div>
    	<div class="more allshicha">
    		<img src="../../static/banner/xianshi.png" class="moreimg" @click="show(6)"/>
    	</div>
    	<div class="banquana allshicha">
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
      clickMusic : '',
      chushi:true,
      
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
					$("body").unbind('touchmove');
					$('.page').fadeOut(500);
					event.preventDefault();
				})
      document.addEventListener("WeixinJSBridgeReady", function () {
				if(self.isiOS){

					self.audiow.play();
        	self.audiow.pause();
				}
      }, false);
      $('.pinch-zoom').each(function () {
		                new RTP.PinchZoom($(this), {});
			});

    })

  },
  methods: {
  	jump(num){
      var self = this
      self.audiodom.play();
      // if(num == 3){
      //   window.sessionStorage.setItem('isnewpage',true)
      //   window.location.href = 'https://item.jd.com/12199337.html#product-detail'
      // }else{
        setTimeout(function(){
          self.$emit('listenToChildEvent',num)
        },100)
      // }
  	},
  	show(num){
  		 var self = this
      self.audiodom.play();
      $("body").bind('touchmove',function(event) { event.preventDefault(); }, false);
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
					$('.page').fadeIn(500);
  	},
  	handleScroll () {
    	this.scrolled = window.scrollY > 0;
    	if(window.scrollY>600){
    		var ju=window.scrollY*0.01
    		var jua=window.scrollY*0.06
    		var ju1=window.scrollY*0.06
    		var jua2=window.scrollY*0.03
//  		console.log(window.scrollY)
    		var jua3=window.scrollY*0.0314
    		var jua4=window.scrollY*0.025
    		$('.allshicha').css("top",-ju+"px");
    	$('.shicha').css("top",-jua+"px");
    		$('.sc').css("top",-ju1+"px");
    	$('.sc1').css("top",-jua2+"px");
    	$('.sc2').css("top",-jua3+"px");
    	$('.sc3').css("top",-jua4+"px");
    	}
    	if(window.scrollY>680){
    		$('.backnav').fadeIn(500);
    		$('.nav').fadeIn(500);
    	}else{
    		$('.nav').fadeOut(500);
    		$('.backnav').fadeOut(500);
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
//      self.audiow.play();
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
	background-attachment:fixed;
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
	position: relative;
}
.xsnrtitle{
	    margin-bottom: 60px;
}
.adress{
	position: relative;
	text-align: center;
	background: url(../../static/newpic/shan.png) no-repeat;
	background-size:100%;
	box-sizing: border-box;
	padding-top: 116px;
}
.adress>img{
	width: 80%;
}
.shicha{
	position: relative;
	margin-bottom: 40px;
}
.sc1,.sc3,.sc2{
	position: relative;
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
	    /*-webkit-animation: twinkling2 2s infinite linear;*/
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
	width: 70px;
}
.banquan{
	width: 80%;
}
.voice{
	position: absolute;
	top: 10px;
	right: 10px;
	width:44px;
}
.shanshuo{
	position: relative;
	/*background: url(../../static/newpic/shan2.jpg) no-repeat;
	background-size:100%;*/
	margin-top: 20px;
}
.pic5{
	position: absolute;
	left: 0;
	width: 100%;
	top: 0;
}
.dian{
	  position: absolute;
    top: 46%;
    left: 62%;
    -webkit-animation: twinkling-data-v-448a5f06 2s infinite linear;
    width: 26px;
    z-index: 2;
}
@-webkit-keyframes gogogobottom {
  0%{
    -webkit-transform:translateY(0);
    opacity: 1;
  }
  25%{
    opacity: 0.8;
  }
  50%{
    -webkit-transform:translateY(5px);
    opacity: 0.6;
  }
  75%{
  	-webkit-transform:translateY(15px);
    opacity: 0;
  }
  100%{
    -webkit-transform:translateY(0px);
    opacity: 0;
  }
}
@-webkit-keyframes twinkling2{   /*透明度由0到1*/
   0%{
        opacity:.9;                /*透明度为0*/
				transform:scale(1,1);
    }
		50%{
			opacity:1;              /*透明度为1*/
				transform:scale(1.05,1.05);
		}
    100%{
        opacity:.9;              /*透明度为1*/
				transform:scale(1,1);
    }
}
@-webkit-keyframes twinkling{   /*透明度由0到1*/
   0%{
        opacity:.9;                /*透明度为0*/
				transform:scale(.8,.8);
    }
		50%{
			opacity:1;              /*透明度为1*/
				transform:scale(1.2,1.2);
		}
    100%{
        opacity:.9;              /*透明度为1*/
				transform:scale(.8,.8);
    }
}
@keyframes twinkling{   /*透明度由0到1*/
    0%{
        opacity:.9;                /*透明度为0*/
				transform:scale(.8,.8);
    }
		50%{
			opacity:1;              /*透明度为1*/
				transform:scale(1.2,1.2);
		}
    100%{
        opacity:.9;              /*透明度为1*/
				transform:scale(.8,.8);
    }
}
</style>

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
    <div class="xsnr shicha">
    	<div class="xsnrtitle">
    		<div class="adress">
    			<img src="../../static/newpic/1.png" class="shicha" style="padding-top: 110px;"/>
    			<div class="shanshuo" style="margin-top: 0;">
    				<img src="../../static/newpic/shan2.png" class="pic5"/>
    				<img src="../../static/newpic/tianluo.png" class="pic4 allshicha" @click="show(1)"/>
    				<img src="../../static/loading/dian.png" class="dian"/>
    			</div>
    		</div>
    	</div>
    	<div class="xsnrtitle">
    		<div class="adress  nobg">
    			<img src="../../static/newpic/wujing.png" class="allshicha"/>
    			<div class="shanshuo ">
    				<img src="../../static/newpic/04.png" class="pic5"/>
    				<img src="../../static/newpic/wujingditu.png" class="pic4 sc1" @click="show(2)"/>
    			</div>
    		</div>
    	</div>
    	<div class="xsnrtitle nobg">
    		<div class="adress  nobg wujinghuoyu">
    			<img src="../../static/newpic/wujinghuoyutext.png" class="allshicha"/>
    			<div class="shanshuo wujin">
    				<img src="../../static/newpic/06.png" class="pic5" style="position: absolute;left: 0;"/>
    				<img src="../../static/newpic/wujinghuoyu.png" @click="show(3)" class="pic4 sc"/>
    			</div>
    		</div>
    	</div>
    	<div class="xsnrtitle nobg">
    		<div class="adress  nobg">
    			<img src="../../static/newpic/beicangdalutext.png" class="allshicha"/>
    			<div class="shanshuo ">
    				<img src="../../static/newpic/08.png" class="pic5"/>
    				<img src="../../static/newpic/beicangdalu.png" class="pic4 sc3" @click="show(4)"/>
    			</div>
    		</div>
    	</div>
    	<div class="xsnrtitle nobg">
    		<div class="adress  nobg">
    			<img src="../../static/newpic/nanmingdalutext.png" class="allshicha"/>
    			<div class="shanshuo ">
    				<img src="../../static/newpic/10.png" class="pic5"/>
    				<img src="../../static/newpic/nanmingdalu.png" class="pic4 sc4" @click="show(5)"/>
    			</div>
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
      <!--<audio id="Music" src="./static/bg.mp3" loop="loop" preload>
    	</audio>-->
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
      speed:1,//初始速度
      speed1:1,//
      speed2:13,//
      speed3:1,
      wujinghuoyu:'',//高度
      shouyi:{
      	startX:0,
      	startY:0,
      	moveEndX:0,
      	moveEndY:0,
      	x:0,
      	y:0,
      	fangxiang:true
      	
      },//
      xishu:1,//屏幕系数
      
    }
  },
  created(){
		var u = navigator.userAgent;
		this.isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; //android终端
		this.isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
  	var self=this;
  	
  	var p=0,t=0;  
  
    $(window).scroll(function(e){  
            p = $(this).scrollTop();  
              
            if(t<=p){//下滚  
               self.fangxiang=true
            }  
              
            else{//上滚  
               self.fangxiang=false
            }  
            setTimeout(function(){t = p;},0);         
    });  
  
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
      if(document.body.clientWidth<375){
	  		self.xishu=0.8
	  	}else if(document.body.clientWidth>=375&&document.body.clientWidth<414){
	  		self.xishu=1
	  	}else{
	  		self.xishu=1.05
	  		 $('.hello').css('height','3700px')
	  	}
				
				






    })

  },
  methods: {
  	jump(num){
      var self = this
      self.audiodom.play();
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
		  setTimeout(function(){
		  	$('.page').fadeIn(500);
		  },500)
  	},
  	handleScroll () {
    	this.scrolled = window.scrollY > 0;
//  	$("body").unbind('touchmove');
    	console.log(window.scrollY )
    	var self=this;
    	
    	var ju=window.scrollY*0.02
			var ju1=window.scrollY*0.1
			var ju2=window.scrollY*0.1
			var ju3=window.scrollY*0.011
				$('.shicha').css("top",-ju1+"px");
				$('.allshicha').css("top",-ju+"px");
    	if(window.scrollY>500&&window.scrollY<960){
    		
    	}else if(window.scrollY>980*self.xishu&&window.scrollY<1760*self.xishu){
    			if(self.fangxiang){
    			self.speed1=self.speed1+0.3
    		}else{
    			self.speed1=self.speed1-0.3
    		}
    		if(self.speed1>50){
    			self.speed1=50
    		}
    		if(self.speed1<-30){
    			self.speed1=-30
    		}
    		$('.sc1').css("-webkit-transform","translateY("+-self.speed1+"px"+")");
    		$('.sc1').css("transform","translateY("+-self.speed1+"px"+")");
//  		$('.sc1').css("top",-self.speed1+"px");
    	}else if(window.scrollY>1200*self.xishu&&window.scrollY<2300*self.xishu){
    		if(self.fangxiang){
    			self.speed=self.speed+0.5
    		}else{
    			self.speed=self.speed-0.5
    		}
    		if(self.speed>40){
    			self.speed=40
    		}
    		if(self.speed<-20){
    			self.speed=-20
    		}
    		$('.sc').css("-webkit-transform","translateY("+-self.speed+"px"+")");
    		$('.sc').css("transform","translateY("+-self.speed+"px"+")");
//  		$('.sc').css("top",-self.speed+"px");
    	}
    	else if(window.scrollY>2163*self.xishu&&window.scrollY<2645*self.xishu){
    		if(self.fangxiang){
    			self.speed2=self.speed2+0.5
    		}else{
    			self.speed2=self.speed2-0.5
    		}
    		if(self.speed2>50){
    			self.speed2=50
    		}
    		if(self.speed2<-30){
    			self.speed2=-30
    		}
    		$('.sc3').css("-webkit-transform","translateY("+-self.speed2+"px"+")");
    		$('.sc3').css("transform","translateY("+-self.speed2+"px"+")");
    	}else if(window.scrollY>2500*self.xishu&&window.scrollY<3600*self.xishu){
    		if(self.fangxiang){
    			self.speed3=self.speed3+0.5
    		}else{
    			self.speed3=self.speed3-0.5
    		}
    		$('.sc4').css("-webkit-transform","translateY("+-self.speed3+"px"+")");
    		$('.sc4').css("transform","translateY("+-self.speed3+"px"+")");
//  		$('.sc4').css("top",-self.speed3+"px");
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
  },
  mounted(){
    var self = this;
//		self.audiow = document.getElementById('Music')
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
	/*min-height: 100%;*/
	background-attachment:fixed;
	height: 3450px;
	overflow: hidden;
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
	padding-top: 40px;
}
.adress>img{
	width: 80%;
}
.shicha{
	position: relative;
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
	padding: 50px 0 50px 0;
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

.sc1,.sc,.allshicha,.sc3,.sc4{
	position: relative;
	
}
@media screen and (max-width: 340px) {
    .hello{
    	height: 3100px;
    }
}
</style>

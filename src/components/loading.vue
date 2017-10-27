<template>
  <div class="loading" ontouchmove="return false;">
  		  <img src="../../static/loading/slogan.png" class="title"/>
  		  <div class="loadper">
  		  	0%
  		  </div>
  		  <div class="horse">
  		  </div>
  	</div>
</template>

<script>
export default {
  name: 'app',
  props : ['show'],
  data(){
  	return {
	  	time:[3,4,3],//loading时间段
	  	loading:{
	  		width:document.body.clientWidth,//屏幕宽度
	  		picwidth:'',
	  		latwidth:'',//最终宽度

        horseWidth : 0,  //马宽度
        horseSpeed : 1,  //马移动速度
        horseMoveWidth : 0   //马移动距离
	  	}
  	 }
  },
  mounted(){
    //ls测试
//    var self = this
//    var index = 0;
//    var horseSpeed = 0
//    var timeSpeed = 100
//    self.horseWidth = $('.horse').width();
//    self.horseMoveWidth = parseInt(self.loading.width) - parseInt(self.horseWidth)
//    console.log(parseInt(self.loading.width) - parseInt(self.horseWidth))
//    setInterval(function(){
//      index++
//    },1000)
//    function horsefn(){
//
////      timeSpeed-=1
//      if(horseSpeed < 100){
//        timeSpeed = 10
//        horseSpeed+=20
//        $('.horse').animate({left:horseSpeed});
//      }
//      if(index >=4){
//        timeSpeed = 10
//        horseSpeed+=20
//        $('.horse').animate({left:horseSpeed});
//      }
//      console.log(index)
//      setTimeout(horsefn,timeSpeed)
//    }
//    horsefn()
  },
  created(){
  		var self=this;
  		self.loading.latwidth=self.loading.width/3;
  		var time=0;
      var speed=self.loading.latwidth/10;
      var juli='';
      $('.horse').animate({left:'0'});
    console.log(self.loading.width)
      window.clearInterval(run)
      window.clearInterval(proBar);
      var run=setInterval(runa,1000)
      function runa(){
      			time++
//      		juli=speed*time;
        		if(time>3&time<5){
        			juli=speed*3;
        		}else if(time>5){
        			speed=self.loading.width/14*2;
        			juli=juli+speed*(time-6);
        		}else if(time<3){
        			juli=speed*time;
        		}else if(time>8){
        			window.clearInterval(run)
        		}
        		$('.horse').animate({left:juli});

      }

      var pro=0;//设置进度条的初始值
			var proBar = setInterval(function(){
			pro++;
//        console.log(pro)
			$('.loadper').text(pro+'%');
			if(pro >= 99){
			   if(self.show){
			   	    pro=100;
			   	    $('.loadper').text(pro+'%');
			   	  	$('.loading').fadeOut(500)

              self.$emit('listenToChildEvent',9)
			   	  	clearInterval(proBar);
			   }else{
			   	  $('.loadper').text('99%');
			   }
			}
			},100);


  },
  methods:{
  },
}
</script>

<style>

html,body{
	width: 100%;height: 100%;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 100%;
  height: 100%;
}
.loading{
	width: 100%;
	height: 100%;
	background:url(../../static/loading/loading.png) no-repeat;
	background-size:cover;
	position: fixed;
	top: 0;
	left: 0;
	z-index: 99;
}
.title{
	position: absolute;
	top: 20%;
	left: 50%;
	width: 2.88rem;
	transform: translateX(-50%);
	-webkit-transform: translateX(-50%);
}
.loadper{
	color:#FFF;
	position: absolute;
	top: 60%;
	left: 50%;
	transform: translateX(-50%);
	-webkit-transform: translateX(-50%);
	font-size:1.6rem;
}
.horse{
	position: absolute;
	top: 80%;
	left:0;
	width:80px;
  height:80px;
  background: url(../../static/loading/horseb.png);
	animation:run 1s steps(1, start) infinite;
  -webkit-animation:run 1s steps(1, start) infinite;

}
@keyframes run{
            0%{
                background-position: 0 0;
            }
            8.333%{
                background-position: -80px 0;
            }
            16.666%{
                background-position: -160px 0 ;
            }
            25.0%{
                background-position: -240px 0 ;
            }
            33.333%{
                background-position: -320px 0 ;
            }
            41.666%{
                background-position: -400px 0 ;
            }
            50.0%{
                background-position: -480px 0 ;
            }
            58.333%{
                background-position: -560px 0 ;
            }
            66.666%{
                background-position: -640px 0 ;
            }
            75.0%{
                background-position: -720px 0 ;
            }
            83.333%{
                background-position: -800px 0 ;
            }
            91.666%{
                background-position: -880px 0 ;
            }
            100%{
                background-position: 0 0 ;
            }
        }
        @-webkit-keyframes run{
            0%{
                background-position: 0 0;
            }
            8.333%{
                background-position: -80px 0;
            }
            16.666%{
                background-position: -160px 0 ;
            }
            25.0%{
                background-position: -240px 0 ;
            }
            33.333%{
                background-position: -320px 0 ;
            }
            41.666%{
                background-position: -400px 0 ;
            }
            50.0%{
                background-position: -480px 0 ;
            }
            58.333%{
                background-position: -560px 0 ;
            }
            66.666%{
                background-position: -640px 0 ;
            }
            75.0%{
                background-position: -720px 0 ;
            }
            83.333%{
                background-position: -800px 0 ;
            }
            91.666%{
                background-position: -880px 0 ;
            }
            100%{
                background-position: 0 0 ;
            }
        }
</style>

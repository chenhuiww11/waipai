<template>
  <div class="loading" ontouchmove="return false;">
  		  <img src="../../static/loading/slogan.png" class="title"/>
  		  <div class="loadper">
  		  	0%
  		  </div>
  		  <div class="horse">
  		  </div>
      <audio id="Music" src="./static/bg.mp3" loop="loop" preload>
      </audio>
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

  },
  created(){
  		var self=this;
  		self.loading.latwidth=self.loading.width/3;
  		var time=0;
      var finalwidth=self.loading.width-70;
      var juli='';
      $('.horse').animate({left:'0'});
      window.clearInterval(run)
      window.clearInterval(proBar);
      var run=setInterval(runa,200)
      function runa(){
      			time++
        		juli=10*time;
        		if(juli>finalwidth){
        			$('.horse').animate({left:finalwidth});
        			window.clearInterval(run)
        		}else{
        			$('.horse').animate({left:juli});
        		}

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
//           return
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
	background:#455a64 url(../../static/loading/loading.png) no-repeat;
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
	padding-bottom: 2px;
	border-bottom: 1px solid #FFF;
}
.horse{
	position: absolute;
	bottom: 5%;
	left:-20px;
	width:80px;
  height:80px;
  background: url(../../static/loading/horseb.png) no-repeat;
  background-size:cover;
  transform: scale(0.6);
  -webkit-transform: scale(0.6);
	animation:run 1s steps(1, start) infinite;
  -webkit-animation:run 1s steps(1, start) infinite;
}
@keyframes run{
            0%{
                background-position: 0px 0;
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
            /*91.666%{*/
                /*background-position: -880px 0 ;*/
            /*}*/
            100%{
                background-position: 0px 0 ;
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
            /*91.666%{*/
                /*background-position: -880px 0 ;*/
            /*}*/
            100%{
                background-position: 0 0 ;
            }
        }
</style>

<template>
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <!--牧尘-->
        <div class="swiper-slide">
          <div class="detail">
              <div class="dt-header">
                <img src="../../static/detail/muchen.jpg" alt="">
                <div class="dt-change">
                  <div class="dt-change-dt">
                    <img src="../../static/detail/luoli.png" class="dt-change-dt">
                    <div class="dt-change-click-right">
                      
                      <span>
                        <img src="../../static/detail/right.png" alt="">
                      </span>
                    </div>
                    <div class="dt-change-click-left">
                      <span>
                        <img src="../../static/detail/left.png" alt="">
                      </span>
                      
                    </div>
                  </div>
                </div>
              </div>
              <div class="dt-info">
                  <img src="../../static/detail/muchen_info.png" alt="">
              </div>
          </div>
        </div>
         <!--洛璃-->
      <div class="swiper-slide">
        <div class="detail">
          <div class="dt-header">
            <img src="../../static/detail/luoli.jpg" alt="">
            <div class="dt-change">
              <div class="dt-change-dt">
                <img src="../../static/detail/muyunxi.png" class="dt-change-dt">
                <div class="dt-change-click-right">
                      <span>
                        <img src="../../static/detail/right.png" alt="">
                      </span>
                </div>
                <div class="dt-change-click-left">
                      <span>
                        <img src="../../static/detail/left.png" alt="">
                      </span>
                </div>
              </div>
            </div>
          </div>
          <div class="dt-info">
            <img src="../../static/detail/luoli-info.png" alt="">
          </div>
        </div>
      </div>
       <!--牧云熙-->
        <div class="swiper-slide">
          <div class="detail">
              <div class="dt-header">
                <img src="../../static/detail/muyunxi.jpg" alt="">
                <div class="dt-change">
                  <div class="dt-change-dt">
                    <img src="../../static/detail/tab3.png" class="dt-change-dt">
                    <div class="dt-change-click-right">
                      <span>
                        <img src="../../static/detail/right.png" alt="">
                      </span>
                    </div>
                    <div class="dt-change-click-left">
                      <span>
                        <img src="../../static/detail/left.png" alt="">
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="dt-info">
                  <img src="../../static/detail/muyunxi-info.png" alt="">
              </div>
          </div>
        </div>
      <!--林雨寒-->
      <div class="swiper-slide">
        <div class="detail">
          <div class="dt-header">
            <img src="../../static/detail/linyuhan.jpg" alt="">
            <div class="dt-change">
              <div class="dt-change-dt">
                <img src="../../static/detail/tab4.png" class="dt-change-dt">
                <div class="dt-change-click-right">
                	      
                      <span>
                        <img src="../../static/detail/right.png" alt="">
                      </span>
                </div>
                <div class="dt-change-click-left">
                      <span>
                        <img src="../../static/detail/left.png" alt="">
                      </span>
                </div>
              </div>
            </div>
          </div>
          <div class="dt-info">
            <img src="../../static/detail/linyuhan-info.png" alt="">
          </div>
        </div>
      </div>
       <!--魔琨-->
      <div class="swiper-slide">
        <div class="detail">
          <div class="dt-header">
            <img src="../../static/detail/mokun.jpg" alt="">
            <div class="dt-change">
              <div class="dt-change-dt">
                <img src="../../static/detail/tab5.png" class="dt-change-dt">
                <div class="dt-change-click-right">
                      <span>
                        <img src="../../static/detail/right.png" alt="">
                      </span>
                </div>
                <div class="dt-change-click-left">
                      <span>
                        <img src="../../static/detail/left.png" alt="">
                      </span>
                </div>
              </div>
            </div>
          </div>
          <div class="dt-info">
            <img src="../../static/detail/mokun-info.png" alt="">
          </div>
        </div>
      </div>
    </div>
    <img src="../../static/detail/banquan.png" class="dt-info-banquan">
    <div class="returnclick" @click="returnclick">
      <audio id="clickMusic" src="./static/clickaudio.mp3" >
    </audio>
    </div>
    <!--导航-->
    <div class="nav" @click="back">
    	<img src="../../static/jwl/top.png"/>
    </div>
</div>
</template>

<script>
export default {
  name: 'detail',
  props : ['index'],
  data () {
    return {
      audiodom : ''
    }
  },
  created(){

  },
  mounted:function(){
    var self = this;
    self.audiodom = document.getElementById('clickMusic')
    console.log(self.index)
    window.addEventListener('scroll', this.handleScroll);
    var mySwiper = new Swiper ('.swiper-container', {
        direction: 'horizontal',
        loop: true,
        speed : 800,
        onlyExternal : true,
        // 如果需要前进后退按钮
        nextButton: '.dt-change-click-right',
        prevButton: '.dt-change-click-left',
      })
      $('.dt-change-click-left').click(function(){
        console.log(mySwiper)
        mySwiper.slidePrev();
        // if (self.audiodom.paused) {
        //     self.audiodom.play();
        //     mySwiper.slidePrev();
        // } else {
        //     // 播放中
        // }
      })
      $('.dt-change-click-right').click(function(){
         mySwiper.slideNext();
        // if (self.audiodom.paused) {
        //     self.audiodom.play();
        //     mySwiper.slideNext();
        // } else {
        //     // 播放中
        // }
      })
  },
  methods:{
    returnclick : function(){
      var self = this
        this.audiodom.play();
        setTimeout(function(){
        self.$emit('listenToChildEvent',0)
        },300)

    },
    clickAudio : function(){

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
.dt-header{
  position: relative;
}
.dt-change{
  padding: 0 10px;
  position: absolute;
  bottom: 35px;
}
  .dt-change-dt{
    color: #ffffff;
    font-size: 1.4rem;
    font-weight: bold;
    position: relative;
  }
  .dt-change-click-left{
    width: 40%;
    position: absolute;
    top: 50%;
    left:-12%;
    /*line-height: 1;*/
    text-align: center;
    -webkit-transform: translate(50%,-50%);
    transform: translate(50%,-50%);
    -webkit-transform-origin: 50% 50%;
    transform-origin: 50% 50%;
    display: table;
  }
.dt-change-click-right{
  width: 40%;
  position: absolute;
  top: 50%;
  right:28%;
  /*line-height: 1;*/
  text-align: center;
  transform: translate(50%,-50%);
  transform-origin:50% 50%;
  display:table;
}
.dt-change-click-right span,.dt-change-click-left span{
    width: 1rem;
    display: table-cell;
    vertical-align: middle;
    text-align: center;
    position: relative;
}
.dt-change-click-left span{
	
/* left: 20%; */
}
.dt-change-click-right span{
 /* right: 40%; */
}
.dt-change-click-right span img,.dt-change-click-left span img{
  display: block;
  width: 1rem;
}
.dt-change-click-right span img{
  float: right;
  -webkit-animation:gogogoright 1.5s infinite linear ;
}
.dt-change-click-left span img{
  float: left;
  -webkit-animation:gogogoleft 1.5s infinite linear ;
}
@-webkit-keyframes gogogoright {
  0%{
    -webkit-transform:translate(0px,0);
    opacity: 0;
  }
  25%{
    -webkit-transform:translate(3px,0);
  }
  50%{
    -webkit-transform:translate(5px,0);
    opacity: .5;
  }
  75%{
    -webkit-transform:translate(7px,0);
  }
  100%{
    -webkit-transform:translate(10px,0);
    opacity: 1;
  }
}
@keyframes gogogoright {
  0%{
    -webkit-transform:translate(0px,0);
    opacity: 1;
  }
  25%{
    -webkit-transform:translate(3px,0);
  }
  50%{
    -webkit-transform:translate(5px,0);
    opacity: 0.5;
  }
  75%{
    -webkit-transform:translate(7px,0);
  }
  100%{
    -webkit-transform:translate(10px,0);
    opacity: 0;
  }
}
@-webkit-keyframes gogogoleft {
  0%{
    -webkit-transform:translate(0px,0);
    opacity: 1;
  }
  25%{
    -webkit-transform:translate(-3px,0);
  }
  50%{
    -webkit-transform:translate(-5px,0);
    opacity: .5;
  }
  75%{
    -webkit-transform:translate(-7px,0);
  }
  100%{
    -webkit-transform:translate(-10px,0);
    opacity: 0;
  }
}
@keyframes gogogoleft {
  0%{
    -webkit-transform:translate(0px,0);
    opacity: 1;
  }
  25%{
    -webkit-transform:translate(-3px,0);
  }
  50%{
    -webkit-transform:translate(-5px,0);
    opacity: .5;
  }
  75%{
    -webkit-transform:translate(-7px,0);
  }
  100%{
    -webkit-transform:translate(-10px,0);
    opacity: 0;
  }
}
.returnclick{
  width: 4rem;
  height: 4rem;
  position:fixed;
  top:15px;
  left:15px;
  z-index:8000
}
.swiper-container{
  background: url("../../static/detail/bgbg.jpg") repeat;
  background-size: 100px 100px;
}
.dt-info{
  width: 100%;
  padding-bottom: 100px;
}
  .dt-info-banquan{
    width: 80%;
    display: block;
    position: relative;
    bottom: 20px;
    right: 0;
    left: 0;
    margin: auto auto;
    z-index: 8000;
  }
  .nav{
	position: fixed;
	top: 50%;
	right: 10px;
	width:44px;
	display: none;
  z-index: 9999;
}
</style>

<template>
	<div id="app">
		<loading :show='show' v-on:listenToChildEvent="showMsgFromChild" v-show="isNewPage"></loading>
		<hello v-show="index==0" v-on:listenToChildEvent="showMsgFromChild" :isShowAudio="showAudio"></hello>
		<cqb v-show="index==4" v-if="show" v-on:listenToChildEvent="showMsgFromChild"></cqb>
		<dsj v-show="index==5" v-if="show" v-on:listenToChildEvent="showMsgFromChild"></dsj>
		<jwl v-show="index==2" v-if="show" v-on:listenToChildEvent="showMsgFromChild"></jwl>
		<gsj v-show="index==3" v-if="show" v-on:listenToChildEvent="showMsgFromChild"></gsj>
		<detail v-show="index==1" v-if="show" :index='index' v-on:listenToChildEvent="showMsgFromChild" :show='show'></detail>
		<!--<router-view></router-view>-->
	</div>
</template>

<script>
	import hello from '@/components/HelloWorld'
	import loading from '@/components/loading'
	import cqb from '@/components/cqb'
	import dsj from '@/components/dsj'
	import jwl from '@/components/jwl'
	import gsj from '@/components/gsj'
	import detail from '@/components/detail'
	export default {
		name: 'app',
		data() {
			return {
				index: 0,
				count : 0,
        show : false,
				showAudio : false,
        isNewPage : true
			}
		},
		components: {
			hello,
			loading,
			cqb,
			dsj,
			jwl,
			gsj,
			detail,

		},
    created(){
      if(window.sessionStorage.getItem('isnewpage')){
        this.isNewPage = false
				this.index=3
      }
    },
		mounted () {
            var _this = this
            let imgs = document.querySelectorAll('img')
            Array.from(imgs).forEach((item)=>{
                let img = new Image()
                img.onload = ()=>{
                    this.count++
                }
                img.src=item.getAttribute('src')
            })
        },
    methods:{
    	showMsgFromChild : function(data){
    	var self=this;	
        if(data == 9){
          this.showAudio = true
        }else{
          if(data == 0){
          	 self.index = data
						if(window.sessionStorage.getItem('headerheight')==0){
							window.sessionStorage.setItem('headerheight',window.sessionStorage.getItem('headerheighttwo'))
						}
		 	$('body,html').css('opacity','0');
		 	setTimeout(function(){
            				 	$('body,html').animate({ scrollTop: window.sessionStorage.getItem('headerheight')},0);
          	},100)
        	setTimeout(function(){
        		self.index = data
        		$('body,html').css('opacity','1');
		       	},200)
          }else{
          	$('body,html').fadeOut(100);
          	setTimeout(function(){
          		$('body,html').scrollTop(0);
          	},100)
        	setTimeout(function(){
        		self.index = data
        		$('body,html').fadeIn(200);
		       	},100)
          }
        }
      }
    },
    watch : {
	        count (val,oldval) {
	        	var self=this;
	            if(val >= 29){
	            	console.log(val)
	            	setTimeout(function(){
	            		 self.show = true
	            	},2500)
	                
	                //然后可以对后台发送一些ajax操作
	            }
	        }
        }
	}
</script>

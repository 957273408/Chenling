<template>
	<div style="margin:0 20px;">
		<table></table>
		<h2 style="margin:20px 0;">{{data.title}}</h2>
		<div v-html="data.content"></div>
		<!-- <s:property :value="data.content" escape="false" /> -->
	</div>
</template>
<script>
import { helper_info } from "@/axios/getData";
export default {
	data(){
		return{
			data:{}
		}
	},
	created(){
		this.getdata();
	},
	methods:{
		async getdata(){
			var id=this.$route.query.article_id;
			var res = await helper_info({article_id:id});
			console.log(res.data)
			this.data=res.data
		},
		unescapeHTML(a){
			a = "" + a;
			var str=a.replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&amp;/g, "&").replace(/&quot;/g, '"').replace(/&apos;/g, "'");
			var re = new RegExp('<[^<>]+>','g');
			var text = str.replace(re ,"");
      return text;
    }	
	}
}
</script>
<style lang="scss" scoped>
	
</style>
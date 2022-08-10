<template>
	<div id="app">
		<router-view />
	</div>
</template>

<script>
export default {
	name: 'App',
};
</script>

<style>
@import url('http://fonts.cdnfonts.com/css/gilroy-bold');

#app {
	font-family: 'Gilroy-Bold', sans-serif;
	font-family: 'Gilroy-Heavy', sans-serif;
	font-family: 'Gilroy-Light', sans-serif;
	font-family: 'Gilroy-Medium', sans-serif;
	font-family: 'Gilroy-Regular', sans-serif;
}
body {
	background: #f3f3f3;
}
</style>

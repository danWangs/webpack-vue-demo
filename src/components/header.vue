<template>
	<div class="nav-wrapper">
		<div class="section">
			<div class="left-logo"></div>
			<div class="nav-box">
				<ul>
					<li>item1</li>
					<li>item2</li>
					<li>item3</li>
					<li>item4</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script type="text/babel">
    require("less/common/header.less");
</script>

<style lang="less" rel="stylesheet/less" scoped="">
.nav-wrapper{
	.nav-box{
		ul{
			li{
				float:left;
				background-color: #eee;
				list-style: none;
			}
		}
	}
}
</style>
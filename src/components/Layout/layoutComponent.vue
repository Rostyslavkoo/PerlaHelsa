<template>
	<div class="layout">
		<div
			class="overlay"
			v-if="navigationHamburger"
			@click="navigationHamburger = !navigationHamburger"
		></div>
		<layout-header
			:navigationHamburger="navigationHamburger"
			@onClickNavigationHamburger="navigationHamburger = !navigationHamburger"
		/>
		<layout-menu
			:navigationHamburger="navigationHamburger"
			@onClickNavigationHamburger="navigationHamburger = !navigationHamburger"
		/>
	</div>
</template>

<script>
import layoutHeader from './layoutHeader.vue';
import layoutMenu from './layoutMenu.vue';
export default {
	data: () => ({
		navigationHamburger: false,
	}),
	components: { layoutHeader, layoutMenu },
};
</script>

<style lang="scss">
.overlay {
	position: absolute;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	z-index: 2;
	background: #f3f3f379;
}
.layout {
	position: relative;
	width: 100%;
	min-height: 100vh;
}
.hamburger {
	cursor: pointer;
	width: 26px;
	transition-duration: 0.5s;
	display: block;
	width: 26px;
	height: 26px;
	.line {
		cursor: pointer;
		transition-duration: 0.5s;
		position: absolute;
		height: 2px;
		width: 26px;
		top: 36px;
		background-color: #00284f;

		&:before {
			cursor: pointer;
			transition-duration: 0.5s;
			position: absolute;
			width: 26px;
			height: 2px;
			background-color: #00284f;
			content: '';
			top: -7px;
		}

		&:after {
			cursor: pointer;
			transition-duration: 0.5s;
			position: absolute;
			width: 26px;
			height: 2px;
			background-color: #00284f;
			content: '';
			top: 6px;
		}
	}

	&.open {
		.line {
			transition-duration: 0.5s;
			background: transparent;

			&:before {
				transform: rotateZ(45deg) scaleX(1.25) translate(4px, 5px);
			}

			&:after {
				transform: rotateZ(-45deg) scaleX(1.25) translate(4px, -5px);
			}
		}
	}
	&.xs {
		width: 20px;
		.line {
			width: 20px;
			&:before {
				width: 20px;
			}

			&:after {
				position: absolute;
				width: 20px;
			}
		}
	}
}
</style>

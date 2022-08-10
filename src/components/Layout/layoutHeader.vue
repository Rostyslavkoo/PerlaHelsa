<template>
	<div class="header">
		<div
			class="header__wrapper"
			:class="{
				md: $vuetify.breakpoint.md,
				sm: $vuetify.breakpoint.sm,
				xs: $vuetify.breakpoint.xs,
			}"
		>
			<div class="header__content">
				<div
					class="content__navigation"
					:class="{
						xs: $vuetify.breakpoint.xs,
					}"
				>
					<div
						class="hamburger"
						@click="onClickHamburger"
						:class="{ open: navigationHamburger, xs: $vuetify.breakpoint.xs }"
					>
						<div class="line"></div>
					</div>
					<div class="search">
						<search-icon />
					</div>
				</div>
				<div
					class="content__title"
					:class="{
						xs: $vuetify.breakpoint.xs,
					}"
				>
					<img src="@/assets/logo.svg" alt="" />
				</div>
				<div
					class="content__account"
					:class="{
						xs: $vuetify.breakpoint.xs,
					}"
				>
					<div class="user">
						<user-icon />
					</div>
					<div class="cart">
						<cart-icon />
					</div>
				</div>
			</div>
		</div>
		<div
			class="header__options"
			:class="{
				xs: $vuetify.breakpoint.xs,
			}"
		>
			<li class="active">Омега-3</li>
			<li>Вітаміни</li>
			<li>Добавки</li>
			<li v-if="!$vuetify.breakpoint.xs">Доставка</li>
			<li>Про нас</li>
		</div>
	</div>
</template>

<script>
export default {
	name: 'layoutHeader',
	props: {
		navigationHamburger: {
			require: true,
		},
	},
	data: () => ({}),
	mounted() {
		console.log(this.$vuetify);
	},
	methods: {
		onClickHamburger() {
			this.$emit('onClickNavigationHamburger');
		},
	},
};
</script>

<style lang="scss" scoped>
@import './header.scss';
</style>

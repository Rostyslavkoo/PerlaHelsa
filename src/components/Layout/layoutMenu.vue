<template>
	<div
		class="menu"
		:class="{
			open: navigationHamburger,
			subMenu: isSubMenu && !$vuetify.breakpoint.mobile,
		}"
	>
		<div class="menu__header" :class="{ mobile: $vuetify.breakpoint.mobile }">
			<div
				class="hamburger"
				@click="onClickHamburger"
				:class="{ open: navigationHamburger, xs: $vuetify.breakpoint.xs }"
			>
				<div class="line"></div>
			</div>
		</div>
		<div
			class="menu__content"
			:class="{ subMenu: isSubMenu && !$vuetify.breakpoint.mobile }"
		>
			<div v-if="!isSubMenu">
				<li
					v-for="category in menuCategories"
					:key="category.id"
					class="content__text"
					:class="{ active: chosenCategory === category.value }"
					@click="onClickCategory(category)"
				>
					{{ category.name }}
					<arrow-icon
						v-if="category.sub_categories"
						style="margin-left: 10px"
					/>
				</li>
				<v-divider style="margin: 30px 0" />
				<li class="content__text">Про компанію</li>
				<li class="content__text">Сертифікати</li>
				<li class="content__text">Блог</li>
				<li class="content__text">Питання-відповідь</li>
			</div>
			<div v-else>
				<li class="content__text active" @click="resetSubMenu">
					<div>
						<arrow-icon class="icon" style="margin-left: 10px" />
						{{ subCategories.parentName }}
					</div>
				</li>
				<li
					v-for="category in subCategories.categories"
					:key="category.id"
					class="content__text"
					:class="{ active: chosenCategory === category.value }"
				>
					{{ category.name }}
					<arrow-icon
						v-if="category.sub_categories"
						style="margin-left: 10px"
					/>
				</li>
			</div>
		</div>
		<div
			class="menu__footer"
			v-if="(isSubMenu && $vuetify.breakpoint.mobile) || !isSubMenu"
			:class="{ subMenu: isSubMenu && $vuetify.breakpoint.mobile }"
		>
			<div class="footer__content">
				<li class="content__text">Доставка і оплата</li>
				<li class="content__text">Контакти</li>
				<li class="content__text">Вакансії</li>
			</div>
			<div class="footer__phone">
				<div class="phone">
					<phone-icon class="icon" />
					0 800 330 038
				</div>
				<div class="call">Call-центр работает <br />с 7:00 до 23:00</div>
			</div>
			<v-divider style="margin: 30px 0" />
			<div class="footer__settings">
				<div class="selector">
					<label for=""> Доставка</label>
					<div class="selector__content">
						<div class="text">Мова</div>
						<arrow-down-icon />
					</div>
				</div>
				<div class="selector">
					<label for=""> Мова</label>
					<div class="selector__content">
						<div class="text">Українська</div>
						<arrow-down-icon />
					</div>
				</div>
				<div class="selector">
					<label for=""> Валюта</label>
					<div class="selector__content">
						<div class="text">Грн</div>
						<arrow-down-icon />
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import arrowIcon from '../icons/arrow-icon.vue';
export default {
	components: { arrowIcon },
	props: {
		navigationHamburger: {
			require: true,
		},
	},
	methods: {
		resetSubMenu() {
			this.subCategories = {};
			this.chosenCategory = 'all';
			this.isSubMenu = false;
		},
		onClickHamburger() {
			this.$emit('onClickNavigationHamburger');
		},
		onClickCategory({ sub_categories, value, name }) {
			if (sub_categories) {
				this.isSubMenu = true;
				this.subCategories = {
					parentName: name,
					categories: [...sub_categories],
				};
				console.log(this.subCategories);
			}
			this.chosenCategory = value;
		},
	},
	data: () => ({
		chosenCategory: 'all',
		isSubMenu: false,
		subCategories: {},
		menuCategories: [
			{
				id: 1,
				name: 'Всі Категорії',
				value: 'all',
			},
			{
				id: 2,
				name: 'Продукти для дорослих',
				value: 'products_for_adults',
				sub_categories: [
					{
						id: 1,
						name: 'Kids Омега-3  Тунец',
						value: 'kids_omega-3_tunets',
					},
					{
						id: 2,
						name: 'Kids Омега-3  Треска',
						value: 'kids_omega-3_treska',
					},
					{
						id: 3,
						name: 'Kids Омега-3  ДЗ',
						value: 'kids_omega-dz',
					},
				],
			},
			{
				id: 3,
				name: 'Продукти для дітей',
				value: 'products_for_children',
				sub_categories: [
					{
						id: 1,
						name: 'Kids Омега-3  Тунец',
						value: 'kids_omega-3_tunets',
					},
				],
			},
		],
	}),
};
</script>

<style lang="scss" scoped>
.menu {
	position: absolute;
	max-width: 432px;
	height: 100vh;
	width: 100%;
	background: #fff;
	transform: translateX(-100%);
	transition: 0.4s;
	padding: 36px 44px 50px 44px;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	z-index: 4;
	&.subMenu {
		flex-direction: unset;
		display: block;
	}
	&.open {
		transform: translateX(0);
	}
	&__header {
		&.mobile {
			display: flex;
			justify-content: flex-end;
		}
	}
	&__content {
		&.subMenu {
			margin-top: 86px;
		}
	}
	&__footer {
		margin-top: 86px;
		&.subMenu {
			margin-top: 226px;
		}
		.footer {
			&__phone {
				margin-top: 70px;
				display: flex;
				justify-content: space-between;
				align-items: center;
				.phone {
					font-weight: 600;
					font-size: 23px;
					line-height: 27px;
					color: #00284f;
					&.icon {
						margin-right: 14px;
					}
				}
				.call {
					font-weight: 400;
					font-size: 12px;
					line-height: 17px;

					display: flex;
					align-items: center;

					color: rgba(0, 40, 79, 0.3);
				}
			}
			&__settings {
				display: flex;
				justify-content: space-between;
				align-items: center;
				.selector {
					label {
						font-weight: 400;
						font-size: 12px;
						line-height: 14px;
						display: flex;
						align-items: center;

						color: rgba(0, 40, 79, 0.3);
					}
					.text {
						font-weight: 400;
						font-size: 17px;
						line-height: 20px;
						display: flex;
						align-items: center;

						color: #00284f;
					}
					&__content {
						margin-top: 8px;
						display: flex;
						align-items: center;
						justify-content: space-between;
						max-width: 94px;
						width: 100px;
					}
				}
			}
		}
	}
	.content,
	.footer {
		width: 100%;
		&__text {
			display: flex;
			align-items: center;
			font-weight: 400;
			font-size: 17px;
			line-height: 20px;
			color: #00284f;
			line-height: 36px;
			cursor: pointer;

			&.active {
				font-weight: 700;
			}
			&:hover {
				font-weight: 600;
			}
			.icon {
				transform: rotate(180deg);
				margin-left: 0 !important;
				margin-right: 10px;
			}
		}
	}
}
ul,
li {
	list-style-type: none;
}
</style>

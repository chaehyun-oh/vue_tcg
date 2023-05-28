<template>
	<li>
		<h2>{{ name }}{{ friendIsFavorite === "1" ? "(Favorite)" : "" }}</h2>
		<button @click="toggleFavorite">Toggle Favorite</button>
		<button @click="toggleDetails">
			{{ detailsVisible ? "Hide" : "Show" }} Details
		</button>
		<ul v-if="detailsVisible">
			<li>Phone: {{ phone }}</li>
			<li>Email: {{ email }}</li>
		</ul>
	</li>
</template>

<script>
	export default {
		// props: ["name", "isFavorite"],
		props: {
			name: {
				type: String,
				required: true,
			},
			phone: {
				type: String,
				required: true,
			},
			email: {
				type: String,
				required: true,
			},
			isFavorite: {
				type: Boolean,
				required: false,
				default: false,
				// varidator: function (value) {
				// 	return value === "1" || value === "0";
				// },
			},
		},
		data() {
			return {
				detailsVisible: false,
				friendIsFavorite: this.isFavorite,
			};
		},
		methods: {
			toggleDetails() {
				this.detailsVisible = !this.detailsVisible;
			},
			toggleFavorite() {
				this.friendIsFavorite = !this.friendIsFavorite;
			},
		},
	};
</script>

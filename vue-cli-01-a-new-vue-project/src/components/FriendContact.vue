<template>
	<li>
		<h2>{{ name }}{{ isFavorite === true ? "(Favorite)" : "" }}</h2>
		<button @click="toggleFavorite">Toggle Favorite</button>
		<button @click="toggleDetails">
			{{ detailsVisible ? "Hide" : "Show" }} Details
		</button>
		<ul v-if="detailsVisible">
			<li>Phone: {{ phone }}</li>
			<li>Email: {{ email }}</li>
		</ul>
		<button @click="$emit('delete', id)">Delete</button>
	</li>
</template>

<script>
	export default {
		// props: ["name", "isFavorite"],
		props: {
			id: {
				type: String,
				required: true,
			},
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
		emits: ["toggle-favorite", "delete"],
		// emits: {
		// 	"toggle-favorite": function (id) {
		// 		if (id) {
		// 			return true;
		// 		} else {
		// 			console.warn("Id is missing");
		// 			return false;
		// 		}
		// 	},
		// },
		data() {
			return {
				detailsVisible: false,
			};
		},
		methods: {
			toggleDetails() {
				this.detailsVisible = !this.detailsVisible;
			},
			toggleFavorite() {
				this.$emit("toggle-favorite", this.id);
			},
		},
	};
</script>

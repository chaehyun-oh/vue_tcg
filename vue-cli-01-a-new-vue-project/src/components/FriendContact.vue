<template>
	<li>
		<h2>{{ friend.name }}</h2>
		<button @click="toggleDetails">
			{{ detailsVisible ? "Hide" : "Show" }} Details
		</button>
		<ul v-if="detailsVisible">
			<li>Phone: {{ friend.phone }}</li>
			<li>Email: {{ friend.email }}</li>
		</ul>
	</li>
</template>

<script>
	export default {
		data() {
			return {
				detailsVisible: false,
				friend: {
					id: "manuel",
					name: "Manuel Lorenz",
					phone: "0123 45678 90",
					email: "manuel@localhost.com",
				},
			};
		},
		methods: {
			toggleDetails() {
				this.detailsVisible = !this.detailsVisible;
			},
		},
	};
</script>

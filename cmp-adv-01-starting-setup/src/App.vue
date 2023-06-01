<template>
	<div>
		<the-header></the-header>
		<badge-list></badge-list>
		<user-info
			:full-name="activeUser.name"
			:info-text="activeUser.description"
			:role="activeUser.role"
		></user-info>
		<course-goal>
			<template #default="slotsProps">
				<h2>{{ slotsProps.item }}</h2>
				<p>{{ slotsProps["another-prop"] }}</p>
			</template>
		</course-goal>
	</div>
</template>

<script>
	import TheHeader from "./components/TheHeader.vue";
	import CourseGoals from "./components/CourseGoals.vue";

	export default {
		components: {
			"the-header": TheHeader,
			"course-goal": CourseGoals,
		},
		data() {
			return {
				activeUser: {
					name: "Maximilian Schwarzmüller",
					description: "Site owner and admin",
					role: "admin",
				},
			};
		},
	};
</script>

<style>
	html {
		font-family: sans-serif;
	}

	body {
		margin: 0;
	}
</style>

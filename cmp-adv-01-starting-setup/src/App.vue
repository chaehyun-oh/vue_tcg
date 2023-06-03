<template>
	<div>
		<the-header></the-header>
		<button @click="setSelectedComponent('active-goals')">
			Active Golas
		</button>
		<button @click="setSelectedComponent('manage-goals')">
			Manage Golas
		</button>
		<!-- <active-goals
			v-if="selectedComponent === 'active-goals'"
		></active-goals>
		<manage-goals
			v-if="selectedComponent === 'manage-goals'"
		></manage-goals> -->
		<keep-alive>
			<component :is="selectedComponent"> </component>
		</keep-alive>
		<!-- <badge-list></badge-list>
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
		</course-goal> -->
	</div>
</template>

<script>
	import TheHeader from "./components/layout/TheHeader.vue";
	// import CourseGoals from "./components/CourseGoals.vue";
	import ActiveGoals from "./components/ActiveGoals.vue";
	import ManageGoals from "./components/ManageGoals.vue";

	export default {
		components: {
			"the-header": TheHeader,
			// "course-goal": CourseGoals,
			ActiveGoals,
			ManageGoals,
		},
		data() {
			return {
				selectedComponent: "active-goals",
				activeUser: {
					name: "Maximilian Schwarzmüller",
					description: "Site owner and admin",
					role: "admin",
				},
			};
		},
		methods: {
			setSelectedComponent(cmp) {
				this.selectedComponent = cmp;
			},
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

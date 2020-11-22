<template>
	<div class="container main-container">
		<SalaryForm @invoiceValue="invoiceValue" />
		<div class="row">
			<p class="col-12 text-dark font-weight-bolder text-center">
				Current salary is : {{ salary }}
			</p>
		</div>
	</div>
</template>

<script>
import SalaryForm from '@/components/SalaryForm';

export default {
	name: 'SalaryContainer',
	components: { SalaryForm },
	data() {
		return {
			salary: 0,
		};
	},
	methods: {
		invoiceValue(value) {
			this.salary = value;
		},
	},
};
</script>

<style scoped>
.main-container {
	margin-top: 10%;
}
</style>

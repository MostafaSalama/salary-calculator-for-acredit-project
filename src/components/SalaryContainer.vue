<template>
	<div class="container main-container shadow-lg p-4">
		<div class="row">
			<div class="col-md-4 col-12">
				<p>Salary Taxes</p>
				<SalaryTaxes />
			</div>
			<div class="col-md-4 col-12">
				<SalaryForm @submitValues="onSubmitValues" />
			</div>
			<div>
				<p class="col-12 text-dark font-weight-bolder text-center">
					Current salary is : {{ salary }}
				</p>
			</div>
		</div>
	</div>
</template>

<script>
import SalaryForm from '@/components/SalaryForm';
import SalaryTaxes from '@/components/SalaryTaxes';

export default {
	name: 'SalaryContainer',
	components: { SalaryTaxes, SalaryForm },
	data() {
		return {
			salary: 0,
		};
	},
	methods: {
		onSubmitValues({ invoiceValue, acreditFeeValue }) {
			const acreditFee = invoiceValue * (acreditFeeValue / 100);
			this.salary = invoiceValue - acreditFee;
		},
	},
};
</script>

<style scoped>
.main-container {
	margin-top: 10%;
}
</style>

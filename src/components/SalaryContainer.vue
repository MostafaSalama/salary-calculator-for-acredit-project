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
			<div class="col-md-4 col-12">
				<p
					class="text-primary font-italic font-weight-bolder text-center"
				>
					Current salary is : {{ salary }}
				</p>
				<SalaryCalSteps v-bind="salaryValues" />
			</div>
		</div>
	</div>
</template>

<script>
import SalaryForm from '@/components/SalaryForm';
import SalaryTaxes from '@/components/SalaryTaxes';
import SalaryCalSteps from '@/components/SalaryCalSteps';

export default {
	name: 'SalaryContainer',
	components: { SalaryCalSteps, SalaryTaxes, SalaryForm },
	data() {
		return {
			salary: 0,
			salaryValues: {
				invoiceSum: '',
				invoiceSumAfterFees: '',
				invoiceSumAfterCost: '',
				grossSum: '',
				salaryGross: '',
				salaryAfterTax: '',
			},
			taxes: {
				aga: 0.239045,
				ser: 0.107143,
				tax: 0.3,
			},
		};
	},
	methods: {
		onSubmitValues({ invoiceValue, acreditFeeValue, materialCostValue }) {
			this.calSalary({
				invoiceValue,
				acreditFeeValue,
				materialCostValue,
			});
		},
		calSalary({ invoiceValue, acreditFeeValue, materialCostValue }) {
			this.salaryValues.invoiceSum = invoiceValue;
			const acreditFee = invoiceValue * (acreditFeeValue / 100);
			this.salary = invoiceValue - acreditFee;
			this.salaryValues.invoiceSumAfterFees = this.salary;
			//TODO add cost calculation  here
			console.log(materialCostValue);
			this.salary = this.salary - materialCostValue;
			this.salaryValues.invoiceSumAfterCost = this.salary;
			this.salary = this.salary - this.salary * this.taxes.aga;
			this.salaryValues.grossSum = this.salary;
			this.salary = this.salary - this.salary * this.taxes.ser;
			this.salaryValues.salaryGross = this.salary;
			this.salary = this.salary - this.salary * this.taxes.tax;
			this.salaryValues.salaryAfterTax = this.salary;
			this.normalizeValues();
		},
		normalizeValues() {
			this.salary = this.salary.toFixed(3);
			Object.keys(this.salaryValues).forEach((key) => {
				this.salaryValues[key] = parseFloat(
					this.salaryValues[key],
				).toFixed(3);
			});
		},
	},
};
</script>

<style scoped>
.main-container {
	margin-top: 10%;
}
</style>

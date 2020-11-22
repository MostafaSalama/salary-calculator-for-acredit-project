<template>
	<div>
		<p>
			Invoice Sum:<span class="text-dark font-weight-bolder">{{
				invoiceSum
			}}</span>
		</p>
		<p>
			Invoice Sum After Acredit Fees:<span
				class="text-dark font-weight-bolder"
				>{{ invoiceSumAfterFees }}</span
			>
		</p>
		<p>
			Invoice Sum After Removing Material Cost:<span
				class="text-dark font-weight-bolder"
				>{{ invoiceSumAfterCost }}</span
			>
		</p>
		<p>
			Gross Sum After AgA:<span class="text-dark font-weight-bolder">{{
				grossSum
			}}</span>
		</p>
		<p>
			Salary Gross after SEr:<span class="text-dark font-weight-bolder">
				{{ salaryGross }}
			</span>
		</p>
		<p>
			Salary after TAX:<span class="text-dark font-weight-bolder">
				{{ salaryAfterTax }}
			</span>
		</p>
	</div>
</template>

<script>
export default {
	name: 'SalaryCalSteps',
	props: [
		'invoiceSum',
		'invoiceSumAfterFees',
		'invoiceSumAfterCost',
		'grossSum',
		'salaryGross',
		'salaryAfterTax',
	],
};
</script>

<style scoped></style>

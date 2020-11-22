<template>
	<div>
		<div
			class="d-flex align-items-baseline flex-wrap col-12 justify-content-center"
		>
			<form @submit="submitValues">
				<div class="form-group">
					<label for="invoice_input">Invoice Value</label>
					<input
						type="text"
						class="form-control"
						id="invoice_input"
						v-model="invoiceValue"
					/>
				</div>
				<div class="form-group">
					<label for="acredit_fee"
						>Acredit Fee <small>(in percent)</small></label
					>
					<input
						type="number"
						min="0"
						max="100"
						id="acredit_fee"
						class="form-control"
						step="any"
						v-model="acreditFeeValue"
					/>
				</div>
				<div class="form-group">
					<label for="material_cost">Material Cost</label>
					<input
						type="text"
						class="form-control"
						v-model="materialCostValue"
						id="material_cost"
					/>
				</div>
				<div class="form-group">
					<button type="submit" class="btn btn-primary">
						Calculate Salary
					</button>
				</div>
			</form>
		</div>
	</div>
</template>

<script>
export default {
	name: 'SalaryForm',
	data() {
		return {
			invoiceValue: '',
			acreditFeeValue: 2,
			materialCostValue: 0,
		};
	},
	methods: {
		submitValues(e) {
			e.preventDefault();
			const { invoiceValue, acreditFeeValue, materialCostValue } = this;
			if (invoiceValue) {
				this.$emit('submitValues', {
					invoiceValue,
					acreditFeeValue,
					materialCostValue,
				});
			}
		},
	},
};
</script>

<style scoped></style>

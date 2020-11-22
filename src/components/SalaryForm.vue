<template>
	<div class="row">
		<div
			class="d-flex align-items-baseline flex-wrap col-12 justify-content-center"
		>
			<label class="mr-2">
				<input
					class="form-control px-5"
					type="text"
					placeholder="write here invoice value"
					v-model="invoiceValue"
				/>
			</label>
			<button class="btn btn-primary" @click="submitInvoice">
				Calculate Salary
			</button>
		</div>
	</div>
</template>

<script>
export default {
	name: 'SalaryForm',
	data() {
		return {
			invoiceValue: '',
		};
	},
	methods: {
		submitInvoice() {
			if (this.invoiceValue) {
				this.$emit('invoiceValue', this.invoiceValue);
			}
		},
	},
};
</script>

<style scoped>
.salary-form {
	display: flex;
	justify-content: center;
	align-items: center;
	justify-items: center;
}
</style>

interface Product {
	description: string;
	price: number;
}

const phone: Product = {
	description: 'Nokia A1',
	price: 150.0
};

const tablet: Product = {
	description: 'iPad Air',
	price: 250.0
};

interface TAxCalculationOption {
	tax: number;
	products: Product[];
}
// function taxCalculation({ products, tax }: TAxCalculationOption): [number, number] {
function taxCalculation(options: TAxCalculationOption): [number, number] {
	let total = 0;
	const { products, tax } = options;

	products.forEach(({ price }) => {
		total += price;
	});

	return [total, total * tax];
}

const shopingCart = [phone, tablet];
const tax = 0.15;

const [total, taxTotal]: number[] = taxCalculation({
	products: shopingCart,
	tax
});

console.log('Total', total);
console.log('Tax', taxTotal);

export {};

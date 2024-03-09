export interface Passenger {
	name: string;
	children?: string[];
}

const passenger1: Passenger = {
	name: 'Sophia'
};

const passenger2: Passenger = {
	name: 'Jorge Luis',
	children: ['Sophia', 'Jorge Alejandro']
};

const printChildren = (passenger: Passenger): number => {
	const howManyChildren = passenger.children?.length || 0;
	// const howManyChildren = passenger.children!.length;

	console.log(passenger.name, howManyChildren);
	return howManyChildren;
};

printChildren(passenger2);
printChildren(passenger1);

const orders = [
	{ id: 'diamond', total: 11.0 },
	{ id: 'brick', total: 23.0 },
	{ id: 'urn', total: 11.0 },
];

// let total = 0;

// for (const order of orders) {
// 	total += order.total;
// }

let total = orders.reduceRight((acc, currentOrder) => {
	return acc + currentOrder.total;
}, 0);

console.log(total);

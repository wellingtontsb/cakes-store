export const calcTotalPrice=(item)=>{
	let total = 0;
	for(let i of item){
		total+= (i.item.preco * i.quantidade);
	}
	return total.toFixed(2);
}
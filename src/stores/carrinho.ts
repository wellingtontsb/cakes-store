import { create } from 'zustand';

let myCart;

export const useCart = create((set)=> ({
	myCart: [],
	addItem: (item, qtd)=> set((state)=>{
		let newCart = [...state.myCart];
		let newItem = newCart.findIndex(index=>item.id === index.item.id);

		if(newItem < 0){
			newCart.push({item, quantidade: 0});
			newItem = newCart.findIndex(index=>item.id === index.item.id);
		}

		newCart[newItem].quantidade += qtd;

		if(newCart[newItem].quantidade <= 0) {
			newCart = newCart.filter(index=>item.id !== index.item.id);
		}

		state.myCart = newCart;
		return state.myCart;
	}),
}))
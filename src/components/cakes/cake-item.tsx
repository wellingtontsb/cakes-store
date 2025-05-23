'use client'

import { Cake } from '@/types/Cake';
import Image from 'next/image';
import { useCart } from '@/stores/carrinho';

export const CakeItem=({item}: Cake)=>{
	const addItem = useCart((state)=> state.addItem);

	const handleAddCake=()=>{
		addItem(item, 1);
	}

	return(
		<div className='border rounded-sm text-center pb-3'>
			<div>
				<Image
					src={item.src}
					alt={item.sabor}
					width={350}
					height={200}
				/>
			</div>
			<div className='flex justify-around my-3'>
				<p>{item.sabor}</p>
				<p>R$ {item.preco.toFixed(2)}</p>
			</div>
			<button
				className='border rounded-md py-1 px-2 cursor-pointer'
				onClick={handleAddCake}
			>Comprar</button>
		</div>
	);
}
import { Minus, Plus, XIcon } from 'lucide-react';
import { useCart } from '@/stores/carrinho';
import { calcTotalPrice } from '@/utils/myFunctions';
import Link from 'next/link';

export const Sidebar=({isShownCart})=>{
	const cart = useCart((state)=> state.myCart);
	const addItem = useCart((state)=> state.addItem);

	const handleRemoveItem=(item)=>{
		addItem(item, -1);
	}

	const handleAddItem=(item)=>{
		addItem(item, 1);
	}

	const handleFinishShopping=(e)=>{
		if(cart.length === 0){
			e.preventDefault();
		}
	}

	return(
		<div className='fixed top-0 right-0 h-full w-full bg-black/85 text-white sm:w-72'>
			<XIcon className='cursor-pointer fixed right-0' onClick={isShownCart}/>
			<div className='text-lg text-center pt-8 pb-4 border-b'>Carrinho</div>
			{cart &&
				cart.map((item, index)=>(
					<div className='mx-3 my-6 flex justify-between' key={index}>
						<div className='font-bold'>{item.item.sabor}</div>
						<div className='text-sm'>R$ {item.item.preco.toFixed(2)}</div>
						<div className='flex justify-between gap-2 cursor-pointer'>
							<Minus className='border rounded-md' onClick={()=>handleRemoveItem(item.item)}/>
							<span>{item.quantidade}</span>
							<Plus className='border rounded-md cursor-pointer' onClick={()=>handleAddItem(item.item)}/>
						</div>
					</div>
				))
			}
			<div className='border-t flex justify-between pt-8 mx-3'>
				<div className='font-bold'>Valor Total</div>
				<div>R$ {calcTotalPrice(cart)}</div>
			</div>
			<Link
				className='block border w-3/4 mx-auto my-6 py-1 rounded-md cursor-pointer text-center'
				onClick={handleFinishShopping}
				href='/endereco'
			>Finalizar compra</Link>
		</div>
	);
}
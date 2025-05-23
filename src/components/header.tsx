'use client'

import Link from 'next/link';
import { ShoppingCart } from 'lucide-react';
import { useState } from 'react';
import { useCart } from '@/stores/carrinho';
import { Sidebar } from '@/components/sidebar';

export const Header=()=>{
	const [showCart, setShowCart] = useState(false);
	const cart = useCart((state)=> state.myCart);

	const handleShowCart=()=>{
		setShowCart(!showCart);
	}

	return(
		<header className='border-b border-black/20 shadow-md'>
			<div className='flex justify-between max-w-4xl mx-auto py-10'>
				<div>
					<div className='text-xl font-bold italic'>Belos Bolos</div>
				</div>
				<nav>
					<div>
						<ul className='flex gap-10'>
							<li><Link href='#'>Home</Link></li>
							<li><Link href='#'>Sobre</Link></li>
							<li><Link href='#'>Contatos</Link></li>
							<li className='relative'>
								{cart.length > 0 &&
									<div className='bg-[green] size-3 rounded-full absolute -top-1 -right-1'></div>
								}
								<ShoppingCart
									className='cursor-pointer'
									onClick={handleShowCart}
								/>
							</li>
						</ul>
					</div>
				</nav>
			</div>

			{showCart && 
				<Sidebar isShownCart={handleShowCart}/>
			}
		</header>
	);
}
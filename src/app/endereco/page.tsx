'use client'

import { useState } from 'react';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import Image from 'next/image';
import { calcTotalPrice } from '@/utils/myFunctions';
import { useCart } from '@/stores/carrinho';

export default function Page(){
	const [cep, setCep] = useState('');
	const [rua, setRua] = useState('');
	const [numero, setNumero] = useState('');
	const [complemento, setComplemento] = useState('');
	const [bairro, setBairro] = useState('');
	const [cidade, setCidade] = useState('');
	const [estado, setEstado] = useState('');

	const cart = useCart((state)=> state.myCart);

	const handleGetCep=async(cep)=>{
		const page = await fetch(`https://viacep.com.br/ws/${cep}/json`)
        .then(req=>{
            return req.json();
        }).then(data=>{
        	return data;
        });

        setRua(page.logradouro);
        setBairro(page.bairro);
        setCidade(page.localidade);
        setEstado(page.uf);
	}

	const handleForm=(e)=>{
		let final = [];
		e.preventDefault();
		if (cep === '' || rua === '' || bairro === '' || cidade === '' || estado === '') {
			alert('Preencha as informações de endereço.');
			return;
		}

		final.push(cep);
		final.push(rua);
		final.push(bairro);
		final.push(cidade);
		final.push(estado);
		complemento?final.push(complemento):final.push('não possui');
		numero?final.push(numero):final.push('S/N');

		final.push(...cart);

		console.log(final);
	}

	return(
		<>
			<div className='container mx-auto mb-5'>
				<Header />
				<div className='my-10 text-lg'>Veja o(s) bolo(s) que você selecionou e informe seus dados para a entrega:</div>
				{cart && 
					cart.map((item, index)=>(
						<div
							key={index}
							className='flex gap-10 items-center my-4'
						>
							<div>
								<Image
									src={item.item.src}
									alt={item.item.sabor}
									width={80}
									height={60}
								/>
							</div>
							<div className='font-bold'>{item.quantidade} - {item.item.sabor}</div>
						</div>
					))
				}
				<div className='border-t my-10 pt-4 text-2xl'>Valor Total: R$ {calcTotalPrice(cart)}</div>
				<div className='max-w-5xl mx-auto border rounded-md py-5 px-2'>
					<form onSubmit={handleForm}>
						<div className='flex justify-between'>
							<label>
								CEP:
								<input
									value={cep}
									onChange={(e)=>setCep(e.target.value)}
									className='border rounded-md outline-none px-2 mx-2 my-3'
									type='number'
									onBlur={()=>handleGetCep(cep)}
								/>
							</label>
							<label>
								Rua:
								<input
									value={rua}
									onChange={(e)=>setRua(e.target.value)}
									className='border rounded-md outline-none px-2 mx-2 my-3'
								/>
							</label>
							<label>
								Número:
								<input
									value={numero}
									onChange={(e)=>setNumero(e.target.value)}
									className='border rounded-md outline-none px-2 mx-2 my-3'
								/>
							</label>
						</div>
						<div  className='flex justify-between'>
							<label>
								Complemento:
								<input
									value={complemento}
									onChange={(e)=>setComplemento(e.target.value)}
									className='border rounded-md outline-none px-2 mx-2 my-3'
								/>
							</label>
							<label>
								Bairro:
								<input
									value={bairro}
									onChange={(e)=>setBairro(e.target.value)}
									className='border rounded-md outline-none px-2 mx-2 my-3'
								/>
							</label>
							<label>
								Cidade:
								<input
									value={cidade}
									onChange={(e)=>setCidade(e.target.value)}
									className='border rounded-md outline-none px-2 mx-2 my-3'
								/>
							</label>
						</div>
						<div  className='flex justify-around'>
							<label>
								Estado:
								<select
									value={estado}
									onChange={(e)=>setEstado(e.target.value)}
									className='border rounded-md outline-none px-2 mx-2 my-3'
								>
									<option value=''>Selecione</option>
									<option value='SP'>São Paulo</option>
									<option value='RJ'>Rio de Janeiro</option>
									<option value='MG'>Minas Gerais</option>
								</select>
							</label>
						</div>
						<div  className='flex justify-around mt-10'>
							<button className='border py-1 px-2 rounded-sm cursor-pointer'>Comprar</button>
						</div>
					</form>
				</div>
			</div>
			<Footer />
		</>
	);
}
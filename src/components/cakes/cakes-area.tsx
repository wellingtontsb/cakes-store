import { CakeItem } from '@/components/cakes/cake-item';
import { cakes } from '@/data/cakes';

export const CakesArea=()=>{
	return(
		<div>
			<div className='font-bold text-3xl text-center pt-10'>Os melhores bolos estão aqui</div>
			<div className='grid grid-cols-4 gap-5 justify-between py-5'>
				{cakes.map(item=>(
					<CakeItem key={item.id} item={item}/>
				))}
			</div>
		</div>
	);
}
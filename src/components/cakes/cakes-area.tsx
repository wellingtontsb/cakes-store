import { CakeItem } from '@/components/cakes/cake-item';
import { cakes } from '@/data/cakes';

export const CakesArea=()=>{
	return(
		<div>
			<div className='font-bold text-xl text-center pt-10 sm:text-2xl md:text-3xl'>Os melhores bolos estão aqui</div>
			<div className='grid grid-cols-1 gap-5 justify-between py-5 mx-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
				{cakes.map(item=>(
					<CakeItem key={item.id} item={item}/>
				))}
			</div>
		</div>
	);
}
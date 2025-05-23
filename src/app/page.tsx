import { Header } from '@/components/header';
import { CakesArea } from '@/components/cakes/cakes-area';
import { Footer } from '@/components/footer';

export default function Page(){

    return(
        <div>
            <div className='container mx-auto'>
                <Header />
                <CakesArea />
            </div>
            <Footer />
        </div>
    );
}
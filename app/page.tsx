
import { Navbar } from '../components/component/navbar';
import {CarouselPage} from '../components/component/carousel';
import { FiltroListadoProductos } from '../components/component/filtro-listado-productos';

import ProductoUno from './pages/producto1'
import {ProductoTres} from '../components/component/producto-tres'
import {ProductoDos} from '../components/component/producto-dos'
 
export default function Home() {
  return (
    <div>
      <Navbar />
      <CarouselPage/>
      <FiltroListadoProductos />
      <ProductoUno />
      <ProductoTres />
      <ProductoDos />
      
    </div>
  );
}

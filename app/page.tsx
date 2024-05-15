import Image from "next/image";

import { Navbar } from '../components/component/navbar';
import {CarouselPage} from '../components/component/carousel';
import { FiltroListadoProductos } from '../components/component/filtro-listado-productos';

export default function Home() {
  return (
    <div>
      <Navbar />
      <CarouselPage/>
      <FiltroListadoProductos />
    </div>
  );
}


import data from '../data/news.json';

const Novedad = ({ novedad }) => {
    if (!novedad) {
        return <div>Error: Novedad no encontrada</div>;
    }
    return (
        <div>
            <h1>{novedad.titulo2}</h1>
            <p>{novedad.descripcion2}</p>
            {/* ... (resto de la información de la novedad) */}
        </div>
    );
};

export async function getServerSideProps({ params }) {
    console.log("ID recibido:", params.id); // Verifica que el ID se está recibiendo correctamente
    const id = params.id;
    const novedad = data.novedades.find(n => n.id === id);
    console.log("Novedad encontrada:", novedad); // Verifica que la novedad se está encontrando

    if (!novedad) {
        return {
            notFound: true,
        };
    }

    return {
        props: { novedad },
    };
}

export default Novedad;



/* "use client";
import { useRouter } from 'next/router';
import data from '../data/news.json';
import Image from "next/image";

const novedad = () => {
    const router = useRouter();
    const { id } = router.query;
  
    // Encontrar la novedad específica por ID
    const novedad = data.novedades.find(n => n.id === id);
  
    // Verificar si la novedad existe
    if (!novedad) {
      return <p>Cargando...</p>;
    }

    

    return (
        <div>
            <h2 className="text-3xl pt-5">{novedad.titulo2}</h2>
        </div>
    );
};

export default novedad */
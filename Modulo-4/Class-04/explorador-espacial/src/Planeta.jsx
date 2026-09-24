import { useEffect } from "react";

function Planeta({ nombre }) {
    useEffect(() => {
        console.log(`El planeta ${nombre} ha aparecido`);

        return () => {
            console.log(`El planeta ${nombre} ha desaparecido`)
        }
    }, [])

    return (
        <p>{nombre}</p>
    )

}

export default Planeta;
// Exercício 01 - Mostrar mensagem quando o componente montar e desmontar

import { useEffect } from "react"

export function EffectEx01() {

    // Ativa quando montar o componente
    useEffect(() => {
        console.log("Componente montado")
        // Ativa quando desmonta o componente
        return () => {
            console.log("Componente desmontado")
        }
    }, [])
    
    return (
    <>
    <h1 className="p-4 text-5xl">Olá, mundo!</h1>
    </>
    )
}
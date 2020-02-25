import React, { useEffect, useState } from 'react'
import { Link } from 'gatsby'

const Header = () => {
    const [contador, setContador] = useState(0)
    useEffect(() => {
        setInterval(() => {
            setContador(valorAntigo => valorAntigo + 1)
        }, 1000)
    }, [])
    return (
        <>
            <h1>PowerSites! Contador: {contador}</h1>
            <Link to='/'>Home</Link> | 
            <Link to='/sobre'>Sobre</Link> | 
            <Link to='/contato'>Contato</Link>
        </>
    )
}

export default Header
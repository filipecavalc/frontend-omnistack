import React, { useState } from 'react';

export default function New() {
    const [company, setCompany] = useState('');
    const [techs, setTechs] = useState('');

    function handleSubmit() {

    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="company">EMPRESA *</label>
            <input 
                id="company"
                placeholder="Sua empresa incrível"
                value={company}
                onChange={event => setCompany(event.target.value)}
            />

            <label htmlFor="techs">TECNOLOGIAS * <span>(separadas por vírgula)</span></label>
            <input 
                id="techs"
                placeholder="Sua empresa incrível"
                value={techs}
                onChange={event => setTechs(event.target.value)}
            />

            <label htmlFor="techs">VALOR DA DIÁRIA * <span>(Caso gratuito deixe em branco)</span></label>
            <input 
                id="techs"
                placeholder="Sua empresa incrível"
                value={techs}
                onChange={event => setTechs(event.target.value)}
            />
        </form>
    )
}
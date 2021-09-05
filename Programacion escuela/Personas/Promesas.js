const personas = [
    {
        id: 1,
        nombre: 'Alberto',
    },
    {
        id: 2,
        nombre: 'Cristina',
    },
    {
        id: 3,
        nombre: 'Anabel',
    },
    {
        id: 4,
        nombre: 'Ofelia',
    },
]

const otros = personas.map((elemento) => {
    return {
        personaId: elemento.id,
        nombreCompleto: `${elemento.nombre} Fernandez`,
    }
});

const findByPersonaId = (id) => otros.find((persona) => persona.personaId === id);

const findAllByPersonaIdLessThan = (id) => otros.filter((persona) => persona.personaId < id);

const lola = (id) => {
    return new Promise((found, notFound) => {
        setTimeout(() => {
            const dexter = findByPersonaId(id);
            if (dexter) {
                found(dexter);
            } else {
                notFound('Acá mando un mensaje');
            }
        }, 3000);
    })
}

lola(parseInt(prompt('Ingrese un id')))
    .then((persona) => { // este es el found
        console.log(persona);
    })
    .catch((mensaje) => {  // este es el notFound
        console.log(mensaje);
    });

console.log('Estoy al final de todo');
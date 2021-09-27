import { createContext }  from 'react'

//No IMPORTA que componente yo cree, si importo esta funcion, va a poder acceder al estado que esta aqui adentro.
export const GlobalContext = createContext({
  tasks: [
    {
      id: "1",
      title: 'title one',
      description: 'some description',
      done: false
    },
    {
      id: "2",
      title: 'title two',
      description: 'some description 2',
      done: false
    }
  ],
})


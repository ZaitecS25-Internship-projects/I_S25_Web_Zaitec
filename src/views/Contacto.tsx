
import { useActionData, Form, useOutletContext } from 'react-router-dom';
import type { ActionFunctionArgs } from "react-router-dom"
import type { userDataType } from "../types"
import { useRef, useEffect } from 'react';
import { initialForm } from '../layouts/Layout';

export type ActionDataType = {
  error?: string
  formUserData: userDataType
}

type OutletContextType = {
  formState: userDataType;
  setFormState: React.Dispatch<React.SetStateAction<userDataType>>;
};


export const action = async ({ request }: ActionFunctionArgs) => {
  const dataForm = await request.formData()
  const data = Object.fromEntries(dataForm.entries()) as userDataType

  const userData = {...data, comentario:'sin comnetario' }

  if (Object.values(userData).includes('')) {
      return { error: 'Todos los campos son obligatorios' } 
  }

  console.log(userData)
  return { formUserData: userData }
}

export default function Contacto() {

  const actionData = useActionData<ActionDataType>()
  const { formState, setFormState } = useOutletContext<OutletContextType>()
  const formRef = useRef<HTMLFormElement>(null)

  useEffect(() => {
    if (actionData && !actionData.error) {
      setFormState(initialForm)
      formRef.current?.reset();
    }
  }, [actionData])

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    const { value, name } = e.target
    setFormState((prev) => ({
      ...prev,
      [name]: value
    }))
  }

  return (
    <div className="w-full md:w-3/4 lg:w-1/2 p-10 my-10 mx-auto">
      <p className='text-2xl text-center mb-6'><span className='text-orange-600'>Rellene el formulario</span> y le conestaremos lo antes posible</p>
      <fieldset className="border-2 border-neutral-300 p-10 rounded-xl shadow-lg">
        <legend className="text-xl md:text-3xl lg:text-4xl text-center text-neutral-600 px-2"> Formulario de Contacto</legend>
        <Form
          ref={formRef}
          method="post"
          className="flex flex-col gap-5">
          <div className="flex flex-col gap-1 text-neutral-600">
            <label
              className="font-bold text-lg"
              htmlFor="nombre">Nombre:</label>
            <input
              type="text"
              id="nombre"
              name="nombre"
              onChange={handleChange}
              placeholder="Escribe tú nombre..."
              className="w-full border border-neutral-300 p-2 rounded-md shadow-md outline-0 text-md" />
          </div>
          <div className="flex flex-col gap-1 text-neutral-600">
            <label
              className="font-bold text-lg"
              htmlFor="apellido">Primer Apellido:</label>
            <input
              className="w-full border border-neutral-300 rounded-md p-2 shadow-md outline-0 text-md"
              type="text" id="apellido" name="apellido"
              onChange={handleChange}
              placeholder="Escribe tú primer apellido..."
            />
          </div>
          <div className="flex flex-col gap-1 text-neutral-600">
            <label
              className="font-bold text-lg"
              htmlFor="segunapellido">Segundo Apellido:</label>
            <input
              className="w-full border border-neutral-300 rounded-md p-2 shadow-md outline-0 text-md"
              type="text" id="segunapellido" name="segunapellido"
              onChange={handleChange}
              placeholder="Escribe tú segundo apellido..."
            />
          </div>
          <div className="flex flex-col gap-1 text-neutral-600">
            <label
              className="font-bold text-lg"
              htmlFor="email"
            >Email:</label>
            <input
              className="w-full border border-neutral-300 rounded-md p-2 shadow-md outline-0 text-md"
              type="email" id="email" name="email"
              onChange={handleChange}
              placeholder="Escribe tú email..."
            />
          </div>
          <div className="flex flex-col gap-1 text-neutral-600">
            <label
              className="font-bold text-lg"
              htmlFor="telefono">Telefono de contacto:</label>
            <input
              className="w-full border border-neutral-300 rounded-md p-2 shadow-md outline-0 text-md"
              type="text" id="telefono" name="telefono"
              onChange={handleChange}
              placeholder="Escribe tú número de teléfono..."
            />
          </div>
          <div className="flex flex-col gap-1 text-neutral-600">
            <label
              className="font-bold text-lg"
              htmlFor="fecha">Fecha:</label>
            <input
              className="w-full border border-neutral-300 rounded-md p-2 shadow-md outline-0 text-md text-neutral-500"
              type="date" id="fecha"
              name="fecha"
              onChange={handleChange}
            />

          </div>
          <div className="flex flex-col gap-1 text-neutral-600">
            <label
              className="font-bold text-lg"
            >Comentario:</label>
            <textarea
              className="w-full h-20 border border-neutral-300 shadow-md outline-0"
              id="comentario" name="comentario"
              onChange={handleChange}
              placeholder="Escribe un comentario..."></textarea>
          </div>
          <div className="flex gap-5">
            <button
              type="submit"
              className="block bg-green-500 flex-1  my-2 mx-auto py-1 font-bold text-white text-lg text-shadow-lg rounded-md"
            >Enviar</button>
            <button
              type="reset"
              className="block bg-orange-500 flex-1 my-2 mx-auto py-1 font-bold text-white text-lg text-shadow-lg rounded-md"
            >Resetear</button>
          </div>
          <div>
            {actionData?.error}
          </div>
        </Form>
      </fieldset>

    </div>
  )
}





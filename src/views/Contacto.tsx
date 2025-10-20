
import { useRef, useEffect, useState } from 'react';
import type { ActionFunctionArgs } from "react-router-dom"
import { useActionData, Form, useOutletContext } from 'react-router-dom';
import { initialForm } from '../layouts/Layout';
import type { ErrorType, UserDataType } from "../types"


export type ActionDataType = {
  error?: string;
  formUserData: UserDataType;
};

type OutletContextType = {
  formState: UserDataType;
  setFormState: React.Dispatch<React.SetStateAction<UserDataType>>;
};

export const action = async ({ request }: ActionFunctionArgs) => {

  const dataForm = await request.formData();
  const data = Object.fromEntries(dataForm.entries()) as UserDataType;


  const userData = { ...data, comentario: data.comentario || 'sin comentario' };

  // Validación básica (puedes ajustar más adelante)
  if (Object.values(userData).includes('')) {
    return { error: 'Todos los campos son obligatorios' };
  }

  console.log(userData);
  return { formUserData: userData };
};

export default function Contacto() {
  const actionData = useActionData<ActionDataType>();
  const { formState, setFormState } = useOutletContext<OutletContextType>();
  const [errors, setErrors] = useState<ErrorType>({
    nombre: '',
    apellido: '',
    segunapellido: '',
    email: '',
    telefono: '',
    fecha: '',
  });

  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (actionData && !actionData.error) {
      setFormState(initialForm);
      formRef.current?.reset();
    }
  }, [actionData]);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    const { name, value } = e.target;

    // Actualiza estado del formulario
    const updatedForm = { ...formState, [name]: value };
    setFormState(updatedForm);

    // Validación dinámica simple
    setErrors(prev => {
      const newErrors = { ...prev };
      if (value.trim() === '') {
        newErrors[name as keyof ErrorType] = 'Este campo es obligatorio';
      } else if (name === 'email') {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        newErrors[name as keyof ErrorType] = !emailRegex.test(value)
          ? 'Email no válido'
          : '';
      } else {
        newErrors[name as keyof ErrorType] = '';
      }
      return newErrors;
    });
  };

  return (

    <div className="w-full md:w-3/4 lg:w-1/2 p-10 my-10 mx-auto">
      <p className="text-2xl text-center mb-6">
        <span className="text-orange-600">Rellene el formulario</span> y le contestaremos lo antes posible
      </p>
      <fieldset className="border-2 border-neutral-300 p-10 rounded-xl shadow-lg">
        <legend className="text-xl md:text-3xl lg:text-4xl text-center text-neutral-600 px-2">
          Formulario de Contacto
        </legend>

        <Form ref={formRef} method="post" className="flex flex-col gap-5">
          {/* Nombre */}
          <div className="flex flex-col gap-1 text-neutral-600">
            <label className="font-bold text-lg" htmlFor="nombre">Nombre:</label>
            <input
              type="text"
              id="nombre"
              name="nombre"
              value={formState.nombre}
              onChange={handleChange}
              placeholder="Escribe tu nombre..."
              className="w-full border border-neutral-300 p-2 rounded-md shadow-md outline-0 text-md"
            />
            {errors.nombre && <p className="text-red-500 text-sm">{errors.nombre}</p>}
          </div>

          {/* Primer apellido */}
          <div className="flex flex-col gap-1 text-neutral-600">
            <label className="font-bold text-lg" htmlFor="apellido">Primer Apellido:</label>
            <input
              className="w-full border border-neutral-300 rounded-md p-2 shadow-md outline-0 text-md"
              type="text"
              id="apellido"
              name="apellido"
              value={formState.apellido}
              onChange={handleChange}
              placeholder="Escribe tu primer apellido..."
            />
            {errors.apellido && <p className="text-red-500 text-sm">{errors.apellido}</p>}
          </div>

          {/* Segundo apellido */}
          <div className="flex flex-col gap-1 text-neutral-600">
            <label className="font-bold text-lg" htmlFor="segunapellido">Segundo Apellido:</label>
            <input
              className="w-full border border-neutral-300 rounded-md p-2 shadow-md outline-0 text-md"
              type="text"
              id="segunapellido"
              name="segunapellido"
              value={formState.segunapellido}
              onChange={handleChange}
              placeholder="Escribe tu segundo apellido..."
            />
            {errors.segunapellido && <p className="text-red-500 text-sm">{errors.segunapellido}</p>}
          </div>

          {/* Email */}
          <div className="flex flex-col gap-1 text-neutral-600">
            <label className="font-bold text-lg" htmlFor="email">Email:</label>
            <input
              className="w-full border border-neutral-300 rounded-md p-2 shadow-md outline-0 text-md"
              type="email"
              id="email"
              name="email"
              value={formState.email}
              onChange={handleChange}
              placeholder="Escribe tu email..."
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
          </div>

          {/* Teléfono */}
          <div className="flex flex-col gap-1 text-neutral-600">
            <label className="font-bold text-lg" htmlFor="telefono">Teléfono de contacto:</label>
            <input
              className="w-full border border-neutral-300 rounded-md p-2 shadow-md outline-0 text-md"
              type="text"
              id="telefono"
              name="telefono"
              value={formState.telefono}
              onChange={handleChange}
              placeholder="Escribe tu número de teléfono..."
            />
            {errors.telefono && <p className="text-red-500 text-sm">{errors.telefono}</p>}
          </div>

          {/* Fecha */}
          <div className="flex flex-col gap-1 text-neutral-600">
            <label className="font-bold text-lg" htmlFor="fecha">Fecha:</label>
            <input
              className="w-full border border-neutral-300 rounded-md p-2 shadow-md outline-0 text-md text-neutral-500"
              type="date"
              id="fecha"
              name="fecha"
              value={formState.fecha}
              onChange={handleChange}
            />
            {errors.fecha && <p className="text-red-500 text-sm">{errors.fecha}</p>}
          </div>

          {/* Comentario */}
          <div className="flex flex-col gap-1 text-neutral-600">
            <label className="font-bold text-lg" htmlFor="comentario">Comentario:</label>
            <textarea
              className="w-full h-20 border border-neutral-300 shadow-md outline-0"
              id="comentario"
              name="comentario"
              value={formState.comentario}
              onChange={handleChange}
              placeholder="Escribe un comentario..."
            ></textarea>
          </div>

          {/* Botones */}
          <div className="flex gap-5">
            <button
              type="submit"
              className="block bg-green-500 flex-1 my-2 mx-auto py-1 font-bold text-white text-lg text-shadow-lg rounded-md"
            >
              Enviar
            </button>
            <button
              type="reset"
              className="block bg-orange-500 flex-1 my-2 mx-auto py-1 font-bold text-white text-lg text-shadow-lg rounded-md"
            >
              Resetear
            </button>
          </div>

          {/* Mensaje de error global */}
          {actionData?.error && (
            <p className="text-center text-red-600 font-semibold">{actionData.error}</p>
          )}
        </Form>
      </fieldset>
    </div>
  );

}

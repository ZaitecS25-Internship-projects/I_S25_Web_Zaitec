import { useState } from "react"
import { Outlet } from "react-router-dom"
import Header from "../components/Header"
import type { userDataType } from "../types"

export const initialForm = {
nombre: '',
apellido: '',
segunapellido: '',
email: '',
telefono: '',
fecha: '',
comentario: '',
}

export default function Layout() {

  const [formState, setFormState] = useState<userDataType>(initialForm)

  return (
    <>
      <Header />

      <Outlet
      context={{formState, setFormState}}
      />
    </>
  )
}

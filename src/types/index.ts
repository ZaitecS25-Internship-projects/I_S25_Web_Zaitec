export type CardInnovacionType = {
  titulo: string;
  descripcion: string;
};

export type Cards = CardInnovacionType[];

/**
 * Datos del formulario de contacto / usuario
 */
export type UserDataType = {
  nombre: string;
  apellido: string;
  segunapellido: string;
  email: string;
  telefono: string;
  fecha: string;
  comentario?: string; // opcional para permitir vacío o valor por defecto
};

/**
 * Posibles errores de validación del formulario
 */
export type ErrorType = {
  nombre: string;
  apellido: string;
  segunapellido: string;
  email: string;
  telefono: string;
  fecha: string;
};

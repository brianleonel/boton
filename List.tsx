import { ReactNode } from "react";

interface Props{
  children: ReactNode
  isLoading: boolean
  onClick: () =>void
}
function Button({children,isLoading,onClick}:Props){
    return(<button 
              disabled={isLoading} /*depende del valor q tenga disabled el boton estara
              habilitado o deshabilitado */
              onClick={onClick} /*la funcion q se ejecuta al hacer click cambia el valor de isLoading */
              type="button" 
              className={`btn btn-${isLoading==false ? "primary" : "secondary"}`}
            >{isLoading==true ? "cargando...":children}
            </button>
          );
}
export default Button;

/*import { ReactNode } from "react"

type Prop={
  children: ReactNode
  estado: boolean
  onClick: ()=>void
}
function MostrarBoton({children,estado,onClick}: Prop){
    return(
      <button
        disabled={estado}
        onClick={onClick}
        type="button" 
        className="btn btn-primary" 
      >{children}</button>
    );
}
export default MostrarBoton*/
import { useState } from "react";
import Button from "./components/List"
function CompP(){
  const [isLoading, setIsLoading]=useState(false);
  const handleClick=()=>setIsLoading(!isLoading);/*no se ejecuta hasta que se invoque la funcion */
    return(<Button isLoading={isLoading} onClick={handleClick}>Hola mundo</Button>);
}
/*paso como prps isL(variable) y onClick*/
export default CompP








/*import { useState } from "react";
import Boton from "./components/List"
function CompP(){
    const [estado,cambiarEstado]=useState(false)
    const select=()=>{
      cambiarEstado(!estado)
    }
    return(
      <Boton estado={estado} onClick={select}  >boton...</Boton>
    );
}
export default CompP*/
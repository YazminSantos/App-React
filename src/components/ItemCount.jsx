import React, { useState, useEffect } from 'react';

export default function ItemCount() {
    const [x,setx] = useState (0)//hook funcion dentro de la clase 
    const [carr1,setcarr1]=useState(0)
   
   
    
 useEffect(() => {
    if (carr1==11){
        alert ('No hay más stock, elige menos')
       }
    else{
        console.log("carr1: "+ carr1)
    }
},[carr1]);

    return (
      
    <div style={{border: '1px solid #13B89A', width:'250px', height:'150px',paddingLeft:'0px',paddingRight:'30px',background:'#10E19C'}}>
       STOCK:10 
        <br />
        <div style={{textAlign: 'center'}}>
            <div style={{background:'white', textAlign: 'center', width:'230px'}}>
                <button style={{border:'0px', background:'white'}} onClick={()=>{
                    setx(x+1);
                }}>+</button> 
                {x}
                <button style={{border:'0px',background:'white'}} onClick={()=>{
                    if(x==0){
                        console.log("No hay menos")
                    }
                    else{
                        setx(x-1);
                    }
                    
                }}>-</button>
            </div>
        <br />
        <br />
        <button style={{border:'0px'}} onClick={()=>{
            setcarr1(x) 
        }}>Agregar al carrrito</button>
        </div>
    </div>
  )
}

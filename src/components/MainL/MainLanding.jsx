import React from "react";
import ItemListContainer from "../items/ItemListContainer";
import OpenBannerD from "../items/OpenBannerD";



const MainLanding = ({onAdd, onRemove}) =>{
  return (
    <>  
        <OpenBannerD />
        <ItemListContainer onAdd={onAdd} onRemove={onRemove}/>
    </>
  )
}

export default MainLanding
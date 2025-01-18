import React, { useEffect, useState } from "react";
import {
  LeadingActions,
  SwipeableList,
  SwipeableListItem,
  SwipeAction,
  TrailingActions,
} from "react-swipeable-list";
import "react-swipeable-list/dist/styles.css";
import ChampInfo from "./ChampInfo";

export default function Champ({ champ, eliminarCampeon, setChampEdit }) {
  const [confirmEliminar, setConfirmEliminar] = useState(false);

  useEffect(() => {
    if(confirmEliminar){
      eliminarCampeon(champ.id)
    }
  }, [confirmEliminar])


  const leadingActions = () => (
    <LeadingActions>
      <SwipeAction onClick={() => setChampEdit(champ)} >
        Editar
      </SwipeAction>
    </LeadingActions>
  );

  const trailingActions = () => (
    <TrailingActions>
      <SwipeAction
        destructive={true}
        onClick={handleEliminar}
      >
        Eliminar
      </SwipeAction>
    </TrailingActions>
  );

  const handleEliminar = () => {
    setConfirmEliminar(confirm(`Estas seguro de eliminar al campeon ${champ.campeon}`))
  }



  return (
    <SwipeableList>
      <SwipeableListItem
        leadingActions={leadingActions()}
        trailingActions={trailingActions()}
      >
        <ChampInfo champ={champ} />
      </SwipeableListItem>
    </SwipeableList>
  );
}

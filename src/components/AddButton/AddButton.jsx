import React from 'react';
import { ButtonAdd } from "./styled";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const AddButton = ({ onClick }) => {
  return (
    <ButtonAdd onClick={onClick}>
      <FontAwesomeIcon icon={faPlusCircle} />
    </ButtonAdd>
  );
};

/* eslint-disable no-case-declarations */
import { Reducer } from 'redux';

import IDefaultState from '../../../interfaces/IDefaultState';
import { CharacterTypes } from '../types/actions';
import INITIAL_STATE from '../State';

const characterReducer: Reducer<IDefaultState> = (
  state = INITIAL_STATE,
  action,
) => {
  switch (action.type) {
    case CharacterTypes.SAVE_SELECTED_CHARACTER:
      return { ...state, selectedCharacter: action.payload };
    case CharacterTypes.EDIT_SELECTED_CHARACTER_NAME:
      const newStateName = { ...state };
      newStateName.selectedCharacter.name = action.payload;
      return newStateName;
    case CharacterTypes.EDIT_SELECTED_CHARACTER_DESCRIPTION:
      const newStateDescription = { ...state };
      newStateDescription.selectedCharacter.description = action.payload;
      return newStateDescription;
    default:
      return state;
  }
};

export default characterReducer;

import { action } from 'typesafe-actions';

import { CharacterTypes } from '../types/actions';
import ICharacter from '../../../interfaces/ICharacter';

export const saveSelectedCharacter = (selectedCharacter: ICharacter) =>
  action(CharacterTypes.SAVE_SELECTED_CHARACTER, selectedCharacter);

export const editSelectedCharacterName = (newName: string) =>
  action(CharacterTypes.EDIT_SELECTED_CHARACTER_NAME, newName);

export const editSelectedCharacterDescription = (newName: string) =>
  action(CharacterTypes.EDIT_SELECTED_CHARACTER_DESCRIPTION, newName);

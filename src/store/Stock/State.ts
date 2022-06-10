import IDefaultState from '../../interfaces/IDefaultState';

const INITIAL_STATE: IDefaultState = {
  selectedCharacter: {
    id: null,
    name: '',
    description: '',
    thumbnail: {
      path: '',
      extension: '',
    },
  },
};

export default INITIAL_STATE;

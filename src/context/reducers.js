export default function (state, action) {
  switch (action.type) {
    case 'ADD_NAME':
      const {name} = action.payload;
      const newList = [...state.nameList, name];
      return {...state, nameList: newList};

      case 'CLEAR_LIST':
          return {...state,nameList:[]}
    default:
      return state;
  }
}

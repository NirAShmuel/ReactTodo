 export var searchTextReducer = (state = '', action) => {
   return {
     type:'SET_SEARCH_TEXT',
     return action.searchText;
     default:
     return state;
   };
 };

const photos = (state=null, action) => {
  switch(action.type) {
    case "INITIALIZE_FEED":
      return action.payload;
      break;
    
    case "SEARCH_BY_TAG":
      return action.payload;
      break;

    default: 
      return state;
  };

  return state;
};

export default photos;
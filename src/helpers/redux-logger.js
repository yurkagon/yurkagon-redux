const logger = (newState, prevState, action) => {
  console.log({prevState});
  console.log({
    action: action.type,
    payload: action.payload,
  });
  console.log({newState});
};

export default logger;

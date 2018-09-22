const logger = (newState, prevState, action) => {
  console.group();
  console.log({prevState});
  console.log({
    action: action.type,
    payload: action.payload,
  });
  console.log({newState});
  console.groupEnd();
};

export default logger;

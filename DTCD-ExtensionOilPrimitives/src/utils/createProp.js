export default (expression = '', type = 'expression', component = 'textarea') => {
  return {
    type,
    expression,
    input: {
      component,
    },
  };
};

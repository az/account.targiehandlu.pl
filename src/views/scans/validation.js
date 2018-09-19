export const validate = values => {
  
  //console.log(values);

  const errors = {};

  if (!values.message && !values.creative_id) {
    errors.message = ['Choose template or type in message below'];
    errors.creative_id = ['No data detected...'];
  }

  return errors;
};

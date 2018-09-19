export const validate = values => {

  //console.log(values);

  const errors = { data : {}};

  if ("data" in values)
  {
    if(values.data.phone && (values.data.phone.match(/[0-9]/g) || []).length < 9)
    {
        errors.data.phone = ['Bad phone number'];
    }

  }


  return errors;
};

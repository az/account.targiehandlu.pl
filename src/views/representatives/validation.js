
const validLinkRegExp = /[-a-zA-Z0-9@:%_+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_+.~#?&//=]*)?/gi;
const validLink = new RegExp(validLinkRegExp);

export const validate = ({name, value}) => {

  console.log(name)

  const errors = {};

  switch(name)
  {
    case "logotype":


      if(value && ( ! value.includes("http") || ! value.match( validLink ) ) )
      {
        errors["value"] = 'Must contain valid link http(s)://'
      }

      break;

    default:


  }
  return errors;
};

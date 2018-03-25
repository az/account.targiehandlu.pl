
const validLinkRegExp = /[-a-zA-Z0-9@:%_+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_+.~#?&//=]*)?/gi;
const validLink = new RegExp(validLinkRegExp);

export const validate = ({name, value}) => {

  const errors = {};

  switch(name)
  {
    case "logotype":
    case "facebook":
    case "linkedin":
    case "twitter":
    case "website":

      if(value && ! value.match( validLink ) )
      {
        errors["value"] = 'Must contain valid link'
      }

      break;

    case "keywords":


      if(value && Array.isArray(value) && value.length > 3)
      {
          errors["value"] = 'Only 3 keywords may be selected'
      }

      break;

    default:


  }
  return errors;
};

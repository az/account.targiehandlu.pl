import {translate} from 'admin-on-rest';

export const validate = (values) => {

  //console.log(values);

  const errors = { data : {} };

  if (! values.data)
  {
      errors.data.subject = translate("aor.validation.required");
  }
  else
  {
    // if(! "from_email" in values.data || (values.data.from_email && values.data.from_email.indexOf("@") < 1))
    // {
    //   errors.data.from_email = "Address seems to be incorrect";
    // }
    //
    // if(! "subject" in values.data || (values.data.subject || "").length < 10)
    // {
    //   errors.data.subject = "Subject must be more descriptive";
    // }

  }

  if(!values.contactlist_ids || !Array.isArray(values.contactlist_ids))
  {
    errors.contactlist_ids = translate('resources.contacts.data.contactlist_ids');
  }

  if(!values.name)
  {
    errors.name = translate('aor.validation.name');
  }
  else
  {
    if(values.name.length < 10)
    {
        errors.name = translate('aor.validation.name');
    }
  }

  return errors;
};

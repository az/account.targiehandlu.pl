const containsEmail = str => str.indexOf('@') > 1;

export const validate = values => {
  //console.log(values);

  const errors = {};

  if (!values.imported_manually && !values.imported_json) {
    errors.imported_manually = ['No data detected...'];
    errors.imported_json = ['No data detected...'];
  }

  if (values.imported_manually) {
    if (!values.imported_manually.every((el, idx, arr) => containsEmail(el))) {
      errors.imported_manually = ['No email addresses detected!'];
    }
  }

  if (values.imported_json) {
    const mappings = values.imported_json.mappings;

    let emailMapped = false;
    const mappingsUsed = [];

    for (var key in mappings) {
      if (mappings.hasOwnProperty(key)) {
        if (mappings[key] === 'email') {
          emailMapped = true;
        }

        if (mappingsUsed.indexOf(mappings[key]) > -1) {
          errors.imported_json = ['Mapping overlapping!'];
        }

        if (mappings[key] !== 'skip') {
          mappingsUsed.push(mappings[key]);
        }
      }
    }

    if (!emailMapped) {
      errors.imported_json = ['Bad mapping!'];
    }
  }

  return errors;
};

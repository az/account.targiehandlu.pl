


export const transform = (resource, data = {}) => {

  let transformed = data

  switch (resource) {

    case 'representatives':

      const ticket_id = `${process.env.REACT_APP_REP_TICKET_ID}`
      transformed = {
          fields : data.profile,
          ticket_id
      }
    break;

    default:

  }

  return transformed

}

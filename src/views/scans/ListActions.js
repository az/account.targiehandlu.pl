import React from 'react';
import { CardActions } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import IconRefresh from 'material-ui/svg-icons/navigation/refresh';
import IconDownload from 'material-ui/svg-icons/file/file-download';
import {translate} from 'admin-on-rest';

//import { ListButton } from 'admin-on-rest';
import {getToken} from '../../api/helpers';

const style = {
  zIndex: 2,
  display: 'inline-block',
  float: 'right'
};

const Actions = ({
  resource,
  filters,
  displayedFilters,
  filterValues,
  basePath,
  showFilter,
  refresh,
  translate,
}) => (
  <CardActions style={style}>
    {filters &&
      React.cloneElement(filters, {
        resource,
        showFilter,
        displayedFilters,
        filterValues,
        context: 'button'
      })}

    <FlatButton primary href={`https://api.eventjuicer.com/v1/restricted/scans?download=1&x-token=${ getToken() }`} label = {translate("aor.action.export")} icon={<IconDownload />} />

    <FlatButton
      primary
      label={translate("aor.action.refresh")}
      onClick={refresh}
      icon={<IconRefresh />}
    />

  </CardActions>
);

export default translate(Actions);

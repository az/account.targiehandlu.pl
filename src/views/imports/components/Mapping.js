import React from 'react';
import { connect } from 'react-redux';
import compose from 'recompose/compose';
import { translate } from 'admin-on-rest';

import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

import { changeImportMapping as changeImportMappingAction } from '../redux/actions';

import get from 'lodash/get';

const mappingOptions = ['skip', 'email', 'fname', 'lname', 'cname2', 'phone'];

class Mapping extends React.Component {
  //
  // shouldComponentUpdate(nextProps, nextState)
  // {
  //   const {index, mappings} = this.props;
  //
  //   console.log("index", index);
  //   console.log("mappings", mappings);
  //   console.log("nextProps", nextProps);
  //
  //   return true;
  // }

  componentDidMount() {
    this.setAutoMapping();
  }

  setAutoMapping() {
    const { cell } = this.props;

    if (cell.indexOf('@') > 0) {
      return this.handleMappingChange('email');
    }

    if (cell.length < 15 && (cell.match(/[0-9]/g) || []).length > 8) {
      return this.handleMappingChange('phone');
    }
  }

  handleMappingChange = value => {
    //check if already used?
    const { index, changeImportMapping } = this.props;

    //search for a value in object

    changeImportMapping(index, value);
  };

  render() {
    const { translate, index, mappings } = this.props;

    return (
      <SelectField
        floatingLabelText={translate('resources.imports.fields.assignment_body')}
        value={get(mappings, index, 'skip')}
        onChange={(ev, idx, value) => this.handleMappingChange(value)}
      >
        {mappingOptions.map((item, i) => (
          <MenuItem
            key={i}
            value={item}
            primaryText={translate(`fields.${item}`)}
          />
        ))}
      </SelectField>
    );
  }
}

const mapStateToProps = state => ({
  mappings: state.import.mappings
});

const enhance = compose(
  translate,
  connect(mapStateToProps, { changeImportMapping: changeImportMappingAction })
);

export default enhance(Mapping);

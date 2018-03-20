import React from 'react';
import { connect } from 'react-redux';
import compose from 'recompose/compose';
import { translate } from 'admin-on-rest';

import Dropzone from 'react-dropzone';


import IconButton from 'material-ui/IconButton';
import IconRemove from 'material-ui/svg-icons/content/remove-circle-outline';

import Mappings from './Mappings';
import styles from '../../../styles/dropzone';

import {
  changeImportData,
  resetImport
} from '../redux/actions';

import { Parse } from '../../../api/csv';

class CsvImport extends React.Component {
  state = { files: [], data: null, mappedData: null };

  componentWillReceiveProps(nextProps) {
    if (
      'data' in nextProps &&
      Array.isArray(nextProps.data) &&
      nextProps.data.length
    ) {
      this.convertData(nextProps.data, nextProps.mappings);
    }
  }

  outputResult(data) {
    const { input } = this.props;
    input.onChange(data);
  }

  convertData = (data, mappings) => {
    let newData = [];

    if (data && Array.isArray(data)) {
      newData = data.map(row => {
        const newRow = {};

        for (var key in mappings) {
          if (mappings.hasOwnProperty(key)) {
            if (mappings[key] !== 'skip') {
              newRow[mappings[key]] = row[key];
            }

            if (mappings[key] === 'email') {
              //validating...?
            }
          }
        }

        return newRow;
      });
    }

    this.outputResult(newData);
  };


  onReset = () =>
  {
    const {resetImport} = this.props;
    resetImport();
  }

  onDrop = (acceptedFiles, rejectedFiles, onload) => {
    //reset!

    const {resetImport, changeImportData} = this.props;

    resetImport();

    acceptedFiles.forEach((file, i) => {

      const reader = new FileReader();

      reader.onload = event => {

        Parse(event.target.result).then(({ data }) => {
           changeImportData(data.filter(row => Array.isArray(row)));
        });

      }

      reader.readAsText(file);
    });
  };

  render() {
    const { translate, meta, data } = this.props;

    return (
      <div>
        <div>

         {
           !data.length ? <Dropzone
            accept="text/csv"
            multiple={false}
            onDrop={this.onDrop}
            style={styles.dropzone}
          >
            <p style={{ textAlign: 'center' }}>
              {translate("resources.imports.fields.drop")}
            </p>
          </Dropzone> : <p>{translate("resources.imports.fields.success")}<IconButton onClick={this.onReset}><IconRemove color="red" /></IconButton></p>
        }
        </div>

        {meta.touched &&
          meta.error && (
            <div className="alert alert-important">{meta.error}</div>
          )}

        {data && data[1] && <Mappings data={data[1]} />}
      </div>
    );
  }
}

const mapStateToProps = state => state.import;

const enhance = compose(
  translate,
  connect(mapStateToProps, { changeImportData, resetImport })
);

export default enhance(CsvImport);

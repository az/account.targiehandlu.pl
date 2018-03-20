import React from 'react';
import { translate } from 'admin-on-rest';

import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn
} from 'material-ui/Table';

import Mapping from './Mapping';

const Mappings = props => (
  <Table selectable={false}>
    <TableHeader displaySelectAll={false}>
      <TableRow>
        <TableHeaderColumn>{translate("resources.imports.fields.found")}</TableHeaderColumn>
        <TableHeaderColumn>{translate("resources.imports.fields.assignment")}</TableHeaderColumn>
      </TableRow>
    </TableHeader>

    <TableBody displayRowCheckbox={false}>
      {props.data.map((cell, i) => {
        return (
          cell.length && (
            <TableRow key={i}>
              <TableRowColumn>{cell}</TableRowColumn>
              <TableRowColumn>
                <Mapping key={i} index={i} cell={cell} />
              </TableRowColumn>
            </TableRow>
          )
        );
      })}
    </TableBody>
  </Table>
);

export default translate(Mappings);

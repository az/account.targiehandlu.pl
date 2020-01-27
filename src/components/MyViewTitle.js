import React from 'react';
import { CardTitle } from 'material-ui/Card';
import withWidth from 'material-ui/utils/withWidth';
import AppBarMobile from './AppBarMobile';

const ViewTitle = ({ title, subtitle, width }) =>
    width === 1 ? (
        <AppBarMobile title={title} />
    ) : (
        <CardTitle title={title} subtitle={subtitle} className="title" />
    );

export default withWidth()(ViewTitle);
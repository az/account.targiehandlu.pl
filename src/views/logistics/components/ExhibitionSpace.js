import React from 'react';

import * as Typo from '../../../components/Typography';
import Important from '../../../components/Important';


const ExhibitionSpace = ({translate, style}) => (

<div>

    <Typo.SectionTitle label="informer.basic.area" />

    <Typo.List items={["standard", "grand"]} baseLabel="informer.basic.stand_options" />

    <Typo.SectionTitle label="informer.basic.equipment" />

    <Typo.List items={[
        "hocker",
        "table",
        "voucher",
        "wifi",
        "electricity",
    ]} baseLabel="informer.basic.equipment_options" />

    <Important label="informer.basic.backwall" />


</div>

);

export default ExhibitionSpace

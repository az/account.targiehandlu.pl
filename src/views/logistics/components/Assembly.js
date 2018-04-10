import React from 'react';

import * as Typo from '../../../components/Typography';

const Assembly = () => (

<div>

  <Typo.Subheading label="informer.assembly.assembly" />

  <Typo.List items={["day_before_event", "event_day"]} baseLabel="informer.assembly.options" />

  <Typo.Subheading label="informer.assembly.disassembly" />

  <Typo.List items={["event_day"]} baseLabel="informer.assembly" />

</div>

);

export default Assembly;

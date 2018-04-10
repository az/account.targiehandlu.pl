import React from 'react';
import { Link } from 'react-router-dom';
import {translate} from 'admin-on-rest';



import Divider from 'material-ui/Divider';


import * as Typo from '../../../components/Typography';
import Important from '../../../components/Important';



const ExhibitionSpace = ({translate, style}) => (

<div>

    <Typo.SectionTitle label="informer.basic.add_equipment" />

      <ul>
        <li>{translate("informer.basic.carpeting")}<a href="mailto:upgrade@targiehandlu.com.pl">upgrade@targiehandlu.com.pl</a></li>
        <li>{translate("informer.basic.add_eq_contact")}<a href="mailto:upgrade@targiehandlu.com.pl">upgrade@targiehandlu.com.pl</a></li>
        <li>
          <Link to={{ pathname: '/logistics/arrangement' }}>{translate("informer.basic.see")}</Link>{translate("informer.basic.construction")}<a href="mailto:booths@targiehandlu.pl">booths@targiehandlu.pl</a>
        </li>

      </ul>

  {/*
    {translate("informer.basic.representative")}

      {translate("informer.basic.reps_info")}<Link to={{ pathname: '/representatives' }}>
      {translate('informer.basic.representative')}</Link>.

    */}

</div>


);

export default translate(ExhibitionSpace);

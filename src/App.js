//import 'babel-polyfill';
import React from 'react';
import { Admin, Resource, Delete, fetchUtils } from 'admin-on-rest';


import AppBarTitle from './components/AppBarTitle';
import Logins from './components/Logins';
import Logout from './components/Logout';
import NotFound from './components/NotFound';
import Menu from './components/Menu';
import customRoutes from './components/routes';

import authClient from './api/authClient';
import restClient from './api/restClient';

import sagas from './redux/sagas';
import reducers from './redux/reducers';

import translations from './localise';
import Dashboard from './views/dashboard';

import {getLocale, hasAccessTo} from './helpers'
import {getTheme} from './styles/muiTheme'

import {
  ViewList as MeetupList,
  ViewEdit as MeetupEdit,
  ViewCreate as MeetupCreate
} from './views/meetups';

import {
  ViewList as CompanyDataList,
  ViewEdit as CompanyDataEdit
} from './views/companydata';

import { UpgradeList, UpgradeShow } from './views/upgrades';

import {
  ViewList as RepresentativeList,
  ViewEdit as RepresentativeEdit,
  ViewCreate as RepresentativeCreate
} from './views/representatives';


import {
  ViewList as PurchaseList
  // ViewEdit as VisitorEdit,
  // ViewEdit as VisitorShow,
} from './views/purchases';

import {
  ViewList as VisitorList
  // ViewEdit as VisitorEdit,
  // ViewEdit as VisitorShow,
} from './views/visitors';

import {
  ViewList as CreativeList,
  ViewEdit as CreativeEdit,
  ViewCreate as CreativeCreate
} from './views/creatives';

import {
  ViewList as BannerList
} from './views/banners';

import {
  ViewList as NewsletterList
} from './views/newsletters';


import {
  ViewList as CampaignList,
  ViewCreate as CampaignCreate,
  ViewEdit as CampaignEdit
} from './views/campaigns';

import {
  ViewList as ImportList,
  ViewCreate as ImportCreate,
  ViewEdit as ImportEdit
} from './views/imports';

import {
  ViewList as ContactList,
  ViewEdit as ContactEdit
} from './views/contacts';

import {
  ViewList as ContactlistList,
  ViewCreate as ContactlistCreate,
  ViewEdit as ContactlistEdit
} from './views/contactlists';

import { ViewList as ScanList, ViewEdit as ScanEdit } from './views/scans';

import { ViewList as RankingList } from './views/ranking';


class App extends React.Component {

  // state = {
  //   texts : null
  // }

  // componentDidMount(){
    
  //   const localiseUrl = encodeURIComponent(`https://localise.biz/api/export/all.json?format=multi&pretty&key=${process.env.REACT_APP_LOCALISE}`)

  //   fetchUtils.fetchJson(`https://api.eventjuicer.com/v1/services/no-cors?url=${localiseUrl}`)
  //   .then(response => response.json)
  //   .then(texts => this.setState({texts}) )  
  // }

  render() {

    // const {texts} = this.state;

    // if(!texts){
    //   return (
    //     <div className="loader-container">
    //       <div className="loader">Loading...</div>
    //     </div>
    //   )
    // }

    return (
      <Admin
        catchAll={NotFound}
        title={<AppBarTitle />}
        restClient={restClient}
        customReducers={reducers}
        customSagas={sagas}
        customRoutes={customRoutes}
        authClient={authClient}
        dashboard={Dashboard}
        loginPage={Logins}
        logoutButton={Logout}
        menu={Menu}
        locale={ getLocale() }
        messages={ translations }
        theme={ getTheme() }
      >
       {(permissions) => [



<Resource name="companydata" list={CompanyDataList} edit={CompanyDataEdit} />,

<Resource name="purchases" list={PurchaseList} />,

<Resource
name="imports"
list={hasAccessTo(permissions, "imports", "list") ?  ImportList : null}
edit={hasAccessTo(permissions, "imports", "edit") ? ImportEdit : null}
create={hasAccessTo(permissions, "imports", "create") ? ImportCreate : null}
/>,

<Resource
name="meetups"
list={hasAccessTo(permissions, "meetups", "list") ? MeetupList : null}
edit={hasAccessTo(permissions, "meetups", "edit") ? MeetupEdit  : null}
create={hasAccessTo(permissions, "meetups", "create") ? MeetupCreate  : null}
remove={hasAccessTo(permissions, "meetups", "remove") ? Delete  : null}
/>,




<Resource
name="representatives"
list={hasAccessTo(permissions, "representatives", "list") ? RepresentativeList : null}
edit={hasAccessTo(permissions, "representatives", "edit") ? RepresentativeEdit : null}
create={hasAccessTo(permissions, "representatives", "create") ? RepresentativeCreate : null}
remove={hasAccessTo(permissions, "representatives", "delete") ? Delete : null}
/>,


<Resource
name="upgrades"
list={hasAccessTo(permissions, "upgrades", "list") ? UpgradeList : null}
show={hasAccessTo(permissions, "upgrades", "edit") ? UpgradeShow : null}
/>,

<Resource
name="contactlists"
list={hasAccessTo(permissions, "contactlists", "list") ? ContactlistList : null}
edit={hasAccessTo(permissions, "contactlists", "edit") ? ContactlistEdit : null}
create={hasAccessTo(permissions, "contactlists", "create") ? ContactlistCreate : null}
/>,

<Resource 
  name="visitors" 
  list={hasAccessTo(permissions, "visitors", "list") ? VisitorList : null} 
/>,


<Resource
  name="campaigns"
  list={hasAccessTo(permissions, "campaigns", "list") ? CampaignList : null}
  edit={hasAccessTo(permissions, "campaigns", "edit") ? CampaignEdit : null}
  create={hasAccessTo(permissions, "campaigns", "create") ? CampaignCreate : null}
/>,

<Resource 
  name="ranking" 
  list={hasAccessTo(permissions, "ranking", "list") ? RankingList : null} 
/>,

<Resource 
  name="contacts" 
  list={hasAccessTo(permissions, "contacts", "list") ? ContactList : null} 
  edit={hasAccessTo(permissions, "contacts", "edit") ? ContactEdit : null} 
/>,

<Resource 
  name="creatives" 
  list={hasAccessTo(permissions, "creatives", "list") ? CreativeList : null} 
  edit={hasAccessTo(permissions, "creatives", "edit") ? CreativeEdit : null} 
/>,

<Resource 
  name="newsletters" 
  list={hasAccessTo(permissions, "newsletters", "list") ? NewsletterList : null} 
/>,

<Resource 
  name="banners" 
  list={hasAccessTo(permissions, "banners", "list") ? BannerList : null}  
/>,

<Resource
  name="scans"
  options={{ label: 'Scans' }}
  list={hasAccessTo(permissions, "scans", "list") ? ScanList : null}
  edit={hasAccessTo(permissions, "scans", "edit") ? ScanEdit : null}
/>,

<Resource name="tasks" />
       ]} 
      </Admin>
    );
  }
}

export default App;

//import 'babel-polyfill';
import React from 'react';
import { Admin, Resource, Delete } from 'admin-on-rest';


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

import translations from './i18n';
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


import {
  ViewList as RepresentativeList,
  ViewEdit as RepresentativeEdit,
  ViewCreate as RepresentativeCreate
} from './views/representatives';



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
  render() {
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
        messages={translations}
        theme={ getTheme() }
      >
       {(permissions) => [

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
name="companydata"
list={hasAccessTo(permissions, "companydata", "list") ? CompanyDataList : null}
edit={hasAccessTo(permissions, "companydata", "edit") ? CompanyDataEdit : null}
/>,


<Resource
name="representatives"
list={hasAccessTo(permissions, "representatives", "list") ? RepresentativeList : null}
edit={hasAccessTo(permissions, "representatives", "edit") ? RepresentativeEdit : null}
create={hasAccessTo(permissions, "representatives", "create") ? RepresentativeCreate : null}
/>,


<Resource
name="tasks"
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
/>

       ]} 
      </Admin>
    );
  }
}

export default App;

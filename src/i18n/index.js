import { englishMessages } from 'admin-on-rest';

import en from "./langs/en"
import de from "./langs/de"
import pl from "./langs/pl"

export default {
  en: { ...englishMessages, ...en },
  pl: { ...englishMessages, ...en, ...pl },
  de: { ...englishMessages, ...en, ...de }
};

/* eslint-disable import/no-named-as-default-member */
import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import componentEN from './en/component.json';
import translationEN from './en/translation.json';
import valueEN from './en/value.json';

import componentVI from './vi/component.json';
import translationVI from './vi/translation.json';
import valueVI from './vi/value.json';
const resources = {
	en: {
		translation: translationEN,
		component: componentEN,
		value: valueEN
	},
	vi: {
		translation: translationVI,
		component: componentVI,
		value: valueVI
	}
};

i18next.use(initReactI18next).init({ resources, lng: 'vi', fallbackLng: 'vi' });
export default i18next;

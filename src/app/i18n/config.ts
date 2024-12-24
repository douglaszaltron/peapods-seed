import dayjs from 'dayjs';
import localizedFormat from 'dayjs/plugin/localizedFormat';
import { init } from 'i18next';
import * as ptBr from './locales';

export { exists, t } from 'i18next';

export const Locale = {
  ptBr: 'pt-BR',
};

export const languages = [
  {
    value: Locale.ptBr,
    label: 'Português (Brasil)',
  },
];

const resources = {
  [Locale.ptBr]: ptBr,
};

const options = {
  lng: Locale.ptBr,
  resources,
  debug: false,
  interpolation: {
    escapeValue: false,
  },
};

init(options);

dayjs.extend(localizedFormat);
dayjs.locale(options.lng);

export const datetime = dayjs;

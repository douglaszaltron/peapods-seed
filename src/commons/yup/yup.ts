import { t } from '@/app/i18n';
import * as yup from 'yup';

export type * from 'yup';
export const y = yup;

yup.setLocale({
  mixed: {
    required: t('validations:mixed.required'),
    oneOf: t('validations:mixed.oneOf'),
    notOneOf: t('validations:mixed.notOneOf'),
    defined: t('validations:mixed.defined'),
    default: t('validations:mixed.default'),
  },
  string: {
    min({ min }) {
      return t('validations:string.min', {
        count: min,
      });
    },
    max({ max }) {
      return t('validations:string.max', {
        count: max,
      });
    },
    length({ length }) {
      return t('validations:string.length', {
        length,
      });
    },
    email() {
      return t('validations:string.email');
    },
    url: t('validations:string.url'),
    trim: t('validations:string.trim'),
    lowercase: t('validations:string.lowercase'),
    uppercase: t('validations:string.uppercase'),
  },
  number: {
    min({ min }) {
      return t('validations:number.min', {
        count: min,
      });
    },
    max({ max }) {
      return t('validations:number.max', {
        count: max,
      });
    },
    lessThan: t('validations:number.lessThan'),
    moreThan: t('validations:number.moreThan'),
    positive: t('validations:number.positive'),
    negative: t('validations:number.negative'),
    integer: t('validations:number.integer'),
  },
  date: {
    min: t('validations:date.min'),
    max: t('validations:date.max'),
  },
  object: {
    noUnknown: t('validations:object.noUnknown'),
  },
});

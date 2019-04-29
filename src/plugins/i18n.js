

import Vue from 'vue';
import VueI18n from 'vue-i18n';

import en from '@/locale/en'
import ko from '@/locale/ko'
import es from '@/locale/es'

Vue.use(VueI18n)

export default new VueI18n({
  locale: sessionStorage.getItem('lang') || 'en',
  fallbackLocale: 'en',
  messages: {
    en,
    ko,
    es
  }
})

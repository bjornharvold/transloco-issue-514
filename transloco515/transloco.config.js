module.exports = {
  rootTranslationsPath: 'apps/transloco515/src/assets/i18n/',
  langs: ['en'],
  keysManager: {},
  scopedLibs: [
    {
      src: './libs/my-lib-one',
      dist: [
        './apps/transloco515/src/assets/i18n'
      ]
    }
  ]
};
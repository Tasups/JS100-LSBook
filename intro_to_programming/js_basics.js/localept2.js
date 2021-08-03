
/*function greet (langCode) {
  switch (langCode) {
    case 'en':
      console.log('Hi!');
      break;
    
    default:
      console.log('Hi!');
  }
}

function extractLanguage(locale) {
  return locale.split('_')[0];
}

function extractRegion(locale) {
  return locale.split('.')[0]
              
}

console.log(extractRegion('en_US.UTF-8'));
*/

function localGreet (localeCode) {
  const extractRegion = locale => {
    return locale.split('.')[0];
  }
  
  switch (extractRegion(localeCode)) {
    case 'en_US':
      console.log('Hi!');
      break;
    case 'en_GB':
      console.log('Hullo!');
      break;
    case 'en_AU':
      console.log('Gooday!');
      break;
    case 'fr_HT':
      console.log('Bonjou!');
      break;
    default:
      console.log(`Sup Bitch!`);
  }
}


localGreet('en_US.UTF-8');
// since we are requiring the top level of faker, load all locales by default
var Faker = require('./lib');
var faker = new Faker({ locales: require('./lib/locales') });
module['exports'] = faker;
console.log(faker.cellphones.brand());
console.log(faker.cellphones.platforms());
console.log(faker.cellphones.price());
module.exports = function () {
 var faker = require("faker");
 faker.locale = "zh_CN";
 var _ = require("lodash");
 return {
     people: _.times(100, function (n) {
         return {
             id: n,
             name: faker.name.findName(),
             avatar: faker.internet.avatar(),
             phone: faker.phone.phoneNumber(),
             words: faker.random.words()
         }
     }),
     address: _.times(100, function (n) {
         return {
             id: faker.random.uuid(),
             city: faker.address.city(),
             county: faker.address.county(),
             streetName: faker.address.streetName()
         }
     })
 }
}

/**
 *
 * @namespace faker.cellphones
 */
var cellphones = function (faker) {
  var self = this;

  /**
   * brand
   *
   * @method faker.cellphones.brand
   */
  self.brand = function() {
      return faker.random.arrayElement(faker.definitions.cellphones.brand);
  };

  /**
   * platform
   *
   * @method faker.cellphones.platform
   */
  self.platform = function() {
      return faker.random.arrayElement(faker.definitions.cellphones.platform);
  };

  /**
   * price
   *
   * @method faker.cellphones.price
   */
  self.price = function() {
    return faker.random.arrayElement(faker.definitions.cellphones.price);
  
  };
}
  

module['exports'] = cellphones;

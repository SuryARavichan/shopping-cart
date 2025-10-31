const {searchByFeatures} = require('../lib/catalog');

test('searchByFeatures finds camera phones', ()=>{
  const res = searchByFeatures({keyword: 'camera', limit: 10});
  expect(res.length).toBeGreaterThanOrEqual(1);
  expect(res[0]).toHaveProperty('camera');
});

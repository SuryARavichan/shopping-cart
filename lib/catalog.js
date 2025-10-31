const phones = require('../data/phones.json');

function searchByBudget(maxBudget, opts = {}) {
  const budget = Number(maxBudget || Infinity);
  let results = phones.filter(p => p.price <= budget);
  if (opts.brand) results = results.filter(p => p.brand.toLowerCase() === opts.brand.toLowerCase());
  if (opts.limit) results = results.slice(0, opts.limit);
  return results;
}

function searchByFeatures({keyword, brand, maxPrice, limit = 6}) {
  let results = phones.slice();
  if (brand) results = results.filter(p => p.brand.toLowerCase() === brand.toLowerCase());
  if (maxPrice) results = results.filter(p => p.price <= Number(maxPrice));
  if (keyword) {
    const k = keyword.toLowerCase();
    results = results.filter(p => (
      (p.model && p.model.toLowerCase().includes(k)) ||
      (p.brand && p.brand.toLowerCase().includes(k)) ||
      (p.camera && p.camera.toLowerCase().includes(k)) ||
      (p.notes && p.notes.toLowerCase().includes(k))
    ));
  }
  return results.slice(0, limit);
}

function getByIds(ids = []) {
  return phones.filter(p => ids.includes(p.id));
}

function getByModelBrand(query) {
  const q = query.toLowerCase();
  return phones.filter(p => `${p.brand.toLowerCase()} ${p.model.toLowerCase()}`.includes(q) || p.model.toLowerCase().includes(q));
}

module.exports = {searchByBudget, searchByFeatures, getByIds, getByModelBrand};

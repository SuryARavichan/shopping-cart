function parseUserMessage(message) {
  const text = message.toLowerCase();
  const intent = {raw: message, type: 'search', budget: null, brand: null, compare: null, keyword: null};

  const compareMatch = text.match(/compare\s+(.+?)\s+vs\s+(.+)/i);
  if (compareMatch) {
    intent.type = 'compare';
    intent.compare = [compareMatch[1].trim(), compareMatch[2].trim()];
    return intent;
  }

  const budgetMatch = text.match(/(under|below)\s*₹?\s*([0-9,]+)k?/i) || text.match(/(under|below)\s*₹?\s*([0-9,]+)/i);
  if (budgetMatch) {
    let num = budgetMatch[2].replace(/,/g, '');
    if (num.endsWith('k')) num = num.slice(0, -1) + '000';
    const val = Number(num);
    if (!Number.isNaN(val)) intent.budget = val;
  }

  const budgetK = text.match(/(\d{1,3})k\b/);
  if (!intent.budget && budgetK) {
    intent.budget = Number(budgetK[1]) * 1000;
  }

  const brands = ['samsung','google','oneplus','xiaomi','poco','realme','vivo','oppo'];
  for (const b of brands) if (text.includes(b)) intent.brand = b;

  const features = ['camera','battery','compact','one-hand','charging','fast charging','display','performance','processor','ram','storage','ois','eis'];
  for (const f of features) if (text.includes(f)) intent.keyword = f;

  const modelLike = text.match(/(i like this phone|tell me more about|tell me more|more details about)\s*(.*)/i);
  if (modelLike) {
    intent.type = 'detail';
    intent.keyword = modelLike[2] || intent.keyword;
  }

  return intent;
}

module.exports = {parseUserMessage};

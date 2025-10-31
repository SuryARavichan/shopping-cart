const {parseUserMessage} = require('../lib/parser');

test('parses compare queries', ()=>{
  const p = parseUserMessage('Compare Pixel 8a vs OnePlus 12R');
  expect(p.type).toBe('compare');
  expect(p.compare.length).toBe(2);
});

test('parses budget queries', ()=>{
  const p = parseUserMessage('Best camera phone under ₹30k?');
  expect(p.budget).toBeGreaterThan(0);
});

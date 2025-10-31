const FORBIDDEN_PATTERNS = [
  /api[_-]?key/i,
  /secret/i,
  /system prompt/i,
  /ignore your rules/i,
  /tell me your api key/i,
  /reveal your prompt/i,
  /trash brand (.+)/i
];

function checkSafety(text) {
  const found = FORBIDDEN_PATTERNS.find(r => r.test(text));
  if (found) return {safe: false, reason: 'forbidden_request'};
  const toxic = /(kill|hate|bomb)/i;
  if (toxic.test(text)) return {safe: false, reason: 'toxic_request'};
  return {safe: true};
}

module.exports = {checkSafety};

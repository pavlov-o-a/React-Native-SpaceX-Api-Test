export default function Safe(expression, _default) {
  try {
    return expression();
  } catch (e) {
    return _default;
  }
}

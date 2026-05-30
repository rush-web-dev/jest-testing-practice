function capitalize(text) {
  if (text.length < 1) {
    return '';
  }
  return `${text[0].toUpperCase()}${text.slice(1)}`;
}
export { capitalize };

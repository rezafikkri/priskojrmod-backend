export default class DuplicateError extends Error {
  constructor(message = 'Data not found') {
    super(message);
    this.name = 'DuplicateError';
  }
}

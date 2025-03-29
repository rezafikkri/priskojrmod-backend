export default class NotFoundError extends Error {
  constructor(message = 'Data not found') {
    super(message);
    this.name = 'NotFoundError';
  }
}

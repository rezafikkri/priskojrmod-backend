export default class ValidationError extends Error {
  constructor() {
    super('Validation error');
    this.name = 'ValidationError';
  }
}

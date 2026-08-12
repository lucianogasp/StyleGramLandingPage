class InvalidFormIdError extends Error {
  constructor(message) {
    super(message);
    this.statusCode = 404;
  }
}

export default InvalidFormIdError;

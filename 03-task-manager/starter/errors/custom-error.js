class APIError extends Error {
  constructor(message, status) {
    super(message);
    this.status = status;
  }
}

const createAPIError = (message, status) => {
  return new APIError(message, status);
};

export { APIError, createAPIError };

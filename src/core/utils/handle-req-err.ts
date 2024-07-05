
interface ErrorResponse {
  data: any;
}

// Function to handle request errors
export const handleRequestError = (err: unknown): any => {
  // Check if 'err' is an object and has a 'response' property
  if (typeof err === 'object' && err !== null && 'response' in err) {
    const error = err as { response: ErrorResponse };
    return error.response.data;
  } else {
    console.error(`ERROR: ${err}`);
  }
};

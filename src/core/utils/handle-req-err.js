export const handleRequestError = (err) => {
  if (err?.response) {
    return err.response.data;
  } else {
    console.log(`ERROR: ${err}`);
  }
};

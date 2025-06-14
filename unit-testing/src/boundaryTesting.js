const validatePassword = (password) => {
  if (password.length < 8 || password.length > 16) {
    throw new Error("Password must be between 8 and 16 characters long");
  }
  return "Password is valid";
};

export { validatePassword };

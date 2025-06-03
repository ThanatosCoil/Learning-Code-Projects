async function hashingOptions() {
  const password = "password";
  const hash = await Bun.password.hash(password);
  console.log(hash);

  const isMatch = await Bun.password.verify(password, hash);
  console.log(isMatch);

  const argonHash = await Bun.password.hash(password, {
    algorithm: "argon2id",
    memoryCost: 4,
    timeCost: 3,
  });
  console.log(argonHash);

  const bcryptHash = await Bun.password.hash(password, {
    algorithm: "bcrypt",
    cost: 10,
  });
  console.log(bcryptHash);
}

hashingOptions();

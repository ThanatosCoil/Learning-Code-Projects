const redis = require("redis");

const client = redis.createClient({
  host: "localhost",
  port: 6379,
});

//event listener

client.on("error", (error) => {
  console.log("Redis client error occurred", error);
});

async function redisDataStructures() {
  try {
    await client.connect();

    // await client.set("user:name", "Adam");
    // const name = await client.get("user:name");
    // console.log(name);

    // await client.mSet([
    //   "user:email",
    //   "adam@gmail.com",
    //   "user:age",
    //   "20",
    //   "user:country",
    //   "Russia",
    // ]);

    // const [email, age, country] = await client.mGet([
    //   "user:email",
    //   "user:age",
    //   "user:country",
    // ]);

    // console.log(email, age, country);

    // //lists

    // await client.lPush("notes", ["note 1", "note 2", "note 3"]); // Пропушиваем пару ключ-значение/я
    // const extractAllNotes = await client.lRange("notes", 0, -1); // Смотрим все элементы
    // console.log(extractAllNotes);

    // const firstNote = await client.lPop("notes"); // Вырезаем первый элемент
    // console.log(firstNote);

    // const remainingNotes = await client.lRange("notes", 0, -1);
    // console.log(remainingNotes);

    // //sets как в JavaScript
    // await client.sAdd("user:nickName", ["adam", "eve", "kain"]);
    // const extractUserNicknames = await client.sMembers("user:nickName");
    // console.log(extractUserNicknames);

    // const isEveInSet = await client.sIsMember("user:nickName", "eve");
    // console.log(isEveInSet);

    // await client.sRem("user:nickName", "kain");
    // const updatedNicknames = await client.sMembers("user:nickName");
    // console.log(updatedNicknames);

    // //sorted sets Отличаются тем, что элементы сэтов имеют score, по которому определяется порядок элементов
    // await client.zAdd("cart", [
    //   {
    //     score: 100,
    //     value: "Cart 1",
    //   },
    //   {
    //     score: 150,
    //     value: "Cart 2",
    //   },
    //   {
    //     score: 30,
    //     value: "Cart 3",
    //   },
    // ]);

    // const ascendingOrder = await client.zRange("cart", 0, -1);
    // console.log(ascendingOrder);

    // const extractAllCartItemsWithScore = await client.zRangeWithScores(
    //   "cart",
    //   0,
    //   -1
    // );
    // console.log(extractAllCartItemsWithScore);

    // const cartTwoRank = await client.zRank("cart", "Cart 2"); //Starts with 0
    // console.log(cartTwoRank);

    //hashes
    await client.hSet("product:1", {
      name: "Product 1",
      description: "product 1 description",
      rating: "5",
    });

    const getProductDetails = await client.hGetAll("product:1");
    console.log(getProductDetails);

    const getProductRating = await client.hGet("product:1", "rating");
    console.log(getProductRating);

    await client.hDel("product:1", "rating");
    const updatedProduct = await client.hGetAll("product:1");
    console.log(updatedProduct);
  } catch (e) {
    console.error(e);
  } finally {
    client.quit();
  }
}

redisDataStructures();

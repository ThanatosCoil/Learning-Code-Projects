const {
  createUsersTable,
  insertUser,
  getUsers,
  updateUser,
  deleteUser,
} = require("./concepts/queries");
const {
  getUserByCondition,
  getSortedUsers,
} = require("./concepts/filter-sort");
const { createPostsTable, insertPost } = require("./concepts/relationships");
const { getUsersWithPosts } = require("./concepts/joins");
const {
  countPostsByUser,
  averagePostPerUser,
} = require("./concepts/aggregation");
async function main() {
  try {
    // await createUsersTable();
    // await insertUser("John Doe", "john.doe@example.com");
    // await insertUser("Jane Smith", "jane.smith@example.com");
    // await insertUser("Alice Johnson", "alice.johnson@example.com");
    // await insertUser("Bob Brown", "bob.brown@example.com");
    // await insertUser("Charlie Davis", "charlie.davis@example.com");
    // await getUsers();
    // await updateUser(1, "Adam", "adam@example.com");
    // await deleteUser(4);
  } catch (error) {
    console.error("Error:", error);
  }
}

async function filterAndSort() {
  try {
    // await getUserByCondition("username LIKE 'B%'");
    await getSortedUsers("id", "DESC");
  } catch (error) {
    console.error("Error:", error);
  }
}

async function createPosts() {
  try {
    // await createPostsTable();

    // await insertPost("Post 1", "Content 1", 7);
    // await insertPost("Post 2", "Content 2", 8);
    // await insertPost("Post 3", "Content 3", 9);

    await getUsersWithPosts();
  } catch (error) {
    console.error("Error:", error);
  }
}

async function aggregation() {
  try {
    await countPostsByUser();
    await averagePostPerUser();
  } catch (error) {
    console.error("Error:", error);
  }
}

async function run() {
  // await main();
  // await filterAndSort();
  // await createPosts();
  await aggregation();
}

run();

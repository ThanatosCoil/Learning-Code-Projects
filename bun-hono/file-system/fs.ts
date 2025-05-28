import type { BunFile } from "bun";

async function fileSystemOperations() {
  const file: BunFile = Bun.file("test.txt");

  console.log(file.size);
  console.log(file.type);
  const text = await file.text();
  console.log(text);
  const arrayBuffer = await file.arrayBuffer();
  console.log(arrayBuffer);
  const content = "Rewrite text content";
  await Bun.write("test.txt", content);
  const newText = await file.text();
  console.log(newText);

  const isFileExist = await Bun.file("test.txt").exists();
  console.log(isFileExist);

  const deleteFile = await Bun.file("test.txt").delete();
  console.log(deleteFile);

  const isFileExistAfterDelete = await Bun.file("test.txt").exists();
  console.log(isFileExistAfterDelete);
}

fileSystemOperations();

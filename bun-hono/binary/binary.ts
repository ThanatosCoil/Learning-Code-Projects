function binaryOperations() {
  const buf = new ArrayBuffer(10);
  console.log("ArrayBuffer size", buf.byteLength);

  const dv = new DataView(buf);
  dv.setInt8(0, 10);
  dv.setInt16(1, 513);
  dv.setInt32(3, 30);

  console.log(dv.getInt8(0));
  console.log(dv.getInt16(1));
  console.log(dv.getInt32(3));

  const uint8Array = new Uint8Array([0, 1, 2, 3, 4]);
  console.log(uint8Array);

  const nodeBuffer = Buffer.from("Hello Bun");
  console.log(nodeBuffer, nodeBuffer.toString());

  const blob = new Blob(["<html>Hello Bun</html>"], { type: "text/html" });
  console.log(blob.size, blob.type);

  const encoder = new TextEncoder();
  const encoded = encoder.encode("Hello Bun");
  console.log(encoded);

  const decoder = new TextDecoder();
  const decoded = decoder.decode(encoded);
  console.log(decoded);
}

binaryOperations();

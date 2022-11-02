# Reason for existence

Could not make _any_ sense of the ridiculously over-complicated AWS documentation.

[This article](https://rajputankit22.medium.com/read-write-and-delete-file-from-s3-bucket-via-nodejs-2e17047d2178) sorted everything for me, so I decided to make it re-usable for my personal projects.

# Usage

### Install

`npm i s3-read-write`

```javascript
const S3RW = require("s3-read-write");

const s3 = new S3RW({
	accessKeyId: "YOUR_KEY_HERE",
	secretAccessKey: "YOUR_SECRET_HERE",
	Bucket: "YOUR_BUCKET_NAME_HERE",
});
```

### Write

Within an `async` function.

```javascript
const contents = "Hello world!";

await s3.write(contents, "hello-world.txt");
```

### Read

Within an `async` function.

```javascript
const contents = await s3.read("hello-world.txt");

console.log(contents); // Hello world!
```

### Delete

Within an `async` function.

```javascript
await s3.delete("hello-world.txt");
```

### Exists?

Within an `async` function.

```javascript
await s3.exists("hello-world.txt"); // boolean output
```

# Testing

```bash
$ ACCESS_KEY_ID=... SECRET_ACCESS_KEY=... BUCKET=... npm test
```

This will attempt to

1. Create a file in your bucket called "hello-world.txt" (contents: "Hello world").
2. Read that file from AWS.
3. Delete that file from your bucket.

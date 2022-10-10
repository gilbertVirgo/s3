# Reason for existence

Could not make _any_ sense of the stupid AWS documentation.

[This article](https://rajputankit22.medium.com/read-write-and-delete-file-from-s3-bucket-via-nodejs-2e17047d2178) sorted everything for me, so I decided to make it re-usable for my personal projects.

# Usage

### Install

`npm i s3-read-write`

```javascript
const s3 = require("s3-read-write");
// alternatively...
const {read, write, delete} = require("s3-read-write");

```

### Write

Within an `async` function.

```javascript
const contents = JSON.stringify({
	hello: "world",
});

await s3.write(contents, "hello-world.json");
```

### Read

Within an `async` function.

```javascript
const contents = JSON.stringify({
	hello: "world",
});

const data = await s3.read("hello-world.json");
console.log(data); // {"hello": "world"}
```

### Delete

Within an `async` function.

```javascript
await s3.delete("hello-world.json");
```

require("dotenv").config();

const S3RW = require(".");

const s3 = new S3RW({
	accessKeyId: process.env.ACCESS_KEY_ID,
	secretAccessKey: process.env.SECRET_ACCESS_KEY,
	Bucket: process.env.BUCKET,
});

(async function () {
	console.log(
		await s3
			.write("Hello world", "hello-world.txt")
			.catch(console.error)
			.finally("Write complete.")
	);

	console.log(
		await s3
			.read("hello-world.txt")
			.catch(console.error)
			.finally("Read complete.")
	);

	console.log(
		await s3
			.delete("hello-world.txt")
			.catch(console.error)
			.finally("Delete complete.")
	);

	console.log("All tests complete.");
})();

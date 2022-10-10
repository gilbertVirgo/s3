const S3 = require(".");

const s3 = new S3({
	accessKeyId: "YOUR_KEY_HERE",
	secretAccessKey: "YOUR_SECRET_HERE",
	Bucket: "YOUR_BUCKET_NAME_HERE",
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

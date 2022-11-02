const AWS = require("aws-sdk");

function S3({ accessKeyId, secretAccessKey, Bucket }) {
	const s3Instance = new AWS.S3({
		accessKeyId,
		secretAccessKey,
		Bucket,
	});

	this.exists = function (Key) {
		return new Promise((resolve, reject) => {
			s3Instance.headObject(
				{
					Key,
					Bucket,
				},
				(err, data) => {
					if (err && err.name === "NotFound") resolve(false);
					else if (err) reject(err);
					else resolve(true);
				}
			);
		});
	};
	this.read = function (Key) {
		return new Promise((resolve, reject) => {
			s3Instance.getObject(
				{
					Key,
					Bucket,
				},
				(err, data) => {
					if (err) reject(err);
					resolve(Buffer.from(data.Body, "utf-8").toString());
				}
			);
		});
	};
	this.write = (Body, Key) => {
		const params = {
			Bucket,
			Key,
		};

		return new Promise(async (putComplete, reject) => {
			// Delete old file.
			await new Promise((deleteComplete) => {
				s3Instance.deleteObject(params, function (err) {
					if (err) reject(err);
					deleteComplete();
				});
			});

			// Replace with new file.
			s3Instance.putObject({ Body, ...params }, function (err, data) {
				if (err) return reject(err);
				putComplete(data);
			});
		});
	};
	this.delete = function (Key) {
		return new Promise(async (resolve, reject) => {
			s3Instance.deleteObject(
				{
					Bucket,
					Key,
				},
				function (err) {
					if (err) reject(err);
					resolve();
				}
			);
		});
	};
}

module.exports = S3;

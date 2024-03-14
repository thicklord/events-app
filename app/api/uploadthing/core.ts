import { createUploadthing, type FileRouter } from "uploadthing/next";

const f = createUploadthing();

const auth = (req: Request) => ({ id: "fakeId" }); // fake auth function

// filerouter for app, can contain multiple FileRoutes
export const ourFileRouter = {
	imageUploader: f({ image: { maxFileSize: "4MB" } })
		.middleware(async ({ req }) => {
			const user = await auth(req);

			if (!user) throw new Error("Unauthorized");

			return { userId: user.id };
		})
		.onUploadComplete(async ({ metadata, file }) => {
			// this code runs on the server when the upload is complete
			console.log("Upload complete for userId:", metadata.userId);

			console.log("file url", file.url);

			return { uploadedBy: metadata.userId };
		}),
} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter;

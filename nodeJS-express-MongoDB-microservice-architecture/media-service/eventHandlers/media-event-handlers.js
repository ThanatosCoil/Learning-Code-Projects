const Media = require("../src/models/Media");
const { deleteMediaFromCloudinary } = require("../src/utils/cloudinary");
const logger = require("../src/utils/logger");

const handlePostDeleted = async (event) => {
  console.log(event, "event received");
  const { postId, mediaIds } = event;
  try {
    const deletedMedia = await Media.find({ _id: { $in: mediaIds } });
    for (const media of deletedMedia) {
      await deleteMediaFromCloudinary(media.publicId);
      await Media.findByIdAndDelete(media._id);
      logger.info(`Media ${media._id} deleted from cloudinary and database`);
    }
    logger.info(`All media associated with post ${postId} deleted`);
  } catch (error) {
    logger.error("Error deleting media", error);
  }
};

module.exports = {
  handlePostDeleted,
};

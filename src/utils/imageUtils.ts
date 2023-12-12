export const getLastImageNotThumbnail = (
  images: string[] = [],
  thumbnail = ''
) => {
  return images.reverse().find((image) => image !== thumbnail);
};

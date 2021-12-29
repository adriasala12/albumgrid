export function sortUniqueAlbums(arr) {
  let result = arr.sort((a, b) => {
    a = a.collectionName.toUpperCase();
    b = b.collectionName.toUpperCase();

    if (a > b) {
      return 1;
    }
    if (a < b) {
      return -1;
    }
    return 0;
  });

  result = result.filter((album, index) => {
    return !index || album.collectionName != result[index - 1].collectionName;
  });

  return result;
}

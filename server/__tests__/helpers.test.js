import { sortUniqueAlbums } from "../helpers.js";

test("sorts album array and removes duplicates", () => {
  const testData = [
    {
      collectionName: "world",
    },
    {
      collectionName: "world",
    },
    {
      collectionName: "hello",
    },
  ];

  const expectedResult = [
    {
      collectionName: "hello",
    },
    {
      collectionName: "world",
    },
  ];

  const sortedUniqueAlbums = sortUniqueAlbums(testData);

  expect(sortedUniqueAlbums).toEqual(expectedResult);
});

import { atom, computed } from 'nanostores';

// The core store an array of article IDs
export const readingListItems = atom<string[]>([]);

// Action to add an article ID to the list
export function addArticle(id: string): void {
  const currentList = readingListItems.get();
  if (!currentList.includes(id)) {
    readingListItems.set([...currentList, id]);
  }
}

// Action to remove an article ID from the list
export function removeArticle(id: string): void {
  const currentList = readingListItems.get();
  readingListItems.set(currentList.filter(articleId => articleId !== id));
}

// Computed store to check if a specific article is in the list
export function isArticleInList(id: string) {
  return computed(readingListItems, list => list.includes(id));
}

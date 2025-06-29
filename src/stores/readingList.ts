import { atom, computed } from "nanostores";

const STORAGE_KEY = "astro-paws-bag";

// Load initial data from localStorage
function loadInitialState(): string[] {
  if (typeof window === "undefined") return []; // Handle SSR case

  try {
    const savedList = localStorage.getItem(STORAGE_KEY);
    return savedList ? JSON.parse(savedList) : [];
  } catch (e) {
    console.error("Failed to load reading list from localStorage:", e);
    return [];
  }
}

// The core store with initial data from localStorage
export const readingListItems = atom<string[]>(loadInitialState());

// Save to localStorage whenever the store changes
readingListItems.listen((list) => {
  if (typeof window === "undefined") return; // Handle SSR case

  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(list));
  } catch (e) {
    console.error("Failed to save reading list to localStorage:", e);
  }
});

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
  readingListItems.set(currentList.filter((articleId) => articleId !== id));
}

// Computed store to check if a specific article is in the list
export function isArticleInList(id: string) {
  return computed(readingListItems, (list) => list.includes(id));
}

// Clear the entire reading list
export function clearReadingList(): void {
  readingListItems.set([]);
}

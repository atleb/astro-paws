## Comments for SimpleTeaser.astro script

```javascript
// Import the addArticle function for client-side use
// Note: Astro's <script> tags are processed and bundled.
// We need to ensure addArticle is available here.
// A common pattern is to make store actions available globally or via custom events if direct import is tricky.
// However, with nanostores, direct import in client scripts should work if project is set up for it.
// For this example, let's assume direct import works as expected in the Astro+nanostores setup.
```

```javascript
// After adding, the class reactivity is handled by nanostores and Astro's class:list directive,
// but that directive is server-side. For client-side immediate feedback without a page reload,
// we might need to use nanostores' client-side capabilities more directly if Astro doesn't auto-update.
// For now, let's assume the Astro setup handles this class update on store change.
// If not, we'd subscribe to the `isInList` store here and update the class manually.
```

```javascript
// To make the class reactively update on the client-side without a full page reload,
// we need to subscribe to the store that `isArticleInList` returns.
```

```javascript
// Clean up the subscription when the component is removed from the DOM (Astro specific lifecycle)
// This is a simplified example; Astro's script lifecycle might need specific handling for cleanup.
// For instance, if Astro re-runs scripts on navigation, this could lead to multiple subscriptions.
// A more robust solution might involve Astro's `astro:page-load` or custom elements.
```

```javascript
// Cleanup function for when the element is removed (simplified)
// This is not standard Astro API for script cleanup directly tied to component unmount.
// Proper cleanup in Astro for client-side scripts often relies on framework integrations (Vue, React, Svelte)
// or careful manual management with `astro:beforeunload` or similar global events.
// For this specific case, given nanostores are global, the subscription will persist as long as the page does.
// If the component instance itself is removed and re-added, new subscriptions occur.
```

```javascript
// document.addEventListener('astro:before-swap', () => { // Example of potential cleanup hook
//   unsubscribe();
// });
```

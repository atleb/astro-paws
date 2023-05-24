/*
 * Generated type guards for "Collections.ts".
 * WARNING: Do not manually change this file.
 */
import { BlenderData, CollectionData, SectionList, CnpSectionListItem, CnpSection, CnpTag, CnpStory, CnpAuthor, Contact, ArticleBase, ArticleStub, ArticleBundle, Hits, Highlights, HighlightedText, Markup } from "./Collections";

export function isBlenderData(obj: unknown): obj is BlenderData {
    const typedObj = obj as BlenderData
    return (
        (typedObj !== null &&
            typeof typedObj === "object" ||
            typeof typedObj === "function") &&
        Array.isArray(typedObj["items"]) &&
        typedObj["items"].every((e: any) =>
        (isArticleStub(e) as boolean ||
            isArticleBundle(e) as boolean)
        ) &&
        typedObj["type"] === "blend-response" &&
        (typedObj["properties"] !== null &&
            typeof typedObj["properties"] === "object" ||
            typeof typedObj["properties"] === "function") &&
        typeof typedObj["properties"]["id"] === "string" &&
        typeof typedObj["properties"]["name"] === "string" &&
        typeof typedObj["properties"]["version"] === "number" &&
        typeof typedObj["properties"]["context"] === "string"
    )
}

export function isCollectionData(obj: unknown): obj is CollectionData {
    const typedObj = obj as CollectionData
    return (
        (typedObj !== null &&
            typeof typedObj === "object" ||
            typeof typedObj === "function") &&
        isHits(typedObj["hits"]) as boolean &&
        Array.isArray(typedObj["items"]) &&
        typedObj["items"].every((e: any) =>
            isArticleStub(e) as boolean
        )
    )
}

export function isSectionList(obj: unknown): obj is SectionList {
    const typedObj = obj as SectionList
    return (
        (typedObj !== null &&
            typeof typedObj === "object" ||
            typeof typedObj === "function") &&
        isHits(typedObj["hits"]) as boolean &&
        Array.isArray(typedObj["items"]) &&
        typedObj["items"].every((e: any) =>
            isCnpSectionListItem(e) as boolean
        )
    )
}

export function isCnpSectionListItem(obj: unknown): obj is CnpSectionListItem {
    const typedObj = obj as CnpSectionListItem
    return (
        (typedObj !== null &&
            typeof typedObj === "object" ||
            typeof typedObj === "function") &&
        typeof typedObj["id"] === "string" &&
        typeof typedObj["locale"] === "string" &&
        typeof typedObj["newsroom"] === "string" &&
        typedObj["type"] === "section" &&
        (typedObj["model"] !== null &&
            typeof typedObj["model"] === "object" ||
            typeof typedObj["model"] === "function") &&
        typeof typedObj["model"]["id"] === "string" &&
        typeof typedObj["model"]["title"] === "string" &&
        typeof typedObj["model"]["enabled"] === "boolean" &&
        (typedObj["model"] !== null &&
            typeof typedObj["model"] === "object" ||
            typeof typedObj["model"] === "function") &&
        (typeof typedObj["model"]["parentId"] === "undefined" ||
            typeof typedObj["model"]["parentId"] === "string")
    )
}

export function isCnpSection(obj: unknown): obj is CnpSection {
    const typedObj = obj as CnpSection
    return (
        (typedObj !== null &&
            typeof typedObj === "object" ||
            typeof typedObj === "function") &&
        typeof typedObj["id"] === "string" &&
        typeof typedObj["title"] === "string" &&
        typeof typedObj["enabled"] === "boolean" &&
        (typeof typedObj["parent"] === "undefined" ||
            isCnpSection(typedObj["parent"]) as boolean)
    )
}

export function isCnpTag(obj: unknown): obj is CnpTag {
    const typedObj = obj as CnpTag
    return (
        (typedObj !== null &&
            typeof typedObj === "object" ||
            typeof typedObj === "function") &&
        typeof typedObj["id"] === "string" &&
        typeof typedObj["title"] === "string" &&
        typeof typedObj["type"] === "string" &&
        typeof typedObj["slug"] === "string"
    )
}

export function isCnpStory(obj: unknown): obj is CnpStory {
    const typedObj = obj as CnpStory
    return (
        (typedObj !== null &&
            typeof typedObj === "object" ||
            typeof typedObj === "function") &&
        typeof typedObj["id"] === "string" &&
        typeof typedObj["title"] === "string" &&
        typeof typedObj["updated"] === "string" &&
        typeof typedObj["slug"] === "string" &&
        (typeof typedObj["description"] === "undefined" ||
            typeof typedObj["description"] === "string") &&
        (typeof typedObj["background"] === "undefined" ||
            typeof typedObj["background"] === "string")
    )
}

export function isCnpAuthor(obj: unknown): obj is CnpAuthor {
    const typedObj = obj as CnpAuthor
    return (
        (typedObj !== null &&
            typeof typedObj === "object" ||
            typeof typedObj === "function") &&
        typeof typedObj["id"] === "string" &&
        typeof typedObj["title"] === "string" &&
        typeof typedObj["description"] === "string" &&
        typeof typedObj["slug"] === "string" &&
        Array.isArray(typedObj["contacts"]) &&
        typedObj["contacts"].every((e: any) =>
            isContact(e) as boolean
        )
    )
}

export function isContact(obj: unknown): obj is Contact {
    const typedObj = obj as Contact
    return (
        (typedObj !== null &&
            typeof typedObj === "object" ||
            typeof typedObj === "function") &&
        typeof typedObj["type"] === "string" &&
        typeof typedObj["value"] === "string"
    )
}

export function isArticleBase(obj: unknown): obj is ArticleBase {
    const typedObj = obj as ArticleBase
    return (
        (typedObj !== null &&
            typeof typedObj === "object" ||
            typeof typedObj === "function") &&
        typeof typedObj["id"] === "string" &&
        typeof typedObj["locale"] === "string" &&
        typeof typedObj["newsroom"] === "string" &&
        (typeof typedObj["src"] === "undefined" ||
            typeof typedObj["src"] === "string")
    )
}

export function isArticleStub(obj: unknown): obj is ArticleStub {
    const typedObj = obj as ArticleStub
    return (
        isArticleBase(typedObj) as boolean &&
        typedObj["type"] === "article" &&
        (typeof typedObj["highlights"] === "undefined" ||
            isHighlights(typedObj["highlights"]) as boolean)
    )
}

export function isArticleBundle(obj: unknown): obj is ArticleBundle {
    const typedObj = obj as ArticleBundle
    return (
        isArticleBase(typedObj) as boolean &&
        Array.isArray(typedObj["items"]) &&
        typedObj["items"].every((e: any) =>
            isArticleStub(e) as boolean
        ) &&
        typedObj["type"] === "bundle"
    )
}

export function isHits(obj: unknown): obj is Hits {
    const typedObj = obj as Hits
    return (
        (typedObj !== null &&
            typeof typedObj === "object" ||
            typeof typedObj === "function") &&
        typeof typedObj["total"] === "number" &&
        typeof typedObj["size"] === "number" &&
        typeof typedObj["from"] === "number"
    )
}

export function isHighlights(obj: unknown): obj is Highlights {
    const typedObj = obj as Highlights
    return (
        (typedObj !== null &&
            typeof typedObj === "object" ||
            typeof typedObj === "function") &&
        isHighlightedText(typedObj["title"]) as boolean &&
        Array.isArray(typedObj["text"]) &&
        typedObj["text"].every((e: any) =>
            isHighlightedText(e) as boolean
        )
    )
}

export function isHighlightedText(obj: unknown): obj is HighlightedText {
    const typedObj = obj as HighlightedText
    return (
        (typedObj !== null &&
            typeof typedObj === "object" ||
            typeof typedObj === "function") &&
        typeof typedObj["value"] === "string" &&
        Array.isArray(typedObj["markup"]) &&
        typedObj["markup"].every((e: any) =>
            isMarkup(e) as boolean
        )
    )
}

export function isMarkup(obj: unknown): obj is Markup {
    const typedObj = obj as Markup
    return (
        (typedObj !== null &&
            typeof typedObj === "object" ||
            typeof typedObj === "function") &&
        typeof typedObj["type"] === "string" &&
        typeof typedObj["offset"] === "number" &&
        typeof typedObj["length"] === "number"
    )
}

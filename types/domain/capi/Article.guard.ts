/*
 * Generated type guards for "Article.ts".
 * WARNING: Do not manually change this file.
 */
import { Access, Author, IdOriginator, TitleOriginator, Originator, Contact, Characteristics, Changes, Section, Source, Story, Tag, Text, Markup, RichText, PromotionContent, ImageAsset, Version, CapiArticle, CustomProperties, ArticleEnrichments, ComponentBase, ArticleComponent, BreakpointComponent, FactComponent, Gallery, Grade, List, Image, Quote, Map, Point, Table, TextComponent, Subheading, UrlComponent, EnrichmentData, VideoComponent, VideoAsset, SourceFile, Chapter, DeprecatedInternalComment, DeprecatedIntegration } from "./Article";

export function isAccess(obj: unknown): obj is Access {
    const typedObj = obj as Access
    return (
        (typedObj !== null &&
            typeof typedObj === "object" ||
            typeof typedObj === "function") &&
        Array.isArray(typedObj["restrictions"]) &&
        typedObj["restrictions"].every((e: any) =>
            typeof e === "string"
        )
    )
}

export function isAuthor(obj: unknown): obj is Author {
    const typedObj = obj as Author
    return (
        (typedObj !== null &&
            typeof typedObj === "object" ||
            typeof typedObj === "function") &&
        (typeof typedObj["id"] === "undefined" ||
            typeof typedObj["id"] === "string") &&
        typeof typedObj["title"] === "string" &&
        (typeof typedObj["contacts"] === "undefined" ||
            Array.isArray(typedObj["contacts"]) &&
            typedObj["contacts"].every((e: any) =>
                isContact(e) as boolean
            )) &&
        (typeof typedObj["description"] === "undefined" ||
            typeof typedObj["description"] === "string") &&
        (typeof typedObj["image"] === "undefined" ||
            typeof typedObj["image"] === "string")
    )
}

export function isIdOriginator(obj: unknown): obj is IdOriginator {
    const typedObj = obj as IdOriginator
    return (
        isAuthor(typedObj) as boolean &&
        typedObj["type"] === "id"
    )
}

export function isTitleOriginator(obj: unknown): obj is TitleOriginator {
    const typedObj = obj as TitleOriginator
    return (
        (typedObj !== null &&
            typeof typedObj === "object" ||
            typeof typedObj === "function") &&
        typedObj["type"] === "title" &&
        typeof typedObj["title"] === "string"
    )
}

export function isOriginator(obj: unknown): obj is Originator {
    const typedObj = obj as Originator
    return (
        (isIdOriginator(typedObj) as boolean ||
            isTitleOriginator(typedObj) as boolean)
    )
}

export function isContact(obj: unknown): obj is Contact {
    const typedObj = obj as Contact
    return (
        (typedObj !== null &&
            typeof typedObj === "object" ||
            typeof typedObj === "function") &&
        (typedObj["type"] === "title" ||
            typedObj["type"] === "email" ||
            typedObj["type"] === "twitter" ||
            typedObj["type"] === "facebook" ||
            typedObj["type"] === "agency" ||
            typedObj["type"] === "other") &&
        typeof typedObj["value"] === "string"
    )
}

export function isCharacteristics(obj: unknown): obj is Characteristics {
    const typedObj = obj as Characteristics
    return (
        (typedObj !== null &&
            typeof typedObj === "object" ||
            typeof typedObj === "function") &&
        (typeof typedObj["lifetime"] === "undefined" ||
            typeof typedObj["lifetime"] === "number") &&
        (typeof typedObj["hotness"] === "undefined" ||
            typeof typedObj["hotness"] === "number")
    )
}

export function isChanges(obj: unknown): obj is Changes {
    const typedObj = obj as Changes
    return (
        (typedObj !== null &&
            typeof typedObj === "object" ||
            typeof typedObj === "function") &&
        typeof typedObj["created"] === "string" &&
        typeof typedObj["updated"] === "string" &&
        (typeof typedObj["firstPublished"] === "undefined" ||
            typeof typedObj["firstPublished"] === "string") &&
        (typeof typedObj["published"] === "undefined" ||
            typeof typedObj["published"] === "string") &&
        (typeof typedObj["deleted"] === "undefined" ||
            typeof typedObj["deleted"] === "string")
    )
}

export function isSection(obj: unknown): obj is Section {
    const typedObj = obj as Section
    return (
        (typedObj !== null &&
            typeof typedObj === "object" ||
            typeof typedObj === "function") &&
        typeof typedObj["id"] === "string" &&
        (typeof typedObj["title"] === "undefined" ||
            typeof typedObj["title"] === "string") &&
        (typeof typedObj["enabled"] === "undefined" ||
            typedObj["enabled"] === false ||
            typedObj["enabled"] === true) &&
        (typeof typedObj["parent"] === "undefined" ||
            isSection(typedObj["parent"]) as boolean)
    )
}

export function isSource(obj: unknown): obj is Source {
    const typedObj = obj as Source
    return (
        (typedObj !== null &&
            typeof typedObj === "object" ||
            typeof typedObj === "function") &&
        typeof typedObj["type"] === "string" &&
        typeof typedObj["id"] === "string" &&
        typeof typedObj["title"] === "string" &&
        typeof typedObj["reference"] === "string" &&
        Array.isArray(typedObj["authors"]) &&
        typedObj["authors"].every((e: any) =>
            typeof e === "string"
        ) &&
        (typeof typedObj["originators"] === "undefined" ||
            Array.isArray(typedObj["originators"]) &&
            typedObj["originators"].every((e: any) =>
                isOriginator(e) as boolean
            )) &&
        (typeof typedObj["contracts"] === "undefined" ||
            Array.isArray(typedObj["contracts"]) &&
            typedObj["contracts"].every((e: any) =>
                typeof e === "string"
            ))
    )
}

export function isStory(obj: unknown): obj is Story {
    const typedObj = obj as Story
    return (
        (typedObj !== null &&
            typeof typedObj === "object" ||
            typeof typedObj === "function") &&
        typeof typedObj["id"] === "string" &&
        (typeof typedObj["title"] === "undefined" ||
            typeof typedObj["title"] === "string") &&
        (typeof typedObj["description"] === "undefined" ||
            typeof typedObj["description"] === "string") &&
        (typeof typedObj["updated"] === "undefined" ||
            typeof typedObj["updated"] === "string") &&
        (typeof typedObj["enabled"] === "undefined" ||
            typedObj["enabled"] === false ||
            typedObj["enabled"] === true) &&
        (typeof typedObj["background"] === "undefined" ||
            isRichText(typedObj["background"]) as boolean)
    )
}

export function isTag(obj: unknown): obj is Tag {
    const typedObj = obj as Tag
    return (
        (typedObj !== null &&
            typeof typedObj === "object" ||
            typeof typedObj === "function") &&
        typeof typedObj["id"] === "string" &&
        typeof typedObj["slug"] === "string" &&
        (typeof typedObj["title"] === "undefined" ||
            typeof typedObj["title"] === "string") &&
        (typeof typedObj["type"] === "undefined" ||
            typedObj["type"] === "descriptor" ||
            typedObj["type"] === "organization" ||
            typedObj["type"] === "person" ||
            typedObj["type"] === "location" ||
            typedObj["type"] === "event")
    )
}

export function isText(obj: unknown): obj is Text {
    const typedObj = obj as Text
    return (
        (typedObj !== null &&
            typeof typedObj === "object" ||
            typeof typedObj === "function") &&
        typeof typedObj["value"] === "string" &&
        (typeof typedObj["markup"] === "undefined" ||
            Array.isArray(typedObj["markup"]) &&
            typedObj["markup"].every((e: any) =>
                isMarkup(e) as boolean
            ))
    )
}

export function isMarkup(obj: unknown): obj is Markup {
    const typedObj = obj as Markup
    return (
        (typedObj !== null &&
            typeof typedObj === "object" ||
            typeof typedObj === "function") &&
        (typedObj["type"] === "style:strong" ||
            typedObj["type"] === "style:em" ||
            typedObj["type"] === "style:symbol" ||
            typedObj["type"] === "style:underline" ||
            typedObj["type"] === "style:highlight" ||
            typedObj["type"] === "style:superscript" ||
            typedObj["type"] === "style:subscript" ||
            typedObj["type"] === "link:internal" ||
            typedObj["type"] === "link:external") &&
        (typeof typedObj["uri"] === "undefined" ||
            typeof typedObj["uri"] === "string") &&
        (typeof typedObj["symbol"] === "undefined" ||
            typeof typedObj["symbol"] === "string") &&
        typeof typedObj["offset"] === "number" &&
        typeof typedObj["length"] === "number"
    )
}

export function isRichText(obj: unknown): obj is RichText {
    const typedObj = obj as RichText
    return (
        (typedObj !== null &&
            typeof typedObj === "object" ||
            typeof typedObj === "function") &&
        (typedObj["blockType"] === "paragraph" ||
            typedObj["blockType"] === "list:ordered" ||
            typedObj["blockType"] === "list:unordered" ||
            typedObj["blockType"] === "list:checked" ||
            typedObj["blockType"] === "quote" ||
            typedObj["blockType"] === "heading" ||
            typedObj["blockType"] === "heading:level-2") &&
        (typeof typedObj["text"] === "undefined" ||
            isText(typedObj["text"]) as boolean) &&
        (typeof typedObj["items"] === "undefined" ||
            Array.isArray(typedObj["items"]) &&
            typedObj["items"].every((e: any) =>
                isText(e) as boolean
            ))
    )
}

export function isPromotionContent(obj: unknown): obj is PromotionContent {
    const typedObj = obj as PromotionContent
    return (
        (typedObj !== null &&
            typeof typedObj === "object" ||
            typeof typedObj === "function") &&
        (typeof typedObj["title"] === "undefined" ||
            isText(typedObj["title"]) as boolean) &&
        (typeof typedObj["description"] === "undefined" ||
            isText(typedObj["description"]) as boolean) &&
        (typeof typedObj["imageAsset"] === "undefined" ||
            isImageAsset(typedObj["imageAsset"]) as boolean) &&
        typeof typedObj["slug"] === "string"
    )
}

export function isImageAsset(obj: unknown): obj is ImageAsset {
    const typedObj = obj as ImageAsset
    return (
        (typedObj !== null &&
            typeof typedObj === "object" ||
            typeof typedObj === "function") &&
        typeof typedObj["id"] === "string" &&
        (typedObj["size"] !== null &&
            typeof typedObj["size"] === "object" ||
            typeof typedObj["size"] === "function") &&
        typeof typedObj["size"]["width"] === "number" &&
        typeof typedObj["size"]["height"] === "number" &&
        (typeof typedObj["hotspot"] === "undefined" ||
            (typedObj["hotspot"] !== null &&
                typeof typedObj["hotspot"] === "object" ||
                typeof typedObj["hotspot"] === "function") &&
            typeof typedObj["hotspot"]["x"] === "number" &&
            typeof typedObj["hotspot"]["y"] === "number" &&
            typeof typedObj["hotspot"]["width"] === "number" &&
            typeof typedObj["hotspot"]["height"] === "number") &&
        (typeof typedObj["main"] === "undefined" ||
            typeof typedObj["main"] === "string") &&
        (typeof typedObj["snapshots"] === "undefined" ||
            typeof typedObj["snapshots"] === "string")
    )
}

export function isVersion(obj: unknown): obj is Version {
    const typedObj = obj as Version
    return (
        (typedObj !== null &&
            typeof typedObj === "object" ||
            typeof typedObj === "function") &&
        typeof typedObj["sequenceNo"] === "number"
    )
}

export function isCapiArticle(obj: unknown): obj is CapiArticle {
    const typedObj = obj as CapiArticle
    return (
        (typedObj !== null &&
            typeof typedObj === "object" ||
            typeof typedObj === "function") &&
        isAccess(typedObj["access"]) as boolean &&
        Array.isArray(typedObj["authors"]) &&
        typedObj["authors"].every((e: any) =>
            isAuthor(e) as boolean
        ) &&
        (typeof typedObj["characteristics"] === "undefined" ||
            isCharacteristics(typedObj["characteristics"]) as boolean) &&
        isChanges(typedObj["changes"]) as boolean &&
        Array.isArray(typedObj["components"]) &&
        typedObj["components"].every((e: any) =>
            isComponentBase(e) as boolean
        ) &&
        (typeof typedObj["customProperties"] === "undefined" ||
            isCustomProperties(typedObj["customProperties"]) as boolean) &&
        (typeof typedObj["presentationProperties"] === "undefined" ||
            (typedObj["presentationProperties"] !== null &&
                typeof typedObj["presentationProperties"] === "object" ||
                typeof typedObj["presentationProperties"] === "function") &&
            Object.entries<any>(typedObj["presentationProperties"])
                .every(([key, value]) => (typeof value === "string" &&
                    typeof key === "string"))) &&
        typeof typedObj["id"] === "string" &&
        (typedObj["language"] === "nb" ||
            typedObj["language"] === "nn" ||
            typedObj["language"] === "sv" ||
            typedObj["language"] === "en") &&
        typeof typedObj["newsroom"] === "string" &&
        (typedObj["schemaType"] === "article" ||
            typedObj["schemaType"] === "teaser") &&
        typedObj["schemaVersion"] === 5 &&
        isSection(typedObj["section"]) as boolean &&
        (typeof typedObj["sources"] === "undefined" ||
            Array.isArray(typedObj["sources"]) &&
            typedObj["sources"].every((e: any) =>
                isSource(e) as boolean
            )) &&
        (typeof typedObj["source"] === "undefined" ||
            isSource(typedObj["source"]) as boolean) &&
        (typeof typedObj["immediateSource"] === "undefined" ||
            isSource(typedObj["immediateSource"]) as boolean) &&
        (typeof typedObj["state"] === "undefined" ||
            typedObj["state"] === "draft" ||
            typedObj["state"] === "done" ||
            typedObj["state"] === "published") &&
        (typeof typedObj["story"] === "undefined" ||
            isStory(typedObj["story"]) as boolean) &&
        (typeof typedObj["tags"] === "undefined" ||
            Array.isArray(typedObj["tags"]) &&
            typedObj["tags"].every((e: any) =>
                isTag(e) as boolean
            )) &&
        isText(typedObj["title"]) as boolean &&
        (typeof typedObj["promotionContent"] === "undefined" ||
            isPromotionContent(typedObj["promotionContent"]) as boolean) &&
        isVersion(typedObj["version"]) as boolean &&
        typeof typedObj["isAutoUpdating"] === "boolean" &&
        typeof typedObj["scope"] === "string" &&
        isArticleEnrichments(typedObj["enrichments"]) as boolean
    )
}

export function isCustomProperties(obj: unknown): obj is CustomProperties {
    const typedObj = obj as CustomProperties
    return (
        (typedObj !== null &&
            typeof typedObj === "object" ||
            typeof typedObj === "function") &&
        Object.entries<any>(typedObj)
            .every(([key, value]) => ((typeof value === "string" ||
                value === false ||
                value === true ||
                isText(value) as boolean ||
                isRichText(value) as boolean ||
                isImageAsset(value) as boolean ||
                Array.isArray(value) &&
                value.every((e: any) =>
                    typeof e === "string"
                )) &&
                typeof key === "string"))
    )
}

export function isArticleEnrichments(obj: unknown): obj is ArticleEnrichments {
    const typedObj = obj as ArticleEnrichments
    return (
        (typedObj !== null &&
            typeof typedObj === "object" ||
            typeof typedObj === "function") &&
        typeof typedObj["wordCount"] === "number" &&
        (typedObj["article-comments"] !== null &&
            typeof typedObj["article-comments"] === "object" ||
            typeof typedObj["article-comments"] === "function") &&
        typeof typedObj["article-comments"]["count"] === "number"
    )
}

export function isComponentBase(obj: unknown): obj is ComponentBase {
    const typedObj = obj as ComponentBase
    return (
        (typedObj !== null &&
            typeof typedObj === "object" ||
            typeof typedObj === "function") &&
        typeof typedObj["type"] === "string" &&
        (typeof typedObj["subtype"] === "undefined" ||
            typeof typedObj["subtype"] === "string") &&
        (typeof typedObj["presentationProperties"] === "undefined" ||
            (typedObj["presentationProperties"] !== null &&
                typeof typedObj["presentationProperties"] === "object" ||
                typeof typedObj["presentationProperties"] === "function") &&
            Object.entries<any>(typedObj["presentationProperties"])
                .every(([key, value]) => (typeof value === "string" &&
                    typeof key === "string")))
    )
}

export function isArticleComponent(obj: unknown): obj is ArticleComponent {
    const typedObj = obj as ArticleComponent
    return (
        isComponentBase(typedObj) as boolean &&
        typedObj["type"] === "article" &&
        typeof typedObj["articleId"] === "string" &&
        (typeof typedObj["linkTitle"] === "undefined" ||
            typeof typedObj["linkTitle"] === "string")
    )
}

export function isBreakpointComponent(obj: unknown): obj is BreakpointComponent {
    const typedObj = obj as BreakpointComponent
    return (
        isComponentBase(typedObj) as boolean &&
        typedObj["type"] === "breakpoint"
    )
}

export function isFactComponent(obj: unknown): obj is FactComponent {
    const typedObj = obj as FactComponent
    return (
        isComponentBase(typedObj) as boolean &&
        typedObj["type"] === "fact" &&
        (typeof typedObj["title"] === "undefined" ||
            isText(typedObj["title"]) as boolean) &&
        (typeof typedObj["paragraphs"] === "undefined" ||
            Array.isArray(typedObj["paragraphs"]) &&
            typedObj["paragraphs"].every((e: any) =>
                isRichText(e) as boolean
            ))
    )
}

export function isGallery(obj: unknown): obj is Gallery {
    const typedObj = obj as Gallery
    return (
        isComponentBase(typedObj) as boolean &&
        typedObj["type"] === "gallery" &&
        Array.isArray(typedObj["components"]) &&
        typedObj["components"].every((e: any) =>
        (isImage(e) as boolean ||
            isVideoComponent(e) as boolean)
        ) &&
        (typeof typedObj["characteristics"] === "undefined" ||
            isCharacteristics(typedObj["characteristics"]) as boolean)
    )
}

export function isGrade(obj: unknown): obj is Grade {
    const typedObj = obj as Grade
    return (
        isComponentBase(typedObj) as boolean &&
        typedObj["type"] === "grade" &&
        typeof typedObj["grade"] === "number"
    )
}

export function isList(obj: unknown): obj is List {
    const typedObj = obj as List
    return (
        isComponentBase(typedObj) as boolean &&
        typedObj["type"] === "list" &&
        Array.isArray(typedObj["components"]) &&
        typedObj["components"].every((e: any) =>
            isComponentBase(e) as boolean
        )
    )
}

export function isImage(obj: unknown): obj is Image {
    const typedObj = obj as Image
    return (
        isComponentBase(typedObj) as boolean &&
        typedObj["type"] === "image" &&
        isImageAsset(typedObj["imageAsset"]) as boolean &&
        (typeof typedObj["caption"] === "undefined" ||
            isText(typedObj["caption"]) as boolean) &&
        (typeof typedObj["byline"] === "undefined" ||
            (typedObj["byline"] !== null &&
                typeof typedObj["byline"] === "object" ||
                typeof typedObj["byline"] === "function") &&
            typeof typedObj["byline"]["title"] === "string") &&
        (typeof typedObj["sourceId"] === "undefined" ||
            typeof typedObj["sourceId"] === "string") &&
        (typeof typedObj["characteristics"] === "undefined" ||
            (typedObj["characteristics"] !== null &&
                typeof typedObj["characteristics"] === "object" ||
                typeof typedObj["characteristics"] === "function") &&
            (typeof typedObj["characteristics"]["significance"] === "undefined" ||
                typeof typedObj["characteristics"]["significance"] === "number") &&
            (typeof typedObj["characteristics"]["figure"] === "undefined" ||
                typedObj["characteristics"]["figure"] === false ||
                typedObj["characteristics"]["figure"] === true) &&
            (typeof typedObj["characteristics"]["sensitive"] === "undefined" ||
                typedObj["characteristics"]["sensitive"] === false ||
                typedObj["characteristics"]["sensitive"] === true) &&
            (typeof typedObj["characteristics"]["intention"] === "undefined" ||
                typeof typedObj["characteristics"]["intention"] === "string"))
    )
}

export function isQuote(obj: unknown): obj is Quote {
    const typedObj = obj as Quote
    return (
        isComponentBase(typedObj) as boolean &&
        typedObj["type"] === "quote" &&
        isText(typedObj["quote"]) as boolean &&
        (typeof typedObj["source"] === "undefined" ||
            isText(typedObj["source"]) as boolean) &&
        (typeof typedObj["context"] === "undefined" ||
            isText(typedObj["context"]) as boolean)
    )
}

export function isMap(obj: unknown): obj is Map {
    const typedObj = obj as Map
    return (
        isComponentBase(typedObj) as boolean &&
        typedObj["type"] === "map" &&
        typeof typedObj["zoom"] === "number" &&
        isPoint(typedObj["location"]) as boolean &&
        (typedObj["bounds"] !== null &&
            typeof typedObj["bounds"] === "object" ||
            typeof typedObj["bounds"] === "function") &&
        isPoint(typedObj["bounds"]["sw"]) as boolean &&
        isPoint(typedObj["bounds"]["ne"]) as boolean &&
        (typeof typedObj["mapConfig"] === "undefined" ||
            (typedObj["mapConfig"] !== null &&
                typeof typedObj["mapConfig"] === "object" ||
                typeof typedObj["mapConfig"] === "function") &&
            Object.entries<any>(typedObj["mapConfig"])
                .every(([key, value]) => (typeof value === "string" &&
                    typeof key === "string")))
    )
}

export function isPoint(obj: unknown): obj is Point {
    const typedObj = obj as Point
    return (
        (typedObj !== null &&
            typeof typedObj === "object" ||
            typeof typedObj === "function") &&
        typeof typedObj["lat"] === "number" &&
        typeof typedObj["lon"] === "number"
    )
}

export function isTable(obj: unknown): obj is Table {
    const typedObj = obj as Table
    return (
        isComponentBase(typedObj) as boolean &&
        typedObj["type"] === "table" &&
        Array.isArray(typedObj["rows"]) &&
        typedObj["rows"].every((e: any) =>
            Array.isArray(e) &&
            e.every((e: any) =>
                typeof e === "string"
            )
        ) &&
        (typedObj["headers"] !== null &&
            typeof typedObj["headers"] === "object" ||
            typeof typedObj["headers"] === "function") &&
        Array.isArray(typedObj["headers"]["rows"]) &&
        typedObj["headers"]["rows"].every((e: any) =>
            typeof e === "number"
        ) &&
        Array.isArray(typedObj["headers"]["columns"]) &&
        typedObj["headers"]["columns"].every((e: any) =>
            typeof e === "number"
        )
    )
}

export function isTextComponent(obj: unknown): obj is TextComponent {
    const typedObj = obj as TextComponent
    return (
        isComponentBase(typedObj) as boolean &&
        typedObj["type"] === "text" &&
        (typeof typedObj["subtype"] === "undefined" ||
            typedObj["subtype"] === "lead") &&
        Array.isArray(typedObj["paragraphs"]) &&
        typedObj["paragraphs"].every((e: any) =>
            isRichText(e) as boolean
        )
    )
}

export function isSubheading(obj: unknown): obj is Subheading {
    const typedObj = obj as Subheading
    return (
        isComponentBase(typedObj) as boolean &&
        typedObj["type"] === "subheading" &&
        isText(typedObj["text"]) as boolean
    )
}

export function isUrlComponent(obj: unknown): obj is UrlComponent {
    const typedObj = obj as UrlComponent
    return (
        isComponentBase(typedObj) as boolean &&
        typedObj["type"] === "url" &&
        typeof typedObj["url"] === "string" &&
        (typeof typedObj["title"] === "undefined" ||
            isText(typedObj["title"]) as boolean) &&
        (typeof typedObj["label"] === "undefined" ||
            typeof typedObj["label"] === "string") &&
        (typeof typedObj["data"] === "undefined" ||
            isEnrichmentData(typedObj["data"]) as boolean)
    )
}

export function isEnrichmentData(obj: unknown): obj is EnrichmentData {
    const typedObj = obj as EnrichmentData
    return (
        (typedObj !== null &&
            typeof typedObj === "object" ||
            typeof typedObj === "function") &&
        (typeof typedObj["type"] === "undefined" ||
            typeof typedObj["type"] === "string") &&
        (typeof typedObj["source"] === "undefined" ||
            typeof typedObj["source"] === "string") &&
        (typeof typedObj["canonicalUrl"] === "undefined" ||
            typeof typedObj["canonicalUrl"] === "string") &&
        (typeof typedObj["image"] === "undefined" ||
            typeof typedObj["image"] === "string") &&
        (typeof typedObj["customProperties"] === "undefined" ||
            (typedObj["customProperties"] !== null &&
                typeof typedObj["customProperties"] === "object" ||
                typeof typedObj["customProperties"] === "function") &&
            Object.entries<any>(typedObj["customProperties"])
                .every(([key, value]) => ((typeof value === "string" ||
                    typeof value === "number" ||
                    (value !== null &&
                        typeof value === "object" ||
                        typeof value === "function") &&
                    Object.entries<any>(value)
                        .every(([key, value]) => (typeof value === "string" &&
                            typeof key === "string"))) &&
                    typeof key === "string")))
    )
}

export function isVideoComponent(obj: unknown): obj is VideoComponent {
    const typedObj = obj as VideoComponent
    return (
        isComponentBase(typedObj) as boolean &&
        typedObj["type"] === "video" &&
        isVideoAsset(typedObj["videoAsset"]) as boolean &&
        (typeof typedObj["title"] === "undefined" ||
            isText(typedObj["title"]) as boolean) &&
        (typeof typedObj["description"] === "undefined" ||
            typeof typedObj["description"] === "string" ||
            isText(typedObj["description"]) as boolean) &&
        (typeof typedObj["characteristics"] === "undefined" ||
            (typedObj["characteristics"] !== null &&
                typeof typedObj["characteristics"] === "object" ||
                typeof typedObj["characteristics"] === "function") &&
            (typeof typedObj["characteristics"]["significance"] === "undefined" ||
                typeof typedObj["characteristics"]["significance"] === "number") &&
            (typeof typedObj["characteristics"]["intention"] === "undefined" ||
                typeof typedObj["characteristics"]["intention"] === "string")) &&
        (typeof typedObj["provider"] === "undefined" ||
            (typedObj["provider"] !== null &&
                typeof typedObj["provider"] === "object" ||
                typeof typedObj["provider"] === "function") &&
            (typeof typedObj["provider"]["service"] === "undefined" ||
                typeof typedObj["provider"]["service"] === "string") &&
            (typeof typedObj["provider"]["id"] === "undefined" ||
                typeof typedObj["provider"]["id"] === "string")) &&
        (typeof typedObj["imageAsset"] === "undefined" ||
            (typedObj["imageAsset"] !== null &&
                typeof typedObj["imageAsset"] === "object" ||
                typeof typedObj["imageAsset"] === "function") &&
            typeof typedObj["imageAsset"]["id"] === "string" &&
            (typeof typedObj["imageAsset"]["main"] === "undefined" ||
                typeof typedObj["imageAsset"]["main"] === "string") &&
            (typeof typedObj["imageAsset"]["snapshots"] === "undefined" ||
                typeof typedObj["imageAsset"]["snapshots"] === "string"))
    )
}

export function isVideoAsset(obj: unknown): obj is VideoAsset {
    const typedObj = obj as VideoAsset
    return (
        (typedObj !== null &&
            typeof typedObj === "object" ||
            typeof typedObj === "function") &&
        typeof typedObj["id"] === "string" &&
        (typeof typedObj["metadata"] === "undefined" ||
            (typedObj["metadata"] !== null &&
                typeof typedObj["metadata"] === "object" ||
                typeof typedObj["metadata"] === "function") &&
            Object.entries<any>(typedObj["metadata"])
                .every(([key, value]) => (typeof value === "string" &&
                    typeof key === "string"))) &&
        (typeof typedObj["sourceFiles"] === "undefined" ||
            Array.isArray(typedObj["sourceFiles"]) &&
            typedObj["sourceFiles"].every((e: any) =>
                isSourceFile(e) as boolean
            )) &&
        (typeof typedObj["chapters"] === "undefined" ||
            Array.isArray(typedObj["chapters"]) &&
            typedObj["chapters"].every((e: any) =>
                isChapter(e) as boolean
            ))
    )
}

export function isSourceFile(obj: unknown): obj is SourceFile {
    const typedObj = obj as SourceFile
    return (
        (typedObj !== null &&
            typeof typedObj === "object" ||
            typeof typedObj === "function") &&
        typeof typedObj["bitrate"] === "number" &&
        typeof typedObj["height"] === "number" &&
        typeof typedObj["sourceFile"] === "string" &&
        typeof typedObj["width"] === "number"
    )
}

export function isChapter(obj: unknown): obj is Chapter {
    const typedObj = obj as Chapter
    return (
        (typedObj !== null &&
            typeof typedObj === "object" ||
            typeof typedObj === "function") &&
        (typeof typedObj["description"] === "undefined" ||
            typeof typedObj["description"] === "string") &&
        typeof typedObj["featured"] === "boolean" &&
        typeof typedObj["timeline"] === "number" &&
        typeof typedObj["title"] === "string"
    )
}

export function isDeprecatedInternalComment(obj: unknown): obj is DeprecatedInternalComment {
    const typedObj = obj as DeprecatedInternalComment
    return (
        isComponentBase(typedObj) as boolean &&
        typedObj["type"] === "deprecated-internal-comment" &&
        typeof typedObj["comment"] === "string"
    )
}

export function isDeprecatedIntegration(obj: unknown): obj is DeprecatedIntegration {
    const typedObj = obj as DeprecatedIntegration
    return (
        isComponentBase(typedObj) as boolean &&
        typedObj["type"] === "deprecated-integration" &&
        (typeof typedObj["url"] === "undefined" ||
            typeof typedObj["url"] === "string") &&
        (typeof typedObj["body"] === "undefined" ||
            typeof typedObj["body"] === "string") &&
        (typeof typedObj["data"] === "undefined" ||
            (typedObj["data"] !== null &&
                typeof typedObj["data"] === "object" ||
                typeof typedObj["data"] === "function") &&
            Object.entries<any>(typedObj["data"])
                .every(([key, _value]) => (typeof key === "string"))) &&
        (typeof typedObj["title"] === "undefined" ||
            typeof typedObj["title"] === "string")
    )
}

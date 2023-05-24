/*
 * Generated type guards for "Teaser.ts".
 * WARNING: Do not manually change this file.
 */
import { Model, CollectionInData, ModelInData, SectionModel, TagModel, StoryModel, AuthorModel, BlendInData, BlendOptions, TransformOptions, Teaser, Characteristics, Access, Changes, ImageAsset, PromotionContent, FrontPageVideo, CustomProperties, Section, Tag, BaseAuthor, ContentAuthor, CollectionAuthor, BaseStory, ContentStory, CollectionStory, ContentSharing, PresentationProperties } from "./Teaser";
import { isArticleStub, isCnpSection, isCnpTag, isCnpStory, isCnpAuthor, isBlenderData } from "../capi/Collections.guard";
import { isJupiterArticle } from "../capi/Jupiter.guard";
import { isText, isVideoAsset } from "../capi/Article.guard";

export function isModel(obj: unknown): obj is Model {
    const typedObj = obj as Model
    return (
        (isSection(typedObj) as boolean ||
            isTag(typedObj) as boolean ||
            isCollectionStory(typedObj) as boolean ||
            isCollectionAuthor(typedObj) as boolean)
    )
}

export function isCollectionInData(obj: unknown): obj is CollectionInData {
    const typedObj = obj as CollectionInData
    return (
        (typedObj !== null &&
            typeof typedObj === "object" ||
            typeof typedObj === "function") &&
        Array.isArray(typedObj["items"]) &&
        typedObj["items"].every((e: any) =>
        (isArticleStub(e) as boolean ||
            isJupiterArticle(e) as boolean)
        ) &&
        (typeof typedObj["model"] === "undefined" ||
            isSection(typedObj["model"]) as boolean ||
            isTag(typedObj["model"]) as boolean ||
            isCollectionStory(typedObj["model"]) as boolean ||
            isCollectionAuthor(typedObj["model"]) as boolean) &&
        (typeof typedObj["hits"] === "undefined" ||
            (typedObj["hits"] !== null &&
                typeof typedObj["hits"] === "object" ||
                typeof typedObj["hits"] === "function") &&
            typeof typedObj["hits"]["total"] === "number" &&
            typeof typedObj["hits"]["size"] === "number")
    )
}

export function isModelInData(obj: unknown): obj is ModelInData {
    const typedObj = obj as ModelInData
    return (
        (isSectionModel(typedObj) as boolean ||
            isTagModel(typedObj) as boolean ||
            isStoryModel(typedObj) as boolean ||
            isAuthorModel(typedObj) as boolean)
    )
}

export function isSectionModel(obj: unknown): obj is SectionModel {
    const typedObj = obj as SectionModel
    return (
        (typedObj !== null &&
            typeof typedObj === "object" ||
            typeof typedObj === "function") &&
        typedObj["type"] === "section" &&
        isCnpSection(typedObj["data"]) as boolean
    )
}

export function isTagModel(obj: unknown): obj is TagModel {
    const typedObj = obj as TagModel
    return (
        (typedObj !== null &&
            typeof typedObj === "object" ||
            typeof typedObj === "function") &&
        typedObj["type"] === "tag" &&
        isCnpTag(typedObj["data"]) as boolean
    )
}

export function isStoryModel(obj: unknown): obj is StoryModel {
    const typedObj = obj as StoryModel
    return (
        (typedObj !== null &&
            typeof typedObj === "object" ||
            typeof typedObj === "function") &&
        typedObj["type"] === "story" &&
        isCnpStory(typedObj["data"]) as boolean
    )
}

export function isAuthorModel(obj: unknown): obj is AuthorModel {
    const typedObj = obj as AuthorModel
    return (
        (typedObj !== null &&
            typeof typedObj === "object" ||
            typeof typedObj === "function") &&
        typedObj["type"] === "author" &&
        isCnpAuthor(typedObj["data"]) as boolean
    )
}

export function isBlendInData(obj: unknown): obj is BlendInData {
    const typedObj = obj as BlendInData
    return (
        isBlenderData(typedObj) as boolean &&
        typeof typedObj["blendersrc"] === "string"
    )
}

export function isBlendOptions(obj: unknown): obj is BlendOptions {
    const typedObj = obj as BlendOptions
    return (
        (typedObj !== null &&
            typeof typedObj === "object" ||
            typeof typedObj === "function") &&
        (typeof typedObj["srcFilter"] === "undefined" ||
            typeof typedObj["srcFilter"] === "string") &&
        (typeof typedObj["size"] === "undefined" ||
            typeof typedObj["size"] === "number")
    )
}

export function isTransformOptions(obj: unknown): obj is TransformOptions {
    const typedObj = obj as TransformOptions
    return (
        (typedObj !== null &&
            typeof typedObj === "object" ||
            typeof typedObj === "function") &&
        (typeof typedObj["includeComments"] === "undefined" ||
            typedObj["includeComments"] === false ||
            typedObj["includeComments"] === true) &&
        (typeof typedObj["isShortnews"] === "undefined" ||
            typedObj["isShortnews"] === false ||
            typedObj["isShortnews"] === true)
    )
}

export function isTeaser(obj: unknown): obj is Teaser {
    const typedObj = obj as Teaser
    return (
        (typedObj !== null &&
            typeof typedObj === "object" ||
            typeof typedObj === "function") &&
        typeof typedObj["id"] === "string" &&
        isCharacteristics(typedObj["characteristics"]) as boolean &&
        isAccess(typedObj["access"]) as boolean &&
        typedObj["type"] === "article" &&
        (typedObj["title"] !== null &&
            typeof typedObj["title"] === "object" ||
            typeof typedObj["title"] === "function") &&
        typeof typedObj["title"]["value"] === "string" &&
        isChanges(typedObj["changes"]) as boolean &&
        (typedObj["urls"] !== null &&
            typeof typedObj["urls"] === "object" ||
            typeof typedObj["urls"] === "function") &&
        typeof typedObj["urls"]["relative"] === "string" &&
        isPromotionContent(typedObj["promotionContent"]) as boolean &&
        isSection(typedObj["section"]) as boolean &&
        isCustomProperties(typedObj["customProperties"]) as boolean &&
        (typeof typedObj["authors"] === "undefined" ||
            Array.isArray(typedObj["authors"]) &&
            typedObj["authors"].every((e: any) =>
                isContentAuthor(e) as boolean
            )) &&
        (typeof typedObj["tags"] === "undefined" ||
            Array.isArray(typedObj["tags"]) &&
            typedObj["tags"].every((e: any) =>
                isTag(e) as boolean
            )) &&
        (typeof typedObj["presentationProperties"] === "undefined" ||
            isPresentationProperties(typedObj["presentationProperties"]) as boolean) &&
        (typeof typedObj["contentSharing"] === "undefined" ||
            isContentSharing(typedObj["contentSharing"]) as boolean) &&
        (typeof typedObj["story"] === "undefined" ||
            isContentStory(typedObj["story"]) as boolean) &&
        (typeof typedObj["lead"] === "undefined" ||
            typeof typedObj["lead"] === "string")
    )
}

export function isCharacteristics(obj: unknown): obj is Characteristics {
    const typedObj = obj as Characteristics
    return (
        (typedObj !== null &&
            typeof typedObj === "object" ||
            typeof typedObj === "function") &&
        typeof typedObj["lifetime"] === "number" &&
        typeof typedObj["hotness"] === "number"
    )
}

export function isAccess(obj: unknown): obj is Access {
    const typedObj = obj as Access
    return (
        (typedObj !== null &&
            typeof typedObj === "object" ||
            typeof typedObj === "function") &&
        typeof typedObj["paywall"] === "boolean"
    )
}

export function isChanges(obj: unknown): obj is Changes {
    const typedObj = obj as Changes
    return (
        (typedObj !== null &&
            typeof typedObj === "object" ||
            typeof typedObj === "function") &&
        typeof typedObj["updated"] === "string" &&
        typeof typedObj["published"] === "string"
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
            typeof typedObj["hotspot"]["height"] === "number")
    )
}

export function isPromotionContent(obj: unknown): obj is PromotionContent {
    const typedObj = obj as PromotionContent
    return (
        (typedObj !== null &&
            typeof typedObj === "object" ||
            typeof typedObj === "function") &&
        typeof typedObj["slug"] === "string" &&
        (typeof typedObj["imageAsset"] === "undefined" ||
            isImageAsset(typedObj["imageAsset"]) as boolean ||
            (typedObj["imageAsset"] !== null &&
                typeof typedObj["imageAsset"] === "object" ||
                typeof typedObj["imageAsset"] === "function") &&
            typeof typedObj["imageAsset"]["url"] === "string") &&
        (typeof typedObj["frontPageVideo"] === "undefined" ||
            isFrontPageVideo(typedObj["frontPageVideo"]) as boolean)
    )
}

export function isFrontPageVideo(obj: unknown): obj is FrontPageVideo {
    const typedObj = obj as FrontPageVideo
    return (
        (typedObj !== null &&
            typeof typedObj === "object" ||
            typeof typedObj === "function") &&
        (typeof typedObj["provider"] === "undefined" ||
            (typedObj["provider"] !== null &&
                typeof typedObj["provider"] === "object" ||
                typeof typedObj["provider"] === "function") &&
            (typeof typedObj["provider"]["service"] === "undefined" ||
                typeof typedObj["provider"]["service"] === "string") &&
            (typeof typedObj["provider"]["id"] === "undefined" ||
                typeof typedObj["provider"]["id"] === "string")) &&
        (typeof typedObj["title"] === "undefined" ||
            isText(typedObj["title"]) as boolean) &&
        (typeof typedObj["presentationProperties"] === "undefined" ||
            (typedObj["presentationProperties"] !== null &&
                typeof typedObj["presentationProperties"] === "object" ||
                typeof typedObj["presentationProperties"] === "function") &&
            Object.entries<any>(typedObj["presentationProperties"])
                .every(([key, value]) => (typeof value === "string" &&
                    typeof key === "string"))) &&
        isVideoAsset(typedObj["videoAsset"]) as boolean &&
        (typeof typedObj["poster"] === "undefined" ||
            typeof typedObj["poster"] === "string") &&
        Array.isArray(typedObj["previewSources"]) &&
        typedObj["previewSources"].every((e: any) =>
            typeof e === "string"
        )
    )
}

export function isCustomProperties(obj: unknown): obj is CustomProperties {
    const typedObj = obj as CustomProperties
    return (
        (typedObj !== null &&
            typeof typedObj === "object" ||
            typeof typedObj === "function") &&
        Object.entries<any>(typedObj)
            .every(([key, value]) => ((typeof value === "undefined" ||
                typeof value === "string" ||
                typeof value === "number" ||
                value === false ||
                value === true) &&
                typeof key === "string"))
    )
}

export function isSection(obj: unknown): obj is Section {
    const typedObj = obj as Section
    return (
        (typedObj !== null &&
            typeof typedObj === "object" ||
            typeof typedObj === "function") &&
        typeof typedObj["id"] === "string" &&
        typeof typedObj["title"] === "string" &&
        (typeof typedObj["parent"] === "undefined" ||
            isSection(typedObj["parent"]) as boolean)
    )
}

export function isTag(obj: unknown): obj is Tag {
    const typedObj = obj as Tag
    return (
        (typedObj !== null &&
            typeof typedObj === "object" ||
            typeof typedObj === "function") &&
        typeof typedObj["id"] === "string" &&
        typeof typedObj["title"] === "string" &&
        typeof typedObj["slug"] === "string"
    )
}

export function isBaseAuthor(obj: unknown): obj is BaseAuthor {
    const typedObj = obj as BaseAuthor
    return (
        (typedObj !== null &&
            typeof typedObj === "object" ||
            typeof typedObj === "function") &&
        (typeof typedObj["id"] === "undefined" ||
            typeof typedObj["id"] === "string") &&
        typeof typedObj["fullname"] === "string" &&
        (typeof typedObj["description"] === "undefined" ||
            typeof typedObj["description"] === "string")
    )
}

export function isContentAuthor(obj: unknown): obj is ContentAuthor {
    const typedObj = obj as ContentAuthor
    return (
        isBaseAuthor(typedObj) as boolean &&
        (typeof typedObj["image"] === "undefined" ||
            typeof typedObj["image"] === "string") &&
        (typeof typedObj["origin"] === "undefined" ||
            typeof typedObj["origin"] === "string") &&
        (typeof typedObj["email"] === "undefined" ||
            typeof typedObj["email"] === "string") &&
        (typeof typedObj["number"] === "undefined" ||
            typeof typedObj["number"] === "string") &&
        (typeof typedObj["title"] === "undefined" ||
            typeof typedObj["title"] === "string")
    )
}

export function isCollectionAuthor(obj: unknown): obj is CollectionAuthor {
    const typedObj = obj as CollectionAuthor
    return (
        isBaseAuthor(typedObj) as boolean &&
        typeof typedObj["slug"] === "string"
    )
}

export function isBaseStory(obj: unknown): obj is BaseStory {
    const typedObj = obj as BaseStory
    return (
        (typedObj !== null &&
            typeof typedObj === "object" ||
            typeof typedObj === "function") &&
        typeof typedObj["id"] === "string" &&
        typeof typedObj["title"] === "string" &&
        typeof typedObj["slug"] === "string"
    )
}

export function isContentStory(obj: unknown): obj is ContentStory {
    const typedObj = obj as ContentStory
    return (
        isBaseStory(typedObj) as boolean &&
        (typeof typedObj["description"] === "undefined" ||
            typeof typedObj["description"] === "string")
    )
}

export function isCollectionStory(obj: unknown): obj is CollectionStory {
    const typedObj = obj as CollectionStory
    return (
        isBaseStory(typedObj) as boolean &&
        (typeof typedObj["background"] === "undefined" ||
            typeof typedObj["background"] === "string")
    )
}

export function isContentSharing(obj: unknown): obj is ContentSharing {
    const typedObj = obj as ContentSharing
    return (
        (typedObj !== null &&
            typeof typedObj === "object" ||
            typeof typedObj === "function") &&
        typeof typedObj["sourceId"] === "string" &&
        typeof typedObj["sourceNewsroom"] === "string" &&
        (typeof typedObj["sourceSlug"] === "undefined" ||
            typeof typedObj["sourceSlug"] === "string") &&
        (typeof typedObj["sourceSection"] === "undefined" ||
            typeof typedObj["sourceSection"] === "string")
    )
}

export function isPresentationProperties(obj: unknown): obj is PresentationProperties {
    const typedObj = obj as PresentationProperties
    return (
        (typedObj !== null &&
            typeof typedObj === "object" ||
            typeof typedObj === "function") &&
        typeof typedObj["introType"] === "string" &&
        typeof typedObj["navigation"] === "string" &&
        typeof typedObj["introTextPosition"] === "string" &&
        typeof typedObj["promotionType"] === "string"
    )
}

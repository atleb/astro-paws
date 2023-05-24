/*
 * Generated type guards for "Article.ts".
 * WARNING: Do not manually change this file.
 */
import { isComponentBase, isText, isImage, isTextComponent, isVideoAsset, isCharacteristics, isVideoComponent, isRichText, isImageAsset, isTag, isSection, isStory, isPromotionContent, isAccess, isArticleEnrichments } from "../capi/Article.guard";
import { ComponentGroup, InternalArticleLink, ExpandedIntegration, Changes, Intro, Question, QuizComponent, WhoIsWhoComponent, LoopingVideoComponent, Fade, InlineQuote, PromoImage, SomeTags, MappedArticle } from "./Article";
import { isTeaser, isContentAuthor, isContentSharing } from "./Teaser.guard";

export function isComponentGroup(obj: unknown): obj is ComponentGroup {
    const typedObj = obj as ComponentGroup
    return (
        (typedObj !== null &&
            typeof typedObj === "object" ||
            typeof typedObj === "function") &&
        typeof typedObj["type"] === "string" &&
        Array.isArray(typedObj["components"]) &&
        typedObj["components"].every((e: any) =>
            isComponentBase(e) as boolean
        ) &&
        (typeof typedObj["presentationProperties"] === "undefined" ||
            (typedObj["presentationProperties"] !== null &&
                typeof typedObj["presentationProperties"] === "object" ||
                typeof typedObj["presentationProperties"] === "function") &&
            Object.entries<any>(typedObj["presentationProperties"])
                .every(([key, value]) => (typeof value === "string" &&
                    typeof key === "string")))
    )
}

export function isInternalArticleLink(obj: unknown): obj is InternalArticleLink {
    const typedObj = obj as InternalArticleLink
    return (
        isComponentBase(typedObj) as boolean &&
        typedObj["type"] === "article" &&
        (typeof typedObj["linkTitle"] === "undefined" ||
            typeof typedObj["linkTitle"] === "string") &&
        (typeof typedObj["teaser"] === "string" ||
            isTeaser(typedObj["teaser"]) as boolean)
    )
}

export function isExpandedIntegration(obj: unknown): obj is ExpandedIntegration {
    const typedObj = obj as ExpandedIntegration
    return (
        isComponentBase(typedObj) as boolean &&
        typedObj["type"] === "integration" &&
        (typeof typedObj["url"] === "undefined" ||
            typeof typedObj["url"] === "string") &&
        (typeof typedObj["title"] === "undefined" ||
            typeof typedObj["title"] === "string" ||
            isText(typedObj["title"]) as boolean) &&
        (typeof typedObj["subtype"] === "undefined" ||
            typeof typedObj["subtype"] === "string") &&
        (typeof typedObj["body"] === "undefined" ||
            typeof typedObj["body"] === "string") &&
        (typeof typedObj["meta"] === "undefined" ||
            (typedObj["meta"] !== null &&
                typeof typedObj["meta"] === "object" ||
                typeof typedObj["meta"] === "function") &&
            typeof typedObj["meta"]["iframeId"] === "number") &&
        (typeof typedObj["height"] === "undefined" ||
            typeof typedObj["height"] === "string")
    )
}

export function isChanges(obj: unknown): obj is Changes {
    const typedObj = obj as Changes
    return (
        (typedObj !== null &&
            typeof typedObj === "object" ||
            typeof typedObj === "function") &&
        (typeof typedObj["published"] === "undefined" ||
            typeof typedObj["published"] === "string") &&
        (typeof typedObj["updated"] === "undefined" ||
            typeof typedObj["updated"] === "string")
    )
}

export function isIntro(obj: unknown): obj is Intro {
    const typedObj = obj as Intro
    return (
        (typedObj !== null &&
            typeof typedObj === "object" ||
            typeof typedObj === "function") &&
        (typedObj["type"] === "Intro" ||
            typedObj["type"] === "FeatureIntro") &&
        typeof typedObj["title"] === "string" &&
        (typeof typedObj["subtype"] === "undefined" ||
            typeof typedObj["subtype"] === "string") &&
        (typeof typedObj["lead"] === "undefined" ||
            typeof typedObj["lead"] === "string") &&
        (typeof typedObj["media"] === "undefined" ||
            isComponentBase(typedObj["media"]) as boolean) &&
        (typeof typedObj["promo"] === "undefined" ||
            isPromoImage(typedObj["promo"]) as boolean ||
            isImage(typedObj["promo"]) as boolean)
    )
}

export function isQuestion(obj: unknown): obj is Question {
    const typedObj = obj as Question
    return (
        (typedObj !== null &&
            typeof typedObj === "object" ||
            typeof typedObj === "function") &&
        typedObj["type"] === "question" &&
        (typeof typedObj["presentationProperties"] === "undefined" ||
            (typedObj["presentationProperties"] !== null &&
                typeof typedObj["presentationProperties"] === "object" ||
                typeof typedObj["presentationProperties"] === "function") &&
            (typeof typedObj["presentationProperties"]["richType"] === "undefined" ||
                typeof typedObj["presentationProperties"]["richType"] === "string")) &&
        (typeof typedObj["components"] === "undefined" ||
            Array.isArray(typedObj["components"]) &&
            typedObj["components"].every((e: any) =>
                isComponentBase(e) as boolean
            ))
    )
}

export function isQuizComponent(obj: unknown): obj is QuizComponent {
    const typedObj = obj as QuizComponent
    return (
        isComponentBase(typedObj) as boolean &&
        typedObj["type"] === "quiz" &&
        (typeof typedObj["components"] === "undefined" ||
            Array.isArray(typedObj["components"]) &&
            typedObj["components"].every((e: any) =>
                isQuestion(e) as boolean
            )) &&
        (typeof typedObj["intro"] === "undefined" ||
            typeof typedObj["intro"] === "object") &&
        (typeof typedObj["summary"] === "undefined" ||
            typeof typedObj["summary"] === "object") &&
        (typeof typedObj["theme"] === "undefined" ||
            typeof typedObj["theme"] === "string")
    )
}

export function isWhoIsWhoComponent(obj: unknown): obj is WhoIsWhoComponent {
    const typedObj = obj as WhoIsWhoComponent
    return (
        isComponentBase(typedObj) as boolean &&
        typedObj["type"] === "who-is-who" &&
        isIntro(typedObj["intro"]) as boolean &&
        (typeof typedObj["text"] === "undefined" ||
            isTextComponent(typedObj["text"]) as boolean)
    )
}

export function isLoopingVideoComponent(obj: unknown): obj is LoopingVideoComponent {
    const typedObj = obj as LoopingVideoComponent
    return (
        (typedObj !== null &&
            typeof typedObj === "object" ||
            typeof typedObj === "function") &&
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
                typeof typedObj["imageAsset"]["snapshots"] === "string")) &&
        (typeof typedObj["subtype"] === "undefined" ||
            typeof typedObj["subtype"] === "string") &&
        (typeof typedObj["presentationProperties"] === "undefined" ||
            (typedObj["presentationProperties"] !== null &&
                typeof typedObj["presentationProperties"] === "object" ||
                typeof typedObj["presentationProperties"] === "function") &&
            Object.entries<any>(typedObj["presentationProperties"])
                .every(([key, value]) => (typeof value === "string" &&
                    typeof key === "string"))) &&
        typedObj["type"] === "loopingVideo"
    )
}

export function isFade(obj: unknown): obj is Fade {
    const typedObj = obj as Fade
    return (
        (typedObj !== null &&
            typeof typedObj === "object" ||
            typeof typedObj === "function") &&
        (typeof typedObj["characteristics"] === "undefined" ||
            isCharacteristics(typedObj["characteristics"]) as boolean) &&
        (typeof typedObj["subtype"] === "undefined" ||
            typeof typedObj["subtype"] === "string") &&
        (typeof typedObj["presentationProperties"] === "undefined" ||
            (typedObj["presentationProperties"] !== null &&
                typeof typedObj["presentationProperties"] === "object" ||
                typeof typedObj["presentationProperties"] === "function") &&
            Object.entries<any>(typedObj["presentationProperties"])
                .every(([key, value]) => (typeof value === "string" &&
                    typeof key === "string"))) &&
        Array.isArray(typedObj["components"]) &&
        typedObj["components"].every((e: any) =>
        (isImage(e) as boolean ||
            isVideoComponent(e) as boolean)
        ) &&
        typedObj["type"] === "fade"
    )
}

export function isInlineQuote(obj: unknown): obj is InlineQuote {
    const typedObj = obj as InlineQuote
    return (
        isComponentBase(typedObj) as boolean &&
        Array.isArray(typedObj["paragraphs"]) &&
        typedObj["paragraphs"].every((e: any) =>
        (isRichText(e) as boolean ||
            (e !== null &&
                typeof e === "object" ||
                typeof e === "function") &&
            isText(e["quote"]) as boolean &&
            (typeof e["source"] === "undefined" ||
                isText(e["source"]) as boolean) &&
            (typeof e["context"] === "undefined" ||
                isText(e["context"]) as boolean))
        )
    )
}

export function isPromoImage(obj: unknown): obj is PromoImage {
    const typedObj = obj as PromoImage
    return (
        (typedObj !== null &&
            typeof typedObj === "object" ||
            typeof typedObj === "function") &&
        typedObj["type"] === "image" &&
        (typedObj["imageAsset"] !== null &&
            typeof typedObj["imageAsset"] === "object" ||
            typeof typedObj["imageAsset"] === "function") &&
        typeof typedObj["imageAsset"]["url"] === "string"
    )
}

export function isSomeTags(obj: unknown): obj is SomeTags {
    const typedObj = obj as SomeTags
    return (
        (typedObj !== null &&
            typeof typedObj === "object" ||
            typeof typedObj === "function") &&
        typeof typedObj["title"] === "string" &&
        (typeof typedObj["description"] === "undefined" ||
            typeof typedObj["description"] === "string") &&
        (typeof typedObj["image"] === "undefined" ||
            isImageAsset(typedObj["image"]) as boolean ||
            (typedObj["image"] !== null &&
                typeof typedObj["image"] === "object" ||
                typeof typedObj["image"] === "function") &&
            typeof typedObj["image"]["url"] === "string")
    )
}

export function isMappedArticle(obj: unknown): obj is MappedArticle {
    const typedObj = obj as MappedArticle
    return (
        (typedObj !== null &&
            typeof typedObj === "object" ||
            typeof typedObj === "function") &&
        (typeof typedObj["authors"] === "undefined" ||
            Array.isArray(typedObj["authors"]) &&
            typedObj["authors"].every((e: any) =>
                isContentAuthor(e) as boolean
            )) &&
        Array.isArray(typedObj["components"]) &&
        typedObj["components"].every((e: any) =>
        (isComponentGroup(e) as boolean ||
            isComponentBase(e) as boolean)
        ) &&
        (typedObj["urls"] !== null &&
            typeof typedObj["urls"] === "object" ||
            typeof typedObj["urls"] === "function") &&
        typeof typedObj["urls"]["relative"] === "string" &&
        (typeof typedObj["changes"] === "undefined" ||
            isChanges(typedObj["changes"]) as boolean) &&
        (typeof typedObj["intro"] === "undefined" ||
            isIntro(typedObj["intro"]) as boolean) &&
        (typedObj["customProperties"] !== null &&
            typeof typedObj["customProperties"] === "object" ||
            typeof typedObj["customProperties"] === "function") &&
        Object.entries<any>(typedObj["customProperties"])
            .every(([key, _value]) => (typeof key === "string")) &&
        (typeof typedObj["tags"] === "undefined" ||
            Array.isArray(typedObj["tags"]) &&
            typedObj["tags"].every((e: any) =>
                isTag(e) as boolean
            )) &&
        (typeof typedObj["source"] === "undefined" ||
            (typedObj["source"] !== null &&
                typeof typedObj["source"] === "object" ||
                typeof typedObj["source"] === "function") &&
            typeof typedObj["source"]["type"] === "string" &&
            typeof typedObj["source"]["id"] === "string" &&
            typeof typedObj["source"]["title"] === "string" &&
            typeof typedObj["source"]["reference"] === "string" &&
            (typeof typedObj["source"]["contracts"] === "undefined" ||
                Array.isArray(typedObj["source"]["contracts"]) &&
                typedObj["source"]["contracts"].every((e: any) =>
                    typeof e === "string"
                ))) &&
        typeof typedObj["schemaType"] === "string" &&
        typeof typedObj["id"] === "string" &&
        isSection(typedObj["section"]) as boolean &&
        (typeof typedObj["story"] === "undefined" ||
            isStory(typedObj["story"]) as boolean) &&
        isText(typedObj["title"]) as boolean &&
        (typeof typedObj["presentationProperties"] === "undefined" ||
            (typedObj["presentationProperties"] !== null &&
                typeof typedObj["presentationProperties"] === "object" ||
                typeof typedObj["presentationProperties"] === "function") &&
            Object.entries<any>(typedObj["presentationProperties"])
                .every(([key, value]) => (typeof value === "string" &&
                    typeof key === "string"))) &&
        isCharacteristics(typedObj["characteristics"]) as boolean &&
        (typeof typedObj["promotionContent"] === "undefined" ||
            isPromotionContent(typedObj["promotionContent"]) as boolean) &&
        isAccess(typedObj["access"]) as boolean &&
        typeof typedObj["newsroom"] === "string" &&
        (typeof typedObj["contentSharing"] === "undefined" ||
            isContentSharing(typedObj["contentSharing"]) as boolean) &&
        (typeof typedObj["enrichments"] === "undefined" ||
            isArticleEnrichments(typedObj["enrichments"]) as boolean) &&
        (typeof typedObj["some"] === "undefined" ||
            isSomeTags(typedObj["some"]) as boolean) &&
        (typeof typedObj["meta"] === "undefined" ||
            (typedObj["meta"] !== null &&
                typeof typedObj["meta"] === "object" ||
                typeof typedObj["meta"] === "function") &&
            (typeof typedObj["meta"]["hasVideo"] === "undefined" ||
                typedObj["meta"]["hasVideo"] === false ||
                typedObj["meta"]["hasVideo"] === true) &&
            (typeof typedObj["meta"]["hasLiveblog"] === "undefined" ||
                typedObj["meta"]["hasLiveblog"] === false ||
                typedObj["meta"]["hasLiveblog"] === true) &&
            (typeof typedObj["meta"]["hasLiveSportsblog"] === "undefined" ||
                typedObj["meta"]["hasLiveSportsblog"] === false ||
                typedObj["meta"]["hasLiveSportsblog"] === true))
    )
}

/*
 * Generated type guards for "Jupiter.ts".
 * WARNING: Do not manually change this file.
 */
import { JupiterData, JupiterArticle } from "./Jupiter";

export function isJupiterData(obj: unknown): obj is JupiterData {
    const typedObj = obj as JupiterData
    return (
        (typedObj !== null &&
            typeof typedObj === "object" ||
            typeof typedObj === "function") &&
        (typedObj["metadata"] !== null &&
            typeof typedObj["metadata"] === "object" ||
            typeof typedObj["metadata"] === "function") &&
        typeof typedObj["metadata"]["newsroom"] === "string" &&
        Array.isArray(typedObj["items"]) &&
        typedObj["items"].every((e: any) =>
            isJupiterArticle(e) as boolean
        )
    )
}

export function isJupiterArticle(obj: unknown): obj is JupiterArticle {
    const typedObj = obj as JupiterArticle
    return (
        (typedObj !== null &&
            typeof typedObj === "object" ||
            typeof typedObj === "function") &&
        typeof typedObj["id"] === "string" &&
        typedObj["type"] === "article"
    )
}

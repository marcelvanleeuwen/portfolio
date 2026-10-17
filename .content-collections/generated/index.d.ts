import configuration from "../../content-collections.ts";
import { GetTypeByName } from "@content-collections/core";

export type Post = GetTypeByName<typeof configuration, "posts">;
export declare const allPosts: Array<Post>;

export type Knowledge = GetTypeByName<typeof configuration, "knowledge">;
export declare const allKnowledges: Array<Knowledge>;

export {};

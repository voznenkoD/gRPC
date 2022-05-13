// package: com.xebia.inno.grpc
// file: AuditService.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class ChatMessage extends jspb.Message { 
    getChat(): string;
    setChat(value: string): ChatMessage;
    getSender(): string;
    setSender(value: string): ChatMessage;
    getMessage(): string;
    setMessage(value: string): ChatMessage;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ChatMessage.AsObject;
    static toObject(includeInstance: boolean, msg: ChatMessage): ChatMessage.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ChatMessage, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ChatMessage;
    static deserializeBinaryFromReader(message: ChatMessage, reader: jspb.BinaryReader): ChatMessage;
}

export namespace ChatMessage {
    export type AsObject = {
        chat: string,
        sender: string,
        message: string,
    }
}

export class ChatStory extends jspb.Message { 
    getChat(): string;
    setChat(value: string): ChatStory;
    clearStoryList(): void;
    getStoryList(): Array<string>;
    setStoryList(value: Array<string>): ChatStory;
    addStory(value: string, index?: number): string;
    clearMembersList(): void;
    getMembersList(): Array<string>;
    setMembersList(value: Array<string>): ChatStory;
    addMembers(value: string, index?: number): string;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ChatStory.AsObject;
    static toObject(includeInstance: boolean, msg: ChatStory): ChatStory.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ChatStory, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ChatStory;
    static deserializeBinaryFromReader(message: ChatStory, reader: jspb.BinaryReader): ChatStory;
}

export namespace ChatStory {
    export type AsObject = {
        chat: string,
        storyList: Array<string>,
        membersList: Array<string>,
    }
}
import { JSXElementConstructor } from "react";
import { ReactElement } from "react";
import { Vendor } from "../vendor";
import { AdminUser } from "./AdminUser";
import { supportCaseLogs, supportCaseMessages, supportCaseNotes, supportCases } from "@/db/admin";


export type MessageType = 'message' | 'email' | 'call' | 'live chat';
export type MessageRole = 'user' | 'agent' | 'ai';
export type CaseStatus = 'open' | 'escalated' | 'closed';
export type CaseSeverity = 'low' | 'medium' | 'high' | 'urgent';

export type SupportCaseMessage = typeof supportCaseMessages.$inferSelect & {
    agent?: AdminUser;
}

export type SupportCaseNote = typeof supportCaseNotes.$inferSelect & {
    agent?: AdminUser;
}

export type SupportCaseLog = typeof supportCaseLogs.$inferSelect & {
    agent?: AdminUser;
}

export type SupportCase = typeof supportCases.$inferSelect & {
    agent?: AdminUser | null;
    messages?: SupportCaseMessage[];
    notes?: SupportCaseNote[];
    logs?: SupportCaseLog[];
    messagesCount?: number;
    vendor?: Vendor;
}

export type SupportCaseMetadata = {
    firstName?: string;
    lastName?: string;
    email?: string;
    phone?: string;
    avatar?: string;
}



export type SupportCategory = {
    id: number,
    name: string,
    description: string | null,
    metas?: SupportDocMeta[]
}


export type SupportDoc = {
    toc: DocToC[]
    meta: SupportDocMeta
    content?: ReactElement<any, string | JSXElementConstructor<any>>

}

export type SupportDocMeta = {
    id?: number
    title: string
    file?: string
    description: string | null
    published?: boolean
    duration?: string
    tags: string[] | null
}

export type DocToC = {
    level: number | undefined
    headline: string | undefined
    slug: string | undefined
}

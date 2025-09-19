
export type Contact = {
    firstName: string
    lastName?: string
    phone?: string
    source?: string,
    email: string
    customFields: Record<string, unknown>
}
declare global {
    interface Window {
        dataLayer: Record<string, unknown>[];
        initMap: () => void;
        initService: () => void;
    }
}

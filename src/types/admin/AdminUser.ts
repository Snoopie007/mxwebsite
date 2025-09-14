import { adminIntegrations, adminUsers } from "@/db/admin";

export type AdminUser = typeof adminUsers.$inferSelect;

export type AdminIntegration = typeof adminIntegrations.$inferSelect;
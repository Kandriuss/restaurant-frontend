export const ERole = {
    ADMIN: 'admin',
    USER: 'user',
} as const;

export type ERole = typeof ERole[keyof typeof ERole];

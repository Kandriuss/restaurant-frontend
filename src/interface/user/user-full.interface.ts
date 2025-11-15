export interface IUserFull {
    id: string;
    fullName: string;
    email: string;
    phone: string;
    active: boolean;
    roleCode: string;
    rut: string;
    role: {
        id: string;
        description: string;
        code: string;
        active: boolean;
    }
}
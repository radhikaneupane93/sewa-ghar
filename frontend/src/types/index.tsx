export interface AuthState {
    token: string | null;
    isAuthenticated: boolean;
    role: string|null;
    id: string|null;
    email: string|null;
    name: string|null;
    phonenumber: string|null;
    address: string|null;
}

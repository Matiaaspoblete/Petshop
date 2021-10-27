export interface Usuario {
    name:     string;
    password: string;
    admin:    boolean;
    id:       string;
        }

export interface UsuarioDTO {
    name:     string;
    password?: string;
    admin:    boolean;
    id:       string;
}
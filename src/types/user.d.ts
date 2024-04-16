export interface typeUser {
  name: string;
  email: string;
  password: string;
  permissions?: Array<"admin">;
}

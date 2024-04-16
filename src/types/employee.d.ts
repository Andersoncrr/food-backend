import { Schema } from "mongoose";

export interface typeEmployee {
  name: string;
  email: string;
  position: string;
  phone: string;
  status?: string;
  idUser: Schema.Types.ObjectId;
}

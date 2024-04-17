import { Schema } from "mongoose";

export interface typeEmployee {
  _id?: Schema.Types.ObjectId;
  name: string;
  email: string;
  position: string;
  phone: string;
  status?: string;
  idUser: Schema.Types.ObjectId;
}

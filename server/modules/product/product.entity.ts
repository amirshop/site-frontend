// server/entities/User.ts
import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

export class User {
  id: number | undefined;

  name: string | undefined;

  email: string | undefined;
}

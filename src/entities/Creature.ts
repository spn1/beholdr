import { Entity, PrimaryKey, Property } from "@mikro-orm/core";

@Entity()
export class Creature {
  @PrimaryKey()
  _id!: number;

  @Property({  type: "date" })
  createdAt: Date = new Date();

  @Property({ type: "date", onUpdate: () => new Date() })
  updatedAt: Date = new Date();

  @Property({ type: 'text' })
  name!: string;

}
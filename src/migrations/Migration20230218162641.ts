import { Migration } from '@mikro-orm/migrations';

export class Migration20230218162641 extends Migration {

  async up(): Promise<void> {
    this.addSql('create table "creature" ("_id" serial primary key, "created_at" timestamptz(0) not null, "updated_at" timestamptz(0) not null, "name" text not null);');
  }

  async down(): Promise<void> {
    this.addSql('drop table if exists "creature" cascade;');
  }

}

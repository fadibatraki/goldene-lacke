import { pgTable, serial, text, numeric, jsonb, array } from "drizzle-orm/pg-core";

export const products = pgTable("products", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  category: text("category"),
  img: text("img").notNull(),
  price: numeric("price").notNull(),
  discount: numeric("discount").default(0),
  status: text("status").default("available"),
  tags: array(text("tags")),
  reviews: jsonb("reviews"),
});

-- AlterTable
CREATE SEQUENCE orderitem_order_item_id_seq;
ALTER TABLE "orderItem" ALTER COLUMN "order_item_id" SET DEFAULT nextval('orderitem_order_item_id_seq'),
ADD CONSTRAINT "orderItem_pkey" PRIMARY KEY ("order_item_id");
ALTER SEQUENCE orderitem_order_item_id_seq OWNED BY "orderItem"."order_item_id";

-- DropIndex
DROP INDEX "orderItem_order_item_id_key";

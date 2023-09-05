import { Prisma } from "@prisma/client";

// SearchParams から昇順降順のパラメータを受け取って ASC/DESC を返す
export function getOrderBy(
  params: string | string[] | undefined,
): Prisma.SortOrder {
  let order: Prisma.SortOrder = "desc";

  if (typeof params === "string") {
    if (params === "asc") {
      order = "asc";
    } else if (params === "desc") {
      order = "desc";
    }
  }
  return order;
}

// SearchParams からページ数のパラメータを受け取って数値として返す
export function getPage(params: string | string[] | undefined): number {
  let page = 1;

  if (typeof params === "string") {
    const parsed = parseInt(params, 10);
    if (parsed > 0) {
      page = parsed;
    }
  }
  return page;
}

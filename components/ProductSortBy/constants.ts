export const PRODUCT_SORT_OPTIONS = [
  { value: "NONE", label: "None (Newest First)" },
  { value: "NAME_ASC", label: "Name (A → Z)" },
  { value: "NAME_DESC", label: "Name (Z → A)" },
  { value: "PRICE_ASC", label: "Price (Low → High)" },
  { value: "PRICE_DESC", label: "Price (High → Low)" },
  { value: "SIZE_ASC", label: "Size (Small → Large)" },
  { value: "SIZE_DESC", label: "Size (Large → Small)" },
] as const;

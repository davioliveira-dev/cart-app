export type AdditionalInfo = {
  brandName: string;
  brandId: string;
  offeringInfo?: any;
  offeringType?: any;
  offeringTypeId?: any;
};

export type ProductCategories = {
  29: string;
};

export type PriceTag = {
  name: string;
  value: number;
  rawValue: number;
  isPercentual: boolean;
  identifier: string;
};

export type Product = {
  uniqueId: string;
  id: string;
  productId: string;
  productRefId?: any;
  refId?: any;
  ean: string;
  name: string;
  skuName: string;
  modalType?: any;
  parentItemIndex?: any;
  parentAssemblyBinding?: any;
  assemblies: any[];
  priceValidUntil: Date;
  tax: number;
  price: number;
  listPrice: number;
  manualPrice?: any;
  sellingPrice: number;
  rewardValue: number;
  isGift: boolean;
  additionalInfo: AdditionalInfo;
  preSaleDate?: any;
  productCategoryIds: string;
  productCategories: ProductCategories;
  quantity: number;
  seller: string;
  sellerChain: string[];
  imageUrl: string;
  detailUrl: string;
  components: any[];
  bundleItems: any[];
  attachments: any[];
  attachmentOfferings: any[];
  offerings: any[];
  priceTags: PriceTag[];
  availability: string;
  measurementUnit: string;
  unitMultiplier: number;
  manufacturerCode?: any;
};

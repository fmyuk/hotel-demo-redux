import { actionCreators } from "module/HotelListModule/actions";

export type HotelBasicInfo = {
  access: string
  address1: string
  address2: string
  dpPlanListUrl: string
  faxNo: string
  hotelImageUrl: string
  hotelInformationUrl: string
  hotelKanaName: null
  hotelMapImageUrl: string
  hotelMinCharge: number
  hotelName: string
  hotelNo: number
  hotelSpecial: string
  hotelThumbnailUrl: string
  latitude: number
  longitude: number
  nearestStation: string
  parkingInformation: string
  planListUrl: string
  postalCode: string
  reviewAverage: number | null
  reviewCount: number
  reviewUrl: string
  roomImageUrl: string | null
  roomThumbnailUrl: string | null
  telephoneNo: string
  userReview: string | null
};

export type HotelRatingInfo = {
  bathAverage: number | null
  equipmentAverage: number | null
  locationAverage: number | null
  mealAverage: number | null
  roomAverage: number | null
  serviceAverage: number | null
};

type Unbox<T> = T extends { [K in keyof T]: infer U } ? U : never;
type ReturnTypes<T> = {
  [K in keyof T]: T[K] extends (...args: any[]) => any
  ? ReturnType<T[K]>
  : never;
};
export type HotelsAction = Unbox<ReturnTypes<typeof actionCreators>>
export type Hotel = { hotelBasicInfo: HotelBasicInfo, hotelRatingInfo: HotelRatingInfo };
export type Hotels = [{ hotel: Hotel[] }];
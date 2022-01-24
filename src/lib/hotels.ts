import { BASE_URL, APP_ID } from "api/config";
import { Hotels } from "types/hotels";

interface SearchHotelData {
  hotels: Hotels;
  pagingInfo: {
    first: number;
    last: number;
    page: number;
    pageCount: number;
    recordCount: number;
  };
}

export const searchHotels = async (keyword: string): Promise<Hotels> => {
  const data = fetch(BASE_URL + "&applicationId=" + APP_ID + "&keyword=" + keyword)
    .then(res => res.json())
    .then(data => {
      return data;
    }).catch(error => {
      console.log(error);
    });
  return data;
};
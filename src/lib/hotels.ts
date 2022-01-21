import axios from "axios";
import { APP_ID, BASE_URL } from "";
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
  try {
    const url = BASE_URL + "&applicationId=" + APP_ID + "&keyword=" + keyword;
    const res = await axios.get<SearchHotelData>(url);
    return res.data.hotels;
  } catch (e) {
    console.error(e);
    return [];
  }
};
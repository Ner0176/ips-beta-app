import axios from "axios";
import {
  IAddFavourite,
  IFindFavourite,
} from "../../interfaces/backend.interface";
import IMapZone from "../../interfaces/map.interface";

const baseUrl =
  "https://tfg-ips-app-default-rtdb.europe-west1.firebasedatabase.app";

function formatEmail(email: string) {
  return email.replace(".", "");
}

export async function getFavList(email: string): Promise<IMapZone[] | null> {
  try {
    const response = await axios.get(
      `${baseUrl}/${formatEmail(email)}.json?print=pretty`
    );
    if(!!!response.data) return null;
    return Object.values(response.data);
  } catch (e) {
    throw e;
  }
}

export async function findIsFav(data: IFindFavourite): Promise<boolean> {
  try {
    const favList = await getFavList(data.email);
    if(!!!favList) return false;
    const exists = favList.find((item) => item.name === data.zoneName);
    return !!exists;
  } catch(e) {
    throw e;
  }
}

export async function addFavZone(data: IAddFavourite) {
  try {
    const response = await axios.post(
      `${baseUrl}/${formatEmail(data.email)}.json`,
      data.zone
    );
    return response.data;
  } catch (e) {
    return e;
  }
}

export async function deleteFavZone(data: IFindFavourite) {
  try {
    const formattedEmail = formatEmail(data.email);
    
    const favList = await getFavList(data.email); 

    if (Object.keys(favList).length === 1) {
      await axios.delete(`${baseUrl}/${formattedEmail}.json`);
    } else {
      const idx = Object.keys(favList).findIndex(
        (key) => favList[key].name === data.zoneName
      );
      if (idx !== 0 && !!!idx) return;
      const toDelete = Object.keys(favList)[idx];
      await axios.delete(`${baseUrl}/${formattedEmail}/${toDelete}.json`);
    }
    return favList;
  } catch (e) {
    return e;
  }
}

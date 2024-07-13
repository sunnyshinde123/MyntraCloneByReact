import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { itemSliceAction } from "../store/itemSlice";
import { fetchSliceAction } from "../store/fetchSliceStatus";

export default function FetchDataFromServer() {
  let dispatch = useDispatch();
  let fetchStatus = useSelector((store) => store.fetchServerData);
  console.log(fetchStatus);

  useEffect(() => {
    if (fetchStatus.fetchDone) return;
    dispatch(fetchSliceAction.markFetchingStart());
    fetch("http://localhost:2080/items")
      .then((res) => res.json())
      .then((data) => {
        dispatch(fetchSliceAction.isfetchDone())
        dispatch(fetchSliceAction.markFetchingEnd())
        dispatch(itemSliceAction.addItems(data.items))
      })
    
  }, [fetchStatus]);

  return (
    <>
    </>
  )
}

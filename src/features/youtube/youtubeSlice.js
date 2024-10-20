 import { createSlice} from "@reduxjs/toolkit";
// import { getHomePageVideos } from "../../store/reducers/getHomePageVideos";

 const initialState = {
    videos:[],
    currentPlaying:null,
    searchTerm: "",
    searchResults: [],
    nextPageToken : null,
    recommendedVideo :[]
 };

 const youtubeSlice = createSlice({
    name: "youtubeApp",
    initialState,
    reducers:{

    },
   //  extraReducers:(builder)=>{
   //    builder.addCase(getHomePageVideos.fulfilled,(state,action))
   //  }
 })


 export default youtubeSlice.reducer;
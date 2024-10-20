import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import {parseData} from '../../utils/parseData'

const API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY;

export const getHomePageVideos = createAsyncThunk(
    "youtube/App/homePageVideos",
    async(isNext,{getState}) => {
        const {
            youtubeApp : {nextPageToken : nextPageTokenFromState,videos},
        } = getState();
        
        const response = await axios.get(`https://youtube.googleapis.com/youtube/v3/search?maxResult=20&q="react"&key=${API_KEY}&part=snippet&type=video`);
        console.log(response.data.items);


        const items = response.data.items;
        console.log(items);


        const parseData = await parseData(items);
        }
)



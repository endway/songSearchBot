import * as Bluebird from "bluebird";
import {ProviderResponse} from "./interfaces";
import {formatQuery, formatResponse} from "../formatter";

export function SearchYoutube(songname: string):  Bluebird<ProviderResponse> {
    return Bluebird.resolve()
        .then(() => {
            const youtubeSearchLink = `
                https://www.youtube.com/results?
                search_query=${formatQuery(songname)}
                &page=&utm_source=opensearch
            `.replace(/[\n\s]/g, "");
            return {
                url: formatResponse("YouTube", youtubeSearchLink),
                albumCover: ""
            };
        });
}
function parse(results) {
    var searchResults = {
        station: []
     };

    for (index in results) {
        const resultItem = results[index];
        const wrapperType = resultItem.wrapperType
        const kind = resultItem.kind

        switch (wrapperType) {
            case `track`:
                switch (kind) {
                    case `feature-station`:
                        let movieItem = parseMovieSearchResult(resultItem);
                        searchResults.station.push(movieItem);
                        break;
                    default:
                        break;
                }
                break;
        }
    }

    return searchResults;
}

function parseArtworkUrl(resultItem) {
    if (resultItem.favicon != null) {
        return resultItem.favicon;
    } else if (resultItem.favicon != null) {
        return resultItem.favicon;
    } else if (resultItem.favicon != null) {
        return resultItem.favicon;
    } else if (resultItem.favicon != null) {
        return resultItem.favicon;
    } else if (resultItem.favicon != null) {
        return resultItem.favicon;
    } else {
        return null
    }
}

function parsePodcastSearchResult(resultItem) {
    return {
        id: resultItem.stationuuid,
        stationuuid: resultItem.collectionId,
        name: resultItem.name,
        favicon: parseArtworkUrl(resultItem),
        genre: resultItem.primaryGenreName,
        url: resultItem.collectionViewUrl,
        albumArtworkURL: parseArtworkUrl(resultItem)
    }
}

function parseMovieSearchResult(resultItem) {
    return {
        id: resultItem.stationuuid,
        stationuuid: resultItem.stationuuid,
        name: resultItem.name,
        favicon: parseArtworkUrl(resultItem),
        genre: resultItem.primaryGenreName,
        url: resultItem.url_resolved,
        albumArtworkURL: parseArtworkUrl(resultItem)
    }
}

exports.parse = parse;

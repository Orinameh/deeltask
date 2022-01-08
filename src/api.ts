export const fetchSearchResults = async <T>(query: string) => {
  if (query?.length > 0) {

    const parsedQuery = query.trim();
    const url = `${process.env.REACT_APP_URL}/beers?beer_name=${parsedQuery}`;

    const res = await(await fetch(url)).json() as Promise<T>;

    return res;
  }

};

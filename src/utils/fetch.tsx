const fetchData = (url: string) => fetch(url).then((res: Response) => res.json());

export default fetchData;
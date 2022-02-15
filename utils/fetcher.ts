export const fetcher = (url: RequestInfo, id: string) =>
  fetch(encodeURI(`${url}?id=${id}`)).then((r) => r.json());

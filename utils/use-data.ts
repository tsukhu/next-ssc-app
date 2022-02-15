const cache: any = {};

export default function useData(
  key: string | number,
  fetcher: () => Promise<any>
) {
  if (!cache[key]) {
    let data: undefined;
    let promise: any;
    cache[key] = () => {
      if (data !== undefined) return data;
      if (!promise) promise = fetcher().then((r: any) => (data = r));
      throw promise;
    };
  }
  return cache[key]();
}

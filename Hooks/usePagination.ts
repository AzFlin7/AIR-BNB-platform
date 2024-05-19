import useSWRInfinite from "swr/infinite";
export const usePagination = <T>(url: string) => {
  const fetcher = (url: string) => fetch(url).then((r) => r.json());

  const getKey = (pageIndex: number, previousPageData: any) => {
    // if (previousPageData && !previousPageData.length) return null; // reached the end
    // console.log(pageIndex + 1);
    return `${url}?page=${pageIndex + 1}&limit=10`; // SWR key
  };

  const {
    data: paginatedData,
    size,
    isLoading,
    setSize,
    error,
  } = useSWRInfinite(getKey, fetcher);

  const lastPage: number = paginatedData && paginatedData[0]?.last_page;
  const isReachedEnd = size >= lastPage;
  const loadingMore =
    paginatedData && typeof paginatedData[size - 1] === "undefined";

  let data: T[] = [];

  if (paginatedData) {
    // gather data
    for (let index = 0; index < paginatedData.length; index++) {
      data = [...data, ...paginatedData[index]?.data];
    }
  }

  return {
    data,
    lastPage,
    isReachedEnd,
    loadingMore,
    isLoading,
    paginatedData,
    setSize,
    size,
    error,
  };
};

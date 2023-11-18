export async function appFetch<T>(
  input: RequestInfo | URL,
  init?: RequestInit
) {
  return new Promise((resolve: (data: T) => void, reject) => {
    fetch(input, init)
      .then((res) => {
        if (!res.ok) {
          throw new Error(res.statusText);
        }
        return res.json() as T;
      })
      .then(resolve)
      .catch(reject);
  });
}

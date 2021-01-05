export function promisify<T, K>(client: any, method: string) {
  return (param?: T): Promise<K> => {
    return new Promise((resolve, reject) => {
      client[method](param, (err: Error, response: K) => {
        if (err) return reject(err);
        resolve(response);
      });
    });
  };
}

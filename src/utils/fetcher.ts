export async function fetcher<T>(
  url: string,
  options: RequestInit = {}
): Promise<T> {
  const dev = process.env.NODE_ENV !== "production";
  const server = dev ? "http://localhost:3000" : window.location.href;

  const response = await fetch(`${server}${url}`, options);
  if (!response.ok) {
    throw new Error(`${response.status} ${response.statusText}`);
  }

  const data = await response.json();

  return data as T;
}

export async function fetcher<T>(
  url: string,
  options: RequestInit = {}
): Promise<T> {
  const dev = process.env.NODE_ENV !== "production";
  const serverUrl = new URL(window.location.href);
  const server = dev ? "http://localhost:3000" : "https://" + serverUrl.host;

  const response = await fetch(`${server}${url}`, options);
  if (!response.ok) {
    throw new Error(`${response.status} ${response.statusText}`);
  }

  const data = await response.json();

  return data as T;
}

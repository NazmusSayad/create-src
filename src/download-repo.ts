import JSZip from 'jszip'

export async function downloadRepo(
  owner: string,
  repo: string,
  onLoading: (total: number, loaded: number) => void
): Promise<JSZip> {
  const zipUrl = `https://github.com/${owner}/${repo}/archive/refs/heads/main.zip`

  const res = await fetch(zipUrl)

  if (!res.ok) {
    throw new Error(`Failed to download repository: ${res.status} ${res.statusText}`)
  }

  const contentLength = res.headers.get('content-length')
  console.log(res.headers.keys(), zipUrl)

  const total = contentLength ? parseInt(contentLength, 10) : 0

  if (!res.body) {
    throw new Error('Response body is null')
  }

  const reader = res.body.getReader()
  const chunks: Uint8Array[] = []
  let loaded = 0

  while (true) {
    const { done, value } = await reader.read()

    if (done) break

    chunks.push(value)
    loaded += value.length
    onLoading(total, loaded)
  }

  const uint8Array = new Uint8Array(loaded)
  let offset = 0
  for (const chunk of chunks) {
    uint8Array.set(chunk, offset)
    offset += chunk.length
  }

  const zip = await JSZip.loadAsync(uint8Array.buffer)

  return zip
}

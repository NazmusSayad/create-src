import JSZip from 'jszip'

export async function downloadRepo(
  owner: string,
  repo: string,
  branch: string,
  onLoading: (loaded: number, total: number | null) => void,
  onComplete?: () => void
) {
  const res = await fetch(
    `https://github.com/${owner}/${repo}/archive/refs/heads/${branch}.zip`
  )

  if (!res.ok) {
    throw new Error(
      `Failed to download repository: ${res.status} ${res.statusText}`
    )
  }

  const contentLength = res.headers.get('content-length')
  const totalSize = contentLength ? parseInt(contentLength, 10) : null

  if (!res.body) {
    throw new Error('Response body is null')
  }

  const reader = res.body.getReader()
  const chunks: Uint8Array[] = []
  let loadedSize = 0

  while (true) {
    const { done, value } = await reader.read()

    if (done) break

    chunks.push(value)
    loadedSize += value.length
    onLoading(loadedSize, totalSize)
  }

  onComplete?.()

  const uint8Array = new Uint8Array(loadedSize)
  let offset = 0
  for (const chunk of chunks) {
    uint8Array.set(chunk, offset)
    offset += chunk.length
  }

  const zip = await JSZip.loadAsync(uint8Array.buffer)
  return { zip, name: `${repo}-${branch}` }
}

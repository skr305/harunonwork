import type { IncomingMessage, ServerResponse } from 'http'

export const headers = {
  Accept: 'application/vnd.github.v3+json',
}

interface GitHubResponse {
  content: string
}

export default async (req: IncomingMessage, res: ServerResponse) => {
  const result = await $fetch<{ data: GitHubResponse }>(
    'https://api.github.com/repos/harunonsystem/harunonsystem/contents/README.md',
    { headers }
  )
  if (!result || !result.data) throw new Error('Failed to fetch content.')

  return Buffer.from(result.data.content, 'base64').toString()
}

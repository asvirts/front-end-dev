export type Gif = {
  data: [
      {
          type: string,
          id: string,
          url: string,
          slug: string,
          embed_url: string,
          title: string,
          images: {
              original: {
                  height: number,
                  width: number,
                  size: number,
                  url: string,
                  mp4: string,
                  webp: string,
                  hash: string
              }
          },
      }
  ],
  pagination: {
      total_count: number,
      count: number,
      offset: number
  },
  meta: {
      status: number,
      msg: string,
      response_id: string
  }
}
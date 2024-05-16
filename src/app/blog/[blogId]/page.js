import Link from 'next/link'
import { client } from '@/libs/client'
import { redirect } from 'next/navigation';

async function getBlog(blogId) {
  try {
    const response = await client.get({
      endpoint: 'blog',
      contentId: blogId,
    })

    return {
      data: response ?? null,
      error: null
    }
  } catch (error) {
    console.error('エラーが発生しました', error)
    redirect('/404')
  }
}

export default async function BlogDetail({ params }) {
  const { data, error } = await getBlog(params.blogId)

  if(error){
    return <div>記事の読み込みができませんでした。</div>
  }

  return (
    <main>
      <h1>トミケルブログ</h1>
      <h2>{data.title}</h2>
      <div dangerouslySetInnerHTML={{ __html: data.body }} />
      <Link href='/blog'>記事一覧へ</Link>
    </main>
  )
}

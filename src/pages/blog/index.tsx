import { MainLayout } from '../../layouts/MainLayout'
import { GenericMeta } from '../../components/GenericMeta'
import { getSortedPosts } from '../../lib/posts'
import { BlogCard } from '../../components/BlogCard'
import { v4 as uuidv4 } from 'uuid'

const Blog = ({ allPostsData }) => {
  return (
    <MainLayout
      title="Blog"
      description="A collection of blog posts I've written. Sorted chronologically."
    >
      <div className="mt-8 grid gap-8">
        {allPostsData.map(({ slug, date, title, excerpt }) => {
          return <BlogCard key={uuidv4()} slug={slug} date={date} title={title} excerpt={excerpt} />
        })}
      </div>
    </MainLayout>
  )
}

export async function getStaticProps() {
  const allPostsData = getSortedPosts()
  return {
    props: {
      allPostsData,
    },
  }
}

export default Blog

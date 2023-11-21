import BlogItems from "../components/BlogItems"
import Header from "../components/Header"
import { blogs } from "../faker/Blog"

const Blog = () => {
  return (
    <>
      <Header />
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h1>Blog</h1>
          </div>
        </div>
        <div className="row">
          {blogs.map((item,index) => {
            return <BlogItems item={item} key={index} />
          })}
        </div>
      </div>
    </>
  )
}

export default Blog
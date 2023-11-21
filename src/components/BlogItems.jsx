import { Link } from "react-router-dom"
import { getSlug } from "../helper/helper"

const BlogItems = ({item}) => {
  return (
    <>
        <article className="shadow p-3">
            <div className="col-md-3">
            <img className="w-100" src={item.photo} alt="" />
            </div>
            <div className="col-md-9">
            <div className="blog-content">
                <h2>{item.title} </h2>
                <p>{item.content}</p>
                <Link to={`/blog/${getSlug(item.title)}`} className="btn btn-info" href="/">Read More</Link>
            </div>
            </div>
        </article>
    </>
  )
}

export default BlogItems
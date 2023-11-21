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
            return <article key={index}  className="shadow p-3">
              <div className="col-md-3">
                <img className="w-100" src={item.photo} alt="" />
              </div>
              <div className="col-md-9">
                <div className="blog-content">
                  <h2>{item.title} </h2>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit enim voluptatum atque minus a nostrum quo dicta vel quod modi?</p>
                  <a className="btn btn-info" href="/">Read More</a>
                </div>
              </div>
            </article>
          })}
        </div>
      </div>
    </>
  )
}

export default Blog
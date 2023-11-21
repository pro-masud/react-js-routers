import { useParams } from "react-router-dom"
import Header from "../components/Header"

const Blog = () => {
  const {slug} = useParams();
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
          <article className="shadow p-3">
            <div className="col-md-3">
              <img className="w-100" src="https://tds-images.thedailystar.net/sites/default/files/styles/big_202/public/images/2023/11/21/2023-11-19t115038z_1841090049_up1ejbj0wwcgb_rtrmadp_3_cricket-worldcup-ind-aus.jpg" alt="" />
            </div>
            <div className="col-md-9">
              <div className="blog-content">
                <h2>Suryakumar to lead India in Australia T20Is </h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit enim voluptatum atque minus a nostrum quo dicta vel quod modi?</p>
                <a className="btn btn-info" href="/">Read More</a>
              </div>
            </div>
          </article>
          <article className="shadow p-3">
            <div className="col-md-3">
              <img className="w-100" src="https://tds-images.thedailystar.net/sites/default/files/styles/big_202/public/images/2023/11/21/2023-11-19t115038z_1841090049_up1ejbj0wwcgb_rtrmadp_3_cricket-worldcup-ind-aus.jpg" alt="" />
            </div>
            <div className="col-md-9">
              <div className="blog-content">
                <h2>Suryakumar to lead India in Australia T20Is </h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit enim voluptatum atque minus a nostrum quo dicta vel quod modi?</p>
                <a className="btn btn-info" href="/">Read More</a>
              </div>
            </div>
          </article>
          <article className="shadow p-3">
            <div className="col-md-3">
              <img className="w-100" src="https://tds-images.thedailystar.net/sites/default/files/styles/big_202/public/images/2023/11/21/2023-11-19t115038z_1841090049_up1ejbj0wwcgb_rtrmadp_3_cricket-worldcup-ind-aus.jpg" alt="" />
            </div>
            <div className="col-md-9">
              <div className="blog-content">
                <h2>Suryakumar to lead India in Australia T20Is </h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit enim voluptatum atque minus a nostrum quo dicta vel quod modi?</p>
                <a className="btn btn-info" href="/">Read More</a>
              </div>
            </div>
          </article>
          <article className="shadow p-3">
            <div className="col-md-3">
              <img className="w-100" src="https://tds-images.thedailystar.net/sites/default/files/styles/big_202/public/images/2023/11/21/2023-11-19t115038z_1841090049_up1ejbj0wwcgb_rtrmadp_3_cricket-worldcup-ind-aus.jpg" alt="" />
            </div>
            <div className="col-md-9">
              <div className="blog-content">
                <h2>Suryakumar to lead India in Australia T20Is </h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit enim voluptatum atque minus a nostrum quo dicta vel quod modi?</p>
                <a className="btn btn-info" href="/">Read More</a>
              </div>
            </div>
          </article>
        </div>
      </div>
    </>
  )
}

export default Blog
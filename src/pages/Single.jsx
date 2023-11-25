import Header from "../components/Header";

const Single = () => {
  return (
    <>
        <Header />
        <div className="single">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <img className='w-100' src="https://tds-images.thedailystar.net/sites/default/files/styles/big_202/public/images/2023/11/21/2023-11-19t115038z_1841090049_up1ejbj0wwcgb_rtrmadp_3_cricket-worldcup-ind-aus.jpg" alt="" />
                        <h1>This is title</h1>
                        <p className='lead'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus odit consequuntur modi odio at rerum, quam quod praesentium voluptatibus corporis?</p>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Single;
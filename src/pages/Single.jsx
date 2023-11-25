import { useParams } from 'react-router-dom';
import { blogs } from '../faker/Blog';

const Single = () => {
    const {slug} = useParams();
    const singleItem = blogs.find(item => item.slug === slug);
  return (
    <>
        <div className="single">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <img className='w-100' src={singleItem.photo} alt="" />
                        <h1>{singleItem.title}</h1>
                        <p className='lead'>{singleItem.content}</p>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Single;
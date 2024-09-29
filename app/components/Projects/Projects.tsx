import Project from './Project';

export default function Projects() {
  return (
    <div className='pt-5'>

      <div>

          <h2 className='text-center text-2xl'> Some of my Projects </h2>

      </div>

      <div className='lg:w-[50%] m-auto grid grid-cols-1 md:grid-cols-2 justify-center gap-10 py-5 px-10'>
          <Project
              name='Paraguay Supermarket Products Dataset'
              desc='This dataset includes the name, price (in Guaranies), product url, and image url of supermarket products. The dataset counts with over 40,000 products from 2 different supermarkets in Paraguay. The data was obtained by a scraper I built using Go.'
              project_url='https://www.kaggle.com/datasets/nikihellmers/paraguay-supermarket-products'
              img_url='/dataset-cover.jpeg'
          />
          <Project
              name='Paraguay Supermarket Products WebApp'
              desc='This uses the information gained from "Paraguayan Supermarket Products Dataset" in order to make an interative querying of the data into webapp form.'
              project_url='https://productos-paraguay.vercel.app/'
              img_url='/sm-webapp.png'
          />
          <Project
              name='Connect with your peers'
              desc='This Chrome extension project aims to streamline the networking with your peers on Canvas.'
              project_url='https://chromewebstore.google.com/detail/connect-with-your-peers/cefoneomgidhcbjohhnbfffdeikjopbj'
              img_url='/unnamed.png'
          />
      </div>
      
    </div>
  )
}

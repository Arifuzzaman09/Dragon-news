

const getCategory = async () => {
  const res = await fetch('https://openapi.programming-hero.com/api/news/categories')
  const data = await res.json();

  return data.data

}


export default async function Home() {

  const categorys = await getCategory();
  console.log(categorys.news_category);

  return (
    <div className="container mx-auto grid grid-cols-12 gap-5 my-7">
      <div className="  col-span-3">
        <h2 className="text-lg  font-bold">All Catagory</h2>
        <ul className="space-y-2 mt-6 ">
          {
            categorys.news_category.map(category => {
              return <li className="text-xl rounded-md p-2 font-bold bg-slate-100 text-center" key={category.category_id}>{category.category_name}</li>
            })
          }
        </ul>
      </div>
      <div className="bg-purple-300 text-2xl text-center font-bold col-span-6">
        All News
      </div>
      <div className="bg-red-300 text-2xl text-center font-bold col-span-3">
        Social Ads
      </div>
    </div>
  );
}


function MenuCard({ menuData }) {
    console.log(menuData);
    return (

        <div>
            <section className="main-card-container">
            {menuData.map((curelem)=>{
                const {id,image,name,category,price,description} = curelem;
                
                return (
                <>
                    <div className="card-container" key={id}>
                        <div className="card">
                            <div className="card-body">
                                <span className="card-number card-circle subtle">
                                  {id}
                                </span>
                                <span className="card-author subtle">
                                {name}
                                </span>
                                <h2 className="card-title"> {name}</h2>
                                <span className="card-description subtle">{description}
                                </span>
                                <div className="card-read">Read</div>
                                <div>
                                    <img src={image} alt="images" className="card-media" />
                                    <span className="card-tag">Order Now</span>
                                </div>
                            </div>
                        </div>
                    </div>


                </>
  );
  })}
                
            </section>

        </div>
    );
};
export default MenuCard;
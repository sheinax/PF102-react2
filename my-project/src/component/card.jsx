
function Card(props) {
    return(

        <div className="grid lg:grid-cols-4 m-5 sm:grid-cols-1">
            {



                props.dataz.map( (items, index) => {
                    return(
                        <div className="flex items-center m-[10px]">
                            <img className="rounded-full w-[90px] h-[90px] p-2" src={items.img} alt="" />
                            <div>
                            <h1 className="font-bold">{items.author}</h1>
                            <p className="">{items.firstName}</p>
                            </div>
                            
                        </div>
                    )
                })


            }
        </div>

    )
}

export default Card


function Card2 (props) {
    return(
        <div className=" grid lg:grid-cols-4 m-5 sm:grid-cols-1 sm:text-red-400">
            {



                props.dataz.map( (items, index) => {
                    return(
                        <div className="grid grid-cols-1 m-[1px]">
                            <img className=" w-[300px] h-[200px] p-1" src={items.img} alt="" />
                        </div>
                    )
                })


            }
        </div>
    )
}

export default Card2
const CustomersData = (props) => {
  return (
    <div className="cursor-grab ml-[20px] border-b w-fit pb-5 border-b-black/50 hover:border-b-black transition-all duration-[0.3s] opacity-[0.5] hover:opacity-[1]">
      <img src={props.img} alt={props.alt}  />
    </div>
  )
}

export default CustomersData
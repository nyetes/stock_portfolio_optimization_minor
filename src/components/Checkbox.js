
const Checkbox = ({image,label,name,field,form:{touched,error},...props})=>{
    return(
        <div class="container-items">
            <input type="checkbox" class="box" id="" {...field} {...props}/>
            <span><img src={image}></img></span>
            <span class="text">{label}</span>
        </div>
    );
}


export default Checkbox;
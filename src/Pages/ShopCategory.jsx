import React, { useContext, useMemo, useState } from 'react';
import './CSS/ShopCategory.css';
import { ShopContext } from '../Context/ShopContext';
import dropdown_icon from '../Components/Assets/dropdown_icon.png'
import Item from '../Components/Item/Item';
function ShopCategory(props) {
    const { all_product,dark } = useContext(ShopContext);
    
  
const [category,setCategory]=useState('cost')

    // تصفية المنتجات حسب الفئة المختارة
 const displayedProducts=useMemo(()=>{
            let prod=[...all_product]
     if(category==="cost"){
     prod.sort((a,b)=>Number(b.new_price)-Number(a.new_price));

    }else
        if(category==="jacket"){
            prod=all_product.filter(item=> item.name.toLowerCase().includes("jacket"))
        }
    else if(category==="Blouse"){
                 prod=all_product.filter(item=> item.name.toLowerCase().includes("blouse"))
   
    }
        return prod;

 }, [all_product, category])
    return (
    <div className='shop-category'>
        <img className='shopcategory-banner' src={props.banner} alt="" />
        <div className='shopcategory-indexSort'>
            <p>
                <span style={{margin:'20px', color:dark?'white':'black'}}> Showing 1-12</span>
                out of 36 products
            </p>
            <div className='shopcategory-sort' style={{margin:'20px',color:dark?'white':'black'}}>
                Sort by &nbsp;
                <select value={category} onChange={(e)=>setCategory(e.target.value)} name="" id="">
                    <option value="cost">cost</option>
                    <option value="jacket">jacket</option>
                    <option value="blouse">Blouse</option>
                </select>
            </div>
        </div>
        <div className="shopcategory-products">
            {displayedProducts.map((item,i)=>{
                
                if(props.category===item.category)
                    return<Item
                key={i} 
                id={item.id} 
                name={item.name} 
                image={item.image} 
                new_price={item.new_price} 
           
                old_price={item.old_price} 
                    />
                    else{
                        return null;
                    }
            })}
        </div>
        <div className="shopcategory-loadmore"style={{margin:'20px'}}>
            Explore More
        </div>
    </div>
    )
}

export default ShopCategory;

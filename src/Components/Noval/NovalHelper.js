
import noval from 'noval'
const createDispatch = (data, tools, actions) =>{
  const {type, payload} = data
  const {state, update} = tools

  const addToCart = () => {
    const {item} = payload;
    update({items:[...state.items,item]})
    localStorage.setItem('items',JSON.stringify(state.items,item))
  }

  const CalcTotal = () => {
    let total = 0;
      state.items.forEach((item) => {
        total += item.price;
        console.log(total)
      });
      update({total})

  }
  
  const ClearData = () =>{
      // let removed = false;
      const {itemId} = payload;
      const items = state.items.filter((item) =>  item.id !== itemId
        // if (!removed && item.id === itemId) {
        //   removed = true;
        //   return false;
        // }
        // return true;
      );
       
      update({ items });
      localStorage.setItem("items", JSON.stringify(items));
    };
    switch (type) {
      case  actions.addToCart: 
      
      return addToCart();

      case  actions.CalcTotal: 
      
      return CalcTotal();

      case  actions.ClearData: 
        
        return ClearData();
    
      default:
        break;
    }

}
export default createDispatch;


    

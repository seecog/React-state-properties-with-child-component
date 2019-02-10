import React,{Component} from 'react';
import Product from './product/Product';

class Products extends Component{

constructor(){
    super();

    this.state = {
        products : [
            {name :'Apple',cost : 200,brand : 'KAsmiri Fruits'},
            {name :'Banana',cost : 100,brand : 'KAsmiri Fruits'},
            {name :'PineApple',cost : 400,brand : 'KAsmiri Fruits'}
        ]
    }

}

render(){
    return (
<div>
<Product name={this.state.products[0].name} cost={this.state.products[0].cost} />
<Product name={this.state.products[1].name} cost={this.state.products[1].cost} />
<Product name={this.state.products[2].name} cost={this.state.products[2].cost} />
</div>
    )
}


}

export default Products;
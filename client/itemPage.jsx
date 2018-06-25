import React from 'react'
import axios from "axios/index"
import qs from 'qs'
import Product from './product'
import Pagination from './pagination'
import SearchComponent from './searchComponent'

export default class ItemPage extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            products: [],
            type: undefined,
            pages: 0,
            sort: 'none'
        };
        this.getProducts = this.getProducts.bind(this);
        this.setUrlParam = this.setUrlParam.bind(this);
    }

    async componentDidMount(){
        await this.getProducts();
    }

    async componentDidUpdate(){
        if(this.props.match.params.type !== this.state.type){
            await this.getProducts();
        }
    }

    async getProducts(){
        const type = this.props.match.params.type;
        let response;
        if(type !== undefined){
            response = await axios.get(`/api/products/${type}${location.search}`);
        }else{
            response = await axios.get(`/api/products${location.search}`);
        }

        console.log(response.data);
        this.setState({products: response.data.items, type: type, pages: response.data.pages, sort: response.data.sort});
    }

    async setUrlParam(name, value){
        console.log(name, value);
        const params = qs.parse(location.search.slice(1));
        console.log(params);
        params[name] = value;
        window.history.pushState(null, null, `${location.pathname}?${qs.stringify(params)}`);
        await this.getProducts();
    }

    render(){
        return(
            <div>
                <SearchComponent onUpdate={this.setUrlParam}/>
                <div className='productsDiv'>
                    {this.state.products.map(product => <Product key={product.id} product={product}/>)}
                </div>
                <Pagination pages={this.state.pages} onUpdate={this.setUrlParam}/>
            </div>
        );
    }
}
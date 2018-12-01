import React from 'react';
import { Link } from "react-router-dom";


class Category extends React.Component {
    constructor(props){
        super(props);
        this.props = props;

        let aux = [];
        for(let i = 0; i < 5; i++) {
            aux.push({
                productId: i,
                url: `/categoria/categoria1/producto/producto_${i}`,
                name: `Producto_${i}`,
                description: 'Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore. Proin aliquam facilisis ante interdum. Sed nulla amet lorem feugiat tempus aliquam.',
                images: [
                    {
                        id: 1,
                        url: 'https://elcarnet.com.uy/system/application/views/fs/472/98d/47298dc4976fbf6757ddc24f0d9c731f.jpg'
                    },{
                        id: 1,
                        url: 'https://elcarnet.com.uy/system/application/views/fs/472/98d/47298dc4976fbf6757ddc24f0d9c731f.jpg'
                    }
                ]
            })
        }
        this.products = aux;
    }
    render() {
        return <div className="posts">
            {this.products.map(product => {
                const name = product.name;
                return <article>
                    <Link to={product.url} alt={name} title={name}>
                        <img src="https://elcarnet.com.uy/system/application/views/fs/472/98d/47298dc4976fbf6757ddc24f0d9c731f.jpg" alt={name} title={name} />
                    </Link>
                    <h3>{name}</h3>
                    <p>
                    {product.description}
                    </p>
                    <ul className="actions">
                        <li>
                            <Link to={product.url} alt={product.name} title={product.name} className="button">Ver más</Link>
                        </li>
                    </ul>
                </article>
            })}
        </div>;
    }
}

export default Category;
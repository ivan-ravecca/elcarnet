import React from 'react';
import Sharing from '../../components/sharing/sharing';
class Product extends React.Component {
    constructor(props){
        super(props);
        this.props = props;

        this.product = {
            productId: 1,
            url: `/categoria/categoria1/producto/producto_1`,
            name: `Producto_1`,
            description: 'Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore. Proin aliquam facilisis ante interdum. Sed nulla amet lorem feugiat tempus aliquam.',
            images: []
        }
        let aux = [];
        for(let i = 0; i<5; i++) {
            aux.push({
                imageId: i,
                small: 'https://elcarnet.com.uy/system/application/views/fs/e2e/738/e2e738603b70c31b42ddd0d26a60b1b3.jpg',
                medium: 'https://elcarnet.com.uy/system/application/views/fs/472/98d/47298dc4976fbf6757ddc24f0d9c731f.jpg',
                big: 'https://elcarnet.com.uy/system/application/views/fs/677/6a1/6776a1c68891fce2e8f220f414ab19c3.jpg'
            });
        }
        this.product.images = aux;
    }
    render() {
        const product = this.product;
        return <section>
            <h2 title={product.name}>{product.name} - {this.props.match.params.productId}</h2>
            <Sharing ></Sharing>
            <div className="col-6 col-12-medium">
                <p>{product.description}</p>
            </div>
            
            <div className="box alt">
                <div className="row gtr-50 gtr-uniform">
                    {product.images.map(image => {
                        return <div className="col-4" key={image.imageId}>
                            <span className="image fit">
                                <img src={image.medium} alt={product.name} title={product.name} />
                            </span>
                        </div>
                    })}
                </div>
            </div>
            
            <header className="major">
                <h3>Otros productos relacionados</h3>
            </header>
            <div className="posts">
                {product.images.map(image => {
                    return <article>
                        <a href="#" className="image" alt={product.name} title={product.name}><img src={image.medium} alt={product.name} title={product.name} /></a>
                        <h4>{product.name}</h4>
                    </article>
                })}
            </div>
        </section>;
    }
}

export default Product;
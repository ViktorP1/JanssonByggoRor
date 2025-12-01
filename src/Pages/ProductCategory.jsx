import React, { useContext, useState } from 'react';
import './CSS/ProductCategory.css';
import { RefContext } from '../Context/RefContext';
import Item from '../Components/Item/Item';

const ProductCategory = (props) => {
    const { all_product } = useContext(RefContext);
    const [visibleItems, setVisibleItems] = useState(8); // Start by showing 4 items

    // Function to handle "Load More" button click
    const loadMoreItems = (event) => {
        event.preventDefault(); // Prevent default scroll behavior
        
        // Get current scroll position
        const currentScrollY = window.scrollY; 

        // Increase the number of visible items
        setVisibleItems((prev) => prev + 4); 

        // Use requestAnimationFrame to restore scroll position smoothly
        requestAnimationFrame(() => {
            window.scrollTo(0, currentScrollY); // Restore scroll position
        });
    };

    return (
        <div className='product-category'>
            <div className="productcategory-products">
                {all_product.map((item, i) => {
                    // Only display items that match the category and are within the visible items range
                    if (props.category === item.category && i < visibleItems) {
                        return <Item key={item.id} id={item.id} name={item.name} image={item.image} />;
                    } else {
                        return null;
                    }
                })}
            </div>
            {/* Show the Load More button only if there are more items to display */}
            {visibleItems < all_product.filter(item => item.category === props.category).length && (
                <button className="productcategory-loadmore" onClick={loadMoreItems}>
                    Visa Mer
                </button>
            )}
        </div>
    );
}

export default ProductCategory;

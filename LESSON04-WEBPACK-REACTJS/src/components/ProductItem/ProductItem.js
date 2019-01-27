import React, { Component } from 'react';
import { Link } from "react-router-dom";

class ProductItem extends Component {

    onDelete = (id) => {
        if (confirm('Bạn chắc chắn muốn xoá ?')) { //eslint-disable-line
            this.props.onDelete(id);
        }
    }

    render() {
        var { product, index } = this.props;
        var statusName = product.status ? 'Còn Hàng' : 'Hết Hàng';
        var statusClass = product.status ? 'warning' : 'default';
        return (
            <tr>
                <td>{index + 1}</td>
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td>
                    <span className={`label label-${statusClass}`}>{statusName}</span>
                </td>
                <td>
                    <Link
                        to={`/product/${product.id}/edit`}
                        className="label label-success mr-10"
                    >
                        Sửa
                    </Link>
                    <button
                        type="button"
                        className="label label-danger"
                        onClick={() => this.onDelete(product.id)}
                    >
                        Xoá
                    </button>
                </td>
            </tr>
        );
    }
}

export default ProductItem;
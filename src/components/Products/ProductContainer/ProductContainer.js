import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

import classes from "./ProductContainer.module.css";
import Aux from "../../../hoc/Aux/Aux";

import Picture from "../../UI/Picture/Picture";
import Button from "../../UI/Button/Button";
import * as actions from "../../../store/actions/index";

class ProductContainer extends Component {
  state = {
    propertiesPage: false,
  };

  setProperties = () => {
    this.setState({
      propertiesPage: true,
    });
  };

  renderProperties = () => {
    if (this.state.propertiesPage) {
      return <Redirect push to="/properties" />;
    }
  };

  addToCartHandler = () => {
    const cartItem = {
      orderDetails: this.props.obj,
    };

    this.props.onCart(cartItem);
  };

  render() {
    return (
      <Aux>
        <div className={classes.ProductContainer}>
          <div className={classes.smallPhotoContainer}>
            <Picture
              source={this.props.obj.smallImage}
              alt={this.props.obj.productName}
            />
          </div>
          <div className={classes.ProductText}>
            {this.props.obj.productName}
          </div>
          <div className={classes.ProductText}>{this.props.obj.price} PLN</div>
          <div className={classes.ButtonsContainer}>
            <div className={classes.ButtonContainer}>
              {this.renderProperties()}
              <Button
                fontSize="1.4rem"
                clicked={() => {
                  this.props.onSetCurrProduct(this.props.obj);
                  this.setProperties();
                }}
              >
                Szczegóły
              </Button>
            </div>
            <div className={classes.ButtonContainer}>
              <Button
                fontSize="1.4rem"
                clicked={() => {
                  this.addToCartHandler();
                  this.props.onSetTotalPrice();
                }}
              >
                Dodaj Do Koszyka
              </Button>
            </div>
          </div>
        </div>
      </Aux>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSetCurrProduct: (product) => dispatch(actions.setCurrProduct(product)),
    onCart: (orderProps) => dispatch(actions.cartPost(orderProps)),
    onSetTotalPrice: () => dispatch(actions.setTotalPrice()),
  };
};

export default connect(null, mapDispatchToProps)(ProductContainer);

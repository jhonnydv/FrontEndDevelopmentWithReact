import React, { Component } from "react";
import {
    Card, CardImg, CardText, CardBody,
    CardTitle,
} from 'reactstrap';
import moment from 'moment'


class DishDetail extends Component {
    // constructor(props) {
    //     super(props);
    // }

    renderDish(dish) {

        return (
            <Card>
                <CardImg top src={dish.image} alt={dish.name} />
                <CardBody>
                    <CardTitle>{dish.name}</CardTitle>
                    <CardText>{dish.description}</CardText>
                </CardBody>
            </Card>
        );
    }

    renderComments(comments) {
        if (comments != null)
            return (

                <div>
                    <h4>Comments</h4>

                    {comments.map((comment) => (
                        <ul className="list-unstyled" key={comment.id}>
                            <li>{comment.comment} </li>
                            <li>-- {comment.author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}</li>
                            {/* <li>-- {comment.author}, {moment(comment.date).format("MMM Do, YYYY")}</li> */}
                        </ul>
                    ))}
                </div>
            );
        else
            return (
                <div>

                </div>);
    }

    render() {
        const dish = this.props.dish;

        if (dish != null)
            return (
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-5 m-1">
                            {this.renderDish(dish)}
                        </div>
                        <div className="col-12 col-md-5 m-1">
                            {this.renderComments(dish.comments)}
                        </div>
                    </div>
                </div>


            );
        else
            return (
                <div></div>
            );
    };
}

export default DishDetail;



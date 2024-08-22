import React from "react";
 
const Testimonial = (props) => {
    return (
        <div className="testimonial-item">
            <div>
                <div class="star-container"><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i></div>
                <p>"{ props.customerOpinion }"</p>
            </div>
            <div className="testimonial-profile-container"><div>{ props.customerFirstLetter }</div><h3>{ props.customerName }</h3></div>
        </div>
    );
};
 
export default Testimonial;
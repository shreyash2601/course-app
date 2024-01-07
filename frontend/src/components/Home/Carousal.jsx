import React from "react";
import { Carousel } from "react-bootstrap";

const Carousal = () => {
  return (
    <div className="container" style={{ marginTop: "20px", width: "100%" }}>
      <Carousel interval={3000}>
        <Carousel.Item>
          <img
            style={{ height: "70vh" }}
            src="https://images.pexels.com/photos/879109/pexels-photo-879109.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            className="d-block w-100 rounded-5"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            style={{ height: "70vh" }}
            src="https://images.pexels.com/photos/1181243/pexels-photo-1181243.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            className="d-block w-100 rounded-5"
            alt="Second slide"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Carousal;

// import React from "react";

// const Carousal = () => {
//   return (
//     <>
//       <div className="container" style={{marginTop: "20px", width: "90%"}}>
//         <div id="carouselExampleIndicators" className="carousel slide">
//           <div className="carousel-indicators">
//             <button
//               type="button"
//               data-bs-target="#carouselExampleIndicators"
//               data-bs-slide-to="0"
//               className="active"
//               aria-current="true"
//               aria-label="Slide 1"
//             ></button>
//             <button
//               type="button"
//               data-bs-target="#carouselExampleIndicators"
//               data-bs-slide-to="1"
//               aria-label="Slide 2"
//             ></button>
//           </div>
//           <div className="carousel-inner">
//             <div className="carousel-item active">
//               <img
//                 style={{ height: "500px"}}
//                 src="https://images.pexels.com/photos/879109/pexels-photo-879109.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
//                 className="d-block w-100 rounded-5"
//                 alt="..."
//               />
//             </div>
//             <div className="carousel-item">
//               <img
//                 style={{ height: "500px"}}
//                 src="https://images.pexels.com/photos/1181243/pexels-photo-1181243.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
//                 className="d-block w-100 rounded-5"
//                 alt="..."
//               />
//             </div>
//           </div>
//           <button
//             className="carousel-control-prev"
//             type="button"
//             data-bs-target="#carouselExampleIndicators"
//             data-bs-slide="prev"
//           >
//             <span
//               className="carousel-control-prev-icon"
//               aria-hidden="true"
//             ></span>
//             <span className="visually-hidden">Previous</span>
//           </button>
//           <button
//             className="carousel-control-next"
//             type="button"
//             data-bs-target="#carouselExampleIndicators"
//             data-bs-slide="next"
//           >
//             <span
//               className="carousel-control-next-icon"
//               aria-hidden="true"
//             ></span>
//             <span className="visually-hidden">Next</span>
//           </button>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Carousal;